import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { MyContext } from "@types";

export class ComplexityMiddleware implements MiddlewareInterface<MyContext> {
   async use({ args, context, info, root }: ResolverData<MyContext>, next: NextFn): Promise<any> {
      console.log({ info });
      return next();
   }
}