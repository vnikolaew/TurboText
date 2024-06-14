import { atom } from "jotai";
import { generate } from "random-words";
import { TypedLetterInfo, WordRange } from "@components/editor/hooks/useTypingEditor";
import { injectPunctuation, strings } from "@lib/strings";
import { removePagePathTail } from "next/dist/shared/lib/page-path/remove-page-path-tail";

export enum TypingRunState {
   STOPPED = `STOPPED`,
   RUNNING = `RUNNING`,
   PAUSED = `PAUSED`,
   FINISHED = `FINISHED`
}

// EDITOR

const WORDS = generate(40) as string[];

export const WORDS_COUNTS = {
   10: 10,
   25: 25,
   50: 50,
   100: 100,
} as const;

export const TIMES = {
   10: 10,
   15: 15,
   30: 30,
   60: 60,
   120: 120,
} as const;

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

export const lettersCorrectnessPercentageAtom = atom<number>((get) => {
   const lettersCorrectness = get(lettersCorrectnessAtom);
   return lettersCorrectness.filter(Boolean).length / lettersCorrectness.filter(l => l !== null).length * 100;
});

lettersCorrectnessPercentageAtom.debugLabel = `lettersCorrectnessPercentageAtom`;

export const typedLettersAtom = atom<TypedLetterInfo[]>([]);
typedLettersAtom.debugLabel = `typedLettersAtom`;

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
   const wc = get(wordsCountsAtom)

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
      if(mode === TypingMode.WORDS) set(wordsAtom, generate(wc) as string[])
      else set(wordsAtom, w => w.map(x => x.replace(/\d+/g, "")).filter(x => !!x.length));
   }

   if (addingPunctuation) {
      const withPunctuation = injectPunctuation(get(wordsAtom), strings.punctuation);
      set(wordsAtom, withPunctuation);
   } else if(removingPunctuation) {
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

export const currentTimestampAtom = atom<number>(TIMES["10"]!);
currentTimestampAtom.debugLabel = `currentTimestampAtom`;

export const typingRunStateAtom = atom<TypingRunState>(TypingRunState.STOPPED);
typingRunStateAtom.debugLabel = `typingRunStateAtom`;

export const restartAtom = atom(
   null, // it's a convention to pass `null` for the first argument
   (get, set) => {
      const count = get(wordsCountsAtom);
      const words = generate(count) as string[];

      console.log(`we are here`);

      set(wordsAtom, words);
      set(typedLettersAtom, []);
      set(currentTimestampAtom, TIMES["10"]!);
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
export const wordsCountsAtom = atom<number>(WORDS_COUNTS["10"]!, (get, set, wordCounts: number) => {
   set(wordsCountsAtom, wordCounts);
   set(wordsAtom, generate(wordCounts) as string[]);
});
wordsCountsAtom.debugLabel = `wordsCountsAtom`;