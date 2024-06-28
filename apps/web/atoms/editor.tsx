import { atom, useAtomValue } from "jotai";
import { generate } from "random-words";
import { confidenceModeAtom, freedomModeAtom, userTestDifficultyAtom } from "@atoms/user";
import { startAtom, stopAtom, timeAtom, totalPauseTimeAtom } from "@atoms/timer";
import { useEffect } from "react";
import { useSetAtom } from "jotai/index";
import { LocalStorage } from "@lib/local-storage";
import { TYPING_RUN_LS_KEY } from "@components/editor/TypingEditor";
import { TypingRun } from "@components/editor/hooks/useSaveLatestUserRun";
import { maxBy, range, sortBy, sum } from "lodash";
import { wordsCountsAtom } from "@atoms/words";
import {
   DEFAULT_WORD_COUNT,
   TypedLetterFlags,
   TypedLetterInfo,
   TypingMode,
   TypingRunState,
   TypingRunSuccess,
   WordRange,
} from "@atoms/consts";
import { typingFlagsAtom } from "./flags";
import { atomWithStorage } from "jotai/utils";

// EDITOR

const WORDS = generate(DEFAULT_WORD_COUNT) as string[];

export const typingModeAtom = atomWithStorage<TypingMode>(`mode`, TypingMode.TIME);
typingModeAtom.debugLabel = `typingModeAtom`;

export const lettersCorrectnessAtom = atom<(boolean | null)[]>(
   Array
      .from({ length: WORDS.reduce((a, b) => a + b?.length, 0) })
      .fill(null) as null[],
);
lettersCorrectnessAtom.debugLabel = `lettersCorrectnessAtom`;

// @ts-ignore
export const wordsAtom = atom<string[]>(WORDS, (get, set, words: string[]) => {
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

export const endTimeAtom = atom<number>(0);
endTimeAtom.debugLabel = `endTimeAtom`;

export const currentCharIndexAtom = atom<number>(-1);
currentCharIndexAtom.debugLabel = `currentCharIndexAtom`;

export const wordsCorrectnessAtom = atom<(boolean | null)[]>(
   (get) => {
      const state = get(typingRunStateAtom);
      const currIndex = state === TypingRunState.FINISHED ? get(lettersCorrectnessAtom).length : get(currentCharIndexAtom);
      const wordRanges = get(wordRangesAtom);
      const lettersCorrectness = get(lettersCorrectnessAtom).slice(0, currIndex);

      return wordRanges
         .filter(({ range: [, end] }) => end <= currIndex)
         .map(({ range: [start, end] }) => lettersCorrectness.slice(start, end + 1).every(x => x === true));
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
         return { word, time, range: [start, end] };
      });
});
wordsCompletionTimesAtom.debugLabel = `wordsCompletionTimesAtom`;


export const typingRunStateAtom = atom<TypingRunState>(TypingRunState.STOPPED);
typingRunStateAtom.debugLabel = `typingRunStateAtom`;

export const totalRunTimeAtom = atom<number>(get => {
   const start = get(startTimeAtom);
   const totalPauseTime = get(totalPauseTimeAtom);
   const endTime = get(endTimeAtom);

   return (endTime === 0 ? performance.now() : endTime) - start - totalPauseTime;
});
totalRunTimeAtom.debugLabel = `totalRunTimeAtom`;

// @ts-ignore
export const typingRunSuccessAtom = atom<TypingRunSuccess>((get, _) => {
   const runState = get(typingRunStateAtom);

   const userTestDifficulty: string = get(userTestDifficultyAtom) as unknown as string;
   const wordsCorrectness = get(wordsCorrectnessAtom);
   const lettersCorrectness = get(lettersCorrectnessAtom);
   const mode = get(typingModeAtom);

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
      if (mode === TypingMode.TIME) return TypingRunSuccess.SUCCESS;

      if (userTestDifficulty === `EXPERT` && wordsCorrectness.some(l => l === false)) return TypingRunSuccess.FAILED;
      if (userTestDifficulty === `MASTER` && lettersCorrectness.some(l => l === false)) return TypingRunSuccess.FAILED;

      return TypingRunSuccess.SUCCESS;
   }

   return TypingRunSuccess.INDETERMINATE;
});
typingRunSuccessAtom.debugLabel = `typingRunSuccessAtom`;

export const typingRunAtom = atom<TypingRun>(get => {
   const typedLetters = get(typedLettersAtom);
   const time = get(timeAtom);
   const wordCounts = get(wordsCountsAtom);
   const wordCorrectness = get(wordsCorrectnessAtom);
   const wordRanges = get(wordRangesAtom);
   const mode = get(typingModeAtom);
   const flags = get(typingFlagsAtom);
   const totalRunTime = get(totalRunTimeAtom);
   const wordCompletionsTimesTotal = sum(get(wordsCompletionTimesAtom).map(w => w.time));

   const completedWords = get(completedWordsAtom)?.length;

   return {
      totalRunTime: totalRunTime === 0 ? wordCompletionsTimesTotal : totalRunTime,
      typedLetters,
      time: mode === TypingMode.TIME ? time : null,
      wordCounts: mode === TypingMode.WORDS ? wordCounts : null,
      completedWords,
      flags,
      wordRanges,
      mode,
      wordCorrectness,
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
         setCurrentCharIndex(-1);
         setState(TypingRunState.FINISHED);
         stop();

         // Save to local storage:
         console.log({ typingRun });

         LocalStorage.setItem(TYPING_RUN_LS_KEY, typingRun);
      }

   }, [success, typingRun]);
};

const lastLetterIsSpaceAtom = atom(false);
lastLetterIsSpaceAtom.debugLabel = `lastLetterIsSpaceAtom`;

export const onKeyPressAtom = atom(null, (get, set, e: KeyboardEvent<HTMLDivElement>) => {
   e.preventDefault();
   e.stopPropagation();
   e.cancelBubble = true;

   let { key, ctrlKey: ctrl } = e;

   // Window refresh
   if (key === `r` && ctrl) window.location.reload();

   const charCode = e.key.charCodeAt(0);
   const capsLockSwitch = e.key === `CapsLock`;

   // Escape
   if (key === `Escape`) return;

   // Caps lock
   if (capsLockSwitch) {
      set(capsLockOnAtom, l => !l);
      return;
   }

   const startTime = get(startTimeAtom);
   const charsByIndex = get(charsByIndexAtom);
   const currentCharIndex = get(currentCharIndexAtom);
   const wordRangesByEnds = get(wordRangesByEndsAtom);
   const lastLetterIsSpace = get(lastLetterIsSpaceAtom);

   const freedomMode = get(freedomModeAtom) as unknown as boolean;
   const confidenceMode = get(confidenceModeAtom) as unknown as ("OFF" | "ON" | "MAX");

   if (e.key === `Shift` || (e.ctrlKey && e.key === `Control`)) return;

   if (e.key === `Backspace`) {
      if (confidenceMode === "MAX") return;

      if (freedomMode || confidenceMode === "ON") {
         // Check if user is pressing backspace on previous word:
         const isBackspacingOnPreviousWord = [...wordRangesByEnds.keys()]
            .some(x => x === currentCharIndex);

         // Do an early exit:
         if (isBackspacingOnPreviousWord) return;
      }

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

   if (charCode >= 32 && charCode <= "z".charCodeAt(0)) {
      // Determine if we are at the end of a word
      // TODO: Handle Space logic ...
      if (wordRangesByEnds.has(currentCharIndex)) {
         if (e.code === `Space`) {
            set(lastLetterIsSpaceAtom, true);
            return;
         } else {
            // Check if last typed letter is a space:
            if (lastLetterIsSpace) {
               set(lastLetterIsSpaceAtom, false);
            } else {
               console.log(`Current incorrect letter (extra) is: ${e.key}`);
               set(typedLettersAtom, l => [...l, {
                  correct: false,
                  timestamp: performance.now() - startTime,
                  letter: e.key,
                  flags: TypedLetterFlags.EXTRA,
                  charIndex: currentCharIndex!,
               }]);
               return;
            }
            ;
         }
      }

      set(currentCharIndexAtom, c => c + 1);
      if (currentCharIndex + 1 === 0) set(startAtom);

      const correct = charCode === charsByIndex[currentCharIndex + 1]?.charCodeAt(0);

      // Set letter correctness
      set(lettersCorrectnessAtom, wc => {
         let wc2 = [...wc];
         wc2[currentCharIndex + 1] = correct;
         return wc2;
      });

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

export const missedWordsAtom = atom<string[]>((get) => {
   const wordRanges = get(wordRangesAtom);
   const typingRun = get(typingRunAtom);

   const missedWords = wordRanges
      .map(({ word, range: [start, end] }) => {
         const missedChars = sum(range(start, end + 1)
            .map(charIndex => {
               let i = [...typingRun.typedLetters.toReversed()]
                  // @ts-ignore
                  .findIndex(l => l.charIndex === charIndex
                     && l.letter === word[charIndex - start]
                     && l.correct === true);

               return i === -1 ? 1 : 0;
            }));
         return { word, missedChars, range: [start, end] };
      })
      .filter(w => w.missedChars > 0)
      .sort((a, b) => b.missedChars - a.missedChars)
      .slice(0, 3);

   return Array
      .from({ length: 4 })
      .flatMap((_, i) => {
         const last = missedWords.at(-1)?.word;
         return [...missedWords.slice(0, -1).map(_ => _.word), `${last},`];
      });
});
missedWordsAtom.debugLabel = `missedWordsAtom`;

export const slowWordsAtom = atom<string[]>((get) => {
   const wordRanges = get(wordRangesAtom);
   const typingRun = get(typingRunAtom);

   const wordTimesToFinish = wordRanges.map(({ word, range: [start, end] }) => {
      const startIndex = [...typingRun.typedLetters].reverse().findIndex(l => l.charIndex === start);
      const endIndex = [...typingRun.typedLetters].reverse().findIndex(l => l.charIndex === end);

      const time = Math.abs((typingRun.typedLetters.at(endIndex)?.timestamp ?? 0) - (typingRun.typedLetters.at(startIndex)?.timestamp || 0));
      return {
         time,
         averageTimeForLetter: (time / word.length),
         word,
      };
   });

   let slowestWords = sortBy(wordTimesToFinish, (value, index) => -value.averageTimeForLetter)
      .slice(0, 5)
      .map(w => w);

   return Array
      .from({ length: 4 })
      .flatMap((_, i) => {
         const last = slowestWords.at(-1)!.word;
         return [...slowestWords.slice(0, -1).map(_ => _.word), `${last},`];
      });
});
slowWordsAtom.debugLabel = `slowWordsAtom`;

export const toggleWordsAtom = atom(false);
toggleWordsAtom.debugLabel = `toggleWordsAtom`;
