import { Models, RelationsResolvers } from "@repo/db";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { MyContext } from "@types";
import crypto from "crypto";

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

   @Mutation(() => Models.User)
   public async signUp(@Arg("signUpModel", () => UserSignUpInput) userInput: UserSignUpInput, @Ctx() { prisma }: MyContext): Promise<Models.User> {
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

      return user;
   }

   @Mutation(() => Models.User, { nullable: true })
   public async signIn(@Arg("signInModel", () => UserSignInInput) {
      password,
      username,
      email,
   }: UserSignInInput, @Ctx() { prisma }: MyContext): Promise<Models.User | null> {
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
         return user;
      }

      return null!;
   }
}