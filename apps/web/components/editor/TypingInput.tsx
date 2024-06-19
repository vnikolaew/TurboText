"use client";
import React, { Fragment, useEffect } from "react";
import { useTypingEditor } from "@components/editor/hooks/useTypingEditor";
import { useAtomValue, useSetAtom } from "jotai";
import { typingRunStateAtom, wordsAtom } from "@atoms/editor";
import { calculateSHA256, cn } from "@lib/utils";
import { useBoolean } from "@hooks/useBoolean";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointer } from "lucide-react";
import TypingLetters from "@components/editor/TypingLetters";
import { TypingRunState } from "@atoms/consts";
import { pauseAtom, resumeAtom } from "@atoms/timer";

export interface TypingInputProps {
}

const TypingInput = ({}: TypingInputProps) => {
   const pause = useSetAtom(pauseAtom);
   const resume = useSetAtom(resumeAtom);

   const {
      editorRef,
      currentLetterRef,
      left,
      top,
      onKeyDown,
   } = useTypingEditor();

   const timerState = useAtomValue(typingRunStateAtom);
   const words = useAtomValue(wordsAtom);
   const [showFocusLost, setShowFocusLost] = useBoolean();

   useEffect(() => {
      const handler = () => {
         if (showFocusLost) {
            setShowFocusLost(false);
            editorRef.current?.focus();
         }
      };

      window.addEventListener(`keydown`, handler);
      return () => window.removeEventListener(`keydown`, handler);

   }, [showFocusLost]);

   return (
      <Fragment>
         <AnimatePresence>
            {showFocusLost && (
               <motion.div
                  id={`focus-lost`}
                  initial={{ opacity: 100 }}
                  animate={{ opacity: 100 }}
                  transition={{ duration: .3 }}
                  exit={{ opacity: 0 }}
                  onKeyDown={console.log}
                  onClick={_ => {
                     if (timerState === TypingRunState.PAUSED) {
                        console.log(`Resuming`);
                        resume();
                     }

                     setShowFocusLost(false);
                  }}
                  className={`absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 text-neutral-300 flex items-center gap-2 z-[30]`}>
                  <MousePointer size={18} />
                  <span className={`text-sm`}>
                       Click here or press any key to focus
                   </span>
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence presenceAffectsLayout mode={`wait`}>
            <motion.div
               initial={{ opacity: 100 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: .3 }}
               onBlur={e => {
                  const toolbar = document.getElementById(`editor-toolbar`);
                  if (!toolbar?.contains(e.relatedTarget)) {
                     return setTimeout(() => {
                        if (timerState === TypingRunState.RUNNING) {
                           console.log(`Pausing`);
                           pause();
                        }
                        setShowFocusLost(true);
                     }, 2000);
                  }
               }}
               style={{
                  caretColor: `transparent`,
               }}
               key={calculateSHA256(words.join(`,`))}
               ref={editorRef}
               className={cn(`bg-transparent flex w-full items-center gap-2 text-wrap break-normal !py-2 cursor-default focus:!outline-none flex-wrap mt-8`,
                  showFocusLost && `blur-sm`)}
               tabIndex={0}
               autoFocus
               onKeyDown={timerState === TypingRunState.FINISHED ? null : onKeyDown}>
               <div
                  style={{
                     top, left,
                     transition: `left 100ms`,
                  }}
                  className={`h-[2rem] w-[2px] bg-neutral-100 animate-pulse absolute z-10 text-red-500 `}></div>
               <TypingLetters currentLetterRef={currentLetterRef!} />
            </motion.div>
         </AnimatePresence>
      </Fragment>
   );
};

export default TypingInput;