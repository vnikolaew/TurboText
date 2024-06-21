import { Button, Separator } from "@repo/ui";
import React from "react";
import { TypingMode } from "@atoms/consts";
import { Crown, User } from "lucide-react";
import { LeaderboardRow, LeaderboardTable } from "@app/leaderboard/_components/LeaderboardTable";
import { TypingRun, xprisma } from "@repo/db";
import { auth } from "@auth";
import moment from "moment";
import Link from "next/link";
import { cn } from "@lib/utils";
import LanguageFilter from "@app/leaderboard/_components/LanguageFilter";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";

export interface PageProps {
   searchParams: { daily?: string, language?: string };
}

export const metadata: Metadata = {
   title: `Leaderboard | ${APP_NAME}`,
   description: APP_DESCRIPTION,
};

function mapRow(run: TypingRun, index: number): LeaderboardRow {
   return {
      position: index + 1,
      date: run.createdAt,
      user: {
         id: run.user.id,
         image: run.user.image,
         level: run.user.experience?.level,
         name: run.user.name,
         og: run.user.metadata?.ogAccount ?? false
      },
      wpm: run.wpm.toFixed(2),
      accuracy: run.accuracy.toFixed(2),
      consistency: run.consistency.toFixed(2),
      raw: run.raw?.toFixed(2),
      metadata: {},
   };
}

const Page = async ({ searchParams }: PageProps) => {
   const daily = searchParams?.daily === `true`;
   const language = searchParams?.language ?? `English`;

   const runs = await xprisma.typingRun.findMany({
      where: {
         ...(daily ? {
            createdAt: {
               gte: moment(new Date).subtract(1, `day`).toDate(),
            },
         } : {}),
         ...(language ? {
            metadata: {
               path: [`language`],
               equals: language,
            },
         } : {}),
      },
      orderBy: {
         createdAt: `desc`,
      },
      include: {
         user: {
            include: {
               experience: { select: { id: true, level: true } },
            },
         },
      },
      take: 100,
   });

   const session = await auth();
   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id },
      include: {
         typingRuns: true,
      },

   });

   const showWarning = user?.totalTimeTypingMs < (1000 * 60 * 2 * 60);

   const time15Runs = runs.filter(r => r.mode === TypingMode.TIME && r.time === 15)
      .sort((a, b) => b.wpm - a.wpm);

   const time60Runs = runs.filter(r => r.mode === TypingMode.TIME && r.time === 60)
      .sort((a, b) => b.wpm - a.wpm);

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col items-start gap-4`}>
         <div className={`flex items-center justify-between w-full`}>
            <h2 className={`text-4xl`}>
               All-Time {language} Leaderboards
            </h2>
            <div className={`flex items-center gap-4`}>
               <Button asChild variant={`secondary`}
                       className={cn(`rounded-full shadow-md px-8 `,
                          !daily && `bg-amber-600 hover:!bg-amber-700 !text-black`)}>
                  <Link href={`/leaderboard`}>
                     All-time
                  </Link>
               </Button>
               <Button asChild variant={`secondary`} className={cn(`rounded-full shadow-md px-8`,
                  daily && `bg-amber-600 hover:!bg-amber-700 !text-black`)}>
                  <Link href={`/leaderboard?daily=true`}>
                     Daily
                  </Link>
               </Button>
            </div>
         </div>
         <Separator className={`w-2/3 bg-neutral-700 h-[1px] rounded-md shadow-md`} />
         <div className={`flex items-center justify-between w-full`}>
            <div />
            <div>
               <LanguageFilter language={language} />
            </div>
         </div>
         <div className={`mt-8 grid grid-cols-2 w-full gap-4`}>
            <div className={`w-full flex items-center justify-between`}>
               <span className={`text-2xl`}>Time 15</span>
               <div className={`flex items-center gap-2`}>
                  <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                     <Crown size={18} className={`text-white`} />
                  </Button>
                  <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                     <User className={`!text-white`} size={18} />
                  </Button>
               </div>
            </div>

            <div className={`w-full flex items-center justify-between`}>
               <span className={`text-2xl`}>Time 60</span>
               <div className={`flex items-center gap-2`}>
                  <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                     <Crown size={18} className={`text-white`} />
                  </Button>
                  <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                     <User className={`!text-white`} size={18} />
                  </Button>
               </div>
            </div>
            <Separator className={`w-full bg-neutral-700 mx-auto`} />
            <Separator className={`w-full bg-neutral-700 mx-auto`} />

            <LeaderboardTable
               rows={time15Runs.map(mapRow)}
               showWarning={showWarning} />
            <LeaderboardTable
               rows={time60Runs.map(mapRow)}
               showWarning={showWarning} />
         </div>
      </section>
   );
};

export default Page;