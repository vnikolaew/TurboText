"use client";
import { Button, Separator, ToggleGroup } from "@repo/ui";
import React from "react";
import { AtSign, Baseline, Clock2, Hash, Wrench } from "lucide-react";
import { useAtom } from "jotai";
import { TypingFlags, typingFlagsAtom, TypingMode, typingModeAtom } from "@atoms/editor";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import { WordsSelect } from "@components/editor/toolbar/WordsSelect";
import { TimeSelect } from "@components/editor/toolbar/TimeSelect";
import CustomWordsConfigModal from "@components/editor/toolbar/CustomWordsConfigModal";
import { useBoolean } from "@hooks/useBoolean";
import CustomTimeConfigModal from "@components/editor/toolbar/CustomTimeConfigModal";

export interface EditorToolbarProps {
}

const EditorToolbar = ({}: EditorToolbarProps) => {
   const [typingFlags, setTypingFlags] = useAtom(typingFlagsAtom);
   const [typingMode, setTypingMode] = useAtom(typingModeAtom);
   const [cwModalOpen, setCwModalOpen] = useBoolean();
   const [timeModalOpen, setTimeModalOpen] = useBoolean();

   return (
      <div id={`editor-toolbar`} className={`rounded-full bg-neutral-800 !px-4 !py-1 flex items-center gap-2 shadow-md`}>
         <ToggleGroup
            onValueChange={values => setTypingFlags(values.map(Number).reduce((a, b) => a + b, 0))} type="multiple">
            <ToggleItem Icon={AtSign} value={TypingFlags.PUNCTUATION.toString()}
                        active={Boolean(typingFlags & TypingFlags.PUNCTUATION)} text={`punctuation`} />
            <ToggleItem Icon={Hash} value={TypingFlags.NUMBERS.toString()}
                        active={Boolean(typingFlags & TypingFlags.NUMBERS)} text={`numbers`} />
         </ToggleGroup>
         <Separator className={`h-4 bg-neutral-500 w-[1px]`} />
         <ToggleGroup
            onValueChange={value => {
               if(!value?.length) return
               console.log({ value });
               setTypingMode(value as TypingMode);
            }} type="single">
            <ToggleItem Icon={Clock2} value={TypingMode.TIME} active={typingMode === TypingMode.TIME} text={`time`} />
            <ToggleItem Icon={Baseline} value={TypingMode.WORDS} active={typingMode === TypingMode.WORDS}
                        text={`words`} />
         </ToggleGroup>
         <Separator className={`h-4 bg-neutral-500 w-[1px]`} />
         {typingMode === TypingMode.TIME && <TimeSelect />}
         {typingMode === TypingMode.WORDS && <WordsSelect />}
         <Button className={`rounded-full hover:!bg-neutral-800 group`} onClick={_ => {
            if (typingMode === TypingMode.TIME) {
               setTimeModalOpen(true);
            } else if (typingMode === TypingMode.WORDS) {
               setCwModalOpen(true);
            }
         }} title={`Customize`} variant={`ghost`} size={`icon`}>
            <Wrench className={`group-hover:!text-amber-600`} size={16} />
         </Button>
         {typingMode === TypingMode.TIME && <CustomTimeConfigModal setOpen={setTimeModalOpen} open={timeModalOpen} />}
         {typingMode === TypingMode.WORDS && <CustomWordsConfigModal open={cwModalOpen} setOpen={setCwModalOpen!} />}
      </div>
   );
};


export default EditorToolbar;