"use client";
import ExportChallengesButton from "@app/(loading)/account/_components/challenges/ExportChallengesButton";
import { User, UsersChallenge } from "@repo/db";
import { useAtomValue } from "jotai/index";
import { Fragment, useMemo } from "react";
import { sortRuns } from "../runs/LatestRunsTable";
import LatestUserChallengesTable from "./LatestUserChallengesTable";
import { ChallengeOutcome } from "./UserChallengeRow";
import { challengesTableSortAtom, mapChallenge } from "../_atoms";
import moment from "moment/moment";

export interface LatestUserChallengesProps {
   user: User & {
      challenges_one: UsersChallenge[];
      challenges_two: UsersChallenge[];
   };
}

export function getChallengeInfo(challenge: UsersChallenge, userId: string) {
   const opponent =
      challenge.userOneId === userId ? challenge.userTwo : challenge.userOne;

   const isDraw =
      challenge.userOneRun?.metadata.completedWords ===
      challenge.userTwoRun?.metadata.completedWords;

   const outcome = isDraw
      ? ChallengeOutcome.DRAW
      : challenge.userOneId === userId
         ? challenge.userOneRun?.metadata.completedWords >
         challenge.userTwoRun?.metadata.completedWords
            ? ChallengeOutcome.WIN
            : ChallengeOutcome.LOSE
         : challenge.userTwoRun?.metadata.completedWords >
         challenge.userOneRun?.metadata.completedWords
            ? ChallengeOutcome.WIN
            : ChallengeOutcome.LOSE;

   const { myCompletedWords, opponentCompletedWords } = {
      myCompletedWords:
         challenge.userOneId === userId
            ? challenge.userOneRun?.metadata.completedWords
            : challenge.userTwoRun?.metadata.completedWords,
      opponentCompletedWords:
         challenge.userOneId === userId
            ? challenge.userTwoRun?.metadata.completedWords
            : challenge.userOneRun?.metadata.completedWords,
   };

   return { opponent, outcome, myCompletedWords, opponentCompletedWords };
}

const LatestUserChallenges = ({ user }: LatestUserChallengesProps) => {
   const tableSort = useAtomValue(challengesTableSortAtom);

   const challenges = useMemo(() => [...user.challenges_one, ...user.challenges_two]
      .filter((c) => !!c?.id?.length)
      .map((c) => ({
         ...mapChallenge(c, user.id),
         dateFormatted: (
            <Fragment>
               <span className={`text-main`}>
      {moment(c.createdAt).format(`DD MMM YYYY`)}
   </span>
               <br />
               <span className={`text-secondary`}>
   {moment(c.createdAt).format(`HH:mm`)}
   </span>
            </Fragment>
         ),
      }))
      .sort((a, b) => b.createdAt - a.createdAt)
      .sort((a, b) => sortRuns(a, b, tableSort)), [user, tableSort]);

   return (
      <section id={`challenges`} className={`flex w-full flex-col gap-8 px-12`}>
         <div className={`flex justify-end`}>
            <ExportChallengesButton challenges={challenges} />
         </div>
         <LatestUserChallengesTable challenges={challenges} user={user} />
      </section>
   );
};

export default LatestUserChallenges;
