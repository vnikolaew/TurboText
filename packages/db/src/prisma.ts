import { Prisma, PrismaClient, User } from "@prisma/client";
import { InternalArgs } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";
import { typedLetterInfoSchema } from "./utils";

export const __IS_DEV__ = process.env.NODE_ENV === `development`;

export const config = { runtime: "node.js" };

export const globalForPrisma = globalThis as unknown as {
   prisma: PrismaClient | undefined
};

export let prisma = globalForPrisma.prisma ?? new PrismaClient({
   log: [{ emit: `stdout`, level: `info` }],
   errorFormat: `pretty`,
   transactionOptions: { isolationLevel: `Serializable` },
});

export enum TypingFlags {
   PUNCTUATION = 1,
   NUMBERS = 1 << 1,
}

export let xprisma = prisma.$extends({
   result: {
      typingRun: {
         hasFlag: {
            needs: { flags: true },
            compute({ flags }) {
               return (flag: number) => (flags & flag) !== 0;
            },
         },
         typedLettersInfo: {
            needs: { typedLetters: true },
            compute({ typedLetters }) {
               const res = typedLetterInfoSchema.safeParse({ typedLetters });
               console.log(res.error);
               return res?.data;
            },
         },
      },
      account: {
         deleteResetToken: {
            needs: { providerAccountId: true, provider: true, metadata: true, userId: true },
            compute(account) {
               return async () => {
                  if (!Object.hasOwn(account?.metadata as object ?? {}, "reset_token")) return account;

                  const { reset_token, ...rest } = account!.metadata as Record<string, any>;
                  return xprisma.account.update({
                     where: {
                        userId: account.userId,
                        provider_providerAccountId: {
                           providerAccountId: account!.providerAccountId, provider: account!.provider,
                        },
                     },
                     data: { metadata: rest },
                  });
               };
            },
         },
      },
      user: {
         currentStreak: {
            needs: { typingRuns: true },
            compute({ typingRuns }): number {
               // Sort the dates in ascending order
               typingRuns.sort((a, b) => a - b);

               // Initialize streak variables
               let currentStreak = 1;
               let maxStreak = 1;
               let streakStartDate = typingRuns[0];

               // Iterate through the sorted dates
               for (let i = 1; i < typingRuns.length; i++) {
                  // Calculate the difference between consecutive dates in days
                  let diffInTime = typingRuns[i] - typingRuns[i - 1];
                  let diffInDays = diffInTime / (1000 * 3600 * 24);

                  // Check if the difference is less than or equal to 1 day
                  if (diffInDays <= 1) {
                     currentStreak++;
                  } else {
                     currentStreak = 1; // Reset the current streak
                  }

                  // Update the maximum streak if needed
                  if (currentStreak > maxStreak) {
                     maxStreak = currentStreak;
                  }
               }

               return maxStreak;
            },
         },
         totalTimeTypingMs: {
            needs: { typingRuns: true },
            compute({ typingRuns }) {
               return typingRuns
                  ?.map(r => (r as any)?.typedLettersInfo?.typedLetters?.at(-1)?.timestamp!)
                  ?.reduce((a, b) => a + b, 0);
            },
         },
         cookieConsent: {
            needs: { metadata: true },
            compute({ metadata }) {
               return (metadata as any)?.[`cookie-consent`] ?? false;
            },
         },
         cookiePreferences: {
            needs: { metadata: true },
            compute({ metadata }) {
               return (metadata as any)?.[`cookie-preferences`] ?? {};
            },
         },
         updatePassword: {
            needs: { id: true },
            compute(user) {
               return async (password: string) => {
                  return xprisma.user.update({
                     where: { id: user.id },
                     data: {
                        password: bcrypt.hashSync(password, 10),
                     },
                  });
               };
            },
         },
         verifyPassword: {
            needs: { password: true },
            compute(user) {
               return (password: string) => {
                  return bcrypt.compareSync(password, user.password ?? ``);
               };
            },
         },
      },
   },
   model: {
      user: {
         async signIn({ email, password, username }: {
            email: string;
            password: string,
            username: string
         }, select?: Prisma.UserSelect<InternalArgs>): Promise<Partial<User> | null> {
            const user = await xprisma.user.findFirst({
               where: {
                  OR: [
                     {
                        email: email as string,
                     },
                     {
                        name: username as string,
                     },
                  ],
               },
               select: {
                  id: true,
                  email: true,
                  name: true,
                  verifyPassword: true,
                  image: true,
                  ...(select ?? {}),
               },
            });

            if (user && user.verifyPassword?.(password as string ?? ``)) {
               return {
                  id: user.id,
                  email: user.email,
                  name: user.name,
                  image: user.image,
               };
            }

            return null!;
         },
         async signUp({ email, password, username, image }: {
            email: string;
            password: string,
            username: string,
            image?: string
         }, select?: Prisma.UserSelect<InternalArgs>) {

            let user: User = await xprisma.user.create({
               data: {
                  email,
                  password: bcrypt.hashSync(password, 10),
                  name: username,
                  image,
                  configuration: {
                     create: {
                        sound_click_sound: null,
                        sound_error_sound: null
                     }
                  }
               },
               select: {
                  id: true,
                  email: true,
                  name: true,
                  ...(select ?? {}),
               },
            });
            await xprisma.account.create({
               data: {
                  userId: user.id,
                  provider: `credentials`,
                  providerAccountId: user.id,
                  type: `basic`,
               },
            });

            return user;
         },
      },
   },
});

export type XPrismaClient = typeof xprisma

// @ts-ignore
if (__IS_DEV__) globalForPrisma.prisma = xprisma;
