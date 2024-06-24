import { Prisma, PrismaClient, Tag, TypingRun, User } from "@prisma/client";
import { InternalArgs } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";
import { typedLetterInfoSchema } from "./utils";
import { groupBy } from "lodash";
import { kogasa, mean, roundTo2, stdDev } from "./numbers";

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

export let xprisma = prisma.$extends({
   result: {
      typingRun: {
         consistency: {
            needs: { typedLetters: true },
            compute({ typedLetters }) {
               const res = typedLetterInfoSchema.safeParse({ typedLetters });
               if (!res.success) return 0.00;

               const typedLettersGrouped = Object.entries(groupBy(
                  res.data.typedLetters,
                  l => Math.floor(l!.timestamp / 1000)))
                  .map(([k, v]) => v.length);

               const rawPerSecond = typedLettersGrouped.map((count) =>
                  Math.round((count / 5) * 60),
               );

               const stddev = stdDev(rawPerSecond);
               const avg = mean(rawPerSecond);
               return roundTo2(kogasa(stddev / avg));
            },
         },
         accuracy: {
            needs: { typedLetters: true, mode: true, totalTimeMilliseconds: true, wordCount: true },
            compute({ typedLetters, mode, totalTimeMilliseconds, wordCount }) {
               const res = typedLetterInfoSchema.safeParse({ typedLetters });
               if (!res.success) return 0.00;

               return res.data.typedLetters?.filter(l => l.correct === true)?.length
                  / res.data.typedLetters?.filter(l => l !== null)?.length * 100;
            },
         },
         wpm: {
            needs: { mode: true, totalTimeMilliseconds: true, wordCount: true, metadata: true },
            compute({ mode, totalTimeMilliseconds, wordCount, metadata }) {
               const wc = mode === `TIME` ? (metadata?.completedWords ?? 40) : wordCount!;
               return (wc / (totalTimeMilliseconds / 1000)) * 60;
            },
         },
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
                  ?.map(r => r?.totalTimeMilliseconds)
                  ?.reduce((a, b) => a + b, 0);
            },
         },
         ogAccount: {
            needs: { metadata: true },
            compute({ metadata }) {
               return (metadata as any)?.[`ogAccount`] ?? false;
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
      typingRun: {
         async getTopWpmToday() {
            const top = await xprisma.$queryRaw<TypingRun[]>`
               SELECT * FROM "TypingRun"
               WHERE "createdAt" >= NOW() - INTERVAL '1 day'
               ORDER BY metadata->>'wpm' DESC 
               LIMIT 1;
            `

            return top?.at(0)
         },
         async getTopWpmAllTime() {
            const top = await xprisma.$queryRaw<TypingRun[]>`
               SELECT * FROM "TypingRun"
               ORDER BY metadata->>'wpm' DESC 
               LIMIT 1;
            `

            return top?.at(0);
         }
      },
      userExperience: {
         getLevelFromXp({ points }: { points: number }) {
            const EXPONENT = 1.2;
            return Math.ceil(Math.pow((points / 100), 1 / EXPONENT));
         },
         xpNeededForNextLevel({ level }: { level: number }) {
            const EXPONENT = 1.2;
            return Math.floor((100 * Math.pow(level, EXPONENT)));
         },
         xpNeededForCurrentLevel({ level }: { level: number }) {
            const EXPONENT = 1.2;
            return Math.floor((100 * Math.pow(level - 1, EXPONENT)));
         },
         percentageUntilNextLevel: function({ points }: { points: number }) {
            const EXPONENT = 1.2;
            const level = Math.ceil(Math.pow((points / 100), 1 / EXPONENT));

            const xpNeededForCurrentLevel = Math.floor((100 * Math.pow(level - 1, EXPONENT)));
            const xpNeededForNextLevel = Math.floor((100 * Math.pow(level, EXPONENT)));

            return (points - xpNeededForCurrentLevel)
               / (xpNeededForNextLevel - xpNeededForCurrentLevel) * 100;
         },
      },
      user: {
         async getUserPersonalBestWpm({ userId }: { userId: string }) {
            const userWpm: number = (await xprisma.typingRun.findMany({
               where: { userId },
               select: {
                  wordCount: true, totalTimeMilliseconds: true, mode: true, metadata: true,
               },
            })).map(({ mode, wordCount, totalTimeMilliseconds, metadata }: Partial<TypingRun>) => {
               const wc = mode === `TIME` ? (metadata?.completedWords ?? 40) : wordCount!;
               const wpm = (wc / (totalTimeMilliseconds! / 1000)) * 60;
               return wpm;
            }).sort((a, b) => (b - a))[0];

            return userWpm;
         },
         async getActiveTags({ userId }: { userId: string }) {
            const tags: Tag[] = await xprisma.tag.findMany({
               where: {
                  userId, metadata: { path: [`active`], equals: true },
               },
            });

            return tags;
         },
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
                        sound_error_sound: null,
                        language: `English`
                     },
                  },
                  experience: {
                     create: {
                        level: 1,
                        points: 0,
                        metadata: {},
                     },
                  },
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
