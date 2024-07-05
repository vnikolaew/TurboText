import { Separator } from "@repo/ui";
import React, {} from "react";
import LanguageFilter from "@app/leaderboard/_components/LanguageFilter";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import {
   getChallengesLeaderboard,
   getLeaderboard,
   showUserWarning,
} from "@app/leaderboard/_queries";
import TimeframeButtons from "@app/leaderboard/_components/TimeframeButtons";
import LeaderboardTypeSwitch from "@app/leaderboard/_components/LeaderboardTypeSwitch";
import WithInitialState from "./_components/WithInitialState";
import LeaderboardsSection from "@app/leaderboard/_components/challenges/LeaderboardsSection";

export interface PageProps {
   searchParams: { daily?: string, language?: string, challenges?: string };
}

export const metadata: Metadata = {
   title: `Leaderboard | ${APP_NAME}`,
   description: APP_DESCRIPTION,
};


const Page = async ({ searchParams }: PageProps) => {
   const { time60Runs, time15Runs, daily, language } = await getLeaderboard(searchParams);
   const users = await getChallengesLeaderboard(searchParams);

   const showWarning = await showUserWarning();
   // console.log({ da});

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col items-start gap-4`}>
         <WithInitialState />
         <div className={`flex items-center justify-between w-full`}>
            <div className={`flex items-center gap-8`}>
               <LeaderboardTypeSwitch />
               <h2 className={`text-4xl !text-main`}>
                  {daily ? `Daily` : `All-Time`} {language} {searchParams.challenges === `true` ? `Challenges` : ``} Leaderboards
               </h2>
            </div>
            <TimeframeButtons daily={daily} />
         </div>
         <Separator className={`w-2/3 bg-secondary h-[1px] rounded-md shadow-md`} />
         <div className={`flex items-center justify-between w-full`}>
            <div />
            <div>
               <LanguageFilter language={language} />
            </div>
         </div>
         <LeaderboardsSection
            searchParams={{ challenges: searchParams?.challenges === `true` }}
            users={users}
            time15Runs={time15Runs} time60Runs={time60Runs} showWarning={showWarning} />
      </section>
   );
};

export default Page;