import { atom, useAtomValue } from "jotai";
import { generate } from "random-words";
import { TypedLetterInfo, WordRange } from "@components/editor/hooks/useTypingEditor";
import { injectPunctuation, strings } from "@lib/strings";
import { userTestDifficultyAtom } from "@atoms/user";
import { currentTimestampAtom, stopAtom } from "@atoms/timer";
import { useEffect } from "react";
import { useSetAtom } from "jotai/index";
import { LocalStorage } from "@lib/local-storage";
import { TYPING_RUN_LS_KEY } from "@components/editor/TypingPage";
import { TypingRun } from "@components/editor/hooks/useSaveLatestUserRun";
import { maxBy } from "lodash";
import { wordsCountsAtom } from "@atoms/words";
import { DEFAULT_WORD_COUNT, TypingFlags, TypingMode, TypingRunState, TypingRunSuccess } from "@atoms/consts";

// EDITOR

const WORDS = generate(DEFAULT_WORD_COUNT) as string[];

export const typingModeAtom = atom<TypingMode>(TypingMode.TIME);
typingModeAtom.debugLabel = `typingModeAtom`;

export const lettersCorrectnessAtom = atom<(boolean | null)[]>(
   Array
      .from({ length: WORDS.reduce((a, b) => a + b?.length, 0) })
      .fill(null) as null[],
);
lettersCorrectnessAtom.debugLabel = `lettersCorrectnessAtom`;

// @ts-ignore
export const wordsAtom = atom<string[]>(WORDS, (get, set, words: string[]) => {
   set(wordsAtom, words);
   set(lettersCorrectnessAtom, Array
      .from({ length: words?.reduce((a, b) => a + b.length, 0) })
      .fill(null) as null[]);
});
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
         range: [startIndex, startIndex + word?.length - 1] as const,
      };
   });
});
wordRangesAtom.debugLabel = `wordRangesAtom`;

export const wordRangesByEndsAtom = atom<Map<number, [number, number]>>((get) => {
   const wordRanges = get(wordRangesAtom);
   return new Map([...wordRanges.map(({ range: [start, end] }) => [end, [start, end] as const] as const)]);
});
wordRangesByEndsAtom.debugLabel = `wordRangesByEndsAtom`;

export const startTimeAtom = atom<number>(0);
startTimeAtom.debugLabel = `startTimeAtom`;

export const currentCharIndexAtom = atom<number>(-1);
currentCharIndexAtom.debugLabel = `currentCharIndexAtom`;

export const wordsCorrectnessAtom = atom<(boolean | null)[]>(
   (get) => {
      const currIndex = get(currentCharIndexAtom);
      const wordRanges = get(wordRangesAtom);
      const lettersCorrectness = get(lettersCorrectnessAtom).slice(0, currIndex);

      return wordRanges
         .filter(({ range: [, end] }) => end <= currIndex)
         .map(({ range: [start, end] }) => lettersCorrectness.slice(start, end + 1).every(Boolean));
   },
);
wordsCorrectnessAtom.debugLabel = `wordsCorrectnessAtom`;


export const lettersCorrectnessPercentageAtom = atom<number>((get) => {
   const lettersCorrectness = get(lettersCorrectnessAtom);
   return lettersCorrectness.filter(Boolean)?.length / lettersCorrectness.filter(l => l !== null)?.length * 100;
});

lettersCorrectnessPercentageAtom.debugLabel = `lettersCorrectnessPercentageAtom`;

export const typedLettersAtom = atom<TypedLetterInfo[]>([]);
typedLettersAtom.debugLabel = `typedLettersAtom`;


export const completedWordsAtom = atom((get) => {
   const wordRanges = get(wordRangesAtom);
   const typedLetters = get(typedLettersAtom);

   return wordRanges
      .filter(({ range: [, end] }) => {
         return end <= (typedLetters.at(-1)?.charIndex ?? 0);
      });
});
completedWordsAtom.debugLabel = `completedWordsAtom`;


export const wordsCompletionTimesAtom = atom((get) => {
   const typedLetters = get(typedLettersAtom);
   const completedWords = get(completedWordsAtom);

   if (!typedLetters?.length) return [];
   const lettersReversed = typedLetters?.reverse();

   return completedWords
      ?.filter(({ range: [, end] }) =>
         end <= (maxBy(typedLetters, l => l.charIndex)!.charIndex))
      ?.map(({ range: [start, end], word }) => {
         const time = lettersReversed.find(l => l.charIndex === end)?.timestamp!
            - lettersReversed.find(l => l.charIndex === start)?.timestamp!;
         return { word, time };
      });
});
wordsCompletionTimesAtom.debugLabel = `wordsCompletionTimesAtom`;


//@ts-ignore
export const typingFlagsAtom = atom<number>(0, (get, set, flags: number) => {

   const mode = get(typingModeAtom);
   const wc = get(wordsCountsAtom);

   console.log(get(typingFlagsAtom) & TypingFlags.NUMBERS);
   const addingNumbers = Boolean((get(typingFlagsAtom) & TypingFlags.NUMBERS) === 0 && (flags & TypingFlags.NUMBERS));
   const removingNumbers = (get(typingFlagsAtom) & TypingFlags.NUMBERS) && (flags & TypingFlags.NUMBERS) === 0;

   const addingPunctuation = Boolean((get(typingFlagsAtom) & TypingFlags.PUNCTUATION) === 0 && (flags & TypingFlags.PUNCTUATION));
   const removingPunctuation = (get(typingFlagsAtom) & TypingFlags.PUNCTUATION) && (flags & TypingFlags.PUNCTUATION) === 0;

   console.log({ addingNumbers, addingPunctuation });
   if (addingNumbers) {
      if (mode === TypingMode.WORDS) {
         set(wordsAtom, w => {
            const newWords = [...w];
            for (let x = 0; x < 2; x++) {
               newWords[Math.floor(Math.random() * newWords.length)] = Math.floor(Math.random() * 1_000).toString();
            }
            return newWords;
         });
      } else {
         set(wordsAtom, w => {
            const newWords = [...w];
            for (let x = 0; x < 2; x++) {
               newWords.splice(Math.floor(Math.random() * newWords.length), 0, Math.floor(Math.random() * 1_000).toString());
            }
            return newWords;
         });
      }

   } else if (removingNumbers) {
      if (mode === TypingMode.WORDS) set(wordsAtom, generate(wc) as string[]);
      else set(wordsAtom, w => w.map(x => x.replace(/\d+/g, "")).filter(x => !!x.length));
   }

   if (addingPunctuation) {
      const withPunctuation = injectPunctuation(get(wordsAtom), strings.punctuation);
      set(wordsAtom, withPunctuation);
   } else if (removingPunctuation) {
      set(wordsAtom, w => w.map(x => {
         [...strings.punctuation].forEach(char => {
            x = x.replaceAll(char, ``);
         });
         return x;
      }));
   }

   set(typingFlagsAtom, flags);
});
typingFlagsAtom.debugLabel = `typingFlagsAtom`;


export const typingRunStateAtom = atom<TypingRunState>(TypingRunState.STOPPED);
typingRunStateAtom.debugLabel = `typingRunStateAtom`;

export const totalRunTimeAtom = atom<number>(get => {
   const state = get(typingRunStateAtom);
   if (state === TypingRunState.FINISHED) return performance.now() - get(startTimeAtom);
   return get(wordsCompletionTimesAtom)?.reduce((a, b) => a + b?.time, 0);
});
totalRunTimeAtom.debugLabel = `totalRunTimeAtom`;


// @ts-ignore
export const typingRunSuccessAtom = atom<TypingRunSuccess>((get, _) => {
   const runState = get(typingRunStateAtom);

   const userTestDifficulty: string = get(userTestDifficultyAtom);
   const wordsCorrectness = get(wordsCorrectnessAtom);
   const lettersCorrectness = get(lettersCorrectnessAtom);

   const charsByIndex = get(charsByIndexAtom);

   if (userTestDifficulty === `MASTER` && lettersCorrectness.some(x => x === false)) {
      console.log(`Test failed. Level: ${userTestDifficulty}`);

      // Handle failure:
      return TypingRunSuccess.FAILED;
   }

   if (userTestDifficulty === `EXPERT` && wordsCorrectness.some(l => l === false)) {
      console.log(`Test failed. Level: ${userTestDifficulty}`);

      // Handle failure:
      return TypingRunSuccess.FAILED;
   }

   if (runState === TypingRunState.RUNNING) return TypingRunSuccess.INDETERMINATE;
   if (runState === TypingRunState.FINISHED) {
      const correct = lettersCorrectness.filter(l => l === true)?.length;
      console.log({ correct, all: Object.keys(charsByIndex)?.length, userTestDifficulty });

      if (correct === Object.keys(charsByIndex)?.length) {
         return TypingRunSuccess.SUCCESS;
      } else return TypingRunSuccess.FAILED;
   }

   return TypingRunSuccess.INDETERMINATE;
});
typingRunSuccessAtom.debugLabel = `typingRunSuccessAtom`;

export const typingRunAtom = atom<TypingRun>(get => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const time = useAtomValue(currentTimestampAtom);
   const wordCounts = useAtomValue(wordsCountsAtom);
   const mode = useAtomValue(typingModeAtom);
   const flags = useAtomValue(typingFlagsAtom);
   const totalRunTime = useAtomValue(totalRunTimeAtom);

   return {
      totalRunTime,
      typedLetters,
      time: mode === TypingMode.TIME ? time : null,
      wordCounts: mode === TypingMode.WORDS ? wordCounts : null,
      flags,
      mode,
      metadata: {},
   };
}, (get, set, value: TypingRun | null) => {
   set(typingRunAtom, value);
});


export const useTypingRunSuccess = () => {
   const success = useAtomValue(typingRunSuccessAtom);
   const stop = useSetAtom(stopAtom);
   const setState = useSetAtom(typingRunStateAtom);
   const setCurrentCharIndex = useSetAtom(currentCharIndexAtom);
   const setStartTime = useSetAtom(startTimeAtom);
   const typingRun = useAtomValue(typingRunAtom);

   useEffect(() => {
      if (success === TypingRunSuccess.FAILED) {
         console.log(`Test failed!`);
         stop();
         setCurrentCharIndex(-1);
         setStartTime(0);
         setState(TypingRunState.FINISHED);

         // Save to local storage:
         console.log({ typingRun });

         LocalStorage.setItem(TYPING_RUN_LS_KEY, typingRun);
      }

   }, [success, typingRun]);
};
