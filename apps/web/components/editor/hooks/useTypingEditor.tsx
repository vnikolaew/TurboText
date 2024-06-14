"use client";
import { useAtom, useAtomValue } from "jotai";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import {
   charsByIndexAtom,
   currentCharIndexAtom,
   lettersCorrectnessAtom,
   startTimeAtom,
   typedLettersAtom,
   wordRangesAtom,
} from "@atoms/editor";
import { useAtomCallback } from "jotai/utils";

export enum TypedLetterFlags {
   INSERTED = 1,
   DELETED = 2
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


export function useTypingEditor(onStart?: () => void) {
   const [typedLetters, setTypedLetters] = useAtom(typedLettersAtom);

   const wordRanges = useAtomValue(wordRangesAtom);
   const charsByIndex: Record<number, string> = useAtomValue(charsByIndexAtom);

   const [currentCharIndex] = useAtom(currentCharIndexAtom);
   const [lettersCorrectness] = useAtom(lettersCorrectnessAtom);

   const currentLetterRef = useRef<HTMLElement>();
   const editorRef = useRef<HTMLDivElement>();

   const [[top, left], setCoords] = useState([0, 0]);

   useEffect(() => editorRef?.current?.focus(), []);

   useEffect(() => {
      const rects = currentLetterRef?.current?.getBoundingClientRect();
      if (!rects) return;

      if (currentCharIndex <= -1) {
         setCoords([rects?.top, rects?.left]);
      } else {
         setCoords([rects!.top, rects!.left + rects!.width + 1]);
      }
   }, [currentCharIndex]);

   const onKeyDown = useAtomCallback(useCallback((get, set, e: KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      let key = e.key;
      let ctrl = e.ctrlKey;

      if (key === `r` && ctrl) window.location.reload();

      const charCode = e.key.charCodeAt(0);
      const startTime = get(startTimeAtom);
      const charsByIndex = get(charsByIndexAtom);
      const currentCharIndex = get(currentCharIndexAtom);

      if (e.key === `Backspace`) {
         set(currentCharIndexAtom, c => Math.max(-1, c - 1));

         set(typedLettersAtom, l => [...l, {
            correct: false,
            timestamp: performance.now() - startTime,
            letter: charsByIndex[currentCharIndex + 1]!,
            flags: TypedLetterFlags.DELETED,
            charIndex: currentCharIndex,
         }]);

         set(lettersCorrectnessAtom, wc => {
            let wc2 = [...wc];
            wc2[currentCharIndex] = null;
            return wc2;
         });
      }

      if (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
         set(currentCharIndexAtom, c => c + 1);

         if (currentCharIndex + 1 === 0) {
            set(startTimeAtom, performance.now());
            onStart?.();
         }

         const correct = charCode === charsByIndex[currentCharIndex + 1]?.charCodeAt(0);
         set(lettersCorrectnessAtom, wc => {
            let wc2 = [...wc];
            wc2[currentCharIndex + 1] = correct;
            return wc2;
         });

         set(typedLettersAtom, l => [...l,
            currentCharIndex + 1 === 0 ?
               {
                  charIndex: currentCharIndex + 1,
                  letter: charsByIndex[currentCharIndex + 1]!,
                  timestamp: 0,
                  correct,
                  flags: TypedLetterFlags.INSERTED,
               } : {
                  charIndex: currentCharIndex + 1,
                  letter: charsByIndex[currentCharIndex + 1]!,
                  correct,
                  timestamp: performance.now() - startTime,
                  flags: TypedLetterFlags.INSERTED,
               }]);
      }
   }, [onStart]), );

return {
   top,
   left,
   editorRef,
   currentLetterRef,
   currentCharIndex,
   lettersCorrectness,
   onKeyDown,
   typedLetters,
   wordRanges,
} as const;
}