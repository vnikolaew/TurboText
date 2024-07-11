import React, { Suspense } from "react";
import { Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, UserAvatar } from "@repo/ui";
import moment from "moment";
import { TypingRun, UsersChallenge, UsersChallengeState } from "@repo/db";
import { User } from "@repo/db";
import { UserExperienceInfo } from "./UserExperienceInfo";
import UserChallengesRecord from "@app/(loading)/profile/[userId]/_components/UserChallengesRecord";
import { formatMillisecondsToTime } from "@lib/utils";
import { sum } from "lodash";
import AccountPageLinks from "./AccountPageLinks";
import { getUserChallengesRecord } from "@app/(loading)/profile/[userId]/_queries";

export interface UserGeneralInfoProps {
   user: User & { challenges_one: UsersChallenge[], typingRuns: TypingRun[], challenges_two: UsersChallenge[] };
}


const UserGeneralInfo = async ({ user }: UserGeneralInfoProps) => {
   let { wins, draws, losses } = await getUserChallengesRecord(user);

   return (
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
                                       `DD MMM YYYY`,
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
                           Current streak: {user.currentStreak} day {user.currentStreak === 1 ? `` : `s`}
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
                           (c) => c.state === UsersChallengeState.Finished,
                        ).length
                     }
                  </h2>
               </div>
            </div>
            <div className={`flex flex-col items-start gap-1`}>
               <span className={`text-sm text-secondary`}>Time typing</span>
               <h2 className={`text-3xl text-main`}>
                  {formatMillisecondsToTime(
                     sum(user.typingRuns.map((r) => r.totalTimeMilliseconds)),
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
   );
};

export default UserGeneralInfo;