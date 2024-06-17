import { useAtom, useAtomValue, useSetAtom } from "jotai/index";
import { generateWordsAtom, WORDS_COUNTS, wordsCountsAtom } from "@atoms/editor";
import { ToggleGroup } from "@repo/ui";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import React from "react";

export const WordsSelect = () => {
   const [words, setWordCounts] = useAtom(wordsCountsAtom);
   const generateWords = useSetAtom(generateWordsAtom)
   const wc = useAtomValue(wordsCountsAtom)

   return (
      <ToggleGroup
         onValueChange={async value => {
            if(!value?.length) {
               await generateWords(wc)
               return;
            }

            setWordCounts(Number(value));
         }} type="single">
         {Object.entries(WORDS_COUNTS).map(([key, value]) => (
            <ToggleItem
               key={key}
               Icon={null!}
               value={value.toString()}
               active={words === value}
               text={value.toString()} />
         ))}
      </ToggleGroup>
   );
};