"use client";
import { acceptChallenge } from "@app/lobby/actions";
import { wordsAtom } from "@atoms/editor";
import { useBoolean } from "@hooks/useBoolean";
import { CHANEL_NAME } from "@providers";
import Ably from "ably";
import { atom, useAtomValue } from "jotai";
import { useAtom, useSetAtom } from "jotai/index";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { matchParamsAtom } from "../_atoms";
import { rejectChallenge } from "../actions";
import { useChannel } from "@hooks/websocket";

export interface CurrentUserMatch {
   matchedUserId: string;
   matchId: string;
   state: ChallengeState;
   userOneAccepted: boolean;
   userTwoAccepted: boolean;
}

export enum ChallengeState {
   Initial = `Initial`,
   Pending = `Pending`,
   Found = `Found`,
   HalfAccepted = `HalfAccepted`,
   Accepted = `Accepted`,
   Rejected = `Rejected`,
   Started = `Started`,
}

export enum EventType {
   Match = `match`,
   Accepted = `accepted`,
   Rejected = `rejected`,
   ChallengeStarted = `challenge-started`,
}

export const EVENT_NAME = `client-global-chat-message`;

export const currentUserMatchAtom = atom<CurrentUserMatch>({
   userOneAccepted: false,
   userTwoAccepted: false,
   matchedUserId: null!,
   state: ChallengeState.Initial,
   matchId: null!,
});
currentUserMatchAtom.debugLabel = `currentUserMatchAtom`;

export function useTypingChallenge() {
   const session = useSession();
   const [messages, setMessages] = useState<Ably.Message[]>([]);
   const router = useRouter();
   const matchParams = useAtomValue(matchParamsAtom);

   const [currentMatch, setCurrentMatch] =
      useAtom<CurrentUserMatch>(currentUserMatchAtom);
   const { clientId } = useChannel(CHANEL_NAME, async (message) => {
      setMessages((prev) => [...prev, message]);
      if (message.data?.type === EventType.Match) {
         const { userOneId, userTwoId } = message.data;
         console.log(
            `Successfully matched users ${userOneId} and ${userTwoId}.`
         );

         setCurrentMatch({
            matchedUserId:
               userOneId === session.data?.user?.id ? userTwoId : userOneId,
            matchId: message.data.matchId,
            state: ChallengeState.Found,
            userOneAccepted: false,
            userTwoAccepted: false,
         });
      }

      if (message.data.type === EventType.Accepted) {
         console.log(`Challenge for match ${message.data.matchId} accepted.`);
         const newMatch = {
            ...(currentMatch ?? {}),
            matchId: message.data.matchId,
            ...(message.data.matchedUserId !== session.data?.user?.id && {
               matchedUserId: message.data.matchedUserId,
            }),
            state: ChallengeState.Accepted,
            ...(message.data.acceptedByUserId === session.data?.user?.id
               ? { userOneAccepted: true }
               : { userTwoAccepted: true }),
         };

         setCurrentMatch(newMatch);
      }
      if (message.data.type === EventType.Rejected) {
         console.log(`Challenge for match ${message.data.matchId} rejected.`);

         setCurrentMatch({
            ...(currentMatch ?? {}),
            matchId: message.data.matchId,
            ...(message.data.matchedUserId !== session.data?.user?.id && {
               matchedUserId: message.data.matchedUserId,
            }),
            state: ChallengeState.Rejected,
            userOneAccepted: false,
            userTwoAccepted: false,
         });
      }
      if (message.data.type === EventType.ChallengeStarted) {
         console.log(`Challenge for match ${message.data.matchId} started.`);

         setCurrentMatch({
            ...(currentMatch ?? {}),
            matchId: message.data.matchId,
            ...(message.data.matchedUserId !== session.data?.user?.id && {
               matchedUserId: message.data.matchedUserId,
            }),
            state: ChallengeState.Started,
            userOneAccepted: true,
            userTwoAccepted: true,
         });

         const gameId = message.data.gameId as string;
         router.push(`/game/${gameId}`);
      }
   });
   const setWords = useSetAtom(wordsAtom);

   const { execute: accept, isExecuting: accepting } = useAction(
      acceptChallenge,
      {
         onSuccess: (res) => {
            if (res.data?.success) {
               console.log(res.data);
               if (res.data.challenge?.metadata?.words?.length) {
                  console.log(`Updating words to: `, {
                     words: res.data.challenge.metadata.words,
                  });
                  setWords(res.data.challenge.metadata.words);
               }
            }
         },
      }
   );
   // eslint-disable-next-line no-undef
   const { execute: decline, isExecuting: declining } = useAction(
      rejectChallenge,
      {
         onSuccess: (res) => {
            if (res.data?.success) {
               console.log(res.data);
            }
         },
      }
   );

   const [matchLoading, setMatchLoading] = useBoolean();

   const match = useCallback(async () => {
      if (session.status === `authenticated`) {
         setMatchLoading(true);
         setCurrentMatch((m) => ({ ...m, state: ChallengeState.Pending }));

         const res = await fetch(`/api/challenge`, {
            method: `POST`,
            credentials: `include`,
            body: JSON.stringify(matchParams),
            headers: {
               "Content-Type": `application/json`,
               "X-Client-Id": clientId,
            },
         }).then((res) => res.json());
         console.log({ res });
         setMatchLoading(false);
      }
   }, [session.status, matchParams]);

   return {
      currentMatch,
      accept,
      decline,
      messages,
      match,
      matchLoading,
   };
}
