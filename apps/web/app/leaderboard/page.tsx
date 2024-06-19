import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import React from "react";
import { LANGUAGES_MAP, TypingMode } from "@atoms/consts";
import { Crown, User } from "lucide-react";
import { LeaderboardTable } from "@app/leaderboard/_components/LeaderboardTable";
import { TypingRun, xprisma } from "@repo/db";
import { auth } from "@auth";
import moment from "moment";

export interface PageProps {
   searchParams: { daily?: string };
}

function mapRow(run: TypingRun, index: number) {
   return {
      position: index + 1,
      date: run.createdAt,
      wpm: run.wpm.toFixed(2),
      accuracy: run.accuracy.toFixed(2),
      consistency: run.consistency.toFixed(2),
      raw: run.raw?.toFixed(2),
      username: run.user.name,
      userImage: run.user.image,
      metadata: {},
   };
}

const Page = async ({ searchParams }: PageProps) => {
   const daily = searchParams?.daily === `true`;

   const runs = await xprisma.typingRun.findMany({
      where: {
         ...(daily ? {
            createdAt: {
               gte: moment(new Date).subtract(1, `day`).toDate(),
            },
         } : {}),
      },
      orderBy: {
         createdAt: `desc`,
      },
      include: { user: { select: { id: true, name: true, image: true } } },
      take: 100,
   });

   const session = await auth();
   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id },
      include: {
         typingRuns: true,
      },

   });
   const time15Runs = runs.filter(r => r.mode === TypingMode.TIME && r.time === 15)
      .sort((a, b) => b.wpm - a.wpm);

   const time60Runs = runs.filter(r => r.mode === TypingMode.TIME && r.time === 60)
      .sort((a, b) => b.wpm - a.wpm);

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col items-start gap-4`}>
         <div className={`flex items-center justify-between w-full`}>
            <h2 className={`text-4xl`}>
               All-Time English Leaderboards
            </h2>
            <div className={`flex items-center gap-4`}>
               <Button variant={`secondary`}
                       className={`rounded-full shadow-md px-8 bg-amber-600 hover:!bg-amber-700 !text-black`}>All-time</Button>
               <Button variant={`secondary`} className={`rounded-full shadow-md px-8`}>Daily</Button>
            </div>
         </div>
         <div className={`flex items-center justify-between w-full`}>
            <div></div>
            <div>
               <Select>
                  <SelectTrigger className="w-[300px] !bg-black">
                     <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent className={`!bg-black !rounded-lg`}>
                     {Object.values(LANGUAGES_MAP).map((language, index) => (
                        <SelectItem
                           className={`!rounded-md cursor-pointer hover:!bg-neutral-300 transition-colors duration-100 hover:!text-black`}
                           key={language} value={language}>{language}</SelectItem>
                     ))}
                  </SelectContent>
               </Select>
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

            <LeaderboardTable
               rows={time15Runs.map(mapRow)}
               showWarning={user?.totalTimeTypingMs < (1000 * 60 * 2 * 60)} />
            <LeaderboardTable
               rows={time60Runs.map(mapRow)}
               showWarning={user?.totalTimeTypingMs < (1000 * 60 * 2 * 60)} />
         </div>
      </section>
   );
};

export default Page;