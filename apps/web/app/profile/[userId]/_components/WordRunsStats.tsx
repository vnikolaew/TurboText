"use client";
import { TypingRun } from "@repo/db";
import React from "react";
import { useBoolean } from "@hooks/useBoolean";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";
import moment from "moment/moment";
import NoRunsLabel from "./NoRunsLabel";
import { getRunsStats } from "@app/profile/[userId]/_components/TimeRunsStats";

export interface WordRunsStatsProps {
   wordRuns: TypingRun[];
}

function getGroupedRuns(runs: TypingRun[]) {
   const runs10 = runs.filter(r => r.wordCount === 10);
   const runs25 = runs.filter(r => r.wordCount === 25);
   const runs50 = runs.filter(r => r.wordCount === 50);
   const runs100 = runs.filter(r => r.wordCount === 100);

   return { runs10, runs25, runs50, runs100 };
}

const WordRunsStats = ({ wordRuns }: WordRunsStatsProps) => {
   const { runs25, runs10, runs50, runs100 } = getGroupedRuns(wordRuns);

   return (
      <div className={`w-full flex items-center justify-between gap-4`}>
         <WordRunsStat words={15} runs={runs25} />
         <WordRunsStat words={30} runs={runs10} />
         <WordRunsStat words={60} runs={runs50} />
         <WordRunsStat words={120} runs={runs100} />
      </div>
   );
};

const WordRunsStat = ({ runs, words }: { runs: TypingRun[], words: number }) => {
   const { latestRun, averageAcc, averageCon, bestWpm, bestRawWpm } = getRunsStats(runs);
   const [hovered, setHovered] = useBoolean();

   if (!runs?.length) {
      return <NoRunsLabel words={words} />;
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
               <span className={`text-accent text-nowrap text-sm`}>{words} words</span>
               <span className={`text-secondary text-xs`}>{bestWpm.toFixed(0)} wpm</span>
               <span className={`text-secondary text-xs`}>{bestRawWpm.toFixed(0)} raw</span>
               <span className={`text-secondary text-xs`}>{averageAcc.toFixed(0)}% acc</span>
               <span className={`text-secondary text-xs`}>{averageCon.toFixed(0)}% con</span>
               <span
                  className={`text-sm leading-tight text-accent text-center`}>{moment(latestRun).format(`DD MMM YYYY`)}</span>
            </motion.div>
         ) : (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: .3 }}
               key={`initial`}
               className={cn(`flex flex-col items-center justify-between h-full`, hovered && `hidden`)}>
               <span className={`text-accent text-nowrap text-sm`}>{words} words</span>
               <span className={`text-xl`}>{bestWpm?.toFixed(0)}</span>
               <span className={`text-lg text-secondary`}>{averageAcc.toFixed(0)}%</span>
            </motion.div>
         )}
      </div>
   );

};

export default WordRunsStats;