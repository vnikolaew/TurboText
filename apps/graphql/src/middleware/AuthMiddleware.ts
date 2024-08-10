import { AuthChecker, MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { MyContext } from "@types";
import { lucia } from "@lib/auth";

export class AuthMiddleware implements MiddlewareInterface<MyContext> {
   async use({ context }: ResolverData<MyContext>, next: NextFn): Promise<any> {
      const sessionId = lucia.readSessionCookie(context.req.headers?.cookie ?? ``);
      if (!sessionId) return next();

      try {
         const { user, session } = await lucia.validateSession(sessionId);
         if (user?.id) {
            context.userId = user!.id;
            context.sessionId = session.id;
         }
      } catch (err) {
         console.error({ err });
      }

      return next();
   }

   public static authChecker: AuthChecker<MyContext, any> = async ({ context }, roles) => {
      let cookie = (context as MyContext).headers?.cookie;
      const sessionId = lucia.readSessionCookie(cookie ?? ``);
      if (!sessionId?.length) return false;

      const { user, session } = await lucia.validateSession(sessionId);
      if (user?.id) {
         context.userId = user!.id;
         context.sessionId = session.id;

         return true;
      }

      return false;
   };

}