"use client";
import React from "react";
import { Button, Separator } from "@repo/ui";
import { useAtomValue } from "jotai";
import {
   completedWordsAtom, lettersCorrectnessAtom,
   lettersCorrectnessPercentageAtom,
   totalRunTimeAtom,
   typingModeAtom,
   typingRunSuccessAtom, wordsCompletionTimesAtom,
} from "@atoms/editor";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import { timeAtom } from "@atoms/timer";
import { consistencyScoreAtom, correctWordCharsAtom, correctWordsAtom, rawWpmAtom, wpmAtom } from "@atoms/stats";
import { sum } from "lodash";

export interface TypingEditorStatisticsProps {
}

const TypingRunSummary = ({}: TypingEditorStatisticsProps) => {
   const correctnessPercentage = useAtomValue(lettersCorrectnessPercentageAtom);
   const consistencyScore = useAtomValue(consistencyScoreAtom);
   const completedWords = useAtomValue(completedWordsAtom);
   const correctWordCharacters = useAtomValue(correctWordCharsAtom)
   const totalWordCharacters = useAtomValue(lettersCorrectnessAtom).length;
   const correctWords = useAtomValue(correctWordsAtom)

   const mode = useAtomValue(typingModeAtom);
   const time = useAtomValue(timeAtom);

   const totalRunTime = useAtomValue(totalRunTimeAtom);
   const wordCompletionTimes = useAtomValue(wordsCompletionTimesAtom)
   const letterCorrectness = useAtomValue(lettersCorrectnessAtom);

   const wpm = useAtomValue(wpmAtom)
   const rawWpm = useAtomValue(rawWpmAtom)
   const success = useAtomValue(typingRunSuccessAtom)

   return (
      <div className={`flex flex-col items-center justify-center gap-8 w-full text-sm`}>
         <div className={`w-full items-center flex justify-center gap-4 !text-secondary`}>
            <div>Completed words: {completedWords.length}</div>
            <div>Correct words: {correctWords.toFixed(0)}</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>Total letters: {letterCorrectness.length}</div>
            <div>Correct letters: {letterCorrectness.filter(x => x === true).length}</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>WPM: {wpm.toFixed(0)}</div>
            <div>Raw WPM: {rawWpm.toFixed(0)}</div>
            <div>Correct word chars: {correctWordCharacters.toFixed(0)}</div>
            <div>Total chars: {totalWordCharacters.toFixed(0)}</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>Accuracy: {correctnessPercentage.toFixed(0)}%</div>
            <div>Consistency: {consistencyScore}%</div>
            <Separator className={`h-4 w[2px]`} orientation={`vertical`} />
            <div>Time: {time}s</div>
            <div>Run time: {totalRunTime === 0 ? sum(wordCompletionTimes.map(t => t.time)) : totalRunTime}ms</div>
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