import NextAuth, { DefaultSession } from "next-auth";
import Google, { GoogleProfile } from "next-auth/providers/google";
import { globalForPrisma, xprisma } from "@repo/db";
import { PrismaClient, User } from "@prisma/client";
import ResendProvider from "next-auth/providers/resend";
import Credentials from "next-auth/providers/credentials";
import { session } from "@lib/session";
import { getGravatarImageUrl } from "@lib/utils";
import { WelcomeEmail } from "@repo/emails/src";
import { APP_NAME } from "@config/site";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { EmailService } from "@repo/emails/src/emailService";

globalForPrisma.prisma ??= new PrismaClient();

const RESEND_ONBOARDING_EMAIL = ``;

const customAdapter = {
   ...PrismaAdapter(xprisma),
   // @ts-ignore
   createUser({ id, iss, ...user }: AdapterUser): Awaitable<AdapterUser> {
      const { email, name, picture, image, emailVerified } = user as unknown as GoogleProfile;
      return xprisma.user.create({ data: { email, name, image: picture ?? image, emailVerified } });
   },
} satisfies Adapter;

declare module "next-auth" {
   /**
    * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
    */
   interface Session {
      accessToken?: string;
      idToken?: string;
      refreshToken?: string;
      provider?: string;
      user: DefaultSession["user"];
   }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
   adapter: customAdapter,
   events: {
      // @ts-ignore
      createUser: async (user: { user: User }) => {
         const features = [
            `Powerful AI - ${APP_NAME.replaceAll(` `, ``)} is powered by advanced AI technology, ensuring that your notes are always up-to-date and accurate.`,
            `Easy Note-Taking - Effortlessly jot down and organize your thoughts, documents, and more with ${APP_NAME.replaceAll(` `, ``)}.`,
            `Secure Storage - Keep your notes and documents safe with ${APP_NAME.replaceAll(` `, ``)}'s secure storage system.`,
         ];

         // Send a welcome e-mail:
         try {
            const res = await new EmailService().sendMail({
               to: user.user?.email,
               subject: `Welcome to ${APP_NAME}`,
               react: WelcomeEmail({
                  username: user.user?.name!,
                  appName: APP_NAME,
                  introduction: `Welcome to <b>${APP_NAME}</b>! We&apos;re thrilled to have you on board and excited to see the
                  memories you&apos;ll create and share with our community.`,
                  description: `At <b>${APP_NAME}</b>, we believe in the power of images to connect people, spark conversations,
                  and inspire creativity. Whether you&apos;re a seasoned photographer or someone who simply loves
                  capturing moments on the go, our platform provides the perfect space for you to showcase your work and
                  discover inspiring content from others.`,
                  features,
               }),
            });
            if (res.success) console.log(`Welcome e-mail successfully sent to: ${user.user.email} with ID: ${res?.success ? res?.id : ``}`);
         } catch (err) {
            console.error(`An error occurred while sending a Welcome e-mail to: ${user.user.email}: ${err}`);
         }
      },
   },
   debug: false,
   callbacks: {
      session,
      async authorized({ request, auth }) {
         return true;
      },
      async signIn({ user, profile, account, email }) {
         return true;
      },
      async jwt({ token, user, session, profile, account }) {
         if (user?.id) token.id = user.id;
         if (account) {
            token.accessToken = account.access_token;
            token.refreshToken = account.refresh_token;
            token.idToken = account.id_token;
            if (account.provider) token.provider = account.provider;
         }

         return token;
      },
   },
   session: { strategy: `jwt` },
   secret: process.env.AUTH_SECRET ?? `sdfsdfdsfwerwe`,
   providers: [Google({
      authorization: {
         params: {
            scope: `openid email profile https://www.googleapis.com/auth/drive`,
            access_type: `offline`,
            response_type: `code`,
         },
      },
   }), ResendProvider({
      from: RESEND_ONBOARDING_EMAIL,
      generateVerificationToken() {
         return crypto.randomUUID();
      },
      async sendVerificationRequest({ request, url, identifier, provider, token }) {
         try {
            const res = await new EmailService().sendMail({
               to: identifier,
               subject: "Login Link to your Account",
               html: "<p>Click the magic link below to sign in to your account:</p>\
                 <p><a href=\"" + url + "\"><b>Sign in</b></a></p>",
            });
         } catch (error) {
            console.log({ error });
         }
      },
   }),
      Credentials({
            credentials: {
               email: {
                  type: "email",
               },
               username: {
                  type: "text",
               },
               password: {
                  type: "password",
               },
               type: {
                  type: "text",
               },
            },
            authorize: async ({ username, email, password, type }) => {
               if (type === `signup`) {
                  // Handle user sign up:
                  const existing = await xprisma.user.findFirst({
                        where: {
                           email: email as string,
                        },
                     })
                  ;
                  if (existing) return null!;

                  // Retrieve Gravatar image:
                  let imageUrl = await getGravatarImageUrl(email as string);
                  const user = await xprisma.user.signUp({
                     email: email as string,
                     password: password as string,
                     username: username as string,
                     image: imageUrl,
                  }, { image: true });

                  return {
                     id: user.id,
                     email: user.email,
                     name: user.name,
                     image: user.image,
                  };
               }

               const user = await xprisma.user.signIn({
                  email: email as string,
                  password: password as string,
                  username: username as string,
               });

               return user!;
            },
         },
      )],
});