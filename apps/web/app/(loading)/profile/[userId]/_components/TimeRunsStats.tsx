"use client";
import { useBoolean } from "@hooks/useBoolean";
import { cn } from "@lib/utils";
import { TypingRun } from "@repo/db";
import { motion } from "framer-motion";
import { max, mean } from "lodash";
import moment from "moment";
import NoRunsLabel from "./NoRunsLabel";

export interface TimeRunsStatsProps {
   timeRuns: TypingRun[];
}

function getGroupedRuns(runs: TypingRun[]) {
   const runs15 = runs.filter((r) => r.time === 15);
   const runs30 = runs.filter((r) => r.time === 30);
   const runs60 = runs.filter((r) => r.time === 60);
   const runs120 = runs.filter((r) => r.time === 120);

   return { runs15, runs30, runs60, runs120 };
}

export function getRunsStats(runs: TypingRun[]) {
   const averageAcc = mean(runs.map((r) => r.metadata!.accuracy));
   const averageCon = mean(runs.map((r) => r.metadata!.consistency));
   const bestWpm = max(runs.map((r) => r.metadata!.wpm));
   const bestRawWpm = max(runs.map((r) => r.metadata!.rawWpm));
   const latestRun = max(runs.map((r) => r.createdAt));

   return { averageAcc, averageCon, bestWpm, latestRun, bestRawWpm };
}

const TimeRunsStats = ({ timeRuns }: TimeRunsStatsProps) => {
   const { runs15, runs30, runs60, runs120 } = getGroupedRuns(timeRuns);

   return (
      <div className={`flex w-full items-center justify-between gap-4`}>
         <TimeRunsStat time={15} runs={runs15} />
         <TimeRunsStat time={30} runs={runs30} />
         <TimeRunsStat time={60} runs={runs60} />
         <TimeRunsStat time={120} runs={runs120} />
      </div>
   );
};

const TimeRunsStat = ({ runs, time }: { runs: TypingRun[]; time: number }) => {
   const { latestRun, averageAcc, averageCon, bestWpm, bestRawWpm } =
      getRunsStats(runs);
   const [hovered, setHovered] = useBoolean();

   if (!runs?.length) {
      return <NoRunsLabel time={time} />;
   }

   return (
      <div
         className={`!h-[160px]`}
         onMouseLeave={(_) => setHovered(false)}
         onMouseEnter={(_) => setHovered(true)}
      >
         {hovered ? (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               key={`next`}
               className={cn(
                  `flex h-full flex-col items-center justify-between`,
                  !hovered && `hidden`
               )}
            >
               <span className={`text-nowrap text-sm text-accent`}>
                  {time} seconds
               </span>
               <span className={`text-xs text-main`}>
                  {bestWpm.toFixed(0)} wpm
               </span>
               <span className={`text-xs text-secondary`}>
                  {bestRawWpm.toFixed(0)} raw
               </span>
               <span className={`text-xs text-main`}>
                  {averageAcc.toFixed(0)}% acc
               </span>
               <span className={`text-xs text-secondary`}>
                  {averageCon.toFixed(0)}% con
               </span>
               <span
                  className={`text-center text-sm leading-tight text-accent`}
               >
                  {moment(latestRun).format(`DD MMM YYYY`)}
               </span>
            </motion.div>
         ) : (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               key={`initial`}
               className={cn(
                  `flex h-full flex-col items-center justify-between`,
                  hovered && `hidden`
               )}
            >
               <span className={`text-nowrap text-sm text-accent`}>
                  {time} seconds
               </span>
               <span className={`text-xl`}>{bestWpm?.toFixed(0)}</span>
               <span className={`text-lg text-secondary`}>
                  {averageAcc.toFixed(0)}%
               </span>
            </motion.div>
         )}
      </div>
   );
};

export default TimeRunsStats;
