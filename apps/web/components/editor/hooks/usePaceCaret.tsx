"use client";

import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai/index";
import { wordsCountsAtom } from "@atoms/words";
import { sum } from "lodash";

export function usePaceCaret({ top, left }: { top: number; left: number }) {
   const intervalRef = useRef<NodeJS.Timer>();
   const wordCount = useAtomValue(wordsCountsAtom);
   const [paceCaretCoords, setPaceCaretCoords] = useState({ top, left });

   useEffect(() => {
      const wordElementsElement = document.getElementById(`editor-words`)!;
      const wordHeight = wordElementsElement.querySelector(`span[data-word=true]`)!.clientHeight;

      const endLeft = wordElementsElement!.clientLeft + wordElementsElement.clientWidth;

      const wordElementsWidth = wordElementsElement?.clientWidth!;
      const paceCaretSpeedAbsolute = wordElementsWidth / (wordCount / 50 * 60);

      console.log({ wordHeight });

      intervalRef.current = setInterval(() => {
         if (paceCaretCoords.left > endLeft) clearInterval(intervalRef.current!);
         setPaceCaretCoords(c => ({ ...c, left: c.left + (paceCaretSpeedAbsolute / 10) }));
      }, 100);

      return () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current!);
            setPaceCaretCoords({ top, left });
         }
      };
   }, []);

   useEffect(() => {
      const wordsElement = document.getElementById(`editor-words`)!;
      let wordElements = wordsElement.querySelectorAll(`span[data-word=true]`);
      let totalWidth = sum(Array.from(wordElements).map(e => e.clientWidth));

      const paceCaretSpeedAbsolute = totalWidth / (wordCount / 40 * 60);

      console.log({ totalWidth, paceCaretSpeedAbsolute });
   }, []);

   return { paceCaretCoords, wordCount, intervalRef };
}