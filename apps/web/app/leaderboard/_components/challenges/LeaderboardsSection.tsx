"use client";
import { LeaderboardTable } from "@app/leaderboard/_components/LeaderboardTable";
import CrownButton from "@app/leaderboard/_components/buttons/CrownButton";
import RefreshButton from "@app/leaderboard/_components/buttons/RefreshButton";
import { ChallengeLeaderboardRow } from "@app/leaderboard/_components/challenges/ChallengeLeaderboardTableRow";
import ChallengesLeaderboardTable from "@app/leaderboard/_components/challenges/ChallengesLeaderboardTable";
import { UserChallengeLeaderboard } from "@app/leaderboard/_queries";
import { cn } from "@lib/utils";
import { Separator } from "@repo/ui";
import { Fragment, useRef } from "react";

interface LeaderboardsSectionProps {
   time15Runs: any;
   time60Runs: any;
   showWarning: boolean;
   searchParams: { challenges?: boolean };
   users: any;
}

function mapUser(
   user: UserChallengeLeaderboard,
   index: number
): ChallengeLeaderboardRow {
   return {
      position: index + 1,
      wins: user.wins,
      draws: user.draws,
      losses: user.losses,
      score: user.score,
      user: {
         id: user.id,
         image: user.image!,
         level: user.experience?.level,
         name: user.name!,
         og: user.metadata?.ogAccount ?? false,
      },
   };
}

const LeaderboardsSection = ({
   time15Runs,
   time60Runs,
   showWarning,
   searchParams,
   users,
}: LeaderboardsSectionProps) => {
   const time15DivRef = useRef<HTMLDivElement>(null!);
   const time60DivRef = useRef<HTMLDivElement>(null!);

   return (
      <div className={`mt-8 grid w-full grid-cols-2 gap-4`}>
         <div
            className={cn(
               `flex w-full items-center justify-between`,
               searchParams.challenges && `col-span-2`
            )}
         >
            <span className={`text-2xl !text-main`}>
               {searchParams.challenges ? `Challenges` : `Time 15`}
            </span>
            <div className={`flex items-center gap-2`}>
               <RefreshButton />
               <CrownButton
                  onClick={() => {
                     time15DivRef.current?.scrollTo({
                        top: 0,
                        behavior: `smooth`,
                     });
                  }}
               />
            </div>
         </div>

         {!searchParams.challenges && (
            <div className={`flex w-full items-center justify-between`}>
               <span className={`text-2xl !text-main`}>Time 60</span>
               <div className={`flex items-center gap-2`}>
                  <RefreshButton />
                  <CrownButton
                     onClick={() => {
                        time60DivRef.current?.scrollTo({
                           top: 0,
                           behavior: `smooth`,
                        });
                     }}
                  />
               </div>
            </div>
         )}
         <Separator
            className={cn(
               `mx-auto w-full bg-secondary`,
               searchParams.challenges && `col-span-2`
            )}
         />
         {!searchParams.challenges && (
            <Separator className={`mx-auto w-full bg-secondary`} />
         )}

         {searchParams.challenges ? (
            <div className={`col-span-2`}>
               <ChallengesLeaderboardTable
                  showWarning={showWarning}
                  rows={users.map(mapUser)}
               />
            </div>
         ) : (
            <Fragment>
               <LeaderboardTable
                  ref={time15DivRef}
                  rows={time15Runs}
                  showWarning={showWarning}
               />
               <LeaderboardTable
                  ref={time60DivRef}
                  rows={time60Runs}
                  showWarning={showWarning}
               />
            </Fragment>
         )}
      </div>
   );
};

export default LeaderboardsSection;
