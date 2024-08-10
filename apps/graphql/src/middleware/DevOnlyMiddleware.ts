import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { MyContext } from "@types";

export class DevOnlyMiddleware implements MiddlewareInterface<MyContext> {
   async use(_: ResolverData<MyContext>, next: NextFn): Promise<any> {
      const delay = Math.floor(Math.random() * 1000);

      await new Promise(res => setTimeout(res, delay));
      return next();
   }
}