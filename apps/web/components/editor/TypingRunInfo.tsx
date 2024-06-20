"use client";
import React, { PropsWithChildren } from "react";
import { useAtomValue } from "jotai";
import { userActiveTagsAtom, userLanguageAtom, userTestDifficultyAtom } from "@atoms/user";
import { Gauge, Globe, Star, Tag } from "lucide-react";
import { TypingRun } from "@repo/db";
import { sum } from "lodash";

interface TypingRunInfoProps {
   runs: TypingRun[];
}

const TypingRunInfo = ({ runs }: TypingRunInfoProps) => {
   const language = useAtomValue(userLanguageAtom);
   const difficulty = useAtomValue(userTestDifficultyAtom);
   const activeTags = useAtomValue(userActiveTagsAtom);

   const averagePace = sum(runs
         ?.filter(r => !isNaN(Number(r.metadata?.wpm)))
         ?.map(r => r.metadata?.wpm)) /
      runs?.filter(r => !isNaN(Number(r.metadata?.wpm)))?.length!;

   const averageAccuracy = sum(runs
         ?.filter(r => !isNaN(Number(r.metadata?.accuracy)))
         ?.map(r => r.metadata?.accuracy)) /
      runs?.filter(r => !isNaN(Number(r.metadata?.accuracy)))?.length!;

   console.log({ runs, averagePace, averageAccuracy });

   return (
      <div className={`w-full flex items-center justify-center gap-8 text-neutral-400`}>
         <RunInfo>
            <Globe size={18} />
            <span>
               {language as string}
            </span>
         </RunInfo>

         <RunInfo>
            <Star size={18} />
            <span>
               {(difficulty as string).toLowerCase()}
            </span>
         </RunInfo>
         <RunInfo>
            <Gauge size={18} />
            <span>
               average pace {averagePace.toFixed(0)} WPM
            </span>
         </RunInfo>
         <RunInfo>
            <Gauge size={18} />
            <span>
               avg: {averagePace.toFixed(0)} wpm {averageAccuracy.toFixed(0)}% acc
            </span>
         </RunInfo>
         <RunInfo>
            <Tag size={18} />
            <span>
               {activeTags?.join(", ")}
            </span>
         </RunInfo>
      </div>
   );
};

const RunInfo = ({ children }: PropsWithChildren) => {
   return (
      <div
         className={`flex items-center gap-2 text-sm cursor-pointer hover:!text-neutral-300 transition-colors duration-200`}>
         {children}
      </div>
   );
};

export default TypingRunInfo;