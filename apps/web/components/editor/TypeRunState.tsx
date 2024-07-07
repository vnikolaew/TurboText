"use client";
import { TypingMode, TypingRunState } from "@atoms/consts";
import {
   completedWordsAtom,
   typingModeAtom,
   typingRunStateAtom,
} from "@atoms/editor";
import { currentTimestampAtom } from "@atoms/timer";
import { wordsCountsAtom } from "@atoms/words";
import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai";

export interface TypeRunStateProps {}

const TypeRunState = ({}: TypeRunStateProps) => {
   const currentTimestamp = useAtomValue(currentTimestampAtom);
   const timerState = useAtomValue(typingRunStateAtom);

   const typingMode = useAtomValue(typingModeAtom);
   const wordCounts = useAtomValue(wordsCountsAtom);
   const completedWords = useAtomValue(completedWordsAtom);

   if (timerState !== TypingRunState.RUNNING) return null;

   let children;
   if (typingMode === TypingMode.TIME) {
      children = (
         <motion.div
            initial={{ opacity: 100 }}
            key={`time`}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`inline-flex items-center gap-4 text-5xl text-amber-600`}
         >
            {currentTimestamp}
            <span className={`text-xl`}>{timerState}</span>
         </motion.div>
      );
   } else if (typingMode === TypingMode.WORDS) {
      children = (
         <motion.div
            key={`words`}
            initial={{ opacity: 100 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className={`inline-flex items-center gap-4 text-5xl text-amber-600`}
         >
            {completedWords?.length}/{wordCounts}
         </motion.div>
      );
   } else children = null;

   return <AnimatePresence initial>{children}</AnimatePresence>;
};

export default TypeRunState;
