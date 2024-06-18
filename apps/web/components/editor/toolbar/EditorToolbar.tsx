"use client";
import { Button, Separator, ToggleGroup } from "@repo/ui";
import React from "react";
import { AtSign, Baseline, Clock2, Hash, Wrench } from "lucide-react";
import { useAtom, useAtomValue } from "jotai";
import {
   typingFlagsAtom,
   typingModeAtom,
   typingRunStateAtom,
} from "@atoms/editor";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import { WordsSelect } from "@components/editor/toolbar/WordsSelect";
import { TimeSelect } from "@components/editor/toolbar/TimeSelect";
import CustomWordsConfigModal from "@components/editor/toolbar/CustomWordsConfigModal";
import { useBoolean } from "@hooks/useBoolean";
import CustomTimeConfigModal from "@components/editor/toolbar/CustomTimeConfigModal";
import { AnimatePresence, motion } from "framer-motion";
import { useSetAtom } from "jotai/index";
import { generateWordsAtom, wordsCountsAtom } from "@atoms/words";
import { DEFAULT_WORD_COUNT, TypingFlags, TypingMode, TypingRunState } from "@atoms/consts";

export interface EditorToolbarProps {
}

const EditorToolbar = ({}: EditorToolbarProps) => {
   const [typingFlags, setTypingFlags] = useAtom(typingFlagsAtom);
   const [typingMode, setTypingMode] = useAtom(typingModeAtom);
   const [cwModalOpen, setCwModalOpen] = useBoolean();
   const [timeModalOpen, setTimeModalOpen] = useBoolean();

   const wordCount = useAtomValue(wordsCountsAtom)
   const generateWords = useSetAtom(generateWordsAtom);
   const state = useAtomValue(typingRunStateAtom);

   return (
      <AnimatePresence initial mode={`wait`}>
         {state !== TypingRunState.RUNNING && (
            <motion.div
               initial={{ opacity: 100 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 100 }}
               transition={{ duration: .3 }}
               key={`editor-toolbar`} id={`editor-toolbar`}
               className={`rounded-full bg-neutral-800 !px-4 !py-1 flex items-center gap-2 shadow-md`}>
               <ToggleGroup
                  onValueChange={values => setTypingFlags(values.map(Number).reduce((a, b) => a + b, 0))}
                  type="multiple">
                  <ToggleItem Icon={AtSign} value={TypingFlags.PUNCTUATION.toString()}
                              active={Boolean(typingFlags & TypingFlags.PUNCTUATION)} text={`punctuation`} />
                  <ToggleItem Icon={Hash} value={TypingFlags.NUMBERS.toString()}
                              active={Boolean(typingFlags & TypingFlags.NUMBERS)} text={`numbers`} />
               </ToggleGroup>
               <Separator className={`h-4 bg-neutral-500 w-[1px]`} />
               <ToggleGroup
                  onValueChange={async value => {
                     if (!value?.length) return;
                     console.log({ value });
                     if(value === TypingMode.WORDS) await generateWords(wordCount)
                     else await generateWords(DEFAULT_WORD_COUNT)

                     setTypingMode(value as TypingMode);
                  }} type="single">
                  <ToggleItem
                     Icon={Clock2} value={TypingMode.TIME}
                     active={typingMode === TypingMode.TIME}
                     text={`time`} />
                  <ToggleItem
                     Icon={Baseline}
                     value={TypingMode.WORDS}
                     active={typingMode === TypingMode.WORDS}
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
               {typingMode === TypingMode.TIME &&
                  <CustomTimeConfigModal setOpen={setTimeModalOpen} open={timeModalOpen} />}
               {typingMode === TypingMode.WORDS &&
                  <CustomWordsConfigModal open={cwModalOpen} setOpen={setCwModalOpen!} />}
            </motion.div>
         )}
      </AnimatePresence>
   );
};


export default EditorToolbar;