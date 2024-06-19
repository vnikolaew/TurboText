"use client";
import React, { Fragment, useEffect, useRef } from "react";
import Letter from "@components/common/Letter";
import { cn } from "@lib/utils";
import { useAtomValue } from "jotai";
import { caretCoordinatesAtom, currentCharIndexAtom, lettersCorrectnessAtom, wordsAtom } from "@atoms/editor";
import { useAtom } from "jotai/index";

export interface TypingLettersProps {
}

const TypingLetters = ({}: TypingLettersProps) => {
      const words = useAtomValue(wordsAtom);
      const currentCharIndex = useAtomValue(currentCharIndexAtom);
      const lettersCorrectness = useAtomValue(lettersCorrectnessAtom);
      const currentLetterRef = useRef<HTMLSpanElement>();
      const [, setCoords] = useAtom(caretCoordinatesAtom);

      useEffect(() => {
         const rects = currentLetterRef?.current?.getBoundingClientRect();
         if (!rects) return;

         if (currentCharIndex <= -1) {
            setCoords({ top: rects.top, left: rects.left });
         } else {
            setCoords({ top: rects.top, left: rects.left + rects.width + 1 });
         }
      }, [currentCharIndex]);

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