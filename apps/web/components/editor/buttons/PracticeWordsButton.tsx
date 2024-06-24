"use client";
import {
   Button,
   Dialog,
   DialogContent, DialogDescription, DialogHeader, DialogTitle,
   DialogTrigger,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import React, { PropsWithChildren } from "react";
import { AlertTriangle } from "lucide-react";
import { useAtomValue } from "jotai";
import { typingRunAtom, wordRangesAtom, wordsAtom } from "@atoms/editor";
import { orderBy, sortBy } from "lodash";

export interface PracticeWordsButtonProps {
}

const PracticeWordsButton = ({}: PracticeWordsButtonProps) => {

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
               <PracticeWordsModal>
                  <Button
                     // onClick={}
                     className={`hover:!bg-transparent group`}
                     variant={`ghost`}
                     size={`icon`}>
                     <AlertTriangle className={`group-hover:!text-neutral-400  transition-colors duration-200`}
                                    size={18} />
                  </Button>
               </PracticeWordsModal>

            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
               Practice words
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export const PracticeWordsModal = ({ children }: PropsWithChildren) => {
   const typingRun = useAtomValue(typingRunAtom);
   const currentWords = useAtomValue(wordsAtom);
   const wordRanges = useAtomValue(wordRangesAtom);

   function handlePracticeMissed() {

   }

   function handlePracticeSlow() {
      const wordTimesToFinish = wordRanges.map(({ word, range: [start, end] }) => {
         const startIndex = [...typingRun.typedLetters].reverse().findIndex(l => l.charIndex === start);
         const endIndex = [...typingRun.typedLetters].reverse().findIndex(l => l.charIndex === end);

         return {
            time: Math.abs((typingRun.typedLetters.at(endIndex)?.timestamp ?? 0) - (typingRun.typedLetters.at(startIndex)?.timestamp || 0)),
            word,
         };
      });

      let slowestWords = sortBy(wordTimesToFinish, (value, index) => -value.time)
         .slice(0, 7)
         .map(w => w.word)
      // TODO: Continue logic ...
   }

   return (
      <Dialog onOpenChange={_ => {
         console.log({ typingRun, currentWords });
      }} modal>
         <DialogTrigger asChild>
            {children}
         </DialogTrigger>
         <DialogContent className={`!bg-neutral-900`}>
            <DialogHeader>
               <DialogTitle>
                  Practice words
               </DialogTitle>
               <DialogDescription>
                  This will start a new run in custom mode. Words that you mistyped more often or words that you typed
                  much slower will be weighted higher and appear more often.
               </DialogDescription>
            </DialogHeader>
            <div className={`flex w-full flex-col items-center gap-4 mt-4`}>
               <Button onClick={handlePracticeMissed} className={`w-full rounded-full flex items-center`}>
                  Practice missed
               </Button>
               <Button onClick={handlePracticeSlow} className={`w-full rounded-full flex items-center`}>
                  Practice slow
               </Button>
               <Button className={`w-full rounded-full flex items-center`}>
                  Practice both
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   );

};

export default PracticeWordsButton;