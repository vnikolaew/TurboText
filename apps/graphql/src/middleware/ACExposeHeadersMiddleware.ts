import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { MyContext } from "@types";

export class ACExposeHeadersMiddleware implements MiddlewareInterface<MyContext> {
   async use({ context }: ResolverData<MyContext>, next: NextFn) {
      context.res.setHeader(`Access-Control-Expose-Headers`, `*`);
      return next()
   }
}