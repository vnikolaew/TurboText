"use client";

import { atom } from "jotai/index";
import { ChallengeDetails } from "@app/(dev)/%5Fgame/[gameId]/_hooks/useTypingGame";
import { User } from "@repo/db";

export const challengeDetailsAtom = atom<ChallengeDetails | null>(null!);
challengeDetailsAtom.debugLabel = `challengeDetailsAtom`;

export const challengeWinnerAtom = atom<string | null>(get => {
   const details = get(challengeDetailsAtom);
   if (!details) return null;

   if (details.userOneRun.metadata.completedWords > details.userTwoRun.metadata.completedWords) return details.userOne.id;
   if (details.userOneRun.metadata.completedWords < details.userTwoRun.metadata.completedWords) return details.userTwo.id;

   return null;
});
challengeWinnerAtom.debugLabel = `challengeWinnerAtom`;

export const challengeWinnerDetailsAtom = atom<User | null>(get => {
   const details = get(challengeDetailsAtom);
   const winner = get(challengeWinnerAtom);
   if (!winner) return null;

   const user = details?.userOne.id === winner ? details?.userOne : details?.userTwo;
   return user;
});
challengeWinnerDetailsAtom.debugLabel = `challengeWinnerDetailsAtom`;
