"use server";

import { xprisma } from "@repo/db";
import { formatMilliseconds } from "@lib/utils";
import { sum } from "lodash";
import { TypingRun, Prisma } from "@repo/db";

export interface UserAverageWpm {
   userId: string;
   averageWpm: number;
}

export async function getAboutPageStats() {
   const runs: TypingRun[] = await xprisma.typingRun.findMany({
      select: {
         id: true,
         userId: true,
         typedLetters: true,
         typedLettersInfo: true,
      },
   });
   const challenges: any[] = await xprisma.usersChallenge.findMany({
      select: {
         id: true,
         userOneId: true,
         userTwoId: true,
      },
   });

   const usersAverageWpms: UserAverageWpm[]  = await xprisma.$queryRaw<{ averageWpm: Prisma.Decimal, userId: string }>`
        SELECT AVG(cast(r.metadata->>'wpm' as decimal)) as "averageWpm", u.id as "userId" FROM "TypingRun" r
        LEFT JOIN public."User" u on r."userId" = u.id
         GROUP BY u.id;
      `;

   const [amount, unit] = formatMilliseconds(
      sum(
         runs.map(
            (r) => r.typedLettersInfo?.typedLetters?.at(-1)?.timestamp as number,
         ),
      ),
   )?.split(` `);

   const usersGrouped = Array.from({ length: 27 })
      .map((_, index) => {
         const [from, to] = [10 * index, 10 * (index + 1) - 1];
         return {
            range: `${from}-${to}` as `${number}-${number}`,
            usersCount: usersAverageWpms.filter(x => x.averageWpm >= from && x.averageWpm <= to).length,
         };
      });

   return { amount, unit, runs, challenges, usersGrouped } as const;
}
