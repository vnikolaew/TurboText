"use server";

import { TypingRun, User, xprisma } from "@repo/db";
import moment from "moment/moment";
import { TypingMode } from "@atoms/consts";
import { auth } from "@auth";
import { LeaderboardRow } from "@app/leaderboard/_components/LeaderboardTable";
import { getUserChallengesRecord } from "@app/(loading)/profile/[userId]/_queries";

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

/**
 * Retrieve the users leaderboard for challenges.
 * @param searchParams - The search params.
 */
export async function getChallengesLeaderboard({ daily, language }: { daily?: string, language?: string }) {
   const challengesFilter = {
      metadata: {
         path: [`language`],
         equals: language ?? `English`,
      },
      ...(daily ? {
         createdAt: {
            gte: moment(new Date()).subtract(1, `day`).toDate(),
         },
      } : {}),
   };

   const users: User[] = await xprisma.user.findMany({
      include: {
         typingRuns: {
            orderBy: {
               createdAt: `desc`,
            },
         },
         challenges_one: {
            where: challengesFilter,
            include: {
               userOne: true, userTwo: true,
               userOneRun: {
                  select: { id: true, userId: true, metadata: true },
               },
               userTwoRun: {
                  select: { id: true, userId: true, metadata: true },
               },
            },
         },
         challenges_two: {
            where: challengesFilter,
            include: {
               userOne: true, userTwo: true,
               userOneRun: {
                  select: { id: true, userId: true, metadata: true },
               },
               userTwoRun: {
                  select: { id: true, userId: true, metadata: true },
               },
            },
         },
      },
   });

   const LOSS_PENALTY = 1;

   return (await Promise.all(
      users.map(async user => {
         const { draws, wins, losses } = await getUserChallengesRecord(user);
         const score = (wins * 3) + (draws) - (losses * LOSS_PENALTY);

         return {
            ...user,
            score,
            wins, draws, losses
         };
      }),
   ))
      .filter(u => u.wins + u.draws + u.losses > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50)
}

export type UserChallengeLeaderboard = Awaited<ReturnType<typeof getChallengesLeaderboard>>[number]