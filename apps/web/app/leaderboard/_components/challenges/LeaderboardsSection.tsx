"use client";
import React, { Fragment, useRef } from "react";
import ChallengesLeaderboardTable from "@app/leaderboard/_components/challenges/ChallengesLeaderboardTable";
import { cn } from "@lib/utils";
import RefreshButton from "@app/leaderboard/_components/buttons/RefreshButton";
import { LeaderboardTable } from "@app/leaderboard/_components/LeaderboardTable";
import { Separator } from "@repo/ui";
import { UserChallengeLeaderboard } from "@app/leaderboard/_queries";
import { ChallengeLeaderboardRow } from "@app/leaderboard/_components/challenges/ChallengeLeaderboardTableRow";
import CrownButton from "@app/leaderboard/_components/buttons/CrownButton";


interface LeaderboardsSectionProps {
   time15Runs: any,
   time60Runs: any,
   showWarning: boolean
   searchParams: { challenges?: boolean }
   users: any;
}


function mapUser(user: UserChallengeLeaderboard, index: number): ChallengeLeaderboardRow {
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
      <div className={`mt-8 grid grid-cols-2 w-full gap-4`}>
         <div
            className={cn(`w-full flex items-center justify-between`, searchParams.challenges && `col-span-2`)}>
               <span className={`text-2xl !text-main`}>
                  {searchParams.challenges ? `Challenges` : `Time 15`}
               </span>
            <div className={`flex items-center gap-2`}>
               <RefreshButton />
               <CrownButton
                  onClick={() => {
                     time15DivRef.current?.scrollTo({ top: 0, behavior: `smooth` });
                  }}
               />
            </div>
         </div>

         {!searchParams.challenges && (
            <div className={`w-full flex items-center justify-between`}>
               <span className={`text-2xl !text-main`}>Time 60</span>
               <div className={`flex items-center gap-2`}>
                  <RefreshButton />
                  <CrownButton
                     onClick={() => {
                        time60DivRef.current?.scrollTo({ top: 0, behavior: `smooth` });
                     }}
                  />
               </div>
            </div>
         )}
         <Separator className={cn(`w-full bg-secondary mx-auto`, searchParams.challenges && `col-span-2`)} />
         {!searchParams.challenges && (
            <Separator className={`w-full bg-secondary mx-auto`} />
         )}

         {searchParams.challenges ? (
            <div className={`col-span-2`}>
               <ChallengesLeaderboardTable showWarning={showWarning} rows={users.map(mapUser)} />
            </div>
         ) : (
            <Fragment>
               <LeaderboardTable
                  ref={time15DivRef}
                  rows={time15Runs}
                  showWarning={showWarning} />
               <LeaderboardTable
                  ref={time60DivRef}
                  rows={time60Runs}
                  showWarning={showWarning} />
            </Fragment>
         )}
      </div>
   );
};

export default LeaderboardsSection;