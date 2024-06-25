"use client";
import {
   Button,
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import React, { PropsWithChildren } from "react";
import { AlertTriangle } from "lucide-react";
import { useAtomValue } from "jotai";
import { missedWordsAtom, slowWordsAtom, typingRunAtom, wordsAtom } from "@atoms/editor";
import { useSetAtom } from "jotai/index";
import { restartWithWordsAtom } from "@atoms/actions";
import { useBoolean } from "@hooks/useBoolean";

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
                     <AlertTriangle className={`group-hover:!text-neutral-400  transition-colors duration-200 !text-main`}
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
   const [open, setOpen] = useBoolean();
   const typingRun = useAtomValue(typingRunAtom);
   const currentWords = useAtomValue(wordsAtom);
   const restart = useSetAtom(restartWithWordsAtom);
   const missedWords = useAtomValue(missedWordsAtom);
   const slowWords = useAtomValue(slowWordsAtom);

   function handlePracticeMissed() {
      console.log({ missedWords });

      restart(missedWords);
      setOpen(false);
   }

   function handlePracticeSlow() {
      console.log({ slowWords });
      restart(slowWords);
      setOpen(false);
   }

   return (
      < Dialog open={open} onOpenChange={value => {
         console.log({ typingRun, currentWords });
         setOpen(value);
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