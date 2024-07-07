"use client";
import LoadingButton from "@components/common/LoadingButton";
import { Button, Separator } from "@repo/ui";
import { useAtom } from "jotai/index";
import { UserRoundSearch } from "lucide-react";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import ChallengeMatchModal from "./_components/ChallengeMatchModal";
import PageHeader from "./_components/PageHeader";
import WithInitialState from "./_components/WithInitialState";
import {
   UserGameDifficultySelect,
   UserGameLanguageSelect,
   UserGameTimeSelect,
} from "./_components/selects";
import { UserAcceptState, userAcceptStateAtom } from "./_atoms";
import { useTypingChallenge } from "./hooks/useTypingChallenge";

export interface PageProps {}

const Page = ({}: PageProps) => {
   const session = useSession();
   const [userAcceptState, setUserAcceptState] = useAtom(userAcceptStateAtom);
   const { currentMatch, accept, decline, match, matchLoading } =
      useTypingChallenge();

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

   const showMatchModal = useMemo(
      () =>
         currentMatch.state === ChallengeState.Found ||
         currentMatch.state === ChallengeState.Accepted ||
         currentMatch.state === ChallengeState.HalfAccepted,
      [currentMatch?.state]
   );

   // @ts-ignore
   return (
      <section
         className={`mx-auto my-24 flex w-3/4 flex-col items-center gap-4`}
      >
         <WithInitialState />
         <PageHeader />
         <Separator className={`w-full`} />

         <div className={`mt-8 flex flex-col items-start gap-8`}>
            <UserGameLanguageSelect />
            <UserGameTimeSelect />
            <UserGameDifficultySelect />
            <div className={`mt-4 self-end`}>
               <LoadingButton
                  className={`items-center gap-2`}
                  loadingText={`Searching for opponents...`}
                  onClick={(_) => match()}
                  loading={matchLoading}
               >
                  <UserRoundSearch size={14} />
                  Match with an opponent
               </LoadingButton>
            </div>
         </div>
         {(currentMatch.state === ChallengeState.Found ||
            currentMatch.state === ChallengeState.Accepted ||
            currentMatch.state === ChallengeState.HalfAccepted) && (
            <div className={`flex items-center gap-2`}>
               <span>Challenge found: </span>
               {!currentMatch.userOneAccepted && (
                  <Button onClick={handleAcceptChallenge} variant={`default`}>
                     Accept
                  </Button>
               )}
               {!(currentMatch.userOneAccepted === true) && (
                  <Button
                     onClick={handleRejectChallenge}
                     variant={`destructive`}
                  >
                     Reject
                  </Button>
               )}
            </div>
         )}
         {showMatchModal && (
            <ChallengeMatchModal
               onReject={handleRejectChallenge}
               onAccept={handleAcceptChallenge}
               open={true}
            />
         )}
      </section>
   );
};

export default Page;
