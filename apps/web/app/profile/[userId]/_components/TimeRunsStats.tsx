"use client";
import { TypingRun } from "@repo/db";
import { max, mean } from "lodash";
import React from "react";
import { useBoolean } from "@hooks/useBoolean";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import { cn } from "@lib/utils";

export interface TimeRunsStatsProps {
   timeRuns: TypingRun[];
}

function getGroupedRuns(runs: TypingRun[]) {
   const runs15 = runs.filter(r => r.time === 15);
   const runs30 = runs.filter(r => r.time === 30);
   const runs60 = runs.filter(r => r.time === 60);
   const runs120 = runs.filter(r => r.time === 120);

   return { runs15, runs30, runs60, runs120 };
}

const TimeRunsStats = ({ timeRuns }: TimeRunsStatsProps) => {
   const { runs15, runs30, runs60, runs120 } = getGroupedRuns(timeRuns);

   return (
      <div className={`w-full flex items-center justify-between`}>
         <TimeRunsStat time={15} runs={runs15} />
         <TimeRunsStat time={30} runs={runs30} />
         <TimeRunsStat time={60} runs={runs60} />
         <TimeRunsStat time={120} runs={runs120} />
      </div>
   );
};

const TimeRunsStat = ({ runs, time }: { runs: TypingRun[], time: number }) => {
   const averageAcc = mean(runs.map(r => r.metadata!.accuracy));
   const averageCon = mean(runs.map(r => r.metadata!.consistency));
   const bestWpm = max(runs.map(r => r.metadata!.wpm));
   const latestRun = max(runs.map(r => r.createdAt));
   const [hovered, setHovered] = useBoolean();

   if(!runs?.length) {
      return <div className={`text-muted-foreground`}>No runs yet.</div>
   }

   return (
      <div
         className={`!h-[160px]`}
         onMouseLeave={_ => setHovered(false)}
         onMouseEnter={_ => setHovered(true)}
      >
         {hovered ? (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: .3 }}
               key={`next`}
               className={cn(`flex flex-col items-center justify-between h-full`, !hovered && `hidden`)}>
               <span>{time} seconds</span>
               <span>{bestWpm}</span>
               <span>{averageAcc.toFixed(0)}%</span>
               <span>{averageCon.toFixed(0)}%</span>
               <span>{moment(latestRun).format(`DD MMM YYYY`)}</span>
            </motion.div>
         ) : (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: .3 }}
               key={`initial`}
               className={cn(`flex flex-col items-center justify-between h-full`, hovered && `hidden`)}>
               <span>{time} seconds</span>
               <span className={`text-2xl`}>{bestWpm?.toFixed(0)}</span>
               <span className={`text-lg`}>{averageAcc.toFixed(0)}%</span>
            </motion.div>
         )}
      </div>
   );

};

export default TimeRunsStats;