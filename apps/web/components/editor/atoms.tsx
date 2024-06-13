import { atom } from "jotai";
import { generate } from "random-words";
import { TypedLetterInfo, WordRange } from "@components/editor/hooks/useTypingEditor";

export enum TimerState {
   STOPPED = `STOPPED`,
   RUNNING = `RUNNING`,
   PAUSED = `PAUSED`,
   FINISHED = `FINISHED`
}

// EDITOR

const WORDS = generate(40) as string[];

export const TIME = 10;

export const wordsAtom = atom<string[]>(WORDS);
wordsAtom.debugLabel = `wordsAtom`;

export const charsByIndexAtom = atom((get) => {
   const words = get(wordsAtom);
   return words.flatMap((word, index) => {
      const currIndex = words.slice(0, index).reduce((a, b) => a + b.length, 0);
      return Object
         .entries([...word])
         .map(([index, char]) => {
            return ({ [currIndex + parseInt(index)]: char });
         });
   }).reduce((a, b) => ({ ...a, ...b }), {});
});
charsByIndexAtom.debugLabel = `charsByIndexAtom`;

export const wordRangesAtom = atom<WordRange[]>((get) => {
   const words = get(wordsAtom);
   return words.map((word, index) => {
      const startIndex = words.slice(0, index).reduce((a, b) => a + b.length, 0);
      return {
         word,
         range: [startIndex, startIndex + word.length - 1] as const,
      };
   });
});
wordRangesAtom.debugLabel = `wordRangesAtom`;

export const completedWordsAtom  = atom((get) => {
   const wordRanges = get(wordRangesAtom)
   const typedLetters = get(typedLettersAtom)

   return wordRanges
      .filter(({ range: [start, end] }) => {
         return end <= (typedLetters.at(-1)?.charIndex ?? 0);
      });
});
completedWordsAtom.debugLabel = `completedWordsAtom`;

export const startTimeAtom = atom<number>(0);
startTimeAtom.debugLabel = `startTimeAtom`;

export const currentCharIndexAtom = atom<number>(-1);
currentCharIndexAtom.debugLabel = `currentCharIndexAtom`;

export const lettersCorrectnessAtom = atom<(boolean | null)[]>(
   Array
      .from({ length: WORDS.reduce((a, b) => a + b.length, 0) })
      .fill(null) as null[],
);
lettersCorrectnessAtom.debugLabel = `lettersCorrectnessAtom`;

export const lettersCorrectnessPercentageAtom = atom<number>((get) => {
   const lettersCorrectness = get(lettersCorrectnessAtom);
   return lettersCorrectness.filter(Boolean).length / lettersCorrectness.filter(l => l !== null).length * 100;
});

lettersCorrectnessPercentageAtom.debugLabel = `lettersCorrectnessPercentageAtom`;


export const typedLettersAtom = atom<TypedLetterInfo[]>([]);
typedLettersAtom.debugLabel = `typedLettersAtom`;

export const restartAtom = atom(
   null, // it's a convention to pass `null` for the first argument
   (get, set, update) => {
      const words = generate(40) as string[];

      set(wordsAtom, words);
      set(timerStateAtom, TimerState.STOPPED);
      set(currentCharIndexAtom, -1)
      set(startTimeAtom, 0);
      set(currentTimestampAtom, TIME!);
      set(lettersCorrectnessAtom, Array
         .from({ length: words.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]);

   },
);
restartAtom.debugLabel = `restartAtom`;

// TIMER
export const currentTimestampAtom = atom<number>(TIME!);
currentTimestampAtom.debugLabel = `currentTimestampAtom`;

export const timerStateAtom = atom<TimerState>(TimerState.STOPPED);
timerStateAtom.debugLabel = `timerStateAtom`;