"use client"
import { atom } from "jotai/index";
import {
   currentCharIndexAtom,
  lettersCorrectnessAtom, startTimeAtom,
   typedLettersAtom,
   typingModeAtom,
   typingRunStateAtom,
   wordsAtom,
} from "@atoms/editor";
import { generate } from "random-words";
import { currentTimestampAtom, timeAtom } from "@atoms/timer";
import { generateWordsAtom, wordsCountsAtom } from "@atoms/words";
import { TypingMode, TypingRunState } from "./consts";



export const newTestAtom = atom(
   null, // it's a convention to pass `null` for the first argument
   async (get, set) => {
      const count = get(wordsCountsAtom);
      const words = generate(count) as string[];
      const time = get(timeAtom);

      const mode = get(typingModeAtom);
      if (mode === TypingMode.WORDS) await set(generateWordsAtom, count);

      set(typedLettersAtom, []);
      set(currentTimestampAtom, time!);
      set(typingRunStateAtom, TypingRunState.STOPPED);
      set(currentCharIndexAtom, -1);
      set(startTimeAtom, 0);
      set(lettersCorrectnessAtom, Array
         .from({ length: words.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]);

   },
);
newTestAtom.debugLabel = `newTestAtom`;

export const restartAtom = atom(
   null, // it's a convention to pass `null` for the first argument
   (get, set) => {
      const words = get(wordsAtom);
      const time = get(timeAtom);

      set(typedLettersAtom, []);
      set(currentTimestampAtom, time);
      set(typingRunStateAtom, TypingRunState.STOPPED);
      set(currentCharIndexAtom, -1);
      set(startTimeAtom, 0);
      set(lettersCorrectnessAtom, Array
         .from({ length: words.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]);

   },
);
restartAtom.debugLabel = `restartAtom`;
