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

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/words/${encodeURIComponent(languageCode ?? `en`)}/generate?limit=${encodeURIComponent(wc ?? wordCount)}`,{
   })
      .then(r => r.json());
   if (res.words?.length) {
      set(wordsAtom, res.words as string[]);
   }
});

generateWordsAtom.debugLabel = `generateWordsAtom`;

// @ts-ignore
export const wordsCountsAtom = atom<number>( WORDS_COUNTS["10"]!, async (get, set, wordCounts: number, updateWords = true) => {
   set(wordsCountsAtom, wordCounts);
   if(updateWords) {
      await set(generateWordsAtom, wordCounts);
   }
});
wordsCountsAtom.debugLabel = `wordsCountsAtom`;
