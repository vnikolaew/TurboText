"use server";

import { authorizedAction } from "@lib/actions";
import { UsersChallenge, UsersChallengeMatch, UsersChallengeMatchState, UsersChallengeState, xprisma } from "@repo/db";
import { z } from "zod";
import Ably from "ably";
import { EventType, matchParamsSchema } from "@app/api/challenge/route";
import { generateWords } from "@app/api/words/[lang]/generate/route";
import { LANGUAGES_MAP } from "@atoms/consts";

const CHANNEL_NAME = `private-global-chat`;

const realtime = new Ably.Realtime({ key: process.env.ABLY_API_KEY!, clientId: `turbo-text-node`, tls: true });
const channel = realtime.channels.get(CHANNEL_NAME, {});

const schema = z.object({
   matchId: z.string(),
   userId: z.string(),
   matchedUserId: z.string(),
});

/**
 * An authorized action for accepting a challenge match.
 */
export const acceptChallenge = authorizedAction
   .schema(schema)
   .action(async ({ ctx: { userId }, parsedInput: { matchedUserId, matchId } }) => {
      let match: UsersChallengeMatch = await xprisma.usersChallengeMatch.findUnique({
         where: {
            id: matchId,
         },
      });

      if (!match || match.id !== matchId) return { success: false };
      match = await xprisma.usersChallengeMatch.update({
         where: {
            id: match.id,
         },
         data: {
            state: match.state === UsersChallengeMatchState.HalfAccepted
               ? UsersChallengeMatchState.Started
               : UsersChallengeMatchState.HalfAccepted,
         },
      });

      let challenge: UsersChallenge | undefined;
      if (match.state === UsersChallengeMatchState.Started) {

         const body = matchParamsSchema.safeParse(match.metadata);
         const metadata = body.success ? body.data : undefined;

         const languageCode = Object
            .entries(LANGUAGES_MAP)
            .find(([, value]) => value === metadata?.language)?.[0];

         // Generate challenge words:
         const { words } = await generateWords(languageCode!, metadata?.time! * 1.5);

         // Save new challenge to DB:

         challenge = await xprisma.usersChallenge.create({
            data: {
               userOneId: userId,
               userTwoId: matchedUserId,
               metadata: { ...metadata, words },
               matchId: match.id,
               state: UsersChallengeState.Pending,
            },
         });
      }

      await channel.attach();
      await channel.publish({
         name: match.state === UsersChallengeMatchState.HalfAccepted ? EventType.Accepted : EventType.ChallengeStarted,
         data: {
            acceptedByUserId: userId,
            matchedUserId,
            type: match.state === UsersChallengeMatchState.HalfAccepted ? EventType.Accepted : EventType.ChallengeStarted,
            gameId: match.state === UsersChallengeMatchState.HalfAccepted ? undefined : challenge?.id,
            matchId: match.id,
         },
      });

      return { success: true, match, challenge };
   });


/**
 * An authorized action for rejecting a challenge match.
 */
export const rejectChallenge = authorizedAction
   .schema(schema)
   .action(async ({ ctx: { userId }, parsedInput: { matchedUserId, matchId } }) => {
      let match: UsersChallengeMatch = await xprisma.usersChallengeMatch.findUnique({
         where: {
            id: matchId,
         },
      });

      if (!match || match.id !== matchId) return { success: false };
      match = await xprisma.usersChallengeMatch.update({
         where: {
            id: match.id,
         },
         data: { state: UsersChallengeMatchState.Rejected },
      });

      await channel.attach();
      await channel.publish({
         name: EventType.Rejected,
         data: {
            rejectedByUserId: userId,
            matchedUserId,
            type: EventType.Rejected,
            matchId: match.id,
         },
      });

      return { success: true, match };
   });

const stopSchema = z.object({
   gameId: z.string(),
   userId: z.string(),
   matchedUserId: z.string(),
});


/**
 * An authorized action for stopping a challenge.
 */
export const stopChallenge = authorizedAction
   .schema(stopSchema)
   .action(async ({ ctx: { userId }, parsedInput: { matchedUserId, gameId } }) => {
      let challenge: UsersChallenge = await xprisma.usersChallenge.findUnique({
         where: {
            id: gameId,

         },
      });
      const currentSet = new Set<string>([userId!, matchedUserId]);

      if (!challenge || currentSet.difference(
         new Set([challenge.userOneId, challenge.userTwoId]))?.size !== 0) {
         return { success: false };
      }

      challenge = await xprisma.usersChallenge.update({
         where: { id: challenge.id },
         data: {
            state: UsersChallengeState.Stopped,
            metadata: { ...challenge.metadata, stoppedByUserId: userId },
         },
      });

      // Publish a stop event:
      await channel.attach();
      await channel.publish({
         name: EventType.ChallengeStopped,
         data: {
            stoppedByUserId: userId,
            matchedUserId,
            type: EventType.ChallengeStopped,
            challengeId: challenge.id,
         },
      });

      return { success: true, challenge };
   });
