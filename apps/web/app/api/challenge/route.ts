import { auth } from "@auth";
import { Queue } from "@lib/queue";
import { xprisma } from "@repo/db";
import { mean } from "lodash";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { IMessage } from "@hooks/websocket";
import { headers } from "next/headers";

export const runtime = "nodejs"; // 'nodejs' (default) | 'edge'

const USER_IDS_QUEUES = new Map<string, Queue<string>>();

const UserDifficulty = {
   EASY: "EASY",
   MEDIUM: "MEDIUM",
   HARD: "HARD",
} as const;

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

async function getQueueKeyHash({ time, language, difficulty }: MatchParams, userId: string) {
   const userRuns = await xprisma.typingRun.findMany({
      where: { userId },
      select: { id: true, metadata: true },
   });
   const userAvgWpm = mean(userRuns.map((r) => r.metadata?.wpm as number));

   const opponentAvgWpm = difficulty === UserDifficulty.MEDIUM
      ? userAvgWpm
      : (difficulty === UserDifficulty.HARD ? userAvgWpm + 10 : userAvgWpm - 10);
   return `${language}-${time}-${Math.floor(opponentAvgWpm / 10) * 10}`;
}

/**
 * An API action for matching players.
 * @param req - The request object.
 * @constructor
 */
export async function POST(req: NextRequest) {
   const session = await auth();
   if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

   const userId = session.user?.id!;
   const body = matchParamsSchema.safeParse(await req.json());

   if (!body.success) return NextResponse.json({ message: "Invalid body" }, { status: 400 });

   const queueKeyHash = await getQueueKeyHash(body.data, userId);
   console.log(`Queue key hash for user ${userId}: ${queueKeyHash}`);

   if (!USER_IDS_QUEUES.has(queueKeyHash)) {
      USER_IDS_QUEUES.set(queueKeyHash, new Queue<string>());
   }

   const queue = USER_IDS_QUEUES.get(queueKeyHash)!;
   queue!.enqueue(userId);

   if (queue!.size % 2 === 0) {
      // Match players
      const [user1, user2] = [queue.dequeue()!, queue.dequeue()!];
      console.log(
         `Successfully matched users ${user1} and ${user2}. Current queue size is: ${queue.size}`,
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

      const websocket = new WebSocket(process.env.WEBSOCKET_URL!);
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
      };
      
      websocket.onopen = () => websocket.send(JSON.stringify(message))
      return NextResponse.json({ ok: true, match }, { status: 200 });
   }

   return NextResponse.json({ ok: true }, { status: 200 });
}

/**
 * An API route for removing a user from the queue.
 * @param req - The request object.
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
         { status: 404 },
      );

   if (queue.items.includes(userId)) {
      queue.remove(userId);

      console.log(
         `Successfully removed user ${userId} from queue. Current queue size is: ${queue.size}`,
      );

      return NextResponse.json({ success: true }, { status: 200 });
   }

   return NextResponse.json(
      { success: false, error: `User is not in the queue` },
      { status: 401 },
   );
}
