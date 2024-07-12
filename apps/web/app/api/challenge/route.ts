import { UserDifficulty } from "@app/lobby/_atoms";
import { auth } from "@auth";
import { Queue } from "@lib/queue";
import { xprisma } from "@repo/db";
import Ably from "ably";
import { mean } from "lodash";
import { NextRequest, NextResponse } from "next/server";
import { match } from "ts-pattern";
import { z } from "zod";
import { IMessage } from "@hooks/websocket";
import { headers } from "next/headers";

export const runtime = "nodejs"; // 'nodejs' (default) | 'edge'

const CHANNEL_NAME = `private-global-chat`;
const USER_IDS_QUEUES = new Map<string, Queue<string>>();

const realtime = new Ably.Realtime({
   key: process.env.ABLY_API_KEY!,
   clientId: `turbo-text-node`,
   tls: true,
});
const channel = realtime.channels.get(CHANNEL_NAME, {});

export enum EventType {
   Match = `match`,
   Accepted = `accepted`,
   Rejected = `rejected`,
   ChallengeStarted = `challenge-started`,
   ChallengeStopped = `challenge-stopped`,
   ChallengeUser = `challenge-user`,
}

export const matchParamsSchema = z.object({
   language: z.string(),
   time: z.number(),
   difficulty: z.string(),
});

type MatchParams = z.infer<typeof matchParamsSchema>;

async function getQueueKeyHash(params: MatchParams, userId: string) {
   const userAvgWpm = mean(
      (
         await xprisma.typingRun.findMany({
            where: { userId },
            select: { id: true, metadata: true },
         })
      ).map((r) => r.wpm as number)
   );

   const opponentAvgWpm = match(params.difficulty)
      .with(UserDifficulty.MEDIUM, (_) => userAvgWpm)
      .with(UserDifficulty.HARD, (_) => userAvgWpm + 10)
      .otherwise((_) => userAvgWpm - 10);

   return `${params.language}-${params.time}-${opponentAvgWpm}`;
}

export async function POST(req: NextRequest) {
   const session = await auth();
   if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
   const userId = session.user?.id!;

   const body = matchParamsSchema.safeParse(await req.json());
   if (!body.success)
      return NextResponse.json({ message: "Invalid body" }, { status: 400 });

   const queueKeyHash = await getQueueKeyHash(body.data, userId);
   if (!USER_IDS_QUEUES.has(queueKeyHash)) {
      USER_IDS_QUEUES.set(queueKeyHash, new Queue<string>());
   }

   const queue = USER_IDS_QUEUES.get(queueKeyHash)!;
   queue!.enqueue(userId);

   if (queue!.size % 2 === 0) {
      // Match players
      const [user1, user2] = [queue.dequeue()!, queue.dequeue()!];
      console.log(
         `Successfully matched users ${user1} and ${user2}. Current queue size is: ${queue.size}`
      );

      const match = await xprisma.usersChallengeMatch.create({
         data: {
            userOneId: user1,
            userTwoId: user1,
            metadata: {
               ...body.data,
            },
         },
      });

      const websocket = new WebSocket(process.env.WEBSOCKET_URL!)
      const message: IMessage = {
         channelName: `global`,
         messageType: `SEND`,
         data: {
            userOneId: user1,
            userTwoId: user2,
            type: EventType.Match,
            metadata: {
               ...body.data,
            },
            matchId: match.id,
         },
         messageName: EventType.Match,
         clientId: headers().get("X-Client-Id") ?? ``,

         timestamp: Date.now(),
         extras: {},
      }
      websocket.send(JSON.stringify(message))

      return NextResponse.json({ ok: true, match }, { status: 200 });
   }

   return NextResponse.json({ ok: true }, { status: 200 });
}

/**
 * An API route for removing a user from the queue.
 * @param req
 * @constructor
 */
export async function DELETE(req: NextRequest) {
   const session = await auth();
   if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
   const userId = session.user?.id!;

   const body = matchParamsSchema.safeParse(await req.json());
   if (!body.success)
      return NextResponse.json({ message: "Invalid body" }, { status: 400 });

   const queueKeyHash = await getQueueKeyHash(body.data, userId);

   const queue = USER_IDS_QUEUES.get(queueKeyHash);
   if (!queue)
      return NextResponse.json(
         { success: false, error: `Queue not found` },
         { status: 404 }
      );

   if (queue.items.includes(userId)) {
      queue.remove(userId);

      console.log(
         `Successfully removed user ${userId} from queue. Current queue size is: ${queue.size}`
      );

      return NextResponse.json({ success: true }, { status: 200 });
   }

   return NextResponse.json(
      { success: false, error: `User is not in the queue` },
      { status: 401 }
   );
}
