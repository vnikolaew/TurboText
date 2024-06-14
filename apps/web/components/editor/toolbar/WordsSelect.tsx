import { useAtom } from "jotai/index";
import { WORDS_COUNTS, wordsCountsAtom } from "@atoms/editor";
import { ToggleGroup } from "@repo/ui";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import React from "react";

export const WordsSelect = () => {
   const [words, setWords] = useAtom(wordsCountsAtom);

   return (
      <ToggleGroup
         onValueChange={value => setWords(Number(value))} type="single">
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