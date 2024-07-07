import AccountPageLinks from "@app/(loading)/account/_components/AccountPageLinks";
import EmailNotVerifiedNotification from "@app/(loading)/account/_components/EmailNotVerifiedNotification";
import TypingRunsStatsSection from "@app/(loading)/account/_components/TypingRunsStatsSection";
import UserActivitySection from "@app/(loading)/account/_components/UserActivitySection";
import { UserExperienceInfo } from "@app/(loading)/account/_components/UserExperienceInfo";
import LatestUserChallenges from "@app/(loading)/account/_components/challenges/LatestUserChallenges";
import LatestUserRuns from "@app/(loading)/account/_components/runs/LatestUserRuns";
import { getUserWithTypingRuns } from "@app/(loading)/account/_queries";
import UserChallengesRecord from "@app/(loading)/profile/[userId]/_components/UserChallengesRecord";
import { getUserChallengesRecord } from "@app/(loading)/profile/[userId]/_queries";
import OnAccountVerified from "@app/_components/toasts/OnAccountVerified";
import {
   APP_DESCRIPTION,
   APP_NAME,
   AUTHOR,
   AUTHOR_WEBSITE,
} from "@config/site";
import { formatMillisecondsToTime } from "@lib/utils";
import { UsersChallengeState } from "@repo/db";
import {
   Separator,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
   UserAvatar,
} from "@repo/ui";
import { sum } from "lodash";
import moment from "moment";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageLinks from "./_components/PageLinks";

export const metadata: Metadata = {
   title: `Account | ${APP_NAME}`,
   description: APP_DESCRIPTION,
   authors: [
      {
         url: AUTHOR_WEBSITE,
         name: AUTHOR,
      },
   ],
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

   let { wins, draws, losses } = await getUserChallengesRecord(user);
   console.log({ runs: user.typingRuns });

   return (
      <section
         className={`mx-auto mt-24 flex w-2/3 flex-col items-center gap-4`}
      >
         {!user.emailVerified && <EmailNotVerifiedNotification />}
         {user.emailVerified && searchParams?.verified === `true` && (
            <OnAccountVerified />
         )}
         <PageLinks />
         <div
            className={`mt-4 flex w-full items-center gap-8 rounded-lg bg-secondary-bg p-6 py-10 shadow-lg`}
         >
            <div className={`flex flex-col items-start gap-2`}>
               <div className={`flex items-center gap-4`}>
                  <UserAvatar className={`h-20 w-20`} imageSrc={user?.image!} />
                  <div className={`flex flex-col items-start gap-2`}>
                     <h2 className={`text-2xl text-main`}>{user?.name}</h2>
                     <div className={`flex flex-col gap-0`}>
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger asChild>
                                 <span
                                    className={`cursor-pointer text-sm text-secondary`}
                                 >
                                    Joined{" "}
                                    {moment(user.createdAt).format(
                                       `DD MMM YYYY`
                                    )}
                                 </span>
                              </TooltipTrigger>
                              <TooltipContent
                                 side={`right`}
                                 className={`rounded-xl border-none bg-secondary !px-4 !py-2 text-sm text-main`}
                              >
                                 {moment(user.createdAt).fromNow()}
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                        <span className={`text-sm text-secondary`}>
                           Current streak: {user.currentStreak} day
                           {user.currentStreak === 1 ? `` : `s`}
                        </span>
                     </div>
                  </div>
               </div>
               <div className={`mt-4 w-full`}>
                  <Suspense fallback={`Loading ...`}>
                     <UserExperienceInfo />
                  </Suspense>
               </div>
               <UserChallengesRecord
                  withChallenge={false}
                  record={{ wins, losses, draws }}
               />
            </div>
            <Separator
               orientation={`vertical`}
               className={`h-24 w-[4px] rounded-full bg-secondary`}
            />
            <div className={`grid h-full flex-1 grid-cols-3`}>
               <div className={`flex flex-col items-start gap-4`}>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-sm text-secondary`}>
                        Tests started
                     </span>
                     <h2 className={`text-3xl text-main`}>
                        {user.typingRuns.length}
                     </h2>
                  </div>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-sm text-secondary`}>
                        Challenges started
                     </span>
                     <h2 className={`text-3xl text-main`}>
                        {
                           [...user.challenges_one, ...user.challenges_two]
                              .length
                        }
                     </h2>
                  </div>
               </div>
               <div className={`flex flex-col items-start gap-4`}>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-sm text-secondary`}>
                        Tests completed
                     </span>
                     <h2 className={`text-3xl text-main`}>
                        {user.typingRuns.length}
                     </h2>
                  </div>
                  <div className={`flex flex-col items-start gap-1`}>
                     <span className={`text-sm text-secondary`}>
                        Challenges completed
                     </span>
                     <h2 className={`text-3xl text-main`}>
                        {
                           [
                              ...user.challenges_one,
                              ...user.challenges_two,
                           ].filter(
                              (c) => c.state === UsersChallengeState.Finished
                           ).length
                        }
                     </h2>
                  </div>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-sm text-secondary`}>Time typing</span>
                  <h2 className={`text-3xl text-main`}>
                     {formatMillisecondsToTime(
                        sum(user.typingRuns.map((r) => r.totalTimeMilliseconds))
                     )}
                  </h2>
               </div>
            </div>
            <Separator
               orientation={`vertical`}
               className={`h-24 w-[4px] rounded-full bg-secondary`}
            />
            <AccountPageLinks user={user} />
         </div>
         <div
            className={`mt-8 flex w-full items-center gap-8 rounded-lg bg-secondary-bg p-6 py-10 shadow-lg`}
         >
            <UserActivitySection typingRuns={user?.typingRuns} />
         </div>
         <div
            className={`mt-8 flex w-full items-center gap-8 rounded-lg bg-secondary-bg p-12 py-10 shadow-lg`}
         >
            <TypingRunsStatsSection runs={user.typingRuns} />
         </div>
         <div
            className={`mt-8 flex w-full items-center gap-8 rounded-lg bg-secondary-bg p-6 py-10 shadow-lg`}
         >
            <LatestUserRuns user={user} />
         </div>
         <div
            className={`my-8 flex w-full items-center gap-8 rounded-lg bg-secondary-bg p-6 py-10 shadow-lg`}
         >
            <LatestUserChallenges user={user} />
         </div>
      </section>
   );
};

export default Page;
