"use client";
import React from "react";
import { Button, Separator } from "@repo/ui";
import { useAtomValue } from "jotai";
import {
   completedWordsAtom,
   lettersCorrectnessPercentageAtom,
   totalRunTimeAtom,
   typingModeAtom,
   typingRunSuccessAtom,
} from "@atoms/editor";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import { timeAtom } from "@atoms/timer";
import { consistencyScoreAtom, wpmAtom } from "@atoms/stats";

export interface TypingEditorStatisticsProps {
}

const TypingRunSummary = ({}: TypingEditorStatisticsProps) => {
   const correctnessPercentage = useAtomValue(lettersCorrectnessPercentageAtom);
   const consistencyScore = useAtomValue(consistencyScoreAtom);
   const completedWords = useAtomValue(completedWordsAtom);

   const mode = useAtomValue(typingModeAtom);
   const time = useAtomValue(timeAtom);
   const totalRunTime = useAtomValue(totalRunTimeAtom);
   const wpm = useAtomValue(wpmAtom)
   const success = useAtomValue(typingRunSuccessAtom)

   return (
      <div className={`flex flex-col items-center justify-center gap-8 w-full text-sm`}>
         <div className={`w-full items-center flex justify-center gap-4 !text-secondary`}>
            <div>Completed words: {completedWords.length}</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>WPM: {wpm.toFixed(0)}</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>Accuracy: {correctnessPercentage.toFixed(0)}%</div>
            <div>Consistency: {consistencyScore}%</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>Time: {time}s</div>
            <div>Run time: {totalRunTime}ms</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>Mode: {mode}</div>
            <div>Success: {success}</div>
         </div>

         <SignedOut>
            <Button onClick={_ => signIn(`google`, { callbackUrl: `/?save=true` })} variant={`link`}>Sign in to save
               your
               current run</Button>
         </SignedOut>
      </div>
   );
};

export default TypingRunSummary;