import { Models, RelationsResolvers } from "@repo/db";
import { Arg, Authorized, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { MyContext, Nullable } from "@types";
import { getUserCookie, lucia } from "@lib/auth";
import { getGravatarImageUrl } from "@modules/user/utils";
import { SessionId, UserId } from "@decorators";
import { GraphQLUpload, Upload } from "@scalars/Upload";
import { GraphQLJSONObject } from "graphql-scalars";

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

export const DEFAULT_USER_AVATAR_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg`;

@Resolver(Models.User)
export class UserResolver extends RelationsResolvers.UserRelationsResolver {

   @Query(() => Models.User)
   public async findById(@Arg("id", () => String) id: string, @Ctx() { prisma }: MyContext): Promise<Models.User> {
      return await prisma.user.findUnique({ where: { id } });
   }

   @Mutation(() => Boolean)
   public async fileUpload(@Arg("file", () => GraphQLUpload) file: Upload, @Ctx() { prisma }: MyContext): Promise<boolean> {
      return true;
   }

   @Query(() => Models.User, { nullable: true })
   public async me(@Ctx() { prisma }: MyContext, @UserId() userId: string ): Promise<Nullable<Models.User>> {
      if (!userId) return null;
      return await prisma.user.findUnique({ where: { id: userId } });
   }

   @Authorized()
   @Mutation(() => Boolean)
   public async signOut(@Ctx() { res }: MyContext, @SessionId() sessionId: string): Promise<boolean> {
      try {
         const sessionCookie = lucia.createBlankSessionCookie();
         res.appendHeader(`Set-Cookie`, sessionCookie.serialize());

         if (sessionId?.length) await lucia.invalidateSession(sessionId);
         return true;
      } catch (err) {
         return false;
      }
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
   public async signUp(@Arg("signUpModel", () => UserSignUpInput) userInput: UserSignUpInput, @Ctx() {
      prisma,
      res,
   }: MyContext): Promise<Models.User> {
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
            image: imageUrl ?? DEFAULT_USER_AVATAR_URL,
         },
         { image: true },
      );

      const serializedCookie = await getUserCookie(user);
      res.appendHeader(`Set-Cookie`, serializedCookie);

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

      });

      if (user && user.verifyPassword?.(password as string ?? ``)) {
         const serializedCookie = await getUserCookie(user);
         res.appendHeader(`Set-Cookie`, serializedCookie);
         return user;
      }

      return null!;
   }
}