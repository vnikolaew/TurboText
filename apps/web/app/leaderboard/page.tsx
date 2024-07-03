import { Button, Separator } from "@repo/ui";
import React, { Fragment } from "react";
import { Crown, User } from "lucide-react";
import { LeaderboardTable } from "@app/leaderboard/_components/LeaderboardTable";
import LanguageFilter from "@app/leaderboard/_components/LanguageFilter";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import {
   getChallengesLeaderboard,
   getLeaderboard,
   showUserWarning,
   UserChallengeLeaderboard,
} from "@app/leaderboard/_queries";
import TimeframeButtons from "@app/leaderboard/_components/TimeframeButtons";
import LeaderboardTypeSwitch from "@app/leaderboard/_components/LeaderboardTypeSwitch";
import { ChallengeLeaderboardRow } from "@app/leaderboard/_components/challenges/ChallengeLeaderboardTableRow";
import ChallengesLeaderboardTable from "@app/leaderboard/_components/challenges/ChallengesLeaderboardTable";

export interface PageProps {
   searchParams: { daily?: string, language?: string, challenges?: string };
}

export const metadata: Metadata = {
   title: `Leaderboard | ${APP_NAME}`,
   description: APP_DESCRIPTION,
};

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
      }
   }
}

const Page = async ({ searchParams }: PageProps) => {
   const { time60Runs, time15Runs, daily, language } = await getLeaderboard(searchParams);
   const users = await getChallengesLeaderboard(searchParams);

   console.log({ searchParams });
   const showWarning = await showUserWarning()

   return (
      <section className={`w-3/4 mx-auto mt-24 flex flex-col items-start gap-4`}>
         <div className={`flex items-center justify-between w-full`}>
            <div className={`flex items-center gap-8`}>
               <LeaderboardTypeSwitch/>
               <h2 className={`text-4xl !text-main`}>
                  All-Time {language} {searchParams.challenges === `true` ? `Challenges` : ``} Leaderboards
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
         <div className={`mt-8 grid grid-cols-2 w-full gap-4`}>
            <div className={`w-full flex items-center justify-between`}>
               <span className={`text-2xl !text-main`}>
                  {searchParams.challenges === `true` ? `Challenges` : `Time 15`}
               </span>
               <div className={`flex items-center gap-2`}>
                  <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                     <Crown size={18} className={`text-white`} />
                  </Button>
                  <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                     <User className={`!text-white`} size={18} />
                  </Button>
               </div>
            </div>

            {searchParams.challenges !== `true` ? (
               <div className={`w-full flex items-center justify-between`}>
                  <span className={`text-2xl !text-main`}>Time 60</span>
                  <div className={`flex items-center gap-2`}>
                     <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                        <Crown size={18} className={`text-white`} />
                     </Button>
                     <Button className={`!bg-black !rounded-xl`} size={`icon`}>
                        <User className={`!text-white`} size={18} />
                     </Button>
                  </div>
               </div>
            ) : (<div />)}
            <Separator className={`w-full bg-secondary mx-auto`} />
            <Separator className={`w-full bg-secondary mx-auto`} />

            {searchParams.challenges === `true` ? (
               <ChallengesLeaderboardTable showWarning={showWarning} rows={users.map(mapUser)} />
            ) : (
               <Fragment>
                  <LeaderboardTable
                     rows={time15Runs}
                     showWarning={showWarning} />
                  <LeaderboardTable
                     rows={time60Runs}
                     showWarning={showWarning} />
               </Fragment>
            )}
         </div>
      </section>
   );
};

export default Page;