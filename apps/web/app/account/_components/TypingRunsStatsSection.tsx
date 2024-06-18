import { TypingRun } from "@repo/db";
import React, { ReactNode } from "react";

function formatSeconds(seconds: number) {
   const minutes = Math.floor(seconds / 60);
   const remainingSeconds = seconds % 60;
   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toFixed(0).padStart(2, "0")}`;
}

export interface TypingRunsStatsSectionProps {
   runs: TypingRun[];
}

const TypingRunsStatsSection = ({ runs }: TypingRunsStatsSectionProps) => {
   const wordsTyped = runs.map(r => r.wordCount!).reduce((a, b) => a + b, 0);
   const timeTyping = runs.map(r => r.totalTimeMilliseconds!).reduce((a, b) => a + b, 0);

   const highestWpm = runs.sort((a, b) => b.wpm - a.wpm)?.at(0)?.wpm?.toFixed(0);
   const averageWpm = runs.map(r => r.wpm as number).reduce((a, b) => a + b, 0) / runs.length;
   const averageWpmLast10 = runs.slice(0, 10).map(r => r.wpm as number).reduce((a, b) => a + b, 0) / runs.length;

   const highestAcc = runs.sort((a, b) => b.accuracy - a.accuracy)?.at(0)?.accuracy?.toFixed(0);
   const averageAcc = runs.map(r => r.accuracy as number).reduce((a, b) => a + b, 0) / runs.length;
   const averageAccLast10 = runs.slice(0, 10).map(r => r.accuracy as number).reduce((a, b) => a + b, 0) / runs.length;

   const highestConsistency = runs.sort((a, b) => b.consistency - a.consistency )?.at(0)?.consistency?.toFixed(0);
   const averageConsistency = runs.map(r => r.consistency as number).reduce((a, b) => a + b, 0) / runs.length;
   const averageConsistencyLast10 = runs.slice(0, 10).map(r => r.consistency as number).reduce((a, b) => a + b, 0) / runs.length;

   return (
      <div className={`flex flex-col items-center gap-4 w-full`}>
         <div className={`flex items-center gap-4 justify-center w-full`}>
            <span className={`text-base text-neutral-500`}>
               Estimated words typed
            </span>
            <span className={`text-6xl text-neutral-300`}>
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
         <span className={`text-base text-neutral-500`}>
         {label}
         </span>
         <span className={`text-5xl text-neutral-300`}>{value}</span>
      </div>
   );

};

export default TypingRunsStatsSection;