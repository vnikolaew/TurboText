import React, { Suspense } from "react";
import { Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, UserAvatar } from "@repo/ui";
import { UserExperienceInfo } from "@app/account/_components/UserExperienceInfo";
import { formatMillisecondsToTime } from "@lib/utils";
import TimeRunsStats from "@app/profile/[userId]/_components/TimeRunsStats";
import WordRunsStats from "@app/profile/[userId]/_components/WordRunsStats";
import MythicalBadge from "@app/profile/[userId]/_components/MythicalBadge";
import { getUserInfo } from "@app/profile/[userId]/_queries";
import moment from "moment";
import UserWebsite from "@app/profile/[userId]/_components/links/UserWebsite";
import UserTwitter from "@app/profile/[userId]/_components/links/UserTwitter";
import UserGithub from "@app/profile/[userId]/_components/links/UserGithub";
import ReportUserButton from "@app/profile/[userId]/_components/ReportUserButton";
import UserChallengesRecord from "@app/profile/[userId]/_components/UserChallengesRecord";

export interface PageProps {
   params: { userId?: string };
}


const Page = async ({ params }: PageProps) => {
   const { user, isFirstInLeaderboard, wins, losses, draws } = await getUserInfo(params.userId!);

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
                                 className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
                                 {moment(moment()).diff(moment(user.createdAt), `days`)} days ago
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
               <UserChallengesRecord username={user.name!} userId={user.id} record={{ wins, losses, draws }} />
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
               <UserGithub github={user.metadata?.github} />
               <UserTwitter twitter={user.metadata?.twitter} />
               <UserWebsite website={user.metadata?.website} />
            </div>
            <div className={`!h-full p-4`}>
               <ReportUserButton user={user} />
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