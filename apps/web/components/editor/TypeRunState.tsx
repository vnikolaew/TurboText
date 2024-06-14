"use client";
import { useAtom, useAtomValue } from "jotai";
import React from "react";
import {
   completedWordsAtom,
   currentTimestampAtom, TypingMode,
   typingModeAtom, TypingRunState,
   typingRunStateAtom,
   wordsCountsAtom,
} from "@atoms/editor";
import { AnimatePresence, motion } from "framer-motion";

export interface TypeRunStateProps {
}

const TypeRunState = ({}: TypeRunStateProps) => {
   const currentTimestamp = useAtomValue(currentTimestampAtom);
   const timerState = useAtomValue(typingRunStateAtom);

   const typingMode = useAtomValue(typingModeAtom);
   const wordCounts = useAtomValue(wordsCountsAtom);
   const completedWords = useAtomValue(completedWordsAtom);

   if (timerState !== TypingRunState.RUNNING) return null;

   let children;
   if (typingMode === TypingMode.TIME) {
      children = <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 100 }}
         exit={{ opacity: 0 }}
         transition={{ duration: .3}}
         className={`text-amber-600 text-5xl inline-flex items-center gap-4`}>
         {currentTimestamp}
         <span
            className={`text-xl`}>
            {timerState}
         </span>
      </motion.div>;
   }  else if (typingMode === TypingMode.WORDS) {
      children = <motion.div
         initial={{ opacity: 100 }}
         animate={{ opacity: 100 }}
         transition={{ duration: .3}}
         exit={{ opacity: 0 }}
         className={`text-amber-600 text-5xl inline-flex items-center gap-4`}>
         {completedWords.length}/{wordCounts}
      </motion.div>;
   } else children = null;

   return <AnimatePresence initial>{children}</AnimatePresence>;
};

export default TypeRunState;