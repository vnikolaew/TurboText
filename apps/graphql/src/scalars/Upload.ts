import { GraphQLError, GraphQLScalarType } from "graphql/index";
import busboy from "busboy";
import { WriteStream } from "fs-capacitor";
import createError from "http-errors";
import objectPath from "object-path";

const GRAPHQL_MULTIPART_REQUEST_SPEC_URL =
   "https://github.com/jaydenseric/graphql-multipart-request-spec";

function ignoreStream(stream: WriteStream) {
   // Prevent an unhandled error from crashing the process.
   stream.on("error", () => {});

   // Waste the stream.
   stream.resume();
}

export class Upload {
   public promise: Promise<File>;

   public resolve?: (file: File) => void;
   public file?: File;

   public reject?: (reason?: any) => void;

   constructor() {
      /**
       * Promise that resolves file upload details. This should only be utilized
       * by {@linkcode GraphQLUpload}.
       * @type {Promise<import("./processRequest.mjs").FileUpload>}
       */
      this.promise = new Promise((resolve, reject) => {
         /**
          * Resolves the upload promise with the file upload details. This should
          * only be utilized by {@linkcode processRequest}.
          * @param {import("./processRequest.mjs").FileUpload} file File upload
          *   details.
          */
         this.resolve = (file) => {
            /**
             * The file upload details, available when the
             * {@linkcode Upload.promise} resolves. This should only be utilized by
             * {@linkcode processRequest}.
             * @type {import("./processRequest.mjs").FileUpload | undefined}
             */
            this.file = file;

            resolve(file);
         };

         /**
          * Rejects the upload promise with an error. This should only be
          * utilized by {@linkcode processRequest}.
          * @param {Error} error Error instance.
          */
         this.reject = reject;
      });

      // Prevent errors crashing Node.js, see:
      // https://github.com/nodejs/node/issues/20392
      this.promise.catch(() => {
      });
   }
}


export const GraphQLUpload = new GraphQLScalarType({
   name: "Upload",
   description: "The `Upload` scalar type represents a file upload.",
   parseValue(value) {
      console.log({ value });

      if (typeof value?.resolve === `function` && typeof value?.reject === `function`) {
         return value.file;
      }

      throw new GraphQLError("Upload value invalid.");
   },
   parseLiteral(node) {
      throw new GraphQLError("Upload literal unsupported.", { nodes: node });
   },
   serialize() {
      throw new GraphQLError("Upload serialization unsupported.");
   },
});


export function defaultProcessRequest(
   request,
   response,
   {
      maxFieldSize = 1000000, // 1 MB
      maxFileSize = Infinity,
      maxFiles = Infinity,
   } = {}
) {
   return new Promise((resolve, reject) => {
      /** @type {boolean} */
      let released;

      /** @type {Error} */
      let exitError;

      /**
       * @type {{ [key: string]: unknown } | Array<
       *   { [key: string]: unknown }
       * >}
       */
      let operations;

      /**
       * @type {import("object-path").ObjectPathBound<
       *   { [key: string]: unknown } | Array<{ [key: string]: unknown }>
       * >}
       */
      let operationsPath;

      /** @type {Map<string, Upload>} */
      let map;

      const parser = busboy({
         headers: request.headers,
         defParamCharset: "utf8",
         limits: {
            fieldSize: maxFieldSize,
            fields: 2, // Only operations and map.
            fileSize: maxFileSize,
            files: maxFiles,
         },
      });

      /**
       * Exits request processing with an error. Successive calls have no effect.
       * @param {Error} error Error instance.
       * @param {boolean} [isParserError] Is the error from the parser.
       */
      function exit(error, isParserError = false) {
         if (exitError) return;

         exitError = error;

         if (map)
            for (const upload of map.values())
               if (!upload.file) upload.reject(exitError);

         // If the error came from the parser, don’t cause it to be emitted again.
         isParserError ? parser.destroy() : parser.destroy(exitError);

         request.unpipe(parser);

         // With a sufficiently large request body, subsequent events in the same
         // event frame cause the stream to pause after the parser is destroyed. To
         // ensure that the request resumes, the call to .resume() is scheduled for
         // later in the event loop.
         setImmediate(() => {
            request.resume();
         });

         reject(exitError);
      }

      parser.on("field", (fieldName, value, { valueTruncated }) => {
         if (valueTruncated)
            return exit(
               createError(
                  413,
                  `The ‘${fieldName}’ multipart field value exceeds the ${maxFieldSize} byte size limit.`
               )
            );

         switch (fieldName) {
            case "operations":
               try {
                  operations = JSON.parse(value);
               } catch (error) {
                  return exit(
                     createError(
                        400,
                        `Invalid JSON in the ‘operations’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                     )
                  );
               }

               // `operations` should be an object or an array. Note that arrays
               // and `null` have an `object` type.
               if (typeof operations !== "object" || !operations)
                  return exit(
                     createError(
                        400,
                        `Invalid type for the ‘operations’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                     )
                  );

               operationsPath = objectPath(operations);

               break;
            case "map": {
               if (!operations)
                  return exit(
                     createError(
                        400,
                        `Misordered multipart fields; ‘map’ should follow ‘operations’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                     )
                  );

               let parsedMap;
               try {
                  parsedMap = JSON.parse(value);
               } catch (error) {
                  return exit(
                     createError(
                        400,
                        `Invalid JSON in the ‘map’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                     )
                  );
               }

               // `map` should be an object.
               if (
                  typeof parsedMap !== "object" ||
                  !parsedMap ||
                  Array.isArray(parsedMap)
               )
                  return exit(
                     createError(
                        400,
                        `Invalid type for the ‘map’ multipart field (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                     )
                  );

               const mapEntries = Object.entries(parsedMap);

               // Check max files is not exceeded, even though the number of files
               // to parse might not match the map provided by the client.
               if (mapEntries.length > maxFiles)
                  return exit(
                     createError(413, `${maxFiles} max file uploads exceeded.`)
                  );

               map = new Map();
               for (const [fieldName, paths] of mapEntries) {
                  if (!Array.isArray(paths))
                     return exit(
                        createError(
                           400,
                           `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                        )
                     );

                  map.set(fieldName, new Upload());

                  for (const [index, path] of paths.entries()) {
                     if (typeof path !== "string")
                        return exit(
                           createError(
                              400,
                              `Invalid type for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                           )
                        );

                     try {
                        operationsPath.set(path, map.get(fieldName));
                     } catch (error) {
                        return exit(
                           createError(
                              400,
                              `Invalid object path for the ‘map’ multipart field entry key ‘${fieldName}’ array index ‘${index}’ value ‘${path}’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                           )
                        );
                     }
                  }
               }

               resolve(operations);
            }
         }
      });

      parser.on(
         "file",
         (fieldName, stream, { filename, encoding, mimeType: mimetype }) => {
            if (!map) {
               ignoreStream(stream);
               return exit(
                  createError(
                     400,
                     `Misordered multipart fields; files should follow ‘map’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
                  )
               );
            }

            const upload = map.get(fieldName);

            if (!upload) {
               // The file is extraneous. As the rest can still be processed, just
               // ignore it and don’t exit with an error.
               ignoreStream(stream);
               return;
            }

            /** @type {Error} */
            let fileError;

            const capacitor = new WriteStream();

            capacitor.on("error", () => {
               stream.unpipe();
               stream.resume();
            });

            stream.on("limit", () => {
               fileError = createError(
                  413,
                  `File truncated as it exceeds the ${maxFileSize} byte size limit.`
               );
               stream.unpipe();
               capacitor.destroy(fileError);
            });

            stream.on("error", (error) => {
               fileError = error;
               stream.unpipe();
               capacitor.destroy(fileError);
            });

            /** @type {FileUpload} */
            const file = {
               filename,
               mimetype,
               encoding,
               createReadStream(options) {
                  const error = fileError || (released ? exitError : null);
                  if (error) throw error;
                  return capacitor.createReadStream(options);
               },
               capacitor,
            };

            Object.defineProperty(file, "capacitor", {
               enumerable: false,
               configurable: false,
               writable: false,
            });

            stream.pipe(capacitor);
            upload.resolve(file);
         }
      );

      parser.once("filesLimit", () =>
         exit(createError(413, `${maxFiles} max file uploads exceeded.`))
      );

      parser.once("finish", () => {
         request.unpipe(parser);
         request.resume();

         if (!operations)
            return exit(
               createError(
                  400,
                  `Missing multipart field ‘operations’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
               )
            );

         if (!map)
            return exit(
               createError(
                  400,
                  `Missing multipart field ‘map’ (${GRAPHQL_MULTIPART_REQUEST_SPEC_URL}).`
               )
            );

         for (const upload of map.values())
            if (!upload.file)
               upload.reject(createError(400, "File missing in the request."));
      });

      // Use the `on` method instead of `once` as in edge cases the same parser
      // could have multiple `error` events and all must be handled to prevent the
      // Node.js process exiting with an error. One edge case is if there is a
      // malformed part header as well as an unexpected end of the form.
      parser.on("error", (/** @type {Error} */ error) => {
         exit(error, true);
      });

      response.once("close", () => {
         released = true;

         if (map)
            for (const upload of map.values())
               if (upload.file)
                  // Release resources and clean up temporary files.
                  upload.file.capacitor.release();
      });

      request.once("close", () => {
         if (!request.readableEnded)
            exit(
               createError(
                  499,
                  "Request disconnected during file upload stream parsing."
               )
            );
      });

      request.pipe(parser);
   });
}


export function graphqlUploadExpress({
                                        processRequest = defaultProcessRequest,
                                        ...processRequestOptions
                                     } = {}) {
   /**
    * [Express](https://expressjs.com) middleware that processes incoming
    * [GraphQL multipart requests](https://github.com/jaydenseric/graphql-multipart-request-spec)
    * using {@linkcode processRequest}, ignoring non multipart requests. It sets
    * the request `body` to be similar to a conventional GraphQL POST request for
    * following GraphQL middleware to consume.
    * @param {import("express").Request} request
    * @param {import("express").Response} response
    * @param {import("express").NextFunction} next
    */
   function graphqlUploadExpressMiddleware(request: any, response: any, next: any) {
      if (!request.is("multipart/form-data")) return next();

      const requestEnd = new Promise((resolve) => request.on("end", resolve));
      const { send } = response;

      // @ts-ignore Todo: Find a less hacky way to prevent sending a response
      // before the request has ended.
      response.send =
         /** @param {Array<unknown>} args */
         (...args) => {
            requestEnd.then(() => {
               response.send = send;
               response.send(...args);
            });
         };

      processRequest(request, response, processRequestOptions)
         .then((body) => {
            request.body = body;
            next();
         })
         .catch((error) => {
            if (error.status && error.expose) response.status(error.status);
            next(error);
         });
   }

   return graphqlUploadExpressMiddleware;
}
