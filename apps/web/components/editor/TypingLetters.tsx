"use client";
import React, { Fragment } from "react";
import Letter from "@components/common/Letter";
import { useAtomValue } from "jotai";
import { wordsAtom } from "@atoms/editor";
import { flipColorsAtom } from "@atoms/user";
import { sum } from "lodash";
import { cn } from "@lib/utils";
import { useCurrentLetter } from "@components/editor/hooks/useCurrentLetter";
import { useLettersStyle } from "@components/editor/hooks/useLettersStyle";

export interface TypingLettersProps {
}

const TypingLetters = ({}: TypingLettersProps) => {
      const words = useAtomValue(wordsAtom);
      const { currentLetterRef, currentCharIndex } = useCurrentLetter();
      const flipTestColors = useAtomValue(flipColorsAtom) as boolean;

      const { getLetterCn, letterStyle } = useLettersStyle();

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