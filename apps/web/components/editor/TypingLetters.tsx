"use client";
import React, { Fragment, useCallback, useMemo } from "react";
import Letter from "@components/common/Letter";
import { useAtomValue } from "jotai";
import { lettersCorrectnessAtom, wordsAtom } from "@atoms/editor";
import { colorfulModeAtom, flipColorsAtom, fontSizeAtom } from "@atoms/user";
import { sum } from "lodash";
import { cn } from "@lib/utils";
import { useCurrentLetter } from "@components/editor/hooks/useCurrentLetter";

export interface TypingLettersProps {
}

const THEME_COLOR = `text-amber-500`;

const TypingLetters = ({}: TypingLettersProps) => {
      const words = useAtomValue(wordsAtom);
      const lettersCorrectness = useAtomValue(lettersCorrectnessAtom);
      const { currentLetterRef, currentCharIndex } = useCurrentLetter();

      const fontSize = useAtomValue(fontSizeAtom) as number;
      const flipTestColors = useAtomValue(flipColorsAtom) as boolean;
      const themeColorfulMode = useAtomValue(colorfulModeAtom) as boolean;

      const letterStyle = useMemo(() => ({ fontSize: `${fontSize * 8}px` }), [fontSize]);

      const getLetterCn = useCallback((index: number) => {
         const correct = lettersCorrectness[index];

         if (!flipTestColors) {
            return correct ? (themeColorfulMode ? THEME_COLOR : `text-neutral-300`)
               : (correct === false ? `${themeColorfulMode ? THEME_COLOR : `text-red-500`} line-through decoration-red-500 decoration-3` : ``);
         }
         return correct ? (themeColorfulMode ? THEME_COLOR : `text-neutral-600`)
            : (correct === false ? `${themeColorfulMode ? THEME_COLOR : `text-red-500`} line-through decoration-red-500 decoration-3` : `text-neutral-300`);
      }, [lettersCorrectness, words, flipTestColors]);

      return (
         <Fragment>
            {words
               .map((word, index) => (
                  <span data-word={true} className={
                     cn(`inline-flex items-center gap-.5 text-neutral-600 `,
                        flipTestColors && `text-neutral-300`)} key={word + index}>
                       {[...word].map((char, i) => (
                          <Letter
                             ref={sum(words.slice(0, index).map(s => s.length)) + i === currentCharIndex ? currentLetterRef : null}
                             style={letterStyle}
                             className={getLetterCn(sum(words.slice(0, index).map(s => s.length)) + i)}
                             key={char + i}>{char}</Letter>
                       ))}
                   </span>
               ))}
         </Fragment>
      );
   }
;

export default TypingLetters;