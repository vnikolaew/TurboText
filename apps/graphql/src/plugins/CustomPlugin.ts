import {
   ApolloServerPlugin, BaseContext,
   GraphQLRequestContext,
   GraphQLRequestContextParsingDidStart,
   GraphQLRequestContextValidationDidStart,
   GraphQLRequestContextWillSendResponse,
   GraphQLRequestListener,
   GraphQLRequestListenerParsingDidEnd,
   GraphQLRequestListenerValidationDidEnd,
} from "@apollo/server";
import { MyContext } from "@types";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import * as http from "node:http";

export class CustomPlugin implements ApolloServerPlugin<MyContext> {

   async requestDidStart(_: GraphQLRequestContext<MyContext>): Promise<GraphQLRequestListener<MyContext> | void> {
      return {
         parsingDidStart(_: GraphQLRequestContextParsingDidStart<MyContext>): Promise<GraphQLRequestListenerParsingDidEnd | void> {
            return Promise.resolve()
         },
         validationDidStart(_: GraphQLRequestContextValidationDidStart<MyContext>): Promise<GraphQLRequestListenerValidationDidEnd | void> {
            return Promise.resolve()
         },
         async willSendResponse({
                                   response,
                                   contextValue,
                                }: GraphQLRequestContextWillSendResponse<MyContext>): Promise<void> {
            if (response.body.kind === "single" && "data" in response.body.singleResult) {
               response.body.singleResult.extensions = {
                  ...response.body.singleResult.extensions,
                  complexity: contextValue.complexity,
                  timestamp: new Date().toISOString(),
               };

            }
         },
      };
   }

   public static plugins(httpServer: http.Server): ApolloServerPlugin<BaseContext>[] {
      return [
         ApolloServerPluginDrainHttpServer({ httpServer }),
         ApolloServerPluginCacheControl({ defaultMaxAge: 10 * 60 }),
         new CustomPlugin(),
      ];
   }
}