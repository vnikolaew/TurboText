import { buildSchema } from "type-graphql";
import { UserResolver } from "@modules/user/UserResolver";
import { LoggingMiddleware } from "@middleware/LoggingMiddleware";
import { CrudResolvers } from "@repo/db";
import {
   ApolloServer,
   GraphQLRequestContext,
   GraphQLRequestContextParsingDidStart, GraphQLRequestContextValidationDidStart, GraphQLRequestContextWillSendResponse,
   GraphQLRequestListener, GraphQLRequestListenerParsingDidEnd, GraphQLRequestListenerValidationDidEnd,
} from "@apollo/server";
import express from "express";

import { GraphQLJSONObject } from "graphql-scalars";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import { MyContext } from "@types";
import { ComplexityMiddleware } from "@middleware/ComplexityMiddleware";
import * as http from "node:http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { LeaderboardResolver } from "@modules/leaderboard/LeaderboardResolver";
import { ACExposeHeadersMiddleware } from "@middleware/ACExposeHeadersMiddleware";
import { AuthMiddleware } from "@middleware/AuthMiddleware";
import { githubLoginRouter } from "@modules/user/auth/github";


export async function getServer() {
   const app = express();
   app.use(`/login/github`, githubLoginRouter);

   const httpServer = http.createServer(app);

   const schema = await buildSchema({
      resolvers: [UserResolver, LeaderboardResolver, CrudResolvers.UserCrudResolver, ...Object.entries(CrudResolvers).filter(([key, _]) => key.endsWith(`Resolver`)).map(([_, resolver]) => resolver as Function)],
      scalarsMap: [{ type: Object, scalar: GraphQLJSONObject }],
      validate: true,
      authChecker: ({ context }, _) => !!(context as MyContext).userId,
      validateFn: ({ args, context, info, root }) => console.log({ info }),
      globalMiddlewares: [LoggingMiddleware, AuthMiddleware, ComplexityMiddleware, ACExposeHeadersMiddleware],
      emitSchemaFile: true,
   });
   const server = new ApolloServer<MyContext>({
      schema,
      plugins: [
         ApolloServerPluginDrainHttpServer({ httpServer }),
         ApolloServerPluginCacheControl({ defaultMaxAge: 10 * 60 }),
         {
            async requestDidStart({
                                     request,
                                  }: GraphQLRequestContext<MyContext>): Promise<GraphQLRequestListener<MyContext> | void> {
               if (request.query?.includes(`IntrospectionQuery`)) return;

               console.log(`Request started! Query: ${request.query?.trim()}`);
               return {
                  parsingDidStart(_: GraphQLRequestContextParsingDidStart<MyContext>): Promise<GraphQLRequestListenerParsingDidEnd | void> {
                  },
                  validationDidStart(_: GraphQLRequestContextValidationDidStart<MyContext>): Promise<GraphQLRequestListenerValidationDidEnd | void> {
                  },
                  async willSendResponse({
                                            response,
                                            contextValue,
                                         }: GraphQLRequestContextWillSendResponse<MyContext>): Promise<void> {
                     if (response.body.kind === "single" && "data" in response.body.singleResult) {
                        response.body.singleResult.extensions = {
                           ...response.body.singleResult.extensions,
                           complexity: contextValue.complexity,
                        };

                     }
                  },
               };
            },
         },
      ],
   });

   return { server, app, httpServer };
}