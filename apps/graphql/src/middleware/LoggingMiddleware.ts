import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { MyContext } from "@types";

export class LoggingMiddleware implements MiddlewareInterface<MyContext> {
   async use({ args, context, info, root }: ResolverData<MyContext>, next: NextFn): Promise<any> {
      return next();
   }
}