"use client";
import { useAtom, useSetAtom } from "jotai/index";
import { generateWordsAtom, TypingMode, typingModeAtom, wordsCountsAtom } from "@atoms/editor";
import { ToggleGroup } from "@repo/ui";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import React from "react";
import { useAtomValue } from "jotai";
import { TIMES, timeAtom } from "@atoms/timer";

export const TimeSelect = () => {
   const [time, setTime] = useAtom(timeAtom);
   const generateWords = useSetAtom(generateWordsAtom)
   const mode = useAtomValue(typingModeAtom)
   const wc = useAtomValue(wordsCountsAtom)

   return (
      <ToggleGroup
         onValueChange={async value => {
            if(!value?.length) return;

            // setWords(generate(Number(value)) as string[])
            if(mode === TypingMode.TIME) {
               await generateWords(40)
            } else if(mode === TypingMode.WORDS) {
               await generateWords(wc)
            }

            setTime(Number(value));
         }} type="single">
         {Object.entries(TIMES).map(([key, value]) => (
            <ToggleItem
               key={key}
               Icon={null!}
               value={value.toString()}
               active={time === value}
               text={value.toString()} />
         ))}
      </ToggleGroup>
   );
};