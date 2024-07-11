import { cn } from "@lib/utils";
import { TypingRun } from "@repo/db";
import { sum } from "lodash";
import { ReactNode } from "react";

export function formatSeconds(seconds: number) {
   const minutes = Math.floor(seconds / 60);
   const remainingSeconds = seconds % 60;
   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toFixed(0).padStart(2, "0")}`;
}

export interface TypingRunsStatsSectionProps {
   runs: TypingRun[];
}

const TypingRunsStatsSection = ({ runs }: TypingRunsStatsSectionProps) => {
   const wordsTyped = sum(
      runs.map((r) => r.metadata?.completedWords ?? r.wordCount)
   );
   const timeTyping = sum(runs.map((r) => r.totalTimeMilliseconds!));

   const highestWpm = runs
      .sort((a, b) => b.wpm - a.wpm)
      ?.at(0)
      ?.wpm?.toFixed(0);
   const averageWpm = sum(runs.map((r) => r.wpm as number)) / runs.length;
   const averageWpmLast10 =
      sum(runs.slice(0, 10).map((r) => r.wpm as number)) / runs.length;

   const highestRawWpm = runs
      .sort((a, b) => b.rawWpm - a.rawWpm)
      ?.at(0)
      ?.rawWpm?.toFixed(0);
   const averageRawWpm = sum(runs.map((r) => r.rawWpm as number)) / runs.length;
   const averageRawWpmLast10 =
      sum(runs.slice(0, 10).map((r) => r.rawWpm as number)) / runs.length;

   const highestAcc = runs
      .sort((a, b) => b.accuracy - a.accuracy)
      ?.at(0)
      ?.accuracy?.toFixed(0);
   const averageAcc = sum(runs.map((r) => r.accuracy as number)) / runs.length;
   const averageAccLast10 =
      sum(runs.slice(0, 10).map((r) => r.accuracy as number)) / runs.length;

   const highestConsistency = runs
      .sort((a, b) => b.consistency - a.consistency)
      ?.at(0)
      ?.consistency?.toFixed(0);
   const averageConsistency =
      sum(runs.map((r) => r.consistency as number)) / runs.length;
   const averageConsistencyLast10 =
      sum(runs.slice(0, 10).map((r) => r.consistency as number)) / runs.length;

   return (
      <section
         className={`flex w-full flex-col items-center gap-4 px-12`}
      >
         <div className={`flex w-full items-center justify-center gap-4`}>
            <span className={`text-base text-secondary`}>
               Estimated words typed
            </span>
            <span className={`text-6xl text-main`}>{wordsTyped}</span>
         </div>
         <div className={`mt-8 grid w-full grid-cols-3 gap-8`}>
            <TypingRunStat label={`tests started`} value={runs.length} />
            <TypingRunStat
               valueClassName={`text-accent`}
               label={`tests completed`} value={runs.length} />
            <TypingRunStat
               label={`time typing`}
               value={formatSeconds(timeTyping / 1000)}
            />

            <TypingRunStat label={`highest wpm`} value={highestWpm} />
            <TypingRunStat
               valueClassName={`text-accent`}
               label={`average wpm`}
               value={averageWpm.toFixed(0)}
            />
            <TypingRunStat
               label={`average wpm (last 10 tests)`}
               value={averageWpmLast10.toFixed(0)}
            />

            <TypingRunStat label={`highest raw wpm`} value={highestRawWpm} />
            <TypingRunStat
               valueClassName={`text-accent`}
               label={`average raw wpm`}
               value={averageRawWpm.toFixed(0)}
            />
            <TypingRunStat
               label={`average raw wpm (last 10 tests)`}
               value={averageRawWpmLast10.toFixed(0)}
            />

            <TypingRunStat
               label={`highest accuracy`}
               value={`${highestAcc}%`}
            />
            <TypingRunStat
               valueClassName={`text-accent`}
               label={`average accuracy`}
               value={`${averageAcc.toFixed(0)}%`}
            />
            <TypingRunStat
               label={`average accuracy (last 10 tests)`}
               value={`${averageAccLast10.toFixed(0)}%`}
            />

            <TypingRunStat
               label={`highest consistency`}
               value={`${highestConsistency}%`}
            />
            <TypingRunStat
               valueClassName={`text-accent`}
               label={`average consistency`}
               value={`${averageConsistency.toFixed(0)}%`}
            />
            <TypingRunStat
               label={`average consistency (last 10 tests)`}
               value={`${averageConsistencyLast10.toFixed(0)}%`}
            />
         </div>
      </section>
   );
};

const TypingRunStat = ({
   label,
   value,
   valueClassName,
}: {
   label: ReactNode;
   value: ReactNode;
   valueClassName?: string;
}) => {
   return (
      <div className={`flex flex-col items-start gap-2`}>
         <span className={`text-base text-secondary`}>{label}</span>
         <span className={cn(`text-5xl text-main`, valueClassName)}>
            {value}
         </span>
      </div>
   );
};

export default TypingRunsStatsSection;
