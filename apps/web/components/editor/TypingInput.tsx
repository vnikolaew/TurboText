"use client";
import React, { Fragment, useEffect, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { caretCoordinatesAtom, onKeyPressAtom, typingRunStateAtom, wordsAtom } from "@atoms/editor";
import { calculateSHA256, cn } from "@lib/utils";
import { useBoolean } from "@hooks/useBoolean";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointer } from "lucide-react";
import TypingLetters from "@components/editor/TypingLetters";
import { TypingRunState } from "@atoms/consts";
import { pauseAtom, resumeAtom } from "@atoms/timer";
import { playSoundAtom } from "@app/settings/atoms";
import { soundOnClickAtom } from "@atoms/user";
import { SOUNDS } from "@lib/sounds";

export interface TypingInputProps {
}

const TypingInput = ({}: TypingInputProps) => {
   const pause = useSetAtom(pauseAtom);
   const resume = useSetAtom(resumeAtom);
   const { top, left } = useAtomValue(caretCoordinatesAtom);
   const onKeyDown = useSetAtom(onKeyPressAtom);
   const editorRef = useRef<HTMLDivElement>();
   const playSound = useSetAtom(playSoundAtom)
   const userSoundOnClick =useAtomValue(soundOnClickAtom) as string

   useEffect(() => editorRef?.current?.focus(), []);


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
               ref={editorRef}
               className={cn(`bg-transparent flex w-full items-center gap-2 text-wrap break-normal !py-2 cursor-default focus:!outline-none flex-wrap mt-8 relative`,
                  showFocusLost && `backdrop-blur-md`)}
               tabIndex={0}
               autoFocus
               onKeyDown={async e => {
                  if(timerState === TypingRunState.FINISHED) return null;

                  const soundIndex = SOUNDS.findIndex(sound => sound === userSoundOnClick);
                  if(soundIndex > -1) {
                     console.log({ soundIndex });
                     await playSound(soundIndex)
                  }
                  onKeyDown(e);
               }}>
               <div
                  style={{
                    top, left,
                     transition: `left 100ms`,
                  }}
                  className={`h-[2rem] w-[2px] bg-neutral-100 animate-pulse absolute z-10 text-red-500 `}></div>
               <AnimatePresence>
                  {showFocusLost && (
                     <div className={`absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-transparent flex items-center justify-center`}>
                        <motion.div
                           id={`focus-lost`}
                           initial={{ opacity: 100 }}
                           animate={{ opacity: 100 }}
                           transition={{ duration: .2 }}
                           exit={{ opacity: 0 }}
                           onKeyDown={console.log}
                           onClick={_ => {
                              if (timerState === TypingRunState.PAUSED) {
                                 console.log(`Resuming`);
                                 resume();
                              }

                              setShowFocusLost(false);
                           }}
                           className={`text-neutral-300 flex items-center gap-2 !z-[100]`}>
                           <MousePointer size={18} />
                           <span className={`text-sm`}>
                       Click here or press any key to focus
                   </span>
                        </motion.div>
                     </div>
                  )}
               </AnimatePresence>
               <TypingLetters />
            </motion.div>
         </AnimatePresence>
      </Fragment>
   );
};

export default TypingInput;