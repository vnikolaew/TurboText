import { Models, RelationsResolvers } from "@repo/db";
import { Arg, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";
import crypto from "crypto";
import { lucia } from "@lib/auth";
import moment from "moment";

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

const HTTP = {
   MEDIA_TYPES: {
      APPLICATION_JSON: `application/json`,
   },
};

function calculateSHA256(data: string) {
   const hash = crypto.createHash("sha256");
   hash.update(data);
   return hash.digest("hex");
}

async function getGravatarImageUrl(email: string) {
   let imageUrl: string = null!;

   const emailHash = calculateSHA256((email as string).trim().toLowerCase());
   const url = `https://bg.gravatar.com/${emailHash}.json`;
   const res = await fetch(url, {
      method: "GET",
      headers: {
         Accept: HTTP.MEDIA_TYPES.APPLICATION_JSON,
      },
   });
   if (res.ok) {
      const body = await res.json();
      if (body[`entry`][`thumbnailUrl`]) imageUrl = body[`thumbnailUrl`];
      else if (!!body[`entry`][`photos`]?.length) {
         imageUrl = body[`entry`][`photos`][0].value;
      }

      if (imageUrl) {
         imageUrl = `${imageUrl}?s=640`;
      }
   }

   return imageUrl;
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

      const session = await lucia.createSession(user.id,  { sessionToken: crypto.randomUUID() })
      const cookie = lucia.createSessionCookie(session.id)
      cookie.attributes.httpOnly = false

      const serializedCookie = `${cookie.name}=${encodeURIComponent(cookie.value)}; Max-Age=${cookie.attributes.maxAge}; Domain=apollo-next.com; Expires=${moment().add(cookie.attributes.maxAge, `seconds`).format(`ddd, DD MMM YYYY HH:mm:ss [GMT]`)}; Path=${cookie.attributes.path!}; SameSite=${cookie.attributes.sameSite}; ${cookie.attributes.secure ? `Secure` : ``} ${cookie.attributes.httpOnly ? `;HttpOnly` : ``}`

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
         const session = await lucia.createSession(user.id,  { })
         res.appendHeader(`Set-Cookie`, lucia.createSessionCookie(session.id).serialize())

         return user;
      }

      return null!;
   }
}