"use client";
import React, { Fragment, useCallback, useMemo } from "react";
import Letter from "@components/common/Letter";
import { useAtomValue } from "jotai";
import { lettersCorrectnessAtom, wordsAtom } from "@atoms/editor";
import { blindModeAtom, colorfulModeAtom, flipColorsAtom, fontSizeAtom } from "@atoms/user";
import { sum } from "lodash";
import { cn } from "@lib/utils";
import { useCurrentLetter } from "@components/editor/hooks/useCurrentLetter";

export interface TypingLettersProps {
}

const THEME_COLOR = `text-amber-500`;

const TypingLetters = ({}: TypingLettersProps) => {
      const words = useAtomValue(wordsAtom);
      const lettersCorrectness = useAtomValue(lettersCorrectnessAtom);
      const blindMode: boolean = useAtomValue(blindModeAtom);
      const { currentLetterRef, currentCharIndex } = useCurrentLetter();

      const fontSize = useAtomValue(fontSizeAtom) as number;
      const flipTestColors = useAtomValue(flipColorsAtom) as boolean;
      const themeColorfulMode = useAtomValue(colorfulModeAtom) as boolean;

      const letterStyle = useMemo(() => ({ fontSize: `${fontSize * 8}px` }), [fontSize]);

      const getLetterCn = useCallback((index: number) => {
         const correct = lettersCorrectness[index];

         if (!flipTestColors) {
            const correctColor = (themeColorfulMode ? THEME_COLOR : `text-main`);

            return correct ? correctColor
               : (blindMode && correct === false) ? correctColor : (correct === false ? `${themeColorfulMode ? THEME_COLOR : `text-red-500`} line-through decoration-red-500 decoration-3` : ``);
         }

         const correctColor = (themeColorfulMode ? THEME_COLOR : `text-secondary`);

         return correct ? correctColor
            : (blindMode && correct === false) ? correctColor : (correct === false ? `${themeColorfulMode ? THEME_COLOR : `text-red-500`} line-through decoration-red-500 decoration-3`
               : `text-main`);
      }, [lettersCorrectness, words, flipTestColors]);

      return (
         <Fragment>
            {words
               .map((word, index) => (
                  <span data-word={true} className={
                     cn(`inline-flex items-center gap-.5 text-secondary`,
                        flipTestColors && `text-main`)} key={word + index}>
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