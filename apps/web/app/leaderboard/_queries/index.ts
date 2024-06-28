"use server";

import { TypingRun, xprisma } from "@repo/db";
import moment from "moment/moment";
import { TypingMode } from "@atoms/consts";
import { auth } from "@auth";
import { LeaderboardRow } from "@app/leaderboard/_components/LeaderboardTable";

function getSearchParamsNormalized(searchParams: { daily?: string, language?: string }) {
   const daily = searchParams?.daily === `true`;
   const language = searchParams?.language ?? `English`;

   return { daily, language } as const;
}

function mapRow(run: TypingRun, index: number): LeaderboardRow {
   return {
      position: index + 1,
      date: run.createdAt,
      user: {
         id: run.user.id,
         image: run.user.image,
         level: run.user.experience?.level,
         name: run.user.name,
         og: run.user.metadata?.ogAccount ?? false,
      },
      wpm: run.wpm.toFixed(2),
      accuracy: run.accuracy.toFixed(2),
      consistency: run.consistency.toFixed(2),
      raw: run.rawWpm?.toFixed(2),
      metadata: {},
   };
}

export async function getLeaderboard(searchParams: { daily?: string, language?: string }) {
   const { daily, language } = getSearchParamsNormalized(searchParams);

   const qualifiedUserIds = await xprisma.typingRun.groupBy({
      by: [`userId`],
      _sum: {
         totalTimeMilliseconds: true,
      },
      having: {
         totalTimeMilliseconds: {
            _sum: {
               gt: 1000 * 60,
            },
         },
      },
   });

   const runs = await xprisma.typingRun.findMany({
      where: {
         ...(daily ? {
            createdAt: {
               gte: moment(new Date).subtract(1, `day`).toDate(),
            },
         } : {}),
         ...(language ? {
            metadata: {
               path: [`language`],
               equals: language,
            },
         } : {}),
         // userId:  {
         //    in:  qualifiedUserIds.map(_ => _.userId)
         // }
      },
      include: {
         user: {
            include: {
               experience: { select: { id: true, level: true } },
            },
         },
      },
      take: 100,
   });

   const time15Runs = runs
      .filter(r => r.mode === TypingMode.TIME && r.time === 15)
      .sort((a, b) => b.wpm - a.wpm)
      .map(mapRow);

   const time60Runs = runs
      .filter(r => r.mode === TypingMode.TIME && r.time === 60)
      .sort((a, b) => b.wpm - a.wpm)
      .map(mapRow);

   return { time15Runs, time60Runs, qualifiedUserIds, daily, language };
}

export async function showUserWarning() {
   const session = await auth();
   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id ?? `` },
      include: {
         typingRuns: true,
      },
   });
   const showWarning = user?.totalTimeTypingMs < (1000 * 60 * 2 * 60);

   return showWarning;
}