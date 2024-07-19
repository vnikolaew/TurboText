import { xprisma } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
   req: NextRequest,
   { params: { userId } }: { params: { userId: string } },
) {
   if (!userId)
      return NextResponse.json(
         { success: false, error: `User ID not provided` },
         { status: 404 },
      );

   const user = await xprisma.user.findUnique({
      where: { id: userId },
      select: {
         id: true,
         email: true,
         image: true,
         experience: true,
         typingRuns: true,
         challenges_one: true,
         challenges_two: true,
         name: true,
         createdAt: true,
      },
   });
   if (!user)
      return NextResponse.json(
         { success: false, error: `User not found` },
         { status: 404 },
      );

   console.log({ user });
   return NextResponse.json({
      success: true,
      user: { ...user, challenges: [...user.challenges_one, ...user.challenges_two] },
   }, { status: 200 });
}
