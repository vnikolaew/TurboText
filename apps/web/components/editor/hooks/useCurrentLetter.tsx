import { caretCoordinatesAtom, currentCharIndexAtom } from "@atoms/editor";
import useWindowScroll from "@hooks/useWindowScroll";
import { useAtom, useAtomValue } from "jotai/index";
import { useEffect, useRef } from "react";

export function useCurrentLetter() {
   const currentCharIndex = useAtomValue(currentCharIndexAtom);
   const currentLetterRef = useRef<HTMLSpanElement>();
   const [, setCoords] = useAtom(caretCoordinatesAtom);
   const { y: windowScroll } = useWindowScroll();

   useEffect(() => {
      const rects = currentLetterRef?.current?.getBoundingClientRect();
      if (!rects) return;

      if (currentCharIndex <= -1) {
         setCoords({ top: rects.top + windowScroll, left: rects.left });
      } else {
         setCoords({
            top: rects.top + windowScroll,
            left: rects.left + rects.width + 1,
         });
      }
   }, [currentCharIndex, windowScroll]);

   return { currentCharIndex, currentLetterRef };
}
