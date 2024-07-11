import { UserExperienceInfo } from "@app/(loading)/account/_components/general/UserExperienceInfo";
import MythicalBadge from "@app/(loading)/account/_components/badges/MythicalBadge";
import ReportUserButton from "@app/(loading)/profile/[userId]/_components/ReportUserButton";
import TimeRunsStats from "@app/(loading)/profile/[userId]/_components/TimeRunsStats";
import UserChallengesRecord from "@app/(loading)/profile/[userId]/_components/UserChallengesRecord";
import WordRunsStats from "@app/(loading)/profile/[userId]/_components/WordRunsStats";
import UserGithub from "@app/(loading)/profile/[userId]/_components/links/UserGithub";
import UserTwitter from "@app/(loading)/profile/[userId]/_components/links/UserTwitter";
import UserWebsite from "@app/(loading)/profile/[userId]/_components/links/UserWebsite";
import { getUserInfo } from "@app/(loading)/profile/[userId]/_queries";
import { formatMillisecondsToTime } from "@lib/utils";
import {
   Separator,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
   UserAvatar,
} from "@repo/ui";
import moment from "moment";
import { Suspense } from "react";

export interface PageProps {
   params: { userId?: string };
}

const Page = async ({ params }: PageProps) => {
   const { user, isFirstInLeaderboard, wins, losses, draws } =
      await getUserInfo(params.userId!);

   return (
      <section
         className={`mx-auto mt-24 flex w-2/3 flex-col items-center gap-4`}
      >
         <div
            className={`mt-8 flex w-full items-center gap-8 rounded-lg bg-secondary-bg p-6 py-10 shadow-lg`}
         >
            <div className={`flex flex-col items-start gap-2`}>
               <div className={`flex items-center gap-4`}>
                  <UserAvatar className={`h-20 w-20`} imageSrc={user?.image!} />
                  <div className={`flex flex-col items-start gap-2`}>
                     <h2 className={`text-2xl text-main`}>{user?.name}</h2>
                     {isFirstInLeaderboard && <MythicalBadge />}
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
                                 side={`top`}
                                 className={`rounded-xl border-none bg-secondary-bg !px-4 !py-2 text-sm text-main`}
                              >
                                 {moment(moment()).diff(
                                    moment(user.createdAt),
                                    `days`
                                 )}{" "}
                                 days ago
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                     </div>
                  </div>
               </div>
               <div className={`mt-4 w-full`}>
                  <Suspense fallback={`Loading ...`}>
                     <UserExperienceInfo />
                  </Suspense>
               </div>
               <UserChallengesRecord
                  username={user.name!}
                  userId={user.id}
                  record={{ wins, losses, draws }}
               />
            </div>
            <Separator
               orientation={`vertical`}
               className={`h-60 w-[4px] rounded-full bg-secondary`}
            />
            <div
               className={`flex h-full flex-1 flex-col items-start justify-between gap-8`}
            >
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-sm text-accent`}>Tests started</span>
                  <h2 className={`text-3xl text-main`}>
                     {user.typingRuns.length}
                  </h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-sm text-accent`}>Tests completed</span>
                  <h2 className={`text-3xl text-main`}>
                     {user.typingRuns.length}
                  </h2>
               </div>
               <div className={`flex flex-col items-start gap-1`}>
                  <span className={`text-sm text-accent`}>Time typing</span>
                  <h2 className={`text-3xl text-main`}>
                     {formatMillisecondsToTime(user.totalTimeTypingMs)}
                  </h2>
               </div>
            </div>
            <Separator
               orientation={`vertical`}
               className={`h-60 w-[4px] rounded-full bg-secondary`}
            />
            <div
               className={`flex h-full flex-1 flex-col items-start justify-between gap-8`}
            >
               <div>
                  <h2 className={`text-accent`}>Bio</h2>
                  <p className={`text-main`}>{user.metadata.bio ?? `Empty`}</p>
               </div>
               <div>
                  <h2 className={`text-accent`}>Keyboard</h2>
                  <p className={`text-main`}>
                     {user.metadata.keyboard ?? `Unspecified`}
                  </p>
               </div>
            </div>
            <Separator
               orientation={`vertical`}
               className={`h-60 w-[4px] rounded-full bg-secondary`}
            />
            <div
               className={`flex h-full flex-1 flex-col items-start justify-between gap-8`}
            >
               <UserGithub github={user.metadata?.github} />
               <UserTwitter twitter={user.metadata?.twitter} />
               <UserWebsite website={user.metadata?.website} />
            </div>
            <div className={`!h-full p-4`}>
               <ReportUserButton user={user} />
            </div>
         </div>
         <div className={`my-8 flex w-full items-center gap-8 rounded-lg`}>
            <div
               className={`mt-8 flex flex-1 items-center gap-8 rounded-lg bg-secondary-bg p-12 px-16 shadow-lg`}
            >
               <TimeRunsStats timeRuns={user.typingRuns} />
            </div>
            <div
               className={`mt-8 flex flex-1 items-center gap-8 rounded-lg bg-secondary-bg p-12 px-16 shadow-lg`}
            >
               <WordRunsStats wordRuns={user.typingRuns} />
            </div>
         </div>
      </section>
   );
};

export default Page;
