"use server";

import { User, xprisma } from "@repo/db";
import { notFound } from "next/navigation";
import { ChallengeOutcome } from "@app/account/_components/challenges/UserChallengeRow";

export async function getUserChallengesRecord(user: User) {
   let userOutcomes = [...(user.challenges_one ?? []), ...(user.challenges_two ?? [])]
      .map(c => {
         const isDraw = c.userOneRun?.metadata.completedWords === c.userTwoRun?.metadata.completedWords;

         const outcome = isDraw ? ChallengeOutcome.DRAW : c.userOneId === user.id
            ? (c.userOneRun?.metadata.completedWords > c.userTwoRun?.metadata.completedWords ? ChallengeOutcome.WIN : ChallengeOutcome.LOSE)
            : (c.userTwoRun?.metadata.completedWords > c.userOneRun?.metadata.completedWords ? ChallengeOutcome.WIN : ChallengeOutcome.LOSE);

         return outcome;
      });

   return {
      wins: userOutcomes.filter(o => o === ChallengeOutcome.WIN).length,
      draws: userOutcomes.filter(o => o === ChallengeOutcome.DRAW).length,
      losses: userOutcomes.filter(o => o === ChallengeOutcome.LOSE).length,
   };
}

export async function getUserInfo(userId: string) {
   const user: User = await xprisma.user.findUnique({
      where: { id: decodeURIComponent(userId!) },
      include: {
         typingRuns: true,
         challenges_one: {
            include: { userOneRun: true, userTwoRun: true },
         },
         challenges_two: {
            include: { userOneRun: true, userTwoRun: true },
         },
      },
   });
   if (!user) notFound();

   const topRun = (await xprisma.typingRun.getTopWpmAllTime());
   const isFirstInLeaderboard = topRun?.userId === user.id;

   user.typingRuns = user.typingRuns.map(run => {
         const { hasFlag, ...rest } = run;
         return rest;
      },
   );

   const { verifyPassword, updatePassword, ...rest } = user;

   return {
      isFirstInLeaderboard,
      user: rest,
      ...(await getUserChallengesRecord(user))
   };
}