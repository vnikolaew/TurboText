import { TypingFlags, TypingMode } from "@atoms/consts";
import { typingModeAtom, wordsAtom } from "@atoms/editor";
import { injectPunctuation, strings } from "@lib/strings";
import { atom } from "jotai";

export const toggleNumbersAtom = atom(null, (get, set) => {
   const flags = get(typingFlagsAtom);

   const addingNumbers = (flags & TypingFlags.NUMBERS) === 0;
   const removingNumbers = !addingNumbers;
   const mode = get(typingModeAtom);

   console.log({ addingNumbers, removingNumbers });
   if (addingNumbers) {
      if (mode === TypingMode.WORDS) {
         set(wordsAtom, (w) => {
            const newWords = [...w];
            console.log({ newWords });
            for (let x = 0; x < 2; x++) {
               newWords[Math.floor(Math.random() * newWords.length)] =
                  Math.floor(Math.random() * 1_000).toString();
            }
            return newWords;
         });
      } else {
         set(wordsAtom, (w) => {
            const newWords = [...w];
            for (let x = 0; x < 2; x++) {
               newWords.splice(
                  Math.floor(Math.random() * newWords.length),
                  0,
                  Math.floor(Math.random() * 1_000).toString()
               );
            }
            console.log({ newWords });
            return newWords;
         });
      }
   } else if (removingNumbers) {
      set(wordsAtom, (w) =>
         w.map((x) => {
            [...strings.punctuation].forEach((char) => {
               x = x.replaceAll(char, ``);
            });
            return x;
         })
      );
   }
   set(typingFlagsAtom, flags ^ TypingFlags.NUMBERS);
});

export const togglePunctuationAtom = atom(null, (get, set) => {
   const flags = get(typingFlagsAtom);

   const addingPunctuation = (flags & TypingFlags.PUNCTUATION) === 0;
   const removingPunctuation = !addingPunctuation;

   if (addingPunctuation) {
      set(wordsAtom, (w) => injectPunctuation(w, strings.punctuation));
   } else if (removingPunctuation) {
      set(wordsAtom, (w) =>
         w.map((x) => {
            [...strings.punctuation].forEach((char) => {
               x = x.replaceAll(char, ``);
            });
            return x;
         })
      );
   }
   set(typingFlagsAtom, flags ^ TypingFlags.PUNCTUATION);
});

//@ts-ignore
export const typingFlagsAtom = atom<number>(0);
typingFlagsAtom.debugLabel = `typingFlagsAtom`;
