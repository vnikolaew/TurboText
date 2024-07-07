"use client";
import { useTypingGame } from "@app/%5Fgame/[gameId]/_hooks/useTypingGame";
import { stopChallenge } from "@app/%5Flobby/actions";
import LoadingButton from "@components/common/LoadingButton";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { User } from "@repo/db";
import { UserAvatar } from "@repo/ui";
import { useAtomValue } from "jotai";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { challengeDetailsAtom, challengeWinnerDetailsAtom } from "../_atoms";
import GameTypingEditor from "./GameTypingEditor";

export interface UsersTypingChallengeSectionProps {
   userOne: User;
   userTwo: User;
   gameId: string;
}

const UsersChallengeState = {
   Pending: "Pending",
   CountingDown: `CountingDown`,
   Playing: "Playing",
   Finished: "Finished",
   Stopped: "Stopped",
};

const UsersTypingChallengeSection = ({
   userTwo,
   userOne,
   gameId,
}: UsersTypingChallengeSectionProps) => {
   const session = useSession();

   const {
      countingDown,
      count,
      gameState,
      setGameState,
      isExecuting,
      challengeStoppedByUserId,
   } = useTypingGame(gameId);
   const challengeDetails = useAtomValue(challengeDetailsAtom);
   const challengeWinnerDetails = useAtomValue(challengeWinnerDetailsAtom);
   const { execute: stop, isExecuting: stopping } = useAction(stopChallenge, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log({ res: res.data });
            setGameState(UsersChallengeState.Stopped);
         }
      },
   });

   return (
      <div className={`flex w-full flex-col items-center gap-2`}>
         <div>
            {isExecuting && (
               <span className={`inline-flex items-center gap-2`}>
                  <LoadingSpinner text={`Waiting for opponent ...`} />
               </span>
            )}
         </div>
         {countingDown && <div>{count}</div>}
         {challengeDetails && (
            <div className={`flex flex-col items-center gap-2`}>
               <p>
                  User 1 completed words:{" "}
                  {challengeDetails.userOneRun.metadata.completedWords}
               </p>
               <p>
                  User 2 completed words:{" "}
                  {challengeDetails.userTwoRun.metadata.completedWords}
               </p>
            </div>
         )}
         {challengeWinnerDetails && (
            <div className={`flex flex-col items-center gap-2`}>
               <span>Winner:</span>
               <div className={`flex items-center gap-2`}>
                  <UserAvatar imageSrc={challengeWinnerDetails.image} />
                  <span>{challengeWinnerDetails.name}</span>
               </div>
            </div>
         )}
         {challengeStoppedByUserId?.length && (
            <span>
               Challenge stopped by{" "}
               <Link
                  className={`text-accent`}
                  href={`/profile/${challengeStoppedByUserId}`}
               >
                  {[userOne, userTwo].find(
                     (u) => u.id === challengeStoppedByUserId
                  )?.name ?? `[${challengeStoppedByUserId}]`}
               </Link>
               .
            </span>
         )}
         <span className={`text-2xl`}>Current state: {gameState}</span>
         {gameState !== UsersChallengeState.Stopped && (
            <LoadingButton
               className={`!w-fit !px-12`}
               loadingText={`Stopping ...`}
               loading={stopping}
               variant={`destructive`}
               onClick={(_) => {
                  if (gameState === UsersChallengeState.Playing) {
                     stop({
                        userId: userOne?.id!,
                        gameId,
                        matchedUserId: userTwo.id,
                     });
                  }
               }}
            >
               Stop challenge
            </LoadingButton>
         )}
         <div className={`w-full`}>
            {(gameState === UsersChallengeState.Playing ||
               gameState === UsersChallengeState.Finished) && (
               <GameTypingEditor
                  gameId={gameId}
                  user={[userOne, userTwo].find(
                     (u) => u.id === session.data?.user?.id
                  )}
               />
            )}
         </div>
      </div>
   );
};

export default UsersTypingChallengeSection;