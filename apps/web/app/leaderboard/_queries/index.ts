"use server";

import { xprisma } from "@repo/db";
import moment from "moment/moment";
import { TypingMode } from "@atoms/consts";

export async function getLeaderboard({ daily, language }: { daily?: boolean, language?: string }) {
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
      .sort((a, b) => b.wpm - a.wpm);

   const time60Runs = runs
      .filter(r => r.mode === TypingMode.TIME && r.time === 60)
      .sort((a, b) => b.wpm - a.wpm);

   return { time15Runs, time60Runs, qualifiedUserIds };
}