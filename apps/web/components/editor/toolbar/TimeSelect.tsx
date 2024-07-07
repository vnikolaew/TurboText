"use client";
import { DEFAULT_WORD_COUNT, TypingMode } from "@atoms/consts";
import { typingModeAtom } from "@atoms/editor";
import { TIMES, timeAtom } from "@atoms/timer";
import { generateWordsAtom, wordsCountsAtom } from "@atoms/words";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import { ToggleGroup } from "@repo/ui";
import { useAtomValue } from "jotai";
import { useAtom, useSetAtom } from "jotai/index";

export const TimeSelect = () => {
   const [time, setTime] = useAtom(timeAtom);

   const generateWords = useSetAtom(generateWordsAtom);
   const mode = useAtomValue(typingModeAtom);
   const wc = useAtomValue(wordsCountsAtom);

   return (
      <ToggleGroup
         onValueChange={async (value) => {
            if (!value?.length) return;

            const wordsToGenerate =
               mode === TypingMode.WORDS ? wc : DEFAULT_WORD_COUNT;
            await generateWords(wordsToGenerate);

            setTime(Number(value));
         }}
         type="single"
      >
         {Object.entries(TIMES).map(([key, value]) => (
            <ToggleItem
               key={key}
               Icon={null!}
               value={value.toString()}
               active={time === value}
               text={value.toString()}
            />
         ))}
      </ToggleGroup>
   );
};
