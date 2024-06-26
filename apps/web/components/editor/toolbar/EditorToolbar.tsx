"use client";
import { Button, Separator, ToggleGroup } from "@repo/ui";
import React, { useCallback } from "react";
import { AtSign, Baseline, Clock2, Hash, Wrench } from "lucide-react";
import { useAtom, useAtomValue } from "jotai";
import { typingModeAtom, typingRunStateAtom } from "@atoms/editor";
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
import { toggleNumbersAtom, togglePunctuationAtom, typingFlagsAtom } from "@atoms/flags";
import { parseAsBoolean, useQueryState } from "nuqs";

export interface EditorToolbarProps {
}

const EditorToolbar = ({}: EditorToolbarProps) => {
   const [customTimeQs, setCustomTimeQs] = useQueryState(`custom-time`, parseAsBoolean.withDefault(false));
   const [customWordsQs, setCustomWordsQs] = useQueryState(`custom-words`, parseAsBoolean.withDefault(false));

   const typingFlags = useAtomValue(typingFlagsAtom);
   const togglePunctuation = useSetAtom(togglePunctuationAtom);
   const toggleNumbers = useSetAtom(toggleNumbersAtom)

   const [typingMode, setTypingMode] = useAtom(typingModeAtom);
   const [cwModalOpen, setCwModalOpen] = useBoolean();
   const [timeModalOpen, setTimeModalOpen] = useBoolean();

   const wordCount = useAtomValue(wordsCountsAtom)
   const generateWords = useSetAtom(generateWordsAtom);
   const state = useAtomValue(typingRunStateAtom);

   const handleToggle = useCallback((values: string[]) => {
      const numberValues = values.map(Number)

      const addingPunctuation = numberValues.includes(TypingFlags.PUNCTUATION) && (typingFlags & TypingFlags.PUNCTUATION) === 0;
      const removingPunctuation = !numberValues.includes(TypingFlags.PUNCTUATION) && Boolean(typingFlags & TypingFlags.PUNCTUATION)

      const addingNumbers = numberValues.includes(TypingFlags.NUMBERS) && (typingFlags & TypingFlags.NUMBERS) === 0;
      const removingNumbers = !numberValues.includes(TypingFlags.NUMBERS) && Boolean(typingFlags & TypingFlags.NUMBERS)

      if(addingPunctuation || removingPunctuation) togglePunctuation()
      if(addingNumbers || removingNumbers) toggleNumbers()

   }, [typingFlags])

   return <AnimatePresence initial mode={`wait`}>
      {state !== TypingRunState.RUNNING && <motion.div
            initial={{ opacity: 100 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 100 }}
            transition={{ duration: .3 }}
            key={`editor-toolbar`} id={`editor-toolbar`}
            className={`rounded-full bg-secondary-bg !px-4 !py-1 flex items-center gap-2 shadow-md`}>
            <ToggleGroup
               onValueChange={handleToggle}
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

                  setTypingMode(value as TypingMode);

                  if(value === TypingMode.WORDS) await generateWords(wordCount)
                  else await generateWords(DEFAULT_WORD_COUNT)

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
            <Button className={`rounded-full hover:!bg-neutral-800 group`} onClick={async _ => {
               if (typingMode === TypingMode.TIME) {
                  await setCustomTimeQs(true)
                  setTimeModalOpen(true);
               } else if (typingMode === TypingMode.WORDS) {
                  await setCustomWordsQs(true)
                  setCwModalOpen(true);
               }
            }} title={`Customize`} variant={`ghost`} size={`icon`}>
               <Wrench className={`group-hover:!text-accent !text-main`} size={16} />
            </Button>
            {typingMode === TypingMode.TIME &&
               <CustomTimeConfigModal setOpen={setTimeModalOpen} open={timeModalOpen} />}
            {typingMode === TypingMode.WORDS &&
               <CustomWordsConfigModal open={cwModalOpen} setOpen={setCwModalOpen!} />}
         </motion.div>}
   </AnimatePresence>;
};


export default EditorToolbar;