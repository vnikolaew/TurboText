"use client";
import React, { useCallback } from "react";
import { Button, Separator } from "@repo/ui";
import { useAtomValue } from "jotai";
import {
   completedWordsAtom,
   lettersCorrectnessPercentageAtom,
   totalRunTimeAtom,
   typedLettersAtom,
   typingModeAtom,
   typingRunStateAtom,
   typingRunSuccessAtom,
} from "@atoms/editor";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import { timeAtom } from "@atoms/timer";
import { consistencyScoreAtom, wpmAtom } from "@atoms/stats";
import { WordRange } from "@atoms/consts";

export interface TypingEditorStatisticsProps {
}

// TODO:
// Stats: WPM, Accuracy, Raw, Characters, Consistency, Time, TestType
const TypingRunSummary = ({}: TypingEditorStatisticsProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const timerState = useAtomValue(typingRunStateAtom);

   const correctnessPercentage = useAtomValue(lettersCorrectnessPercentageAtom);
   const consistencyScore = useAtomValue(consistencyScoreAtom);
   const completedWords = useAtomValue(completedWordsAtom);

   const mode = useAtomValue(typingModeAtom);
   const time = useAtomValue(timeAtom);
   const totalRunTime = useAtomValue(totalRunTimeAtom);
   const wpm = useAtomValue(wpmAtom)
   const success = useAtomValue(typingRunSuccessAtom)

   const getWordCompletionTime = useCallback(({ range: [start, end] }: WordRange) => {
      return typedLetters.reverse().find(l => l.charIndex === end)?.timestamp!
         - typedLetters.reverse().find(l => l.charIndex === start)?.timestamp!;
   }, [typedLetters]);



   return (
      <div className={`flex flex-col items-center justify-center gap-8 w-full text-sm`}>
         <div className={`w-full items-center flex justify-center gap-4`}>
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