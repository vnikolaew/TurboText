"use client";
import {
   DEFAULT_WORD_COUNT,
   TypingFlags,
   TypingMode,
   TypingRunState,
} from "@atoms/consts";
import { typingModeAtom, typingRunStateAtom } from "@atoms/editor";
import {
   toggleNumbersAtom,
   togglePunctuationAtom,
   typingFlagsAtom,
} from "@atoms/flags";
import { generateWordsAtom, wordsCountsAtom } from "@atoms/words";
import CustomTimeConfigModal from "@components/editor/toolbar/CustomTimeConfigModal";
import CustomWordsConfigModal from "@components/editor/toolbar/CustomWordsConfigModal";
import { TimeSelect } from "@components/editor/toolbar/TimeSelect";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import { WordsSelect } from "@components/editor/toolbar/WordsSelect";
import { useBoolean } from "@hooks/useBoolean";
import { Button, Separator, ToggleGroup } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";
import { AtSign, Baseline, Clock2, Hash, Wrench } from "lucide-react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { ReactNode, useCallback } from "react";
import { match } from "ts-pattern";

export interface EditorToolbarProps {}

const EditorToolbar = ({}: EditorToolbarProps) => {
   const [, setCustomTimeQs] = useQueryState(
      `custom-time`,
      parseAsBoolean.withDefault(false)
   );
   const [, setCustomWordsQs] = useQueryState(
      `custom-words`,
      parseAsBoolean.withDefault(false)
   );

   const typingFlags = useAtomValue(typingFlagsAtom);
   const togglePunctuation = useSetAtom(togglePunctuationAtom);
   const toggleNumbers = useSetAtom(toggleNumbersAtom);

   const [typingMode, setTypingMode] = useAtom(typingModeAtom);
   const [cwModalOpen, setCwModalOpen] = useBoolean();
   const [timeModalOpen, setTimeModalOpen] = useBoolean();

   const wordCount = useAtomValue(wordsCountsAtom);
   const generateWords = useSetAtom(generateWordsAtom);
   const state = useAtomValue(typingRunStateAtom);

   const handleToggle = useCallback(
      (values: string[]) => {
         const numberValues = values.map(Number);

         const addingPunctuation =
            numberValues.includes(TypingFlags.PUNCTUATION) &&
            (typingFlags & TypingFlags.PUNCTUATION) === 0;
         const removingPunctuation =
            !numberValues.includes(TypingFlags.PUNCTUATION) &&
            Boolean(typingFlags & TypingFlags.PUNCTUATION);

         const addingNumbers =
            numberValues.includes(TypingFlags.NUMBERS) &&
            (typingFlags & TypingFlags.NUMBERS) === 0;
         const removingNumbers =
            !numberValues.includes(TypingFlags.NUMBERS) &&
            Boolean(typingFlags & TypingFlags.NUMBERS);

         if (addingPunctuation || removingPunctuation) togglePunctuation();
         if (addingNumbers || removingNumbers) toggleNumbers();
      },
      [typingFlags]
   );

   return (
      <AnimatePresence initial mode={`wait`}>
         {state !== TypingRunState.RUNNING && (
            <motion.div
               initial={{ opacity: 100 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 100 }}
               transition={{ duration: 0.3 }}
               key={`editor-toolbar`}
               id={`editor-toolbar`}
               className={`flex items-center gap-2 rounded-full bg-secondary-bg !px-4 !py-1 shadow-md`}
            >
               <ToggleGroup onValueChange={handleToggle} type="multiple">
                  <ToggleItem
                     Icon={AtSign}
                     value={TypingFlags.PUNCTUATION.toString()}
                     active={Boolean(typingFlags & TypingFlags.PUNCTUATION)}
                     text={`punctuation`}
                  />
                  <ToggleItem
                     Icon={Hash}
                     value={TypingFlags.NUMBERS.toString()}
                     active={Boolean(typingFlags & TypingFlags.NUMBERS)}
                     text={`numbers`}
                  />
               </ToggleGroup>
               <Separator className={`h-4 w-[1px] bg-neutral-500`} />
               <ToggleGroup
                  onValueChange={async (value) => {
                     if (!value?.length) return;

                     setTypingMode(value as TypingMode);

                     if (value === TypingMode.WORDS)
                        await generateWords(wordCount);
                     else await generateWords(DEFAULT_WORD_COUNT);
                  }}
                  type="single"
               >
                  <ToggleItem
                     Icon={Clock2}
                     value={TypingMode.TIME}
                     active={typingMode === TypingMode.TIME}
                     text={`time`}
                  />
                  <ToggleItem
                     Icon={Baseline}
                     value={TypingMode.WORDS}
                     active={typingMode === TypingMode.WORDS}
                     text={`words`}
                  />
               </ToggleGroup>
               <Separator className={`h-4 w-[1px] bg-neutral-500`} />
               {match(typingMode)
                  .returnType<ReactNode>()
                  .with(TypingMode.TIME, (_) => <TimeSelect />)
                  .with(TypingMode.WORDS, (_) => <WordsSelect />)
                  .otherwise((_) => null!)}
               <Button
                  className={`group rounded-full hover:!bg-neutral-800`}
                  onClick={async (_) => {
                     if (typingMode === TypingMode.TIME) {
                        await setCustomTimeQs(true);
                        setTimeModalOpen(true);
                     } else if (typingMode === TypingMode.WORDS) {
                        await setCustomWordsQs(true);
                        setCwModalOpen(true);
                     }
                  }}
                  title={`Customize`}
                  variant={`ghost`}
                  size={`icon`}
               >
                  <Wrench
                     className={`!text-main group-hover:!text-accent`}
                     size={16}
                  />
               </Button>
               {match(typingMode)
                  .returnType<ReactNode>()
                  .with(TypingMode.TIME, () => (
                     <CustomTimeConfigModal
                        setOpen={setTimeModalOpen}
                        open={timeModalOpen}
                     />
                  ))
                  .with(TypingMode.WORDS, () => (
                     <CustomWordsConfigModal
                        open={cwModalOpen}
                        setOpen={setCwModalOpen!}
                     />
                  ))
                  .otherwise((_) => null!)}
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default EditorToolbar;
