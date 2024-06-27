import { atom } from "jotai/index";
import { groupBy, sum } from "lodash";
import { kogasa, mean, roundTo2, stdDev } from "@lib/numbers";
import {
   currentCharIndexAtom,
   lettersCorrectnessAtom,
   totalRunTimeAtom,
   typedLettersAtom,
   typingRunStateAtom,
   wordRangesAtom,
   wordsCompletionTimesAtom,
   wordsCorrectnessAtom,
} from "@atoms/editor";
import { TypingRunState } from "@atoms/consts";

export const consistencyScoreAtom = atom<number>((get) => {
   const typedLettersGrouped = Object.entries(groupBy(
      get(typedLettersAtom),
      l => Math.floor(l.timestamp / 1000)))
      .map(([k, v]) => v.length);

   const rawPerSecond = typedLettersGrouped.map((count) =>
      Math.round((count / 5) * 60),
   );

   const [stddev, avg] = [stdDev(rawPerSecond), mean(rawPerSecond)];
   return roundTo2(kogasa(stddev / avg));
});
consistencyScoreAtom.debugLabel = `consistencyScoreAtom`;

export const correctWordCharsAtom = atom<number>(get => {
   const wordRanges = get(wordRangesAtom);
   const wordCorrectness = get(wordsCorrectnessAtom);
   const letterCorrectness = get(lettersCorrectnessAtom);
   const state = get(typingRunStateAtom);
   const currCharIndex = state === TypingRunState.FINISHED ? get(lettersCorrectnessAtom).length : get(currentCharIndexAtom);

   const correctWordChars = sum(wordRanges
      .filter(({ range: [, end] }) => end <= currCharIndex)
      .map(({ range: [start, end] }, i) =>
         wordCorrectness[i] === false
            ? 0
            : letterCorrectness.slice(start, end + 1).filter(Boolean)?.length ?? 0));

   return correctWordChars;
});
correctWordCharsAtom.debugLabel = `correctWordChars`;

export const wpmAtom = atom<number>(get => {
   const wordCompletionTimes = get(wordsCompletionTimesAtom);
   const totalTime = get(totalRunTimeAtom);
   const correctWordChars = get(correctWordCharsAtom);

   const time = totalTime === 0 ? sum(
      wordCompletionTimes.map(t => t.time)) : totalTime;

   return correctWordChars * (60 / (time / 1000)) / 5;

});
wpmAtom.debugLabel = `wpmAtom`;



export const correctWordsAtom = atom<number>(get => {
   const wordCorrectness = get(wordsCorrectnessAtom);
   return wordCorrectness.filter(x =>  x === true).length;
});
correctWordsAtom.debugLabel = `correctWordsAtom`;
