import { atom } from "jotai";
import { generate } from "random-words";
import { TypedLetterInfo, WordRange } from "@components/editor/hooks/useTypingEditor";
import { injectPunctuation, strings } from "@lib/strings";
import { userLanguageAtom, userTestDifficultyAtom } from "@atoms/user";
import { groupBy, maxBy } from "lodash";
import { kogasa, mean, roundTo2, stdDev } from "@lib/numbers";
import { currentTimestampAtom, timeAtom } from "@atoms/timer";

export enum TypingRunState {
   STOPPED = `STOPPED`,
   RUNNING = `RUNNING`,
   PAUSED = `PAUSED`,
   FINISHED = `FINISHED`
}

// EDITOR
export const DEFAULT_WORD_COUNT = 40;

const WORDS = generate(DEFAULT_WORD_COUNT) as string[];

export const WORDS_COUNTS = {
   10: 10,
   25: 25,
   50: 50,
   100: 100,
} as const;


export const LANGUAGES_MAP = {
   en: `English`,
   es: `Spanish`,
   it: `Italian`,
   fr: `French`,
   de: `German`,
   ru: `Russian`,
   mo: `Mongolian`,
   arb: `Arabic`,
   cs: `Czech`,
};

// @ts-ignore
export const generateWordsAtom = atom(null, async (get, set, wc?: number) => {
   const mode = get(typingModeAtom);
   const wordCount = get(wordsCountsAtom);
   const userLanguage = get(userLanguageAtom) as unknown as string;

   const languageCode = Object
      .entries(LANGUAGES_MAP)
      .find(([, value]) => value === userLanguage)?.[0];

   const res = await fetch(`/api/words/${languageCode}/generate?limit=${wc ?? wordCount}`)
      .then(r => r.json());
   console.log({ res });

   if (res.words?.length) {
      set(wordsAtom, res.words as string[]);
   }
});

generateWordsAtom.debugLabel = `generateWordsAtom`;

// @ts-ignore
export const wordsAtom = atom<string[]>(WORDS, (get, set, words: string[]) => {
   set(wordsAtom, words);
   set(lettersCorrectnessAtom, Array
      .from({ length: words.reduce((a, b) => a + b.length, 0) })
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
         range: [startIndex, startIndex + word.length - 1] as const,
      };
   });
});
wordRangesAtom.debugLabel = `wordRangesAtom`;

export const wordRangesByEndsAtom = atom<Map<number, [number, number]>>((get) => {
   const wordRanges = get(wordRangesAtom);
   return new Map([...wordRanges.map(({ range: [start, end] }) => [end, [start, end] as const] as const)]);
});
wordRangesByEndsAtom.debugLabel = `wordRangesByEndsAtom`;

export const completedWordsAtom = atom((get) => {
   const wordRanges = get(wordRangesAtom);
   const typedLetters = get(typedLettersAtom);

   return wordRanges
      .filter(({ range: [, end] }) => {
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
   return lettersCorrectness.filter(Boolean).length / lettersCorrectness.filter(l => l !== null).length * 100;
});

lettersCorrectnessPercentageAtom.debugLabel = `lettersCorrectnessPercentageAtom`;

export const typedLettersAtom = atom<TypedLetterInfo[]>([]);
typedLettersAtom.debugLabel = `typedLettersAtom`;

export const wordsCompletionTimesAtom = atom((get) => {
   const typedLetters = get(typedLettersAtom);
   const completedWords = get(completedWordsAtom);

   if (!typedLetters.length) return [];
   const lettersReversed = typedLetters.reverse();

   return completedWords
      .filter(({ range: [, end] }) =>
         end <= (maxBy(typedLetters, l => l.charIndex)!.charIndex))
      .map(({ range: [start, end], word }) => {
         const time = lettersReversed.find(l => l.charIndex === end)?.timestamp!
            - lettersReversed.find(l => l.charIndex === start)?.timestamp!;
         return { word, time };
      });
});
wordsCompletionTimesAtom.debugLabel = `wordsCompletionTimesAtom`;


export enum TypingMode {
   TIME = `TIME`,
   QUOTE = `QUOTE`,
   WORDS = `WORDS`,
}

export const typingModeAtom = atom<TypingMode>(TypingMode.TIME);
typingModeAtom.debugLabel = `typingModeAtom`;

export enum TypingFlags {
   PUNCTUATION = 1,
   NUMBERS = 1 << 1,
}

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
   return get(wordsCompletionTimesAtom)?.reduce((a, b) => a + b.time, 0);
});
totalRunTimeAtom.debugLabel = `totalRunTimeAtom`;

export const wpmAtom = atom<number>(get => {
   const mode = get(typingModeAtom);
   const wordCount = get(wordsCountsAtom);
   const totalRunTime = get(totalRunTimeAtom);

   return (mode === TypingMode.TIME ? DEFAULT_WORD_COUNT : wordCount) / (totalRunTime / 1_000) * 60
});
wpmAtom.debugLabel = `wpmAtom`;

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
// @ts-ignore
export const wordsCountsAtom = atom<number>(WORDS_COUNTS["10"]!, async (get, set, wordCounts: number) => {
   set(wordsCountsAtom, wordCounts);
   await set(generateWordsAtom, wordCounts);
});
wordsCountsAtom.debugLabel = `wordsCountsAtom`;


export enum TypingRunSuccess {
   SUCCESS = `SUCCESS`,
   FAILED = `FAILED`,
   INDETERMINATE = `INDETERMINATE`,
}

// @ts-ignore
export const typingRunSuccessAtom = atom<TypingRunSuccess>((get) => {
   const runState = get(typingRunStateAtom);

   const userTestDifficulty: string = get(userTestDifficultyAtom);
   const wordsCorrectness = get(wordsCorrectnessAtom);
   const lettersCorrectness = get(lettersCorrectnessAtom);

   const charsByIndex = get(charsByIndexAtom);

   if (userTestDifficulty === `MASTER` && wordsCorrectness.some(x => x === false))
      return TypingRunSuccess.FAILED;

   if (userTestDifficulty === `EXPERT` && lettersCorrectness.some(l => l === false))
      return TypingRunSuccess.FAILED;

   if (runState === TypingRunState.RUNNING) return TypingRunSuccess.INDETERMINATE;
   if (runState === TypingRunState.FINISHED) {
      const correct = lettersCorrectness.filter(l => l === true).length;
      console.log({ correct, all: Object.keys(charsByIndex).length, userTestDifficulty });

      if (correct === Object.keys(charsByIndex).length) {
         return TypingRunSuccess.SUCCESS;
      } else return TypingRunSuccess.FAILED;
   }

   return TypingRunSuccess.INDETERMINATE;
});
typingRunSuccessAtom.debugLabel = `typingRunSuccessAtom`;

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