"use client";
import { RunNormalized } from "@app/(loading)/account/_components/runs/LatestRunsTable";
import { atom } from "jotai/index";
import {
   getChallengeInfo,
} from "@app/(loading)/account/_components/challenges/LatestUserChallenges";
import { UsersChallenge } from "@repo/db";
import { ChallengeOutcome } from "@app/(loading)/account/_components/challenges/UserChallengeRow";

export const tableSortAtom = atom<{ key: keyof RunNormalized; desc: boolean }>({
   key: `createdAt`,
   desc: true,
});
tableSortAtom.debugLabel = `tableSortAtom`;

export function mapChallenge(challenge: UsersChallenge, userId: string) {
   const { opponentCompletedWords, myCompletedWords, outcome } =
      getChallengeInfo(challenge, userId);

   return {
      ...challenge,
      outcome:
         outcome === ChallengeOutcome.WIN
            ? `VICTORY`
            : outcome === ChallengeOutcome.LOSE
               ? `DEFEAT`
               : `DRAW`,
      myCompletedWords,
      opponentCompletedWords,
      completedWordsText: `${myCompletedWords ?? `?`} vs ${opponentCompletedWords ?? `?`}`,
      language: challenge.metadata?.language ?? `N/A`,
      difficulty: challenge.metadata?.difficulty ?? `N/A`,
      time: challenge.metadata?.time ?? `N/A`,
   } as const;
}

export type ChallengeNormalized = ReturnType<typeof mapChallenge>;

export const challengesTableSortAtom = atom<{
   key: keyof ChallengeNormalized;
   desc: boolean;
}>({
   key: `createdAt`,
   desc: true,
});
challengesTableSortAtom.debugLabel = `challengesTableSortAtom`;
