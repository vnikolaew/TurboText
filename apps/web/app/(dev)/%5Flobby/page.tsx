"use client";
import React, { useMemo } from "react";
import { Button, Separator } from "@repo/ui";
import { useSession } from "next-auth/react";
import { ChallengeState, useTypingChallenge } from "@app/(dev)/%5Flobby/hooks/useTypingChallenge";
import LoadingButton from "@components/common/LoadingButton";
import PageHeader from "./_components/PageHeader";
import {
   UserGameDifficultySelect,
   UserGameLanguageSelect,
   UserGameTimeSelect,
} from "@app/(dev)/%5Flobby/_components/selects";
import ChallengeMatchModal from "@app/(dev)/%5Flobby/_components/ChallengeMatchModal";
import { useAtom } from "jotai/index";
import { UserAcceptState, userAcceptStateAtom } from "@app/(dev)/%5Flobby/_atoms";

export interface PageProps {
}


const Page = ({}: PageProps) => {
   const session = useSession();
   const [userAcceptState, setUserAcceptState] = useAtom(userAcceptStateAtom);
   const { currentMatch, accept, decline, match, matchLoading } = useTypingChallenge();

   async function handleAcceptChallenge() {
      if (userAcceptState === UserAcceptState.Accepted) return;
      accept({
         matchId: currentMatch?.matchId,
         matchedUserId: currentMatch?.matchedUserId!,
         userId: session.data?.user?.id!,
      });
      setUserAcceptState(UserAcceptState.Accepted);
   }

   async function handleRejectChallenge() {
      if (userAcceptState === UserAcceptState.Declined) return;
      decline({
         matchId: currentMatch?.matchId,
         matchedUserId: currentMatch?.matchedUserId!,
         userId: session.data?.user?.id!,
      });
      setUserAcceptState(UserAcceptState.Declined);
   }

   const showMatchModal = useMemo(() =>
      currentMatch.state === ChallengeState.Found
      || currentMatch.state === ChallengeState.Accepted
      || currentMatch.state === ChallengeState.HalfAccepted, [currentMatch?.state]);

   return (
      <section className={`w-3/4 mx-auto my-24 flex flex-col items-center gap-4`}>
         <PageHeader />
         <Separator className={`w-full`} />

         <div className={`mt-8 flex flex-col items-start gap-8`}>
            <UserGameLanguageSelect />
            <UserGameTimeSelect />
            <UserGameDifficultySelect />
            <div className={`mt-4 self-end`}>
               <LoadingButton loadingText={`Searching for opponents...`} onClick={_ => match()} loading={matchLoading}>
                  Find an opponent
               </LoadingButton>
            </div>
         </div>
         {(currentMatch.state === ChallengeState.Found
            || currentMatch.state === ChallengeState.Accepted
            || currentMatch.state === ChallengeState.HalfAccepted) && (
            <div className={`flex items-center gap-2`}>
               <span>Challenge found: </span>
               {!currentMatch.userOneAccepted && (
                  <Button onClick={handleAcceptChallenge} variant={`default`}>Accept</Button>
               )}
               {!(currentMatch.userOneAccepted === true) && (
                  <Button onClick={handleRejectChallenge} variant={`destructive`}>Reject</Button>
               )}
            </div>
         )}
         {showMatchModal && (
            <ChallengeMatchModal
               onReject={handleRejectChallenge}
               onAccept={handleAcceptChallenge}
               open={true} />
         )}
         {!!currentMatch?.matchId && (
            <pre className={`text-xs`}>{JSON.stringify(currentMatch, null, 2)}</pre>
         )}
      </section>
   );
};

export default Page;