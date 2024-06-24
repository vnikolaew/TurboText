"use client"
import { TypingRun } from "@repo/db";
import React from "react";
import { max, mean } from "lodash";
import { useBoolean } from "@hooks/useBoolean";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";
import moment from "moment/moment";

export interface WordRunsStatsProps {
   wordRuns: TypingRun[];
}

function getGroupedRuns(runs: TypingRun[]) {
   const runs10 = runs.filter(r => r.wordCount === 10)
   const runs25 = runs.filter(r => r.wordCount === 25);
   const runs50 = runs.filter(r => r.wordCount  === 50);
   const runs100 = runs.filter(r => r.wordCount === 100);

   return { runs10, runs25, runs50, runs100 };
}

const WordRunsStats = ({wordRuns}: WordRunsStatsProps) => {
   const {runs25, runs10, runs50, runs100 } = getGroupedRuns(wordRuns);

   return (
      <div className={`w-full flex items-center justify-between`}>
         <WordRunsStat time={15} runs={runs25} />
         <WordRunsStat time={30} runs={runs10} />
         <WordRunsStat time={60} runs={runs50} />
         <WordRunsStat time={120} runs={runs100  } />
      </div>
   );
};

const WordRunsStat = ({ runs, time }: { runs: TypingRun[], time: number }) => {
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

export default WordRunsStats;