"use server";

import { IMessage } from "@hooks/websocket";
import { authorizedAction } from "@lib/actions";
import { createTypingRun } from "@lib/use-cases/saveTypingRun";
import { UsersChallengeState, xprisma } from "@repo/db";
import { z } from "zod";
import { auth } from "@auth";

const USERS_READY_QUEUE: Map<string, Set<string>> = new Map<
   string,
   Set<string>
>();
const USERS_FINISHED_SETS: Map<string, Set<string>> = new Map<
   string,
   Set<string>
>();

enum EventType {
   GameStarted = `game-started`,
   UserFinishedRun = `user-finished-run`,
   ChallengeFinished = `challenge-finished`,
}

const schema = z.object({
   gameId: z.string(),
   clientId: z.string(),
});

export const ready = authorizedAction
   .schema(schema)
   .action(async ({ ctx: { userId }, parsedInput: { gameId, clientId } }) => {
      const session = await auth();

      if (!USERS_READY_QUEUE.has(gameId)) {
         USERS_READY_QUEUE.set(gameId, new Set());
      }

      USERS_READY_QUEUE.get(gameId)!.add(userId!);
      if (USERS_READY_QUEUE.get(gameId)?.size === 2) {
         const websocket = new WebSocket(process.env.WEBSOCKET_URL!);
         websocket.onopen = () => {
            websocket.send(JSON.stringify({
               clientId,
               timestamp: Date.now(),
               channelName: `global`,
               clientName: session?.user?.name,
               messageName: EventType.GameStarted,
               messageType: `SEND`,
               extras: {
                  headers: {},
               },
               data: {
                  gameId,
                  type: EventType.GameStarted,
               },
            } as IMessage));

            USERS_READY_QUEUE.get(gameId)!.clear();
         };

         // Update Challenge model in DB:
         const challenge = await xprisma.usersChallenge.update({
            where: { id: gameId },
            data: { state: UsersChallengeState.Playing },
         });

         return { success: true, challenge };
      }

      return { success: true };
   });

const finishSchema = z.object({
   gameId: z.string(),
   clientId: z.string(),
   typedLetters: z.array(
      z.object({
         charIndex: z.number().min(0),
         timestamp: z.number().min(0),
         letter: z.string().max(1),
         correct: z.boolean().nullable(),
         flags: z.number().nullable(),
      }),
   ),
   time: z.number().nullable(),
   totalRunTime: z.number(),
   completedWords: z.number(),
   wordRanges: z.array(
      z.object({
         word: z.string(),
         range: z.tuple([z.number(), z.number()]),
      }),
   ),
   wordCorrectness: z.array(z.boolean().nullable()),
   wordCounts: z.number().nullable(),
   flags: z.number().min(0).nullable(),
   metadata: z.record(z.string(), z.any()).nullable(),
});

/**
 * An authorized action to finish a challenge.
 */
export const finishChallenge = authorizedAction
   .schema(finishSchema)
   .action(async ({ ctx: { userId }, parsedInput: { gameId, clientId, ...rest } }) => {
      const session = await auth();
      if (!USERS_FINISHED_SETS.has(gameId)) {
         USERS_FINISHED_SETS.set(gameId, new Set());
      }

      // Save run to DB:
      const result = await createTypingRun({ ...rest, mode: `TIME` }, userId);
      if (!result.success) return result;

      const websocket = new WebSocket(process.env.WEBSOCKET_URL!);
      websocket.onopen = () => {
         websocket.send(JSON.stringify({
            clientId,
            timestamp: Date.now(),
            channelName: `global`,
            clientName: session?.user?.name,
            messageName: EventType.UserFinishedRun,
            messageType: `SEND`,
            extras: {
               headers: {},
            },
            data: {
               gameId,
               type: EventType.UserFinishedRun,
               userId,
               runId: result.run!.id,
            },
         } as IMessage));
      };

      USERS_FINISHED_SETS.get(gameId)!.add(userId!);

      let challenge = await xprisma.usersChallenge.findUnique({
         where: { id: gameId },
      });
      if (!challenge) return { success: false };

      // Update Challenge model in DB:
      if (USERS_FINISHED_SETS.get(gameId)?.size === 2) {
         USERS_FINISHED_SETS.get(gameId)!.clear();

         challenge = await xprisma.usersChallenge.update({
            where: { id: challenge.id },
            data: {
               state: UsersChallengeState.Finished,
               ...(challenge.userOneId === userId && {
                  userOneRunId: result.run!.id,
               }),
               ...(challenge.userTwoId === userId && {
                  userTwoRunId: result.run!.id,
               }),
            },
         });

         setTimeout(() => {
            websocket.send(JSON.stringify({
               clientId,
               timestamp: Date.now(),
               channelName: `global`,
               clientName: session?.user?.name,
               messageName: EventType.ChallengeFinished,
               messageType: `SEND`,
               extras: {
                  headers: {},
               },
               data: {
                  gameId,
                  type: EventType.ChallengeFinished,
               },
            } as IMessage));
         }, 2_000);

         return { success: true, challenge };
      } else {
         // Simply update Challenge model in DB:
         challenge = await xprisma.usersChallenge.update({
            where: { id: challenge.id },
            data: {
               ...(challenge.userOneId === userId && {
                  userOneRunId: result.run!.id,
               }),
               ...(challenge.userTwoId === userId && {
                  userTwoRunId: result.run!.id,
               }),
            },
         });
      }

      return { success: true, challenge };
   });
