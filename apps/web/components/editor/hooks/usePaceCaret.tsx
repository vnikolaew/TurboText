"use client";

import { wordsCountsAtom } from "@atoms/words";
import { useAtomValue } from "jotai/index";
import { useEffect, useRef, useState } from "react";

export function usePaceCaret({ top, left }: { top: number; left: number }) {
   const intervalRef = useRef<NodeJS.Timer>();
   const wordCount = useAtomValue(wordsCountsAtom);
   const [paceCaretCoords, setPaceCaretCoords] = useState({ top, left });

   useEffect(() => {
      const wordElementsElement = document.getElementById(`editor-words`)!;

      const endLeft =
         wordElementsElement!.offsetLeft + wordElementsElement.clientWidth;

      const wordElementsWidth = wordElementsElement?.clientWidth!;
      const paceCaretSpeedAbsolute =
         wordElementsWidth / ((wordCount / 50) * 60);

      intervalRef.current = setInterval(() => {
         setPaceCaretCoords((c) => ({
            ...c,
            left: c.left + paceCaretSpeedAbsolute / 10,
         }));
      }, 100);

      return () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current!);
            setPaceCaretCoords({ top, left });
         }
      };
   }, []);

   useEffect(() => {
      const wordElementsElement = document.getElementById(`editor-words`)!;

      const endLeft =
         wordElementsElement!.offsetLeft + wordElementsElement.clientWidth;

      if (paceCaretCoords.left > endLeft && intervalRef?.current) {
         clearInterval(intervalRef.current!);
      }
   }, [paceCaretCoords.left]);

   return { paceCaretCoords, wordCount, intervalRef };
}
