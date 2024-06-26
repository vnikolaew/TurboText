import { User, xprisma } from "@repo/db";
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import moment from "moment";
import { Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, UserAvatar } from "@repo/ui";
import { UserExperienceInfo } from "@app/account/_components/UserExperienceInfo";
import { formatMillisecondsToTime, isValidUrl } from "@lib/utils";
import { Flag, Globe, Twitter } from "lucide-react";
import TimeRunsStats from "@app/profile/[userId]/_components/TimeRunsStats";
import WordRunsStats from "@app/profile/[userId]/_components/WordRunsStats";
import ReportUserModal from "@app/profile/[userId]/_components/ReportUserModal";
import { pick } from "lodash";
import MythicalBadge from "@app/profile/[userId]/_components/MythicalBadge";
import Link from "next/link";

export interface PageProps {
   params: { userId?: string };
}

const Page = async ({ params }: PageProps) => {
   console.log({ params });
   const user: User = await xprisma.user.findUnique({
      where: { id: decodeURIComponent(params.userId!) },
      include: { typingRuns: true },
   });
   if (!user) notFound();

   const topRun = (await xprisma.typingRun.getTopWpmAllTime());
   const isFirstInLeaderboard = topRun?.userId === user.id;

   console.log({ isFirstInLeaderboard, topRun });

   user.typingRuns = user.typingRuns.map(run => {
         const { hasFlag, ...rest } = run;
         return rest;
      },
   );
   const { verifyPassword, updatePassword, ...rest } = user;

   console.log({ user, rest });

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col items-center gap-4`}>
         <div className={`w-full bg-secondary-bg rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8 `}>
            <div className={`flex flex-col items-start gap-2`}>
               <div className={`flex items-center gap-4`}>
                  <UserAvatar className={`w-20 h-20`} imageSrc={user?.image!} />
                  <div className={`flex flex-col items-start gap-2`}>
                     <h2 className={`text-2xl text-main `}>{user?.name}</h2>
                     {isFirstInLeaderboard && <MythicalBadge />}
                     <div className={`flex flex-col gap-0`}>
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger asChild>
                              <span className={`text-sm text-secondary cursor-pointer`}>
                                 Joined {moment(user.createdAt).format(`DD MMM YYYY`)}
                              </span>
                              </TooltipTrigger>
                              <TooltipContent
                                 side={`top`}
                                 className={`bg-secondary text-main rounded-xl text-sm border-none !px-4 !py-2`}>
                                 {moment(user.createdAt).diff(moment(), `days`)} days ago
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
            <Separator orientation={`vertical`} className={`h-60 w-[4px] rounded-full bg-secondary`} />
            <div className={`flex-1 h-full flex flex-col items-start justify-between gap-8`}>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-accent text-sm`}>Tests started</span>
                  <h2 className={`text-3xl text-main`}>{user.typingRuns.length}</h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-accent text-sm`}>Tests completed</span>
                  <h2 className={`text-3xl text-main`}>{user.typingRuns.length}</h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-accent text-sm`}>Time typing</span>
                  <h2 className={`text-3xl text-main`}>{formatMillisecondsToTime(user.totalTimeTypingMs)}</h2>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-60 w-[4px] rounded-full bg-secondary`} />
            <div className={`flex-1 h-full flex flex-col items-start justify-between gap-8`}>
               <div>
                  <h2 className={`text-accent`}>Bio</h2>
                  <p className={`text-main`}>{user.metadata.bio ?? `Empty`}</p>
               </div>
               <div>
                  <h2 className={`text-accent`}>Keyboard</h2>
                  <p className={`text-main`}>{user.metadata.keyboard ?? `Unspecified`}</p>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-60 w-[4px] rounded-full bg-secondary`} />
            <div className={`flex-1 h-full flex flex-col items-start justify-between gap-8`}>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        {user.metadata?.twitter ? (
                           <Link href={`www.twitter.com/${encodeURIComponent(user.metadata?.twitter)}`}>
                              <Twitter size={32}
                                       className={`cursor-pointer stroke-secondary fill-secondary hover:!fill-accent hover:!stroke-accent transition-colors duration-200`} />
                           </Link>
                        ) : (
                           <Twitter size={32}
                                    className={`cursor-pointer stroke-secondary fill-secondary hover:!fill-accent hover:!stroke-accent transition-colors duration-200`} />
                        )}
                     </TooltipTrigger>
                     <TooltipContent
                        side={`top`}
                        className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
                        {user.metadata?.twitter ?? `Unspecified`}
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        {user.metadata?.website && isValidUrl(user.metadata.website) ? (
                           <Link href={`${encodeURIComponent(user.metadata?.website)}`}>
                              <Globe size={32}
                                     className={`cursor-pointer stroke-secondary  hover:!stroke-accent transition-colors duration-200`} />
                           </Link>
                        ) : (
                           <Globe size={32}
                                  className={`cursor-pointer stroke-secondary hover:!stroke-accent transition-colors duration-200`} />
                        )}
                     </TooltipTrigger>
                     <TooltipContent
                        side={`top`}
                        className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
                        {user.metadata?.website ?? `No website`}
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
            <div className={`!h-full p-4`}>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger>
                        <ReportUserModal user={pick(rest, [`id`, `name`])}>
                           <Flag size={28}
                                 className={`cursor-pointer stroke-secondary fill-secondary hover:!stroke-accent transition-colors duration-200 hover:!fill-accent`} />
                        </ReportUserModal>
                     </TooltipTrigger>
                     <TooltipContent
                        side={`left`}
                        className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
                        Report user
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
         </div>
         <div className={`w-full rounded-lg flex items-center gap-8 my-8`}>
            <div className={`flex-1 bg-secondary-bg rounded-lg shadow-lg flex items-center p-12 px-16 gap-8 mt-8`}>
               <TimeRunsStats timeRuns={user.typingRuns} />
            </div>
            <div className={`flex-1 bg-secondary-bg rounded-lg shadow-lg flex items-center p-12 px-16 gap-8 mt-8`}>
               <WordRunsStats wordRuns={user.typingRuns} />
            </div>
         </div>
      </section>
   );
};

export default Page;