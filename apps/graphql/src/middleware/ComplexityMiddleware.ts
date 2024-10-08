import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { MyContext } from "@types";
import {
   simpleEstimator,
   getComplexity,
} from "graphql-query-complexity";
import { Kind } from "graphql/language";
import { GraphQLError } from "graphql";
import * as process from "node:process";

export const MAX_COMPLEXITY = isNaN(parseInt(process.env.MAX_COMPLEXITY ?? `100`, 10)) ? 100 : parseInt(process.env.MAX_COMPLEXITY ?? `100`, 10);

export class ComplexityMiddleware implements MiddlewareInterface<MyContext> {
   async use({ context, info }: ResolverData<MyContext>, next: NextFn): Promise<any> {
      const complexity = getComplexity({
         estimators: [simpleEstimator({ defaultComplexity: 1 })],
         schema: info.schema,
         query: { loc: info.operation.loc, kind: Kind.DOCUMENT, definitions: [info.operation] },
         variables: info.variableValues,
      });
      if (complexity > MAX_COMPLEXITY) throw new GraphQLError(`Query too complex`, {
         extensions: {
            complexity,
            code: `QUERY_TOO_COMPLEX`,
         },
      });
      context.complexity = complexity;

      return next();
   }
}