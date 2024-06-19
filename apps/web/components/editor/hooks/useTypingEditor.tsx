"use client";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import {
   currentCharIndexAtom,
   lettersCorrectnessAtom,
   onKeyPressAtom,
   typedLettersAtom,
   wordRangesAtom,
} from "@atoms/editor";
import { useSetAtom } from "jotai/index";


export interface TypedLetterInfo {
   charIndex: number;
   timestamp: number;
   letter: string;
   correct?: boolean | null;
   flags?: number | null;
}

export interface WordRange {
   word: string;
   range: [number, number];
}

export function useTypingEditor() {
   const [typedLetters] = useAtom(typedLettersAtom);
   const wordRanges = useAtomValue(wordRangesAtom);

   const [currentCharIndex] = useAtom(currentCharIndexAtom);
   const [lettersCorrectness] = useAtom(lettersCorrectnessAtom);
   const onKeyPress = useSetAtom(onKeyPressAtom);

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

   return {
      top,
      left,
      editorRef,
      currentLetterRef,
      currentCharIndex,
      lettersCorrectness,
      onKeyDown: onKeyPress,
      typedLetters,
      wordRanges,
   } as const;
}