import React, { Suspense } from "react";
import { Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, UserAvatar } from "@repo/ui";
import moment from "moment";
import { notFound } from "next/navigation";
import AccountLinks from "@app/account/_components/AccountPageLinks";
import EmailNotVerifiedNotification from "@app/account/_components/EmailNotVerifiedNotification";
import UserActivitySection from "@app/account/_components/UserActivitySection";
import { formatMillisecondsToTime } from "@lib/utils";
import LatestUserRuns from "@app/account/_components/runs/LatestUserRuns";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME, AUTHOR, AUTHOR_WEBSITE } from "@config/site";
import { getUserWithTypingRuns } from "@app/account/_queries";
import TypingRunsStatsSection from "@app/account/_components/TypingRunsStatsSection";
import { UserExperienceInfo } from "@app/account/_components/UserExperienceInfo";
import OnAccountVerified from "@app/_components/toasts/OnAccountVerified";
import LatestUserChallenges from "@app/account/_components/challenges/LatestUserChallenges";
import PageLinks from "./_components/PageLinks";
import { UsersChallengeState } from "@repo/db";

export const metadata: Metadata = {
   title: `Account | ${APP_NAME}`,
   description: APP_DESCRIPTION,
   authors: [{
      url: AUTHOR_WEBSITE,
      name: AUTHOR,
   }],
   applicationName: APP_NAME,
   // icons: appLogo.src,
   keywords: [`speed`, `typing`, `speed-typing`, `test`, `web`, `keyboard`],
   category: `notes`,
   creator: AUTHOR,
   referrer: `no-referrer`,
};


export interface PageProps {
   searchParams: { verified?: string };
}

const Page = async ({ searchParams }: PageProps) => {
   const user = await getUserWithTypingRuns();
   if (!user) notFound();

   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col items-center gap-4`}>
         {!user.emailVerified && (
            <EmailNotVerifiedNotification />
         )}
         {user.emailVerified && searchParams?.verified === `true` && (
            <OnAccountVerified />
         )}
         <PageLinks />
         <div className={`w-full bg-secondary-bg rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-4 `}>
            <div className={`flex flex-col items-start gap-2`}>
               <div className={`flex items-center gap-4`}>
                  <UserAvatar className={`w-20 h-20`} imageSrc={user?.image!} />
                  <div className={`flex flex-col items-start gap-2`}>
                     <h2 className={`text-2xl text-main `}>{user?.name}</h2>
                     <div className={`flex flex-col gap-0`}>
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger asChild>
                     <span
                        className={`text-sm text-secondary cursor-pointer`}>
                        Joined {moment(user.createdAt).format(`DD MMM YYYY`)}
                     </span>
                              </TooltipTrigger>
                              <TooltipContent
                                 side={`right`}
                                 className={`bg-secondary text-main rounded-xl text-sm border-none !px-4 !py-2`}>
                                 {moment(user.createdAt).fromNow()}
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                        <span className={`text-sm text-secondary`}>
                        Current streak: {user.currentStreak} day{user.currentStreak === 1 ? `` : `s`}
                     </span>
                     </div>
                  </div>
               </div>
               <div className={`w-full mt-4`}>
                  <Suspense fallback={`Loading ...`}>
                     <UserExperienceInfo />
                  </Suspense>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-20 w-[4px] rounded-full bg-secondary`} />
            <div className={`flex-1 h-full grid grid-cols-3`}>
               <div className={`flex flex-col items-start gap-4`}>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-secondary text-sm`}>Tests started</span>
                     <h2 className={`text-3xl text-main`}>{user.typingRuns.length}</h2>
                  </div>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-secondary text-sm`}>Challenges started</span>
                     <h2 className={`text-3xl text-main`}>{[...user.challenges_one, ...user.challenges_two].length}</h2>
                  </div>
               </div>
               <div className={`flex flex-col items-start gap-4`}>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-secondary text-sm`}>Tests completed</span>
                     <h2 className={`text-3xl text-main`}>{user.typingRuns.length}</h2>
                  </div>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-secondary text-sm`}>Challenges completed</span>
                     <h2
                        className={`text-3xl text-main`}>{[...user.challenges_one, ...user.challenges_two].filter(c => c.state === UsersChallengeState.Finished).length}</h2>
                  </div>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-secondary text-sm`}>Time typing</span>
                  <h2 className={`text-3xl text-main`}>{formatMillisecondsToTime(user.totalTimeTypingMs)}</h2>
               </div>
            </div>
            <Separator orientation={`vertical`} className={`h-20 w-[4px] rounded-full bg-secondary`} />
            <AccountLinks user={user} />
         </div>
         <div className={`w-full bg-secondary-bg rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>
            <UserActivitySection typingRuns={user?.typingRuns?.map(run => {
               const { hasFlag, ...rest } = run;
               return rest;
            })} />
         </div>
         <div className={`w-full bg-secondary-bg rounded-lg shadow-lg flex items-center p-12 py-10 gap-8 mt-8`}>
            <TypingRunsStatsSection runs={user.typingRuns} />
         </div>
         <div className={`w-full bg-secondary-bg rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>
            <LatestUserRuns user={user} />
         </div>
         <div className={`w-full bg-secondary-bg rounded-lg shadow-lg flex items-center p-6 py-10 gap-8 mt-8`}>
            <LatestUserChallenges user={user} />
         </div>
      </section>
   );
};

export default Page;