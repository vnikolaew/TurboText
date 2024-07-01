"use client";
import React from "react";
import { Button, Separator } from "@repo/ui";
import { useSession } from "next-auth/react";
import { ChallengeState, useTypingChallenge } from "@app/(dev)/%5Flobby/hooks/useTypingChallenge";
import { Swords } from "lucide-react";
import UserGameLanguageSelect from "@app/(dev)/%5Flobby/_components/UserGameLanguageSelect";
import UserGameTimeSelect from "@app/(dev)/%5Flobby/_components/UserGameTimeSelect";
import UserGameDifficultySelect from "@app/(dev)/%5Flobby/_components/UserGameDifficultySelect";
import LoadingButton from "@components/common/LoadingButton";
import { useBoolean } from "@hooks/useBoolean";

export interface PageProps {
}


const Page = ({}: PageProps) => {
   const session = useSession();
   const [accepted, setAccepted] = useBoolean();
   const [declined, setDeclined] = useBoolean();
   const { currentMatch, accept, decline, match, matchLoading } = useTypingChallenge();

   async function handleAcceptChallenge() {
      if (accepted) return;
      accept({
         matchId: currentMatch?.matchId,
         matchedUserId: currentMatch?.matchedUserId!,
         userId: session.data?.user?.id!,
      });
      setAccepted(true);
      setDeclined(false)
   }

   async function handleRejectChallenge() {
      if (declined) return;
      decline({
         matchId: currentMatch?.matchId,
         matchedUserId: currentMatch?.matchedUserId!,
         userId: session.data?.user?.id!,
      });
      setDeclined(true);
      setAccepted(false)
   }

   return (
      <section className={`w-3/4 mx-auto my-24 flex flex-col items-center gap-4`}>
         {/*{currentMatch.state === ChallengeState.Pending &&*/}
         {/*   <span className={`animate-pulse`}>Searching for an opponent...</span>}*/}
         <div className={`w-full items-center flex gap-4`}>
            <Swords className={`text-accent`} size={24} />
            <h2 className={`text-xl`}>Find an opponent to test your skills against</h2>
         </div>
         <Separator className={`w-full`} />

         {/* User selects for: language, time, wpm (relative) */}
         <div className={`mt-8 flex flex-col items-start gap-8`}>
            <UserGameLanguageSelect />
            <UserGameTimeSelect />
            <UserGameDifficultySelect />
            <div className={`mt-4 self-end`}>
               <LoadingButton loadingText={`Finding opponent...`} onClick={_ => match()} loading={matchLoading}>
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
         <span className={`text-green-500`}>Accepted: {String(accepted)}</span>
         <span className={`text-red-500`}>Declined: {String(declined)}</span>
         {!!currentMatch?.matchId && (
            <pre className={`text-xs`}>{JSON.stringify(currentMatch, null, 2)}</pre>
         )}
      </section>
   );
};

export default Page;