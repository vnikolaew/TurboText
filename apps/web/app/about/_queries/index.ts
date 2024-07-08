"use server";

import { TypingRun, xprisma } from "@repo/db";
import { formatMilliseconds } from "@lib/utils";

export interface UserAverageWpm {
   userId: string;
   averageWpm: number;
}

export async function getAboutPageStats() {
   const runs: TypingRun[] = await xprisma.typingRun.findMany({
      select: { id: true, userId: true, typedLetters: true, typedLettersInfo: true },
   });
   const challenges: any[] = await xprisma.usersChallenge.findMany({
      select: {
         id: true,
         userOneId: true,
         userTwoId: true,
      },
   });
   const usersAverageWpms: UserAverageWpm[] = await xprisma.$queryRaw<{ averageWpm: Prisma.Decimal, userId: string }>`
        SELECT AVG(cast(r.metadata->>'wpm' as decimal)) as "averageWpm", u.id as "userId" FROM "TypingRun" r
        LEFT JOIN public."User" u on r."userId" = u.id
         GROUP BY u.id;
      `;

   const usersGrouped = Array
      .from({ length: 27 })
      .map((_, index) => {
         const [from, to] = [10 * index, 10 * (index + 1) - 1];
         return {
            range: `${from}-${to}` as `${number}-${number}`,
            usersCount: usersAverageWpms.filter(x => x.averageWpm >= from && x.averageWpm <= to).length,
         };
      });
   const [amount, unit] = formatMilliseconds(runs
      .map(r => r.typedLettersInfo?.typedLetters?.at(-1)?.timestamp as number)
      .reduce((a, b) => a + b, 0))?.split(` `);

   return { amount, unit, runs, challenges, usersGrouped };
}