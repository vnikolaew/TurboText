"use client";
import { restartWithWordsAtom } from "@atoms/actions";
import {
   missedWordsAtom,
   slowWordsAtom,
   typingRunAtom,
   wordsAtom,
} from "@atoms/editor";
import { useBoolean } from "@hooks/useBoolean";
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
import { useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";
import { Footprints } from "lucide-react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { PropsWithChildren } from "react";

export interface PracticeWordsButtonProps {}

const PracticeWordsButton = ({}: PracticeWordsButtonProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
               <PracticeWordsModal>
                  <Button
                     // onClick={}
                     className={`group hover:!bg-transparent`}
                     variant={`ghost`}
                     size={`icon`}
                  >
                     <Footprints
                        className={`!text-main transition-colors duration-200 group-hover:!text-neutral-400`}
                        size={18}
                     />
                  </Button>
               </PracticeWordsModal>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
            >
               Practice words
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export const PracticeWordsModal = ({ children }: PropsWithChildren) => {
   const [open, setOpen] = useBoolean();
   const [, setPracticeWordsQs] = useQueryState(
      `practice-words`,
      parseAsBoolean.withDefault(false)
   );

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
      <Dialog
         open={open}
         onOpenChange={async (value) => {
            if (!value) await setPracticeWordsQs(null);
            else await setPracticeWordsQs(true);
            console.log({ typingRun, currentWords });
            setOpen(value);
         }}
         modal
      >
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className={`!bg-neutral-900`}>
            <DialogHeader>
               <DialogTitle>Practice words</DialogTitle>
               <DialogDescription>
                  This will start a new run in custom mode. Words that you
                  mistyped more often or words that you typed much slower will
                  be weighted higher and appear more often.
               </DialogDescription>
            </DialogHeader>
            <div className={`mt-4 flex w-full flex-col items-center gap-4`}>
               <Button
                  onClick={handlePracticeMissed}
                  className={`flex w-full items-center rounded-full`}
               >
                  Practice missed
               </Button>
               <Button
                  onClick={handlePracticeSlow}
                  className={`flex w-full items-center rounded-full`}
               >
                  Practice slow
               </Button>
               <Button className={`flex w-full items-center rounded-full`}>
                  Practice both
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   );
};

export default PracticeWordsButton;
