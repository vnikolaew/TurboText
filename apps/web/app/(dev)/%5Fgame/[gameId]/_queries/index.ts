"use server";

import { xprisma } from "@repo/db";
import { ChallengeDetails } from "@app/(dev)/%5Fgame/[gameId]/_hooks/useTypingGame";

export async function getGameUsers(userIds: string[], userId: undefined | string) {
   const [userOne, userTwo] = await xprisma.user.findMany({
      where: {
         id: {
            in: userIds,
         },
      },
      include: { configuration: true, experience: true, typingRuns: true },
   });

   const { updatePassword: x, verifyPassword: y, ...restOne } = userOne;
   const { updatePassword: _, verifyPassword: __, ...restTwo } = userTwo;
   restOne.typingRuns = restOne.typingRuns.map(({hasFlag, ...rest}) => {
      return rest;
   })
   restTwo.typingRuns = restTwo.typingRuns.map(({hasFlag, ...rest}) => {
      return rest;
   })

   return {
      userOne: restOne.id === userId ? restOne : restTwo,
      userTwo: restOne.id === userId ? restTwo : restOne,
   };
}

/**
 * Retrieve details about the winner of a challenge
 * @param challenge The typing challenge
 */
export async function getChallengeWinner(challenge: ChallengeDetails) {
   const winnerId = challenge.userOneRun?.metadata.completedWords
   > challenge.userTwoRun?.metadata.comppletedWods
      ? challenge.userOneId : challenge.userTwoId;

   const winnerCompletedWords = challenge.userOneRun?.metadata.completedWords
   > challenge.userTwoRun?.metadata.comppletedWods
      ? challenge.userOneRun.metadata?.completedWords
      : challenge.userTwoRun.metadata?.completedWords;

   const winner = await xprisma.user.findUnique({ where: { id: winnerId } });

   return { winnerId, winnerCompletedWords, winner };
}