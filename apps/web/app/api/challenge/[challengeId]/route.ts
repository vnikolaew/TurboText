import { NextRequest, NextResponse } from "next/server";
import { xprisma } from "@repo/db";

/**
 * An API route for fetching details of typing challenge by its Id.
 * @param req Request
 * @param params
 * @constructor
 */
export async function GET(req: NextRequest, { params }: { params: { challengeId: string } }) {
   const { challengeId } = params;
   const challenge = await xprisma.usersChallenge.findUnique({
      where: { id: challengeId },
      include: { userOneRun: true, userTwoRun: true, userOne: true, userTwo: true },
   });

   if (!challenge) return new Response("Challenge not found", { status: 404 });

   return NextResponse.json({ challenge }, { status: 200 });
}