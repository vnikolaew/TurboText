"use client";
import React, { Fragment, useEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
   caretCoordinatesAtom,
   currentCharIndexAtom,
   onKeyPressAtom,
   typingRunStateAtom,
   wordsAtom,
} from "@atoms/editor";
import { calculateSHA256, cn } from "@lib/utils";
import { useBoolean } from "@hooks/useBoolean";
import { AnimatePresence, motion } from "framer-motion";
import TypingLetters from "@components/editor/TypingLetters";
import { TypingRunState } from "@atoms/consts";
import { pauseAtom } from "@atoms/timer";
import { playSoundAtom } from "@app/settings/atoms";
import { soundOnClickAtom } from "@atoms/user";
import { SOUNDS } from "@lib/sounds";
import TypingCaret from "@components/editor/TypingCaret";
import FocusLostWarning from "@components/editor/FocusLostWarning";
import PaceTypingCaret from "./PaceTypingCaret";

export interface TypingInputProps {
}

const TypingInput = ({}: TypingInputProps) => {
   const pause = useSetAtom(pauseAtom);
   const { top, left } = useAtomValue(caretCoordinatesAtom);
   const onKeyDown = useSetAtom(onKeyPressAtom);
   const editorRef = useRef<HTMLDivElement>();
   const playSound = useSetAtom(playSoundAtom);
   const userSoundOnClick = useAtomValue(soundOnClickAtom) as string;

   useEffect(() => editorRef?.current?.focus(), []);

   const timerState = useAtomValue(typingRunStateAtom);
   const currentCharIndex = useAtomValue(currentCharIndexAtom);
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
                     }, 1000);
                  }
               }}
               style={{
                  caretColor: `transparent`,
               }}
               key={calculateSHA256(words.join(`,`))}
               id={`editor-words`}
               ref={editorRef}
               className={cn(`bg-transparent flex w-full items-center gap-2 text-wrap break-normal !py-2 cursor-default focus:!outline-none flex-wrap mt-8 `,
                  showFocusLost && `backdrop-blur-md`)}
               tabIndex={0}
               autoFocus
               onKeyDown={async e => {
                  if (timerState === TypingRunState.FINISHED) return null;

                  const soundIndex = SOUNDS.findIndex(sound => sound === userSoundOnClick);
                  if (soundIndex > -1) {
                     await playSound(soundIndex);
                  }
                  onKeyDown(e);
               }}>
               {top !== 0 && left !== 0 && (
                  <TypingCaret coords={{ top, left }} />
               )}
               {top !== 0 && left !== 0 && currentCharIndex >= 1 && (
                  <PaceTypingCaret coords={{ top, left }} />
               )}
               <AnimatePresence>
                  {showFocusLost && <FocusLostWarning onClick={() => setShowFocusLost(false)} />}
               </AnimatePresence>
               <TypingLetters />
            </motion.div>
         </AnimatePresence>
      </Fragment>
   );
};

export default TypingInput;