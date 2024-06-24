import { atom } from "jotai/index";
import { userLanguageAtom } from "@atoms/user";
import { wordsAtom } from "@atoms/editor";
import { LANGUAGES_MAP, WORDS_COUNTS } from "./consts";


export const generateWordsAtom = atom(null, async (get, set, wc?: number) => {
   const wordCount = get(wordsCountsAtom);
   const userLanguage = get(userLanguageAtom) ?? `English`;

   const languageCode = Object
      .entries(LANGUAGES_MAP)
      .find(([, value]) => value === userLanguage)?.[0];

   const res = await fetch(`/api/words/${languageCode}/generate?limit=${wc ?? wordCount}`)
      .then(r => r.json());
   if (res.words?.length) {
      set(wordsAtom, res.words as string[]);
   }
});

generateWordsAtom.debugLabel = `generateWordsAtom`;

// @ts-ignore
export const wordsCountsAtom = atom<number>( WORDS_COUNTS["10"]!, async (get, set, wordCounts: number) => {
   set(wordsCountsAtom, wordCounts);
   await set(generateWordsAtom, wordCounts);
});
wordsCountsAtom.debugLabel = `wordsCountsAtom`;
