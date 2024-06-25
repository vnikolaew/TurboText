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

   return { paceCaretCoords, wordCount, intervalRef };
}