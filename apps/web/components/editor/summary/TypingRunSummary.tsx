"use client";
import {
   lettersCorrectnessAtom,
   lettersCorrectnessPercentageAtom,
   typingModeAtom,
} from "@atoms/editor";
import {
   wpmAtom,
} from "@atoms/stats";
import { timeAtom } from "@atoms/timer";
import { useAtomValue } from "jotai";
import { userActiveTagsAtom, userLanguageAtom, userPbAtom } from "@atoms/user";
import { typingFlagsAtom } from "@atoms/flags";
import { TypingFlags } from "@atoms/consts";
import { match } from "ts-pattern";
import { PropsWithChildren, ReactNode, useMemo } from "react";
import TypingRunSummaryChart from "@components/editor/summary/TypingRunSummaryChart";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { Crown } from "lucide-react";

export interface TypingEditorStatisticsProps {
}

const TypingRunSummary = ({}: TypingEditorStatisticsProps) => {
   const correctnessPercentage = useAtomValue(lettersCorrectnessPercentageAtom);
   const letterCorrectness = useAtomValue(lettersCorrectnessAtom);

   const mode = useAtomValue(typingModeAtom);
   const time = useAtomValue(timeAtom);
   const language = useAtomValue(userLanguageAtom);

   const flags = useAtomValue(typingFlagsAtom);
   const userTags = useAtomValue(userActiveTagsAtom);

   const punctuation = (flags & TypingFlags.PUNCTUATION) === 1;
   const numbers = (flags & TypingFlags.NUMBERS) === 1;
   const userPb = useAtomValue(userPbAtom);

   const wpm = useAtomValue(wpmAtom);
   const isPersonalPb = useMemo(() => wpm > userPb, [wpm, userPb]);

   return (
      <div
         className={`flex w-full items-start justify-center gap-8 text-sm`}
      >
         <div className={`flex flex-col items-start gap-2`}>
            <div className={`flex flex-col items-start gap-1`}>
               <div className={`text-secondary !font-semibold text-2xl flex items-center gap-2`}>
                  <span>wpm</span>
                  {isPersonalPb && (
                     <div className={`p-2 rounded-md !bg-accent`}>
                        <Crown className={`fill-black text-black`} size={18} />
                     </div>
                  )}
               </div>
               <StatTooltip tooltip={
                  <span className={``}>{wpm.toFixed(2)} wpm</span>
               }>
                  <span className={`text-5xl text-accent`}>{wpm.toFixed(0)}</span>
               </StatTooltip>
            </div>
            <div className={`flex flex-col items-start gap-1`}>
               <span className={`text-secondary !font-semibold text-2xl`}>acc</span>
               <StatTooltip tooltip={
                  <span
                     className={``}>
                     {isNaN(correctnessPercentage) ? 100 : correctnessPercentage.toFixed(0)} {` `}
                     ({letterCorrectness.filter(x => x === true).length} correct / {letterCorrectness.filter(x => x === false).length} incorrect)</span>
               }>
                  <span
                     className={`text-5xl text-accent`}>{isNaN(correctnessPercentage) ? 100 : correctnessPercentage.toFixed(0)}%</span>
               </StatTooltip>
            </div>
            <div className={`flex flex-col items-start gap-1 mt-4`}>
               <span className={`text-secondary !font-semibold text-xl`}>test type</span>
               <span className={`text-lg text-accent`}>{mode.toLowerCase()} {time}</span>
               <span className={`text-lg text-accent`}>{language.toLowerCase()} 5k</span>

               {punctuation && (
                  <span className={`text-lg text-accent`}>punctuation</span>
               )}
               {numbers && (
                  <span className={`text-lg text-accent`}>numbers</span>
               )}
            </div>
            <div className={`flex flex-col items-start gap-1 mt-4`}>
               <span className={`text-secondary !font-semibold text-xl`}>tags</span>
               <span className={`text-lg text-accent`}>
                  {match(userTags)
                     .returnType<ReactNode>()
                     .with([], _ => `no tags`)
                     .otherwise(x => x.join(`,`))}
               </span>
            </div>
         </div>
         <div className={`flex-1`}>
            <TypingRunSummaryChart />
         </div>
      </div>
   );
};


export const StatTooltip = ({ tooltip, children }: { tooltip: ReactNode } & PropsWithChildren) => (
   <TooltipProvider>
      <Tooltip>
         <TooltipTrigger className={`cursor-pointer`}>
            {children}
         </TooltipTrigger>
         <TooltipContent
            side={`top`}
            className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
         >
            {tooltip}
         </TooltipContent>
      </Tooltip>
   </TooltipProvider>
);


export default TypingRunSummary;