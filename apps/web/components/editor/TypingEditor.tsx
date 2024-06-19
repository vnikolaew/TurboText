"use client";
import React, { useMemo } from "react";
import { useTimer } from "@components/editor/hooks/useTimer";
import { totalRunTimeAtom, typedLettersAtom, typingRunAtom, useTypingRunSuccess } from "@atoms/editor";
import { useAtom, useAtomValue } from "jotai";
import TypingRunSummary from "@components/editor/TypingRunSummary";
import Confetti from "react-confetti";
import RestartButton from "@components/editor/RestartButton";
import TypingInput from "@components/editor/TypingInput";
import { LocalStorage } from "@lib/local-storage";
import { Button, toast } from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { saveTypingRun } from "@components/editor/actions";
import { AnimatePresence } from "framer-motion";
import { TOASTS } from "@config/toasts";
import SaveTypingRunPrompt from "@components/editor/SaveTypingRunPrompt";
import { autoSaveModeAtom } from "@atoms/user";
import NewRunButton from "@components/editor/NewRunButton";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import { TypingRunState } from "@atoms/consts";
import { useSaveLatestUserRun } from "./hooks/useSaveLatestUserRun";
import { totalPauseTimeAtom } from "@atoms/timer";
import TypeRunState from "./TypeRunState";
import CapsLockWarning from "@components/editor/CapsLockWarning";

export interface TypingEditorProps {
}


export const TYPING_RUN_LS_KEY = `typing-run`;

const TypingEditor = ({}: TypingEditorProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const totalRunTime = useAtomValue(totalRunTimeAtom);
   const totalPauseTime = useAtomValue(totalPauseTimeAtom)
   const [typingRun, setTypingRun] = useAtom(typingRunAtom);

   useTypingRunSuccess();
   useSaveLatestUserRun();

   const { isExecuting, execute } = useAction(saveTypingRun, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res.data);
            localStorage.removeItem(TYPING_RUN_LS_KEY);

            toast(TOASTS.SAVE_TYPING_RUN_SUCCESS);
            // setTypingRun(null!);
         }
      },
      onError: console.error,
   });

   const { timerState } = useTimer(() => {
      console.log(typedLetters?.sort((a, b) => a.charIndex - b.charIndex));
      LocalStorage.setItem(TYPING_RUN_LS_KEY, typingRun);
   });

   const autoSaveMode = useAtomValue(autoSaveModeAtom);
   const showSavePrompt = useMemo(() =>
         timerState === TypingRunState.FINISHED && !autoSaveMode,
      [timerState]);

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
               <CapsLockWarning/>
               <TypingInput />
            </div>
         )}
         <span className={`mt-4 w-full text-center`}>Total run time: {totalRunTime}ms</span>
         <span className={`mt-4 w-full text-center`}>Total pause time: {totalPauseTime}ms</span>
         <div className={`flex items-center justify-center w-full gap-4`}>
            <RestartButton />
            <NewRunButton />
         </div>
         <AnimatePresence>
            {showSavePrompt &&
               <SaveTypingRunPrompt
                  loading={isExecuting}
                  onDismiss={() => {
                     setTypingRun(null!);
                     LocalStorage.removeItem(TYPING_RUN_LS_KEY);
                  }} onSave={handleSaveTypingRun} />
            }
         </AnimatePresence>
         <AnimatePresence>
            <SignedOut>
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
            </SignedOut>
         </AnimatePresence>
         <div className={`w-full grid grid-cols-8 gap-4`}>
            {typedLetters?.map((letter, index) => (
               <span key={`${letter.letter}-${letter.timestamp}`}
                     className={`text-sm`}>
                  {letter.letter} - {letter.timestamp}ms
               </span>
            ))}
         </div>
         {timerState === TypingRunState.FINISHED && <TypingRunSummary />}
      </div>
   );
};


export default TypingEditor