import { atom, useAtomValue } from "jotai";
import { generate } from "random-words";
import { capsLockWarningAtom, userTestDifficultyAtom } from "@atoms/user";
import { currentTimestampAtom, startAtom, stopAtom, totalPauseTimeAtom } from "@atoms/timer";
import { useEffect } from "react";
import { useSetAtom } from "jotai/index";
import { LocalStorage } from "@lib/local-storage";
import { TYPING_RUN_LS_KEY } from "@components/editor/TypingEditor";
import { TypingRun } from "@components/editor/hooks/useSaveLatestUserRun";
import { maxBy } from "lodash";
import { wordsCountsAtom } from "@atoms/words";
import {
   DEFAULT_WORD_COUNT,
   TypedLetterFlags, TypedLetterInfo,
   TypingMode,
   TypingRunState,
   TypingRunSuccess,
   WordRange,
} from "@atoms/consts";
import { typingFlagsAtom } from "./flags";

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
   console.log({ words });
   if (Array.isArray(words)) {
      set(lettersCorrectnessAtom, Array
         .from({ length: words?.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]);
      set(wordsAtom, words);
   }
});
wordsAtom.debugLabel = `wordsAtom`;


export const charsByIndexAtom = atom((get) => {
   const words = get(wordsAtom);
   return words.flatMap(w => [...w]);
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


export const typingRunStateAtom = atom<TypingRunState>(TypingRunState.STOPPED);
typingRunStateAtom.debugLabel = `typingRunStateAtom`;

export const totalRunTimeAtom = atom<number>(get => {
   const state = get(typingRunStateAtom);
   const start = get(startTimeAtom);
   const totalPauseTime = get(totalPauseTimeAtom)
   console.log({ start, totalPauseTime});
   return performance.now() - start - totalPauseTime;
   // return sum(get(wordsCompletionTimesAtom).map(w => w.time)) - get(totalPauseTimeAtom)
});
totalRunTimeAtom.debugLabel = `totalRunTimeAtom`;


// @ts-ignore
export const typingRunSuccessAtom = atom<TypingRunSuccess>((get, _) => {
   const runState = get(typingRunStateAtom);

   const userTestDifficulty: string = get(userTestDifficultyAtom) as unknown as string;
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
      console.log({ correct, all: charsByIndex?.length, userTestDifficulty });

      return correct === charsByIndex?.length ? TypingRunSuccess.SUCCESS : TypingRunSuccess.FAILED;
   }

   return TypingRunSuccess.INDETERMINATE;
});
typingRunSuccessAtom.debugLabel = `typingRunSuccessAtom`;

export const typingRunAtom = atom<TypingRun>(get => {
   const typedLetters = get(typedLettersAtom);
   const time = get(currentTimestampAtom);
   const wordCounts = get(wordsCountsAtom);
   const mode = get(typingModeAtom);
   const flags = get(typingFlagsAtom);
   const totalRunTime = get(totalRunTimeAtom);
   const completedWords = get(completedWordsAtom)?.length;

   return {
      totalRunTime,
      typedLetters,
      time: mode === TypingMode.TIME ? time : null,
      wordCounts: mode === TypingMode.WORDS ? wordCounts : null,
      completedWords,
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
   const typingRun = useAtomValue(typingRunAtom);

   useEffect(() => {
      if (success === TypingRunSuccess.FAILED) {
         console.log(`Test failed!`);
         setCurrentCharIndex(-1);
         // setStartTime(0);
         setState(TypingRunState.FINISHED);
         stop();

         // Save to local storage:
         console.log({ typingRun });

         LocalStorage.setItem(TYPING_RUN_LS_KEY, typingRun);
      }

   }, [success, typingRun]);
};

export const onKeyPressAtom = atom(null, (get, set, e: KeyboardEvent<HTMLDivElement>) => {
   e.preventDefault();
   let { key, ctrlKey: ctrl } = e;


   if (key === `r` && ctrl) window.location.reload();

   const charCode = e.key.charCodeAt(0);
   const capsLockSwitch = e.key === `CapsLock`
   if(capsLockSwitch) {
      set(capsLockOnAtom, l => !l)
      return
   }

   const startTime = get(startTimeAtom);
   const charsByIndex = get(charsByIndexAtom);
   const currentCharIndex = get(currentCharIndexAtom);
   const lettersCorrectness = get(lettersCorrectnessAtom);
   const wordRangesByEnds = get(wordRangesByEndsAtom);

   if (e.key === `Shift` || (e.ctrlKey && e.key === `Control`)) return;
   if (e.key === `Shift`) return;

   if (e.key === `Backspace`) {
      set(currentCharIndexAtom, c => Math.max(-1, c - 1));

      set(typedLettersAtom, l => [...l, {
         correct: null,
         timestamp: performance.now() - startTime,
         letter: charsByIndex[currentCharIndex]!,
         flags: TypedLetterFlags.DELETED,
         charIndex: currentCharIndex,
      }]);

      set(lettersCorrectnessAtom, wc => {
         let wc2 = [...wc];
         wc2[currentCharIndex] = null;
         return wc2;
      });
      return;
   }

   if (charCode >= "!".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
      set(currentCharIndexAtom, c => c + 1);

      if (currentCharIndex + 1 === 0) set(startAtom);

      console.log({ charCode, char: charsByIndex[currentCharIndex + 1] });
      const correct = charCode === charsByIndex[currentCharIndex + 1]?.charCodeAt(0);

      // Set letter correctness
      set(lettersCorrectnessAtom, wc => {
         let wc2 = [...wc];
         wc2[currentCharIndex + 1] = correct;
         return wc2;
      });

      // Determine if we are at the end of a word
      const endOfWord = wordRangesByEnds.has(currentCharIndex + 1);
      if (endOfWord) {
         const [start, end] = wordRangesByEnds.get(currentCharIndex + 1)!;

         const areAllLettersCorrect = lettersCorrectness.slice(start, end).every(Boolean) && correct;
         console.log({ areAllLettersCorrect });
      }

      set(typedLettersAtom, l => [...l,
         currentCharIndex + 1 === 0 ?
            {
               charIndex: currentCharIndex + 1,
               letter: charsByIndex[currentCharIndex + 1]!,
               timestamp: 0,
               correct,
               flags: TypedLetterFlags.INSERTED,
            } : {
               charIndex: currentCharIndex + 1,
               letter: charsByIndex[currentCharIndex + 1]!,
               correct,
               timestamp: performance.now() - startTime,
               flags: TypedLetterFlags.INSERTED,
            }]);
   }
});
onKeyPressAtom.debugLabel = `onKeyPressAtom`;

export const caretCoordinatesAtom = atom<{ top: number; left: number }>({
   top: 0,
   left: 0,
});
caretCoordinatesAtom.debugLabel = `caretCoordinatesAtom`;

export const capsLockOnAtom = atom(false);
capsLockOnAtom.debugLabel = `capsLockOnAtom`;