"use server";

import { EventType, matchParamsSchema } from "@app/api/challenge/route";
import { generateWords } from "@app/api/words/[lang]/generate/route";
import { LANGUAGES_MAP } from "@atoms/consts";
import { auth } from "@auth";
import { authorizedAction } from "@lib/actions";
import {
   UsersChallenge,
   UsersChallengeMatch,
   UsersChallengeMatchState,
   UsersChallengeState,
   xprisma,
} from "@repo/db";
import { z } from "zod";
import { IMessage } from "@hooks/websocket";

const schema = z.object({
   matchId: z.string(),
   userId: z.string(),
   clientId: z.string(),
   matchedUserId: z.string(),
});

/**
 * An authorized action for accepting a challenge match.
 */
export const acceptChallenge = authorizedAction
   .schema(schema)
   .action(
      async ({ ctx: { userId }, parsedInput: { matchedUserId, matchId, clientId } }) => {
         let session = await auth()
         let match: UsersChallengeMatch =
            await xprisma.usersChallengeMatch.findUnique({
               where: {
                  id: matchId,
               },
            });

         if (!match || match.id !== matchId) return { success: false };
         console.log(`Accepting match ${match.id} by ${userId}.`);

         console.log({ match, matchId });
         match = await xprisma.usersChallengeMatch.update({
            where: {
               id: match.id,
            },
            data: {
               state:
                  match.state === UsersChallengeMatchState.HalfAccepted
                     ? UsersChallengeMatchState.Started
                     : UsersChallengeMatchState.HalfAccepted,
            },
         });

         let challenge: UsersChallenge | undefined;
         if (match.state === UsersChallengeMatchState.Started) {
            const body = matchParamsSchema.safeParse(match.metadata);
            const metadata = body.success ? body.data : undefined;

            const languageCode = Object.entries(LANGUAGES_MAP).find(
               ([, value]) => value === metadata?.language,
            )?.[0];

            // Generate challenge words:
            const { words } = await generateWords(
               languageCode!,
               metadata?.time! * 1.5,
            );

            // Save new challenge to DB:
            console.log({ userId, matchedUserId });
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

         const websocket = new WebSocket(process.env.WEBSOCKET_URL!);
         websocket.addEventListener(`open`, e => {
            const message: IMessage = {
               clientId,
               timestamp: Date.now(),
               channelName: `global`,
               clientName: session?.user?.name,
               messageName: match.state === UsersChallengeMatchState.HalfAccepted
                  ? EventType.Accepted
                  : EventType.ChallengeStarted,
               messageType: `SEND`,
               extras: {
                  headers: {
                     fromUserId: session?.user?.id,
                     challengeeId: userId,
                  },
               },
               data: {
                  acceptedByUserId: userId,
                  matchedUserId,
                  type:
                     match.state === UsersChallengeMatchState.HalfAccepted
                        ? EventType.Accepted
                        : EventType.ChallengeStarted,
                  gameId:
                     match.state === UsersChallengeMatchState.HalfAccepted
                        ? undefined
                        : challenge?.id,
                  matchId: match.id,
               },
            };
            websocket.send(JSON.stringify(message));
         });

         return { success: true, match, challenge };
      },
   );

/**
 * An authorized action for rejecting a challenge match.
 */
export const rejectChallenge = authorizedAction
   .schema(schema)
   .action(
      async ({ ctx: { userId }, parsedInput: { matchedUserId, matchId, clientId } }) => {
         let session = await auth();
         let match: UsersChallengeMatch =
            await xprisma.usersChallengeMatch.findUnique({
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

         const websocket = new WebSocket(process.env.WEBSOCKET_URL!);
         websocket.addEventListener(`open`, e => {
            const message: IMessage = {
               clientId,
               timestamp: Date.now(),
               channelName: `global`,
               clientName: session?.user?.name,
               messageName: EventType.Rejected,
               messageType: `SEND`,
               extras: {
                  headers: {
                     fromUserId: session?.user?.id,
                     challengeeId: userId,
                  },
               },
               data: {
                  rejectedByUserId: userId,
                  matchedUserId,
                  type: EventType.Rejected,
                  matchId: match.id,
               },
            };
            websocket.send(JSON.stringify(message));
         });

         return { success: true, match };
      },
   );

const stopSchema = z.object({
   gameId: z.string(),
   userId: z.string(),
   clientId: z.string(),
   matchedUserId: z.string(),
});

/**
 * An authorized action for stopping a challenge.
 */
export const stopChallenge = authorizedAction
   .schema(stopSchema)
   .action(
      async ({ ctx: { userId }, parsedInput: { matchedUserId, gameId, clientId } }) => {
         let session = await auth();
         let challenge: UsersChallenge =
            await xprisma.usersChallenge.findUnique({
               where: {
                  id: gameId,
               },
            });
         const currentSet = new Set<string>([userId!, matchedUserId]);

         if (
            !challenge ||
            currentSet.difference(
               new Set([challenge.userOneId, challenge.userTwoId]),
            )?.size !== 0
         ) {
            return { success: false };
         }

         challenge = await xprisma.usersChallenge.update({
            where: { id: challenge.id },
            data: {
               state: UsersChallengeState.Stopped,
               metadata: { ...challenge.metadata, stoppedByUserId: userId },
            },
         });

         const websocket = new WebSocket(process.env.WEBSOCKET_URL!);
         websocket.addEventListener(`open`, e => {
            const message: IMessage = {
               clientId,
               timestamp: Date.now(),
               channelName: `global`,
               clientName: session?.user?.name,
               messageName: EventType.ChallengeStopped,
               messageType: `SEND`,
               extras: {
                  headers: {
                     fromUserId: session?.user?.id,
                     challengeeId: userId,
                  },
               },
               data: {
                  stoppedByUserId: userId,
                  matchedUserId,
                  type: EventType.ChallengeStopped,
                  challengeId: challenge.id,
               },
            };
            websocket.send(JSON.stringify(message));
         });

         return { success: true, challenge };
      },
   );

const challengeSchema = z.object({
   userId: z.string(),
   clientId: z.string(),
});

/**
 * An authorized action for sending a challenge to a player.
 */
export const challengePlayer = authorizedAction
   .schema(challengeSchema)
   .action(
      async ({ ctx: { userId }, parsedInput: { userId: challengeeId, clientId } }) => {
         const session = await auth();

         const DEFAULT_CHALLENGE_PARAMS = {
            language: `English`,
            difficulty: `MEDIUM`,
            time: 10,
         };

         let match = await xprisma.usersChallengeMatch.create({
            data: {
               userOneId: userId,
               userTwoId: challengeeId,
               state: UsersChallengeMatchState.HalfAccepted,
               metadata: { ...DEFAULT_CHALLENGE_PARAMS },
            },
         });

         const websocket = new WebSocket(process.env.WEBSOCKET_URL!);
         websocket.addEventListener(`open`, e => {
            const message: IMessage = {
               clientId,
               timestamp: Date.now(),
               channelName: `global`,
               clientName: session?.user?.name,
               messageName: EventType.ChallengeUser,
               messageType: `SEND`,
               extras: {
                  headers: {
                     fromUserId: session?.user?.id,
                     challengeeId: userId,
                  },
               },
               data: {
                  fromUserId: userId,
                  fromUserImage: session?.user?.image,
                  fromUserName: session?.user?.name,
                  challengeeId,
                  matchId: match.id,
                  type: EventType.ChallengeUser,
                  ...DEFAULT_CHALLENGE_PARAMS,
               },
            };
            websocket.send(JSON.stringify(message));
         });

         return { success: true, match };
      },
   );

/**
 * An authorized action for sending a challenge to a player.
 */
export const getUserAverageWpm = authorizedAction
   .schema(z.object({ userId: z.string() }))
   .action(async ({ parsedInput: { userId: uId } }) => {
      const res = await xprisma.user.averageWpm({ userId: uId });
      return { success: true, avgWpm: res };
   });
