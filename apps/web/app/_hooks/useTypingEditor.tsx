"use client";
import { KeyboardEvent, MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";

export enum TypedLetterFlags {
   DELETED = 1
}

export interface TypedLetterInfo {
   charIndex: number;
   timestamp: number;
   letter: string;
   correct?: boolean;
   flags?: number;
}

export interface WordRange {
   word: string;
   range: [number, number];
}

export function useTypingEditor(words: string[], beginRef: MutableRefObject<HTMLDivElement>, onStart?: () => void) {

   const [startTime, setStartTime] = useState<number>();
   const [typedLetters, setTypedLetters] = useState<TypedLetterInfo[]>([]);

   const wordRanges = useMemo<WordRange[]>(() => {
      return words.map((word, index) => {
         const startIndex = words.slice(0, index).reduce((a, b) => a + b.length, 0);
         return {
            word,
            range: [startIndex, startIndex + word.length - 1] as const,
         };
      });
   }, [words]);

   const charsByIndex: Record<number, string> = useMemo(() => words.flatMap((word, index) => {
      const currIndex = words.slice(0, index).reduce((a, b) => a + b.length, 0);
      return Object
         .entries([...word])
         .map(([index, char]) => {
            return ({ [currIndex + parseInt(index)]: char });
         });
   }).reduce((a, b) => ({ ...a, ...b }), {}), [words]);

   const [currentCharIndex, setCurrentCharIndex] = useState(-1);
   const [wordsCorrectness, setWordsCorrectness] = useState<(boolean | null)[]>(
      Array
         .from({ length: words.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]);

   const currentLetterRef = useRef<HTMLElement>();
   const editorRef = useRef<HTMLDivElement>();

   const [[top, left], setCoords] = useState([0, 0]);

   useEffect(() => {
      editorRef?.current?.focus();
   }, []);

   useEffect(() => {
      const rects = currentLetterRef?.current?.getBoundingClientRect();
      // if(!rects) return;

      if (currentCharIndex <= -1) {
         const rects = beginRef?.current?.getBoundingClientRect();
         setCoords([rects?.top - 14, rects?.left]);
      } else {
         setCoords([rects!.top, rects!.left + rects!.width + 1]);
      }
   }, [currentCharIndex]);

   const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      const charCode = e.key.charCodeAt(0);

      if (e.key === `Backspace`) {
         setCurrentCharIndex(c => Math.max(-1, c - 1));

         setTypedLetters(l => [...l, {
            correct: false,
            timestamp: performance.now() - startTime,
            letter: charsByIndex[currentCharIndex + 1]!,
            flags: TypedLetterFlags.DELETED,
            charIndex: currentCharIndex,
         }]);

         setWordsCorrectness(wc => {
            let wc2 = [...wc];
            wc2[currentCharIndex] = null;
            return wc2;
         });
      }

      if (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
         setCurrentCharIndex(c => c + 1);

         if (currentCharIndex + 1 === 0) {
            setStartTime(performance.now());
            onStart?.();
         }

         const correct = charCode === charsByIndex[currentCharIndex + 1]?.charCodeAt(0);

         setWordsCorrectness(wc => {
            let wc2 = [...wc];
            wc2[currentCharIndex + 1] = correct;
            return wc2;
         });

         setTypedLetters(l => [...l,
            currentCharIndex + 1 === 0 ?
               {
                  charIndex: currentCharIndex + 1,
                  letter: charsByIndex[currentCharIndex + 1]!,
                  timestamp: 0,
                  correct,
               } : {
                  charIndex: currentCharIndex + 1,
                  letter: charsByIndex[currentCharIndex + 1]!,
                  correct,
                  timestamp: performance.now() - startTime,
               }]);
      }
   }, [currentCharIndex]);

   return {
      top,
      left,
      editorRef,
      currentLetterRef,
      currentCharIndex,
      wordsCorrectness,
      onKeyDown,
      typedLetters,
      wordRanges,
   } as const;
}