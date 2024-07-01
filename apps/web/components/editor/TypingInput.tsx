"use client";
import React, { Fragment, useEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
   caretCoordinatesAtom,
   currentCharIndexAtom,
   lettersCorrectnessAtom,
   onKeyPressAtom,
   typingRunStateAtom,
   wordsAtom,
} from "@atoms/editor";
import { calculateSHA256, cn } from "@lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import TypingLetters from "@components/editor/TypingLetters";
import { TypingRunState } from "@atoms/consts";
import { pauseAtom } from "@atoms/timer";
import { playClickSoundAtom, playErrorSoundAtom } from "@app/settings/atoms";
import TypingCaret from "@components/editor/TypingCaret";
import PaceTypingCaret from "./PaceTypingCaret";

export interface TypingInputProps {
}

const TypingInput = ({}: TypingInputProps) => {
   const pause = useSetAtom(pauseAtom);
   const { top, left } = useAtomValue(caretCoordinatesAtom);
   const onKeyDown = useSetAtom(onKeyPressAtom);
   const editorRef = useRef<HTMLDivElement>();

   const playClickSound = useSetAtom(playClickSoundAtom);
   const playErrorSound = useSetAtom(playErrorSoundAtom)

   useEffect(() => editorRef?.current?.focus(), []);

   const timerState = useAtomValue(typingRunStateAtom);
   const currentCharIndex = useAtomValue(currentCharIndexAtom);
   const letterCorrectness = useAtomValue(lettersCorrectnessAtom)
   const words = useAtomValue(wordsAtom);

   useEffect(() => {
      if(letterCorrectness[currentCharIndex] === false) {
         playErrorSound()
      }
   }, [currentCharIndex, letterCorrectness])

   return (
      <Fragment>
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
                           pause();
                        }
                     }, 1000);
                  }
               }}
               style={{
                  caretColor: `transparent`,
               }}
               key={calculateSHA256(words.join(`,`))}
               id={`editor-words`}
               ref={editorRef}
               className={cn(`bg-transparent flex w-full items-center gap-2 text-wrap break-normal !py-2 cursor-default focus:!outline-none flex-wrap mt-8 `)}
               tabIndex={0}
               autoFocus
               onKeyDown={async e => {
                  if (timerState === TypingRunState.FINISHED) return null;

                  playClickSound()
                  onKeyDown(e);
               }}>
               {top !== 0 && left !== 0 && (
                  <TypingCaret coords={{ top, left }} />
               )}
               {top !== 0 && left !== 0 && currentCharIndex >= 1 && (
                  <PaceTypingCaret coords={{ top, left }} />
               )}
               <TypingLetters />
            </motion.div>
         </AnimatePresence>
      </Fragment>
   );
};

export default TypingInput;