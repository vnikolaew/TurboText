import { buildSchema } from "type-graphql";
import { UserResolver } from "@modules/user/UserResolver";
import { LoggingMiddleware } from "@middleware/LoggingMiddleware";
import { CrudResolvers } from "@repo/db";
import {
   ApolloServer,
   GraphQLRequestContext,
   GraphQLRequestContextParsingDidStart, GraphQLRequestContextValidationDidStart,
   GraphQLRequestListener, GraphQLRequestListenerParsingDidEnd, GraphQLRequestListenerValidationDidEnd,
} from "@apollo/server";

import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import { MyContext } from "@types";
import { ComplexityMiddleware } from "@middleware/ComplexityMiddleware";


export async function getServer() {
   const schema = await buildSchema({
      resolvers: [UserResolver, CrudResolvers.UserCrudResolver, ...Object.entries(CrudResolvers).filter(([key, _]) => key.endsWith(`Resolver`)).map(([_, resolver]) => resolver)],
      validate: true,
      authChecker: ({ context }, _) => !!(context as MyContext).userId,
      globalMiddlewares: [LoggingMiddleware, ComplexityMiddleware],
      emitSchemaFile: true,
   });
   const server = new ApolloServer<MyContext>({
      schema,
      plugins: [
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
               };
            },
         },
      ],
   });

   return server;
}