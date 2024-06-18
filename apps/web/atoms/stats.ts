import { atom } from "jotai/index";
import { groupBy } from "lodash";
import { kogasa, mean, roundTo2, stdDev } from "@lib/numbers";
import {
   totalRunTimeAtom,
   typedLettersAtom,
   typingModeAtom,
} from "@atoms/editor";
import { wordsCountsAtom } from "@atoms/words";
import { DEFAULT_WORD_COUNT, TypingMode } from "@atoms/consts";

export const consistencyScoreAtom = atom<number>((get) => {
   const typedLettersGrouped = Object.entries(groupBy(
      get(typedLettersAtom),
      l => Math.floor(l.timestamp / 1000)))
      .map(([k, v]) => v.length);

   const rawPerSecond = typedLettersGrouped.map((count) =>
      Math.round((count / 5) * 60),
   );

   const stddev = stdDev(rawPerSecond);
   const avg = mean(rawPerSecond);
   return roundTo2(kogasa(stddev / avg));
});
consistencyScoreAtom.debugLabel = `consistencyScoreAtom`;

export const wpmAtom = atom<number>(get => {
   const mode = get(typingModeAtom);
   const wordCount = get(wordsCountsAtom);
   const totalRunTime = get(totalRunTimeAtom);

   return (mode === TypingMode.TIME ? DEFAULT_WORD_COUNT : wordCount) / (totalRunTime / 1_000) * 60;
});
wpmAtom.debugLabel = `wpmAtom`;

