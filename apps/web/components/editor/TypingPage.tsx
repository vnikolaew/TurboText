"use client";
import React, { useState } from "react";
import { useTimer } from "@components/editor/hooks/useTimer";
import {
   currentTimestampAtom,
   typedLettersAtom,
   typingFlagsAtom,
   TypingMode,
   typingModeAtom,
   TypingRunState,
   typingRunSuccessAtom,
   wordsCorrectnessAtom,
   wordsCountsAtom,
} from "@atoms/editor";
import { useAtom, useAtomValue } from "jotai";
import TypingRunSummary from "@components/editor/TypingRunSummary";
import { TypingRun, useSaveLatestUserRun } from "@components/editor/hooks/useSaveLatestUserRun";
import Confetti from "react-confetti";
import RestartButton from "@components/editor/RestartButton";
import TypeRunState from "./TypeRunState";
import TypingInput from "@components/editor/TypingInput";
import { LocalStorage } from "@lib/local-storage";
import { toast } from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { saveTypingRun } from "@components/editor/actions";
import { isExecuting } from "next-safe-action/status";
import { AnimatePresence } from "framer-motion";
import { TOASTS } from "@config/toasts";
import SaveTypingRunPrompt from "@components/editor/SaveTypingRunPrompt";
import { userConfigAtom } from "@atoms/user";

export interface TypingEditorProps {
}

const TIME = 10;

export const TYPING_RUN_LS_KEY = `typing-run`;

const TypingPage = ({}: TypingEditorProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const time = useAtomValue(currentTimestampAtom);
   const wordCounts = useAtomValue(wordsCountsAtom);
   const mode = useAtomValue(typingModeAtom);
   const flags = useAtomValue(typingFlagsAtom);
   const success = useAtomValue(typingRunSuccessAtom);
   const wc = useAtomValue(wordsCorrectnessAtom);

   const [userConfig, setUserConfig] = useAtom(userConfigAtom);

   const { execute, status } = useAction(saveTypingRun, {
      onSuccess: res => {
         if (res.success) {
            console.log(res);
            localStorage.removeItem(TYPING_RUN_LS_KEY);

            toast(TOASTS.SAVE_TYPING_RUN_SUCCESS);
            setTypingRun(null!);
         }
      },
      onError: console.error,
   });

   const [typingRun, setTypingRun] = useState<TypingRun>(null!);

   useSaveLatestUserRun();

   const { start, timerState, resume, pause } = useTimer(() => {
      console.log(typedLetters);

      // Save to local storage:
      const typeRun = {
         typedLetters,
         time: mode === TypingMode.TIME ? time : null,
         wordCounts: mode === TypingMode.WORDS ? wordCounts : null,
         flags,
         mode,
         metadata: {},
      };

      console.log({ typeRun });
      setTypingRun(typeRun);

      LocalStorage.setItem(TYPING_RUN_LS_KEY, typeRun);
   });

   function handleSaveTypingRun(): void {
      execute(typingRun);
   }

   return (
      <div className={`flex flex-col items-start gap-8 w-3/4 mx-auto`}>
         {timerState === TypingRunState.FINISHED && (
            <Confetti
               className={`w-1/5 h-full`}
               numberOfPieces={500}
               width={300}
               confettiSource={{
                  x: 100, y: 100, w: 200, h: 200,
               }}
               recycle={false}
               tweenDuration={3000}
               height={300}
            />
         )}
         {timerState !== TypingRunState.FINISHED && (
            <div id={`editor`} className={`rounded-md px-4 py-8`}>
               <TypeRunState />
               <TypingInput resume={resume} pause={pause} start={start} />
            </div>
         )}
         <div className={`flex items-center justify-center w-full`}>
            <RestartButton />
         </div>
         <AnimatePresence>
            {timerState === TypingRunState.FINISHED && typingRun &&
               <SaveTypingRunPrompt
                  loading={isExecuting(status)} onDismiss={() => {
                  setTypingRun(null!);
                  LocalStorage.removeItem(TYPING_RUN_LS_KEY);
               }} onSave={handleSaveTypingRun} />
            }
         </AnimatePresence>
         {timerState === TypingRunState.FINISHED && (
            <div className={`text-sm`}>
               <TypingRunSummary />
            </div>
         )}
      </div>
   );
};

export default TypingPage;