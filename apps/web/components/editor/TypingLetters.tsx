"use client";
import React, { Fragment } from "react";
import Letter from "@components/common/Letter";
import { cn } from "@lib/utils";
import { useAtomValue } from "jotai";
import { currentCharIndexAtom, lettersCorrectnessAtom, wordsAtom } from "@atoms/editor";

export interface TypingLettersProps {
   currentLetterRef?: React.RefObject<HTMLElement>;
}

const TypingLetters = ({ currentLetterRef }: TypingLettersProps) => {
   const words = useAtomValue(wordsAtom)
   const currentCharIndex = useAtomValue(currentCharIndexAtom)
   const lettersCorrectness = useAtomValue(lettersCorrectnessAtom)

      return (
         <Fragment>
            {words
               .map((word, index) => (
                  <span className={`inline-flex items-center gap-.5 text-neutral-600 `} key={word + index}>
                       {[...word].map((char, i) => (
                          <Letter
                             ref={currentCharIndex === i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0) ? currentLetterRef! : ((currentCharIndex <= 0 && index === 0 && i === 0) ? currentLetterRef : null)}
                             className={cn(
                                lettersCorrectness[i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] && `text-neutral-300`,
                                lettersCorrectness[i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] === false && `text-red-500 line-through decoration-red-500 decoration-3`,
                             )} key={char + i}>{char}</Letter>
                       ))}
                   </span>
               ))}
         </Fragment>
      )
         ;
   }
;

export default TypingLetters;