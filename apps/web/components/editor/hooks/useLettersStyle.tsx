"use client";

import { useCallback, useMemo } from "react";
import { useAtomValue } from "jotai/index";
import { blindModeAtom, colorfulModeAtom, flipColorsAtom, fontSizeAtom } from "@atoms/user";
import { lettersCorrectnessAtom, wordsAtom } from "@atoms/editor";

const THEME_COLOR = `text-accent`;

export function useLettersStyle() {
   const fontSize = useAtomValue(fontSizeAtom) as number;
   const words = useAtomValue(wordsAtom);

   const lettersCorrectness = useAtomValue(lettersCorrectnessAtom);
   const blindMode: boolean = useAtomValue(blindModeAtom);

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

   return { letterStyle, getLetterCn };
}