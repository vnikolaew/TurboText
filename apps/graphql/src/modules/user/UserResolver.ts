import { Models, RelationsResolvers } from "@repo/db";
import { Arg, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";
import { getUserCookie, github } from "@lib/auth";
import { getGravatarImageUrl } from "@modules/user/utils";
import { generateState } from "arctic";
import { parseCookies, serializeCookie } from "oslo/cookie";

@InputType()
export class UserSignUpInput implements Partial<Models.User> {
   @Field(() => String)
   public email: string = ``;

   @Field(() => String)
   public username: string = ``;

   @Field(() => String)
   public password: string = ``;
}

@InputType()
export class UserSignInInput extends UserSignUpInput {
}

@ObjectType()
export class UserSearchResponse extends Models.User {
}

@InputType()
export class UsersSearchInput {
   @Field(() => String)
   public search: string = ``;

   @Field(() => Int)
   public limit: number = 10;
}

@Resolver(Models.User)
export class UserResolver extends RelationsResolvers.UserRelationsResolver {

   @Query(() => Models.User)
   public async findById(@Arg("id", () => String) id: string, @Ctx() { prisma }: MyContext): Promise<Models.User> {
      return await prisma.user.findUnique({ where: { id } });
   }

   @Query(() => [UserSearchResponse])
   public async search(@Arg("search", () => UsersSearchInput, { defaultValue: { search: ``, limit: 10 } }) {
      search,
      limit,
   }: UsersSearchInput, @Ctx() { prisma }: MyContext): Promise<UserSearchResponse[]> {
      let users = await prisma.user.findMany({
         where: {
            name: {
               contains: search,
               mode: `insensitive`,
            },
         },
         include: { experience: true },
         take: limit,
      });

      return users;
   }

   @Mutation(() => Models.User)
   public async signUp(@Arg("signUpModel", () => UserSignUpInput) userInput: UserSignUpInput, @Ctx() { prisma, res }: MyContext): Promise<Models.User> {
      const { email, password, username } = userInput;

      const existing = await prisma.user.findFirst({
         where: {
            email: email as string,
         },
      });
      if (existing) return null!;

      // Retrieve Gravatar image:
      let imageUrl = await getGravatarImageUrl(email as string);
      const user = await prisma.user.signUp(
         {
            email,
            password,
            username,
            image: imageUrl,
         },
         { image: true },
      );

      const serializedCookie = await getUserCookie(user)
      res.appendHeader(`Set-Cookie`, serializedCookie)

      return user;
   }

   @Mutation(() => Models.User, { nullable: true })
   public async signIn(@Arg("signInModel", () => UserSignInInput) {
      password,
      username,
      email,
   }: UserSignInInput, @Ctx() { prisma, res }: MyContext): Promise<Models.User | null> {
      const user = await prisma.user.findFirst({
         where: {
            OR: [
               {
                  email,
               },
               {
                  name: username,
               },
            ],
         },
         // select: {
         //    id: true,
         //    email: true,
         //    name: true,
         //    verifyPassword: true,
         //    image: true,
         //    ...(select ?? {}),
         // },
      });
      console.log({ user });

      if (user && user.verifyPassword?.(password as string ?? ``)) {
         const serializedCookie = await getUserCookie(user)
         res.appendHeader(`Set-Cookie`, serializedCookie)

         return user;
      }

      return null!;
   }
}