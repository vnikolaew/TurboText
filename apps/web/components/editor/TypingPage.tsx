"use client";
import React, { useMemo, useState } from "react";
import { useTimer } from "@components/editor/hooks/useTimer";
import {
   totalRunTimeAtom,
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
import { Button, toast } from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { saveTypingRun } from "@components/editor/actions";
import { isExecuting } from "next-safe-action/status";
import { AnimatePresence } from "framer-motion";
import { TOASTS } from "@config/toasts";
import SaveTypingRunPrompt from "@components/editor/SaveTypingRunPrompt";
import { autoSaveModeAtom, userConfigAtom } from "@atoms/user";
import NewRunButton from "@components/editor/NewRunButton";
import { SignedIn } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import { currentTimestampAtom } from "@atoms/timer";

export interface TypingEditorProps {
}


export const TYPING_RUN_LS_KEY = `typing-run`;
const TypingPage = ({}: TypingEditorProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const time = useAtomValue(currentTimestampAtom);
   const wordCounts = useAtomValue(wordsCountsAtom);
   const mode = useAtomValue(typingModeAtom);
   const flags = useAtomValue(typingFlagsAtom);
   const totalRunTime = useAtomValue(totalRunTimeAtom);

   const success = useAtomValue(typingRunSuccessAtom);
   const wc = useAtomValue(wordsCorrectnessAtom);

   const [userConfig, setUserConfig] = useAtom(userConfigAtom);
   console.log({ userConfig });

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
      console.log(typedLetters.sort((a, b) => a.charIndex - b.charIndex));

      // Save to local storage:
      const typeRun = {
         totalRunTime,
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
   const autoSaveMode = useAtomValue(autoSaveModeAtom);
   const showSavePrompt = useMemo(() => timerState === TypingRunState.FINISHED && typingRun && !autoSaveMode, [timerState, typingRun]);

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
         <span className={`mt-4 w-full text-center`}>Total run time: {totalRunTime}ms</span>
         <div className={`flex items-center justify-center w-full gap-4`}>
            <RestartButton />
            <NewRunButton />
         </div>
         <AnimatePresence>
            {showSavePrompt &&
               <SaveTypingRunPrompt
                  loading={isExecuting(status)}
                  onDismiss={() => {
                     setTypingRun(null!);
                     LocalStorage.removeItem(TYPING_RUN_LS_KEY);
                  }} onSave={handleSaveTypingRun} />
            }
         </AnimatePresence>
         <AnimatePresence>
            <SignedIn>
               {showSavePrompt &&
                  (
                     <div className={`flex items-center justify-center w-full`}>
                     <span className={`text-lg`}>
                        <Button className={`!text-base !px-0`} variant={`link`}
                                onClick={_ => signIn(`google`)}>Sign in </Button> to save your result.
                     </span>
                     </div>
                  )
               }
            </SignedIn>
         </AnimatePresence>
         <div className={`w-full grid grid-cols-8 gap-4`}>
            {typedLetters.map((letter, index) => (
               <span key={`${letter.letter}-${letter.timestamp}`}
                     className={`text-sm`}>
                  {letter.letter} - {letter.timestamp}ms
               </span>
            ))}
         </div>
         {timerState === TypingRunState.FINISHED && (
            <div className={`text-sm`}>
               <TypingRunSummary />
            </div>
         )}
      </div>
   );
};

export default TypingPage;