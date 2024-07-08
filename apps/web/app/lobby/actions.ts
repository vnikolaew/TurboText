"use server";

import { EventType, matchParamsSchema } from "@app/api/challenge/route";
import { generateWords } from "@app/api/words/[lang]/generate/route";
import { LANGUAGES_MAP } from "@atoms/consts";
import { auth } from "@auth";
import { authorizedAction } from "@lib/actions";
import {
   Prisma,
   UsersChallenge,
   UsersChallengeMatch,
   UsersChallengeMatchState,
   UsersChallengeState,
   xprisma,
} from "@repo/db";
import Ably from "ably";
import { z } from "zod";

const CHANNEL_NAME = `private-global-chat`;

const realtime = new Ably.Realtime({
   key: process.env.ABLY_API_KEY!,
   clientId: `turbo-text-node`,
   tls: true,
});
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
   .action(
      async ({ ctx: { userId }, parsedInput: { matchedUserId, matchId } }) => {
         let match: UsersChallengeMatch =
            await xprisma.usersChallengeMatch.findUnique({
               where: {
                  id: matchId,
               },
            });

         if (!match || match.id !== matchId) return { success: false };

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
               ([, value]) => value === metadata?.language
            )?.[0];

            // Generate challenge words:
            const { words } = await generateWords(
               languageCode!,
               metadata?.time! * 1.5
            );

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
            name:
               match.state === UsersChallengeMatchState.HalfAccepted
                  ? EventType.Accepted
                  : EventType.ChallengeStarted,
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
         });

         return { success: true, match, challenge };
      }
   );

/**
 * An authorized action for rejecting a challenge match.
 */
export const rejectChallenge = authorizedAction
   .schema(schema)
   .action(
      async ({ ctx: { userId }, parsedInput: { matchedUserId, matchId } }) => {
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
      }
   );

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
   .action(
      async ({ ctx: { userId }, parsedInput: { matchedUserId, gameId } }) => {
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
               new Set([challenge.userOneId, challenge.userTwoId])
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
      }
   );

const challengeSchema = z.object({
   userId: z.string(),
});

/**
 * An authorized action for sending a challenge to a player.
 */
export const challengePlayer = authorizedAction
   .schema(challengeSchema)
   .action(
      async ({ ctx: { userId }, parsedInput: { userId: challengeeId } }) => {
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

         // Publish a stop event:
         await channel.attach();
         await channel.publish({
            name: EventType.ChallengeUser,
            data: {
               fromUserId: userId,
               fromUserImage: session?.user?.image,
               fromUserName: session?.user?.name,
               challengeeId,
               matchId: match.id,
               type: EventType.ChallengeUser,
               ...DEFAULT_CHALLENGE_PARAMS,
            },
            extras: {
               headers: {
                  fromUserId: session?.user?.id,
                  challengeeId: userId,
               },
            },
         });

         return { success: true, match };
      }
   );

/**
 * An authorized action for sending a challenge to a player.
 */
export const getUserAverageWpm = authorizedAction
   .schema(z.object({ userId: z.string() }))
   .action(async ({ ctx: { userId }, parsedInput: { userId: uId } }) => {

      const res = await xprisma.$queryRaw<{ avg: Prisma.Decimal }>`
        SELECT AVG(cast(r.metadata->>'wpm' as decimal)) as avg FROM "TypingRun" r
        LEFT JOIN public."User" u on r."userId" = u.id
        WHERE r."userId" = ${uId}
         GROUP BY u.id;
      `;

      return { success: true, avgWpm: res[0].avg.toNumber() as number };
   });
