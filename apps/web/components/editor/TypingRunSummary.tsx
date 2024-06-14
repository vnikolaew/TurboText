"use client";
import React, { useCallback } from "react";
import { WordRange } from "@components/editor/hooks/useTypingEditor";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { Image } from "lucide-react";
import html2canvas from "html2canvas";
import { useAtomValue } from "jotai";
import {
   completedWordsAtom,
   lettersCorrectnessPercentageAtom,
   TimerState,
   timerStateAtom,
   typedLettersAtom,
} from "@atoms/editor";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import RestartButton from "@components/editor/RestartButton";

export interface TypingEditorStatisticsProps {
   time: number;
}

// TODO:
// Stats: WPM, Accuracy, Raw, Characters, Consistency, Time, TestType
const TypingRunSummary = ({
                             time,
                          }: TypingEditorStatisticsProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const timerState = useAtomValue(timerStateAtom);

   const getWordCompletionTime = useCallback(({ range: [start, end] }: WordRange) => {
      return typedLetters.reverse().find(l => l.charIndex === end)?.timestamp!
         - typedLetters.reverse().find(l => l.charIndex === start)?.timestamp!;
   }, [typedLetters]);

   const correctnessPercentage = useAtomValue(lettersCorrectnessPercentageAtom);
   const completedWords = useAtomValue(completedWordsAtom);

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
      <div className={`flex items-center gap-8`}>
         <div className={`flex flex-col gap-2`}>
            {completedWords.map(({ word, range: [start, end] }, i) => (
               <span
                  key={word + i}>
                     {word} - {new Intl.NumberFormat().format(getWordCompletionTime({
                  word,
                  range: [start, end],
               }) / 1000)}s
               </span>
            ))}
         </div>
         <div>Completed words: {completedWords.length}</div>
         <div>WPM: {(completedWords.length / time * 60).toFixed(0)}</div>
         <div>Accuracy: {correctnessPercentage.toFixed(0)}%</div>
         <div>Time: {time}s</div>
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
         {timerState === TimerState.FINISHED && (
            <RestartButton />
         )}
         <SignedOut>
            <Button onClick={_ => signIn(`google`, { callbackUrl: `/?save=true` })} variant={`link`}>Sign in to save
               your
               current run</Button>
         </SignedOut>
      </div>
   );
};

export default TypingRunSummary;