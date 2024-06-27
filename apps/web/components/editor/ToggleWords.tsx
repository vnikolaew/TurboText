"use client";
import React, { useMemo } from "react";
import { useAtomValue } from "jotai";
import {
   lettersCorrectnessAtom,
   toggleWordsAtom,
   typedLettersAtom,
   wordRangesAtom,
   wordsAtom,
   wordsCompletionTimesAtom,
} from "@atoms/editor";
import { range } from "lodash";
import { cn } from "@lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { TypedLetterInfo } from "@atoms/consts";

export interface ToggleWordsProps {
}

const ToggleWords = ({}: ToggleWordsProps) => {
   const toggleWords = useAtomValue(toggleWordsAtom);

   const wordRanges = useAtomValue(wordRangesAtom);
   const words = useAtomValue(wordsAtom);

   return (
      <AnimatePresence>
         {toggleWords &&
            <motion.div
               layout
               initial={{
                  opacity: 0,
                  height: 0,
               }}
               exit={{
                  opacity: 0,
                  height: 0,
               }}
               animate={{
                  opacity: 100,
                  height: `100%`,
               }}
               transition={{ duration: .2 }}
               key={`words`} className={`text-main flex items-center gap-1 w-full`}>
               {wordRanges.map(({ range: [start, end], word }, index) => (
                  <Word key={`word-${index}-${word}`} index={index} start={start} end={end} word={word} />
               ))}
            </motion.div>
         }
      </AnimatePresence>
   );
};

const Word = ({ word, index, start, end }: { word: string, index: number, start: number, end: number }) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const letterCorrectness = useAtomValue(lettersCorrectnessAtom)

   const wordCompletionTimes = useAtomValue(wordsCompletionTimesAtom);
   const wpm = useMemo(() => {
      const time = wordCompletionTimes
         .find(({ word: w, range }) =>
            range[0] === start && range[1] === end && word === w);
      if (!time) return 0;

      return ((60 * 1000) / time.time) * word.length / 5;
   }, [wordCompletionTimes, start, end, word]);

   const isWordErrored = useMemo(() =>
         range(start, end + 1)
            .map((i) => letterCorrectness[i] === true)
            .some(x => !x),
      [start, end, typedLetters]);

   return (
      <div
         className={`group flex flex-col gap-0 items-start justify-center hover:!bg-accent rounded-md p-2`}
         key={`word-${index}-${word}`}
      >
         <div
            className={cn(`flex items-center gap-1 relative`)}>
            {isWordErrored && (
               <div className={`absolute bottom-0 w-full left-0 h-0.5 bg-red-700`} />
            )}
            {range(start, end + 1)
               .map(i => typedLetters.toReversed().find(l => l.charIndex === i) as TypedLetterInfo)
               .map((letter, i) => {
                  return !letter ? null : (
                     <span className={cn(`text-sm`, letterCorrectness[letter.charIndex] ? `text-white` : `text-red-700`)}
                           key={`word-${i}}`}>
                  {letter.letter}
               </span>
                  );

               })}
         </div>
         <span
            className={`text-xs !text-secondary invisible group-hover:!visible`}>{Math.round(wpm).toFixed(0)} wpm</span>
      </div>
   );

};

export default ToggleWords;