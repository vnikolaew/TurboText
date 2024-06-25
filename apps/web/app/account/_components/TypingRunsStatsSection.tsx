import { TypingRun } from "@repo/db";
import { sum } from "lodash";
import React, { ReactNode } from "react";

export function formatSeconds(seconds: number) {
   const minutes = Math.floor(seconds / 60);
   const remainingSeconds = seconds % 60;
   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toFixed(0).padStart(2, "0")}`;
}

export interface TypingRunsStatsSectionProps {
   runs: TypingRun[];
}

const TypingRunsStatsSection = ({ runs }: TypingRunsStatsSectionProps) => {
   const wordsTyped = sum(runs.map(r => r.metadata?.completedWords ?? r.wordCount));
   const timeTyping = sum(runs.map(r => r.totalTimeMilliseconds!))

   const highestWpm = runs.sort((a, b) => b.wpm - a.wpm)?.at(0)?.wpm?.toFixed(0);
   const averageWpm = sum(runs.map(r => r.wpm as number)) / runs.length;
   const averageWpmLast10 = sum(runs.slice(0, 10).map(r => r.wpm as number)) / runs.length;

   const highestAcc = runs.sort((a, b) => b.accuracy - a.accuracy)?.at(0)?.accuracy?.toFixed(0);
   const averageAcc = sum(runs.map(r => r.accuracy as number)) / runs.length;
   const averageAccLast10 = sum(runs.slice(0, 10).map(r => r.accuracy as number)) / runs.length;

   const highestConsistency = runs.sort((a, b) => b.consistency - a.consistency )?.at(0)?.consistency?.toFixed(0);
   const averageConsistency = sum(runs.map(r => r.consistency as number)) / runs.length;
   const averageConsistencyLast10 = sum(runs.slice(0, 10).map(r => r.consistency as number)) / runs.length;

   return (
      <div className={`flex flex-col items-center gap-4 w-full`}>
         <div className={`flex items-center gap-4 justify-center w-full`}>
            <span className={`text-base text-secondary`}>
               Estimated words typed
            </span>
            <span className={`text-6xl text-main`}>
               {wordsTyped}
            </span>
         </div>
         <div className={`grid grid-cols-3 w-full gap-8 mt-8`}>
            <TypingRunStat label={`tests started`} value={200} />
            <TypingRunStat label={`time typing`} value={formatSeconds(timeTyping / 1000)} />
            <div />
            <TypingRunStat label={`highest wpm`} value={highestWpm} />
            <TypingRunStat label={`average wpm`} value={averageWpm.toFixed(0)} />
            <TypingRunStat label={`average wpm (last 10 tests)`} value={averageWpmLast10.toFixed(0)} />

            <TypingRunStat label={`highest accuracy`} value={`${highestAcc}%`} />
            <TypingRunStat label={`average accuracy`} value={`${averageAcc.toFixed(0)}%`} />
            <TypingRunStat label={`average accuracy (last 10 tests)`} value={`${averageAccLast10.toFixed(0)}%`} />

            <TypingRunStat label={`highest consistency`} value={`${highestConsistency}%`} />
            <TypingRunStat label={`average consistency`} value={`${averageConsistency.toFixed(0)}%`} />
            <TypingRunStat label={`average consistency (last 10 tests)`} value={`${averageConsistencyLast10.toFixed(0)}%`} />
         </div>
      </div>
   );
};

const TypingRunStat = ({ label, value }: { label: ReactNode; value: ReactNode }) => {
   return (
      <div className={`flex flex-col items-start gap-2`}>
         <span className={`text-base text-secondary`}>
         {label}
         </span>
         <span className={`text-5xl text-main`}>{value}</span>
      </div>
   );

};

export default TypingRunsStatsSection;