"use server";

import { xprisma } from "@repo/db";
import { ChallengeDetails } from "../_hooks/useTypingGame";

export async function getGameUsers(
   userIds: string[],
   userId: undefined | string
) {
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
   restOne.typingRuns = restOne.typingRuns.map(({ hasFlag, ...rest }) => {
      return rest;
   });
   restTwo.typingRuns = restTwo.typingRuns.map(({ hasFlag, ...rest }) => {
      return rest;
   });

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
   const winnerId =
      challenge.userOneRun?.metadata.completedWords >
      challenge.userTwoRun?.metadata.completedWords
         ? challenge.userOneId
         : challenge.userOneRun?.metadata.completedWords ===
             challenge.userTwoRun?.metadata.completedWords
           ? null
           : challenge.userTwoId;

   const winnerCompletedWords =
      challenge.userOneRun?.metadata.completedWords >
      challenge.userTwoRun?.metadata.completedWords
         ? challenge.userOneRun.metadata?.completedWords
         : challenge.userTwoRun.metadata?.completedWords;

   const winner = winnerId
      ? await xprisma.user.findUnique({ where: { id: winnerId } })
      : null;

   return {
      winnerId,
      winnerCompletedWords,
      winner,
      userOneWords: challenge.userOneRun?.metadata?.completedWords,
      userTwoWords: challenge.userTwoRun?.metadata?.completedWords,
   };
}

/**
 * Retrieve details about a challenge
 * @param gameId The id of the challenge
 */
export async function getChallengeInfo(gameId?: string) {
   if (!gameId) return null;
   const challenge = await xprisma.usersChallenge.findUnique({
      where: { id: gameId },
      include: { userOneRun: true, userTwoRun: true },
   });

   if (challenge.userOneRun) {
      const { hasFlag, ...rest } = challenge.userOneRun;
      challenge.userOneRun = rest;
   }

   if (challenge.userTwoRun) {
      const { hasFlag_, ...rest_ } = challenge.userTwoRun;
      challenge.userTwoRun = rest_;
   }

   return challenge;
}
