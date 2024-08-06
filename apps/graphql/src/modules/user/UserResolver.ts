import { Models, RelationsResolvers } from "@repo/db";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { MyContext } from "../../types";

@Resolver(Models.User)
export class UserResolver extends RelationsResolvers.UserRelationsResolver {
   @Query(() => Models.User)
   public async findById(@Arg("id", () => String) id: string, @Ctx() { prisma }: MyContext): Promise<Models.User> {
      return await prisma.user.findUnique({ where: { id } });
   }
}