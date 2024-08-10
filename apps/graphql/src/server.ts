import { buildSchema } from "type-graphql";
import { UserResolver } from "@modules/user/UserResolver";
import { LoggingMiddleware } from "@middleware/LoggingMiddleware";
import { CrudResolvers } from "@repo/db";
import {
   ApolloServer,
} from "@apollo/server";
import express from "express";
import { resolvers as scalarResolvers,  } from "graphql-scalars";

import { GraphQLJSONObject } from "graphql-scalars";
import { MyContext } from "@types";
import { ComplexityMiddleware } from "@middleware/ComplexityMiddleware";
import * as http from "node:http";
import { LeaderboardResolver } from "@modules/leaderboard/LeaderboardResolver";
import { ACExposeHeadersMiddleware } from "@middleware/ACExposeHeadersMiddleware";
import { githubLoginRouter } from "@modules/user/auth/github";
import { AuthMiddleware } from "@middleware/AuthMiddleware";
import { CustomPlugin } from "@plugins/CustomPlugin";
import { __IS_DEV__ } from "@consts";
import { DevOnlyMiddleware } from "@middleware/DevOnlyMiddleware";
import { GraphQLUpload, Upload } from "@scalars/Upload";
import * as process from "node:process";
import * as path from "node:path";
import * as fs from "node:fs";

export async function getServer() {
   console.log(`🚀 Running in ${__IS_DEV__ ? `development` : `production`} mode ...`);
   const app = express();
   app.use(`/login/github`, githubLoginRouter);

   const httpServer = http.createServer(app);

   const schema = await buildSchema({
      resolvers: [UserResolver, LeaderboardResolver, CrudResolvers.UserCrudResolver, ...Object.entries(CrudResolvers).filter(([key, _]) => key.endsWith(`Resolver`)).map(([_, resolver]) => resolver as Function),
         ...Object.entries(scalarResolvers).map(([_, resolver]) => resolver as Function),],
      scalarsMap: [{ type: Object, scalar: GraphQLJSONObject }, {
         type: Upload,
         scalar: GraphQLUpload,
      }, ],
      validate: true,
      authChecker: AuthMiddleware.authChecker,
      // validateFn: ({ args, context, info, root }) => { },
      globalMiddlewares: [...(__IS_DEV__ && process.env.USE_SLEEP === `true` ? [DevOnlyMiddleware] : []), LoggingMiddleware, AuthMiddleware, ComplexityMiddleware, ACExposeHeadersMiddleware],
      emitSchemaFile: true
   });
   const from = path.join(process.cwd(), `schema.graphql`);
   const to = path.join(process.cwd(), `..`, `apollo-next-client`, `schema.graphql`);

   fs.copyFileSync(from, to);

   const server = new ApolloServer<MyContext>({
      schema,
      csrfPrevention: true,
      plugins: CustomPlugin.plugins(httpServer),
   });


   return { server, app, httpServer };
}