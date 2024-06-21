"use client";
import React, { Fragment, useCallback, useEffect, useMemo, useRef } from "react";
import Letter from "@components/common/Letter";
import { useAtomValue } from "jotai";
import { caretCoordinatesAtom, currentCharIndexAtom, lettersCorrectnessAtom, wordsAtom } from "@atoms/editor";
import { useAtom } from "jotai/index";
import { flipColorsAtom, fontSizeAtom } from "@atoms/user";
import { sum } from "lodash";

export interface TypingLettersProps {
}

const TypingLetters = ({}: TypingLettersProps) => {
      const words = useAtomValue(wordsAtom);
      const currentCharIndex = useAtomValue(currentCharIndexAtom);
      const lettersCorrectness = useAtomValue(lettersCorrectnessAtom);

      const currentLetterRef = useRef<HTMLSpanElement>();
      const [, setCoords] = useAtom(caretCoordinatesAtom);

      const fontSize = useAtomValue(fontSizeAtom) as number;
      const flipTestColors = useAtomValue(flipColorsAtom);
      const letterStyle = useMemo(() => ({ fontSize: `${fontSize * 8}px` }), [fontSize]);

      const getLetterCn = useCallback((index: number) => {
         const correct = lettersCorrectness[index];

         if (!flipTestColors) {
            return correct ? `text-neutral-300`
               : (correct === false ? `text-red-500 line-through decoration-red-500 decoration-3` : ``);
         }
         return correct ? `text-red-500 line-through decoration-red-500 decoration-3`
            : (correct === false ? `text-neutral-300` : ``);
      }, [lettersCorrectness, words, flipTestColors]);

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
                             ref={sum(words.slice(0, index).map(s => s.length)) + i === currentCharIndex ? currentLetterRef : null}
                             style={letterStyle}
                             className={getLetterCn(sum(words.slice(0, index).map(s => s.length)) + i)} key={char + i}>{char}</Letter>
                       ))}
                   </span>
               ))}
         </Fragment>
      );
   }
;

export default TypingLetters;