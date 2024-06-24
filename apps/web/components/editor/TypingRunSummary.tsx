"use client";
import React, { useCallback } from "react";
import { Button, Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { Image } from "lucide-react";
import html2canvas from "html2canvas";
import { useAtomValue } from "jotai";
import {
   completedWordsAtom,
   lettersCorrectnessPercentageAtom,
   totalRunTimeAtom,
   typedLettersAtom,
   typingModeAtom,
   typingRunStateAtom, typingRunSuccessAtom,
} from "@atoms/editor";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import RestartButton from "@components/editor/buttons/RestartButton";
import { timeAtom } from "@atoms/timer";
import { consistencyScoreAtom, wpmAtom } from "@atoms/stats";
import { TypingRunState, WordRange } from "@atoms/consts";

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


   const copyScreenshotToClipboard = () => {
      html2canvas(document.getElementById(`editor`)!)
         .then(canvas => {
            canvas.toBlob(blob => {
               if (blob) {
                  window.navigator?.clipboard.write([
                     new ClipboardItem({
                        "image/png": blob,
                     }),
                  ]);
               }
            }, `image/png`);
         });
   };

   return (
      <div className={`flex flex-col items-center justify-center gap-8 w-full text-sm`}>
         <div className={`flex items-center gap-2 w-full justify-center flex-wrap`}>
            {completedWords.map(({ word, range: [start, end] }, i) => (
               <span
                  key={word + i}>
                     {word} - {new Intl.NumberFormat().format(getWordCompletionTime({
                  word,
                  range: [start, end],
               }) / 1000)}s
               </span>
            ))}
            <span>Total: {totalRunTime}ms</span>
         </div>
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
         <TooltipProvider>
         <Tooltip>
               <TooltipTrigger asChild>
                  <Button onClick={copyScreenshotToClipboard} variant={`ghost`} size={`icon`}>
                     <Image size={18} />
                  </Button>
               </TooltipTrigger>
               <TooltipContent
                  side={`bottom`}
                  className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                  Copy screenshot to clipboard
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
         <div className={`flex items-center justify-center w-full`}>
            {timerState === TypingRunState.FINISHED && (
               <RestartButton />
            )}
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