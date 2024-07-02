"use client";
import React, { Fragment } from "react";
import { User, UsersChallenge } from "@repo/db";
import { ChallengeOutcome } from "@app/account/_components/challenges/UserChallengeRow";
import ExportChallengesButton from "@app/account/_components/challenges/ExportChallengesButton";
import { atom, useAtomValue } from "jotai/index";
import { sortRuns } from "../runs/LatestRunsTable";
import moment from "moment/moment";
import LatestUserChallengesTable from "@app/account/_components/challenges/LatestUserChallengesTable";

export interface LatestUserChallengesProps {
   user: User & { challenges_one: UsersChallenge[], challenges_two: UsersChallenge[] };
}

export const challengesTableSortAtom = atom<{ key: keyof ChallengeNormalized; desc: boolean }>({
   key: `createdAt`,
   desc: true,
});
challengesTableSortAtom.debugLabel = `challengesTableSortAtom`;

export function getChallengeInfo(challenge: UsersChallenge, userId: string) {
   const opponent = challenge.userOneId === userId ? challenge.userTwo : challenge.userOne;

   const isDraw = challenge.userOneRun?.metadata.completedWords === challenge.userTwoRun?.metadata.completedWords;

   const outcome = isDraw ? ChallengeOutcome.DRAW : challenge.userOneId === userId
      ? (challenge.userOneRun?.metadata.completedWords > challenge.userTwoRun?.metadata.completedWords ? ChallengeOutcome.WIN : ChallengeOutcome.LOSE)
      : (challenge.userTwoRun?.metadata.completedWords > challenge.userOneRun?.metadata.completedWords ? ChallengeOutcome.WIN : ChallengeOutcome.LOSE);

   const { myCompletedWords, opponentCompletedWords } = {
      myCompletedWords: challenge.userOneId === userId ? challenge.userOneRun?.metadata.completedWords : challenge.userTwoRun?.metadata.completedWords,
      opponentCompletedWords: challenge.userOneId === userId ? challenge.userTwoRun?.metadata.completedWords : challenge.userOneRun?.metadata.completedWords,
   };

   return { opponent, outcome, myCompletedWords, opponentCompletedWords };
}


function mapChallenge(challenge: UsersChallenge, userId: string) {
   const { opponentCompletedWords, myCompletedWords, outcome } = getChallengeInfo(challenge, userId);

   return {
      ...challenge,
      outcome: outcome === ChallengeOutcome.WIN ? `VICTORY` : outcome === ChallengeOutcome.LOSE ? `DEFEAT` : `DRAW`,
      myCompletedWords,
      opponentCompletedWords,
      completedWordsText: `${myCompletedWords ?? `?`} vs ${opponentCompletedWords ?? `?`}`,
      language: challenge.metadata?.language ?? `N/A`,
      difficulty: challenge.metadata?.difficulty ?? `N/A`,
      time: challenge.metadata?.time ?? `N/A`,
      dateFormatted: <Fragment>
            <span className={`text-main`}>
               {moment(challenge.createdAt).format(`DD MMM YYYY`)}
            </span>
         <br />
         <span className={`text-secondary`}>
               {moment(challenge.createdAt).format(`HH:mm`)}
            </span>
      </Fragment>,
   } as const;
}

export type ChallengeNormalized = ReturnType<typeof mapChallenge>;

const LatestUserChallenges = ({ user }: LatestUserChallengesProps) => {
   const tableSort = useAtomValue(challengesTableSortAtom);

   const challenges = [...user.challenges_one, ...user.challenges_two]
      .filter(c => !!c?.id?.length)
      .map(c => mapChallenge(c, user.id))
      .sort((a, b) => b.createdAt - a.createdAt)
      .sort((a, b) => sortRuns(a, b, tableSort));

   return (
      <section id={`challenges`} className={`flex flex-col w-full gap-8`}>
         <div className={`flex justify-end`}>
            <ExportChallengesButton challenges={challenges} />
         </div>
         {/*<ScrollArea className={`w-full min-h-[300px]`}>*/}
            <LatestUserChallengesTable
               challenges={challenges}
               user={user} />
         {/*</ScrollArea>*/}
      </section>
   );
};

export default LatestUserChallenges;