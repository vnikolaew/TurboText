"use client";
import {
   averageAtom, paceCaretSpeedAtom,
   userActiveTagsAtom,
   userLanguageAtom, userLastRunWpmAtom, userPbAtom, userPbTodayAtom,
   userTestDifficultyAtom,
} from "@atoms/user";
import { $Enums, TypingRun } from "@repo/db";
import { useAtomValue } from "jotai";
import { sum } from "lodash";
import { BarChartBig, Gauge, Globe, Star, Tag } from "lucide-react";
import { Fragment, PropsWithChildren } from "react";
import { match } from "ts-pattern";
import userNotificationsButton from "@components/common/side-modal/notifications/UserNotificationsButton";

interface TypingRunInfoProps {
   runs: TypingRun[];
}

const PaceCaretSpeed = {
   OFF: 'OFF',
   AVG: 'AVG',
   PB: 'PB',
   LAST: 'LAST',
   DAILY: 'DAILY',
   CUSTOM: 'CUSTOM'
} as const;

function getAverages(runs: TypingRun[]) {
   const averagePace = runs?.length
      ? sum(
      runs
         ?.filter((r) => !isNaN(Number(r.metadata?.wpm)))
         ?.map((r) => r.metadata?.wpm),
   ) / runs?.filter((r) => !isNaN(Number(r.metadata?.wpm)))?.length!
      : 0;

   const averageAccuracy = runs?.length
      ? sum(
      runs
         ?.filter((r) => !isNaN(Number(r.metadata?.accuracy)))
         ?.map((r) => r.metadata?.accuracy),
   ) / runs?.filter((r) => !isNaN(Number(r.metadata?.accuracy)))?.length!
      : 0;

   return { averagePace, averageAccuracy };
}

const TypingRunInfo = ({ runs }: TypingRunInfoProps) => {
   const language = useAtomValue(userLanguageAtom);
   const difficulty = useAtomValue(userTestDifficultyAtom);
   const activeTags = useAtomValue(userActiveTagsAtom);
   const showAverages = useAtomValue(averageAtom) as string;

   const paceCaret = useAtomValue(paceCaretSpeedAtom) as $Enums.PaceCaretSpeed;

   const { averagePace, averageAccuracy } = getAverages(runs);

   const userPb = useAtomValue(userPbAtom) as number;
   const userPbToday = useAtomValue(userPbTodayAtom)
   const userLastRunWpm = useAtomValue(userLastRunWpmAtom)

   return (
      <div
         className={`flex w-full items-center justify-center gap-8 text-secondary`}
      >
         <RunInfo>
            <Globe size={18} />
            <span>{language as string}</span>
         </RunInfo>

         <RunInfo>
            <Star size={18} />
            <span>{(difficulty as string)?.toLowerCase()}</span>
         </RunInfo>
         {match(paceCaret)
            .with(PaceCaretSpeed.OFF, () => (
               <Fragment />
            ))
            .with(PaceCaretSpeed.AVG, () => (
               <RunInfo>
                  <Gauge size={18} />
                  <span>average pace {averagePace.toFixed(0)} wpm</span>
               </RunInfo>
            ))
            .with(PaceCaretSpeed.PB, () => (
               <RunInfo>
                  <Gauge size={18} />
                  <span>pb pace {userPb.toFixed(0)} wpm</span>
               </RunInfo>
            ))
            .with(PaceCaretSpeed.DAILY, () => (
               <RunInfo>
                  <Gauge size={18} />
                  <span>daily pace {userPbToday.toFixed(0)} wpm</span>
               </RunInfo>
            ))
            .with(PaceCaretSpeed.LAST, () => (
               <RunInfo>
                  <Gauge size={18} />
                  <span>last pace {userLastRunWpm.toFixed(0)} wpm</span>
               </RunInfo>
            ))
            .otherwise(() => <Fragment />)
         }
         {showAverages !== `OFF` && (
            <RunInfo>
               <BarChartBig size={18} />
               <span>
               avg: {averagePace.toFixed(0)} wpm {averageAccuracy.toFixed(0)}%
               acc
            </span>
            </RunInfo>
         )}
         <RunInfo>
            <Tag size={18} />
            <span>{activeTags?.join(", ")}</span>
         </RunInfo>
      </div>
   );
};

const RunInfo = ({ children }: PropsWithChildren) => {
   return (
      <div
         className={`flex cursor-pointer items-center gap-2 text-sm transition-colors duration-200 hover:!text-neutral-300`}
      >
         {children}
      </div>
   );
};

export default TypingRunInfo;
