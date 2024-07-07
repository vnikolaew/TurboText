import { User, xprisma } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   const search = req.nextUrl.searchParams.get(`search`) ?? ``;
   const limit = isNaN(Number(req.nextUrl.searchParams.get(`limit`) ?? null))
      ? 10
      : Number(req.nextUrl.searchParams.get(`limit`) ?? `0`);

   console.log({ search, limit });
   let users: User[] = [];
   if (!search.length) return NextResponse.json({ success: true, users: [] });

   users = await xprisma.user.findMany({
      where: {
         name: {
            contains: search,
            mode: `insensitive`,
         },
      },
      include: { experience: true },
      take: limit,
   });
   console.log({ users });

   return NextResponse.json({ success: true, users });
}
