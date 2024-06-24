import { xprisma } from "@repo/db";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import moment from "moment";
import {
   HoverCard, HoverCardContent,
   HoverCardTrigger,
   Separator,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
   UserAvatar,
} from "@repo/ui";
import { UserExperienceInfo } from "@app/account/_components/UserExperienceInfo";
import { formatMillisecondsToTime } from "@lib/utils";
import { Globe, Rocket, Twitter } from "lucide-react";
import TimeRunsStats from "@app/profile/[userId]/_components/TimeRunsStats";
import WordRunsStats from "@app/profile/[userId]/_components/WordRunsStats";

export interface PageProps {
   params: { userId?: string };
}

const Page = async ({ params }: PageProps) => {
   console.log({ params });
   const user = await xprisma.user.findUnique({
      where: { id: decodeURIComponent(params.userId!) },
      include: { typingRuns: true },
   });
   if (!user) notFound();

   const isFirstInLeaderboard = (await xprisma.typingRun.getTopWpmAllTime())?.userId === user.id;
   console.log({ isFirstInLeaderboard });

   user.typingRuns = user.typingRuns.map(run => {
         const { hasFlag, ...rest } = run;
         return rest;
      },
   );

   console.log({ user });

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col items-center gap-4`}>
         <div className={`w-full bg-stone-950/70 rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8 `}>
            <div className={`flex flex-col items-start gap-2`}>
               <div className={`flex items-center gap-4`}>
                  <UserAvatar className={`w-20 h-20`} imageSrc={user?.image!} />
                  <div className={`flex flex-col items-start gap-2`}>
                     <h2 className={`text-2xl text-neutral-300 `}>{user?.name}</h2>
                     {isFirstInLeaderboard && (
                        <div className={`animate-rainbow-bg rounded-full px-2 py-1 inline-flex items-center gap-2 bg-white text-black shadow-md`}>
                           <Rocket size={18} />
                           <span>Mythical</span>
                        </div>
                     )}
                     <div className={`flex flex-col gap-0`}>
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger asChild>
                              <span className={`text-sm text-neutral-500 cursor-pointer`}>
                                 Joined {moment(user.createdAt).format(`DD MMM YYYY`)}
                              </span>
                              </TooltipTrigger>
                              <TooltipContent
                                 side={`right`}
                                 className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                                 {moment(user.createdAt).fromNow()}
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                     </div>
                  </div>
               </div>
               <div className={`w-full mt-4`}>
                  <Suspense fallback={`Loading ...`}>
                     <UserExperienceInfo />
                  </Suspense>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-60 w-[4px] rounded-full bg-neutral-700`} />
            <div className={`flex-1 h-full flex flex-col items-start justify-between gap-8`}>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-neutral-500 text-sm`}>Tests started</span>
                  <h2 className={`text-3xl text-white`}>{user.typingRuns.length}</h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-neutral-500 text-sm`}>Tests completed</span>
                  <h2 className={`text-3xl text-white`}>{user.typingRuns.length}</h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-neutral-500 text-sm`}>Time typing</span>
                  <h2 className={`text-3xl text-white`}>{formatMillisecondsToTime(user.totalTimeTypingMs)}</h2>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-60 w-[4px] rounded-full bg-neutral-700`} />
            <div className={`flex-1 h-full flex flex-col items-start justify-between gap-8`}>
               <div>
                  <h2>Bio</h2>
                  <p>Bio ...</p>
               </div>
               <div>
                  <h2>Keyboard</h2>
                  <p>keyboard ...</p>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-60 w-[4px] rounded-full bg-neutral-700`} />
            <div className={`flex-1 h-full flex flex-col items-start justify-between gap-8`}>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Twitter size={32}
                                 className={`cursor-pointer stroke-neutral-300 fill-neutral-300 hover:!fill-amber-600 hover:!stroke-amber-600 transition-colors duration-200`} />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`top`}
                        className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                        {user.name}
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Globe size={32}
                               className={`cursor-pointer stroke-neutral-300   hover:!stroke-amber-600 transition-colors duration-200`} />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`top`}
                        className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                        website ...
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
         </div>
         <div className={`w-full  rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>
            <div className={`flex-1 bg-stone-950/70 rounded-lg shadow-lg flex items-center p-12 px-16 gap-8 mt-8`}>
               <TimeRunsStats timeRuns={user.typingRuns} />
            </div>
            <div className={`flex-1 bg-stone-950/70 rounded-lg shadow-lg flex items-center p-12 px-16 gap-8 mt-8`}>
               <WordRunsStats wordRuns={user.typingRuns} />
            </div>
         </div>
      </section>
   );
};

export default Page;