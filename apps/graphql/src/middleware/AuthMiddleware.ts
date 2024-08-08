import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { MyContext } from "@types";
import { GraphQLError } from "graphql/error";
import { lucia } from "@lib/auth";
import { ApolloServerErrorCode } from "@apollo/server/errors";

export class AuthMiddleware implements MiddlewareInterface<MyContext> {

   async use({ context, info }: ResolverData<MyContext>, next: NextFn): Promise<any> {
      const sessionId = lucia.readSessionCookie(context.req.headers?.cookie ?? ``);
      if (!sessionId?.length) throw new GraphQLError(`Not authenticated`, {
         extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
      });
      try {
         const { user, session } = await lucia.validateSession(sessionId);
         if(user?.id) context.userId = user!.id;
         console.log({ user,session});
      } catch (err) {
         console.error({ err });
      }

      return next()
   }
}