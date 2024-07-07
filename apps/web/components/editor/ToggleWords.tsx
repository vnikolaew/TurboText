"use client";
import { TypedLetterInfo } from "@atoms/consts";
import {
   lettersCorrectnessAtom,
   toggleWordsAtom,
   typedLettersAtom,
   wordRangesAtom,
   wordsCompletionTimesAtom,
} from "@atoms/editor";
import { cn } from "@lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { range } from "lodash";
import { useMemo } from "react";

export interface ToggleWordsProps {}

const ToggleWords = ({}: ToggleWordsProps) => {
   const toggleWords = useAtomValue(toggleWordsAtom);
   const wordRanges = useAtomValue(wordRangesAtom);

   return (
      <AnimatePresence>
         {toggleWords && (
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
               transition={{ duration: 0.2 }}
               key={`words`}
               className={`flex w-full items-center gap-1 text-main`}
            >
               {wordRanges.map(({ range: [start, end], word }, index) => (
                  <Word
                     key={`word-${index}-${word}`}
                     index={index}
                     start={start}
                     end={end}
                     word={word}
                  />
               ))}
            </motion.div>
         )}
      </AnimatePresence>
   );
};

const Word = ({
   word,
   index,
   start,
   end,
}: {
   word: string;
   index: number;
   start: number;
   end: number;
}) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const letterCorrectness = useAtomValue(lettersCorrectnessAtom);

   const wordCompletionTimes = useAtomValue(wordsCompletionTimesAtom);
   const wpm = useMemo(() => {
      const time = wordCompletionTimes.find(
         ({ word: w, range }) =>
            range[0] === start && range[1] === end && word === w
      );
      if (!time) return 0;

      return (((60 * 1000) / time.time) * word.length) / 5;
   }, [wordCompletionTimes, start, end, word]);

   const isWordErrored = useMemo(
      () =>
         range(start, end + 1)
            .map((i) => letterCorrectness[i] === true)
            .some((x) => !x),
      [start, end, typedLetters]
   );

   return (
      <div
         className={`group flex flex-col items-start justify-center gap-0 rounded-md p-2 hover:!bg-accent`}
         key={`word-${index}-${word}`}
      >
         <div className={cn(`relative flex items-center gap-1`)}>
            {isWordErrored && (
               <div
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-red-700`}
               />
            )}
            {range(start, end + 1)
               .map(
                  (i) =>
                     typedLetters
                        .toReversed()
                        .find((l) => l.charIndex === i) as TypedLetterInfo
               )
               .map((letter, i) => {
                  return !letter ? null : (
                     <span
                        className={cn(
                           `text-sm`,
                           letterCorrectness[letter.charIndex]
                              ? `text-white`
                              : `text-red-700`
                        )}
                        key={`word-${i}}`}
                     >
                        {letter.letter}
                     </span>
                  );
               })}
         </div>
         <span
            className={`invisible text-xs !text-secondary group-hover:!visible`}
         >
            {Math.round(wpm).toFixed(0)} wpm
         </span>
      </div>
   );
};

export default ToggleWords;
