"use client";

import { useEffect, useState } from "react";
import { useCountdown } from "@app/(dev)/%5Fgame/[gameId]/_hooks/useCountdown";
import { useChannel } from "ably/react";
import { CHANEL_NAME } from "@providers/AblyProvider";
import { useAction } from "next-safe-action/hooks";
import { ready } from "@app/(dev)/%5Fgame/[gameId]/actions";
import { useSession } from "next-auth/react";
import { usePushGameUpdates } from "@app/(dev)/%5Fgame/[gameId]/_hooks/usePushGameUpdates";
import { useAtom, useAtomValue } from "jotai";
import { typingRunStateAtom } from "@atoms/editor";
import { TypingRunState } from "@atoms/consts";
import { TypingRun, User, UsersChallenge } from "@repo/db";
import { challengeDetailsAtom } from "../_atoms";

export enum EventType {
   GameStarted = `game-started`,
   GameUpdate = `game-update`,
   ChallengeStopped = `challenge-stopped`,
   ChallengeFinished = `challenge-finished`,
}

export const UsersChallengeState = {
   Pending: "Pending",
   CountingDown: `CountingDown`,
   Playing: "Playing",
   Finished: "Finished",
   Stopped: "Stopped",
};

export type ChallengeDetails = UsersChallenge & {
   userOneRun: TypingRun, userTwoRun: TypingRun, userOne: User, userTwo: User
}


export function useTypingGame(gameId: string) {
   const [, setChallengeDetails] = useAtom(challengeDetailsAtom)
   const session = useSession();
   const typingState = useAtomValue(typingRunStateAtom);

   const [gameState, setGameState] = useState<string>(UsersChallengeState.Pending);
   const [challengeStoppedByUserId, setChallengeStoppedByUserId] = useState<string>(null!);
   const { start: startPush, end: endPush } = usePushGameUpdates(gameId, 2000);

   const { count, start, countingDown } = useCountdown(3, () => {
      setGameState(UsersChallengeState.Playing);
      startPush();
   });

   useEffect(() => {
      if (typingState === TypingRunState.FINISHED) endPush();
   }, [typingState]);

   useEffect(() => {
      if (gameState === `CountingDown`) start();
   }, [gameState]);

   const { channel } = useChannel(CHANEL_NAME, async (message) => {
      if (message.data.type === EventType.ChallengeStopped) {
         setGameState(UsersChallengeState.Stopped);
         setChallengeStoppedByUserId(message.data.stoppedByUserId);
      }

      if (message.data.type === EventType.ChallengeFinished) {
         setGameState(UsersChallengeState.Finished);
         const res = await fetch(`/api/challenge/${gameId}`)
         if(res.ok) {
            const data = await res.json();
            setChallengeDetails(data.challenge);
         }
      }

      if (message.data.type === EventType.GameStarted) {
         console.log(`Game ${gameId} started.`);
         setGameState(UsersChallengeState.CountingDown);
      }
   });

   const { execute, isExecuting } = useAction(ready, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res.data);
         }
      },
   });

   useEffect(() => {
      if (session.status === `authenticated` && channel.state === `attached`) {
         execute({ gameId });
      }
   }, [session.status, channel.state]);

   return {
      gameState,
      challengeStoppedByUserId,
      setGameState,
      count,
      isExecuting,
      countingDown,
   };
}
