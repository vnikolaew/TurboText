"use client";
import React, { Fragment, useMemo } from "react";
import { useTimer } from "@components/editor/hooks/useTimer";
import { totalRunTimeAtom, typedLettersAtom, typingRunAtom, useTypingRunSuccess } from "@atoms/editor";
import { useAtomValue } from "jotai";
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
import { autoSaveModeAtom, updateUserXpAtom } from "@atoms/user";
import NewRunButton from "@components/editor/NewRunButton";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import { TypingRunState } from "@atoms/consts";
import { useSaveLatestUserRun } from "./hooks/useSaveLatestUserRun";
import { totalPauseTimeAtom } from "@atoms/timer";
import TypeRunState from "./TypeRunState";
import CapsLockWarning from "@components/editor/CapsLockWarning";
import TypingRunInfo from "./TypingRunInfo";
import { TypingRun, User } from "@repo/db";
import { useSetAtom } from "jotai/index";

export interface TypingEditorProps {
   user: User & { typingRuns: TypingRun[] };
}


export const TYPING_RUN_LS_KEY = `typing-run`;

const TypingEditor = ({ user }: TypingEditorProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const totalRunTime = useAtomValue(totalRunTimeAtom);
   const totalPauseTime = useAtomValue(totalPauseTimeAtom);
   const typingRun = useAtomValue(typingRunAtom);
   const setUserXp = useSetAtom(updateUserXpAtom);

   useTypingRunSuccess();
   useSaveLatestUserRun();

   const { isExecuting, execute, result } = useAction(saveTypingRun, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log({ result });
            localStorage.removeItem(TYPING_RUN_LS_KEY);

            const newUserXp = { level: res.data.userXp?.level, points: res.data.userXp?.points };
            setUserXp(newUserXp);

            if (res.data?.notification) {
               toast(TOASTS.SAVE_TYPING_RUN_SUCCESS_NOTIFICATION(res.data?.notification!.message));
            } else {
               toast(TOASTS.SAVE_TYPING_RUN_SUCCESS);
            }
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
         timerState === TypingRunState.FINISHED && !autoSaveMode && !(result?.data?.success === true),
      [timerState, result, autoSaveMode]);

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
         <div id={`editor`} className={`rounded-md px-4 py-8`}>
            {timerState !== TypingRunState.FINISHED && (
               <Fragment>
                  <TypeRunState />
                  <CapsLockWarning />
               </Fragment>
            )}
            {timerState !== TypingRunState.RUNNING && (
               <TypingRunInfo runs={user?.typingRuns} />
            )}
            {timerState !== TypingRunState.FINISHED && (
               <TypingInput />
            )}
         </div>
         <div className={`flex items-center gap-2 w-full justify-center`}>
            <span className={`mt-4 w-full text-center`}>Total run time: {totalRunTime}ms</span>
            <span className={`mt-4 w-full text-center`}>Total pause time: {totalPauseTime}ms</span>
         </div>
         <div className={`flex items-center justify-center w-full gap-4`}>
            <RestartButton />
            <NewRunButton />
         </div>
         <AnimatePresence>
            {showSavePrompt &&
               <SaveTypingRunPrompt
                  loading={isExecuting}
                  onDismiss={() => {
                     // setTypingRun(null!);
                     LocalStorage.removeItem(TYPING_RUN_LS_KEY);
                  }}
                  onSave={handleSaveTypingRun} />
            }
         </AnimatePresence>
         <AnimatePresence>
            <SignedOut>
               {showSavePrompt &&
                  (
                     <div className={`flex items-center justify-center w-full`}>
                     <span className={`text-lg`}>
                        <Button
                           className={`!text-base !px-0`} variant={`link`}
                           onClick={_ => signIn(`google`)}>Sign in </Button> to save your result.
                     </span>
                     </div>
                  )
               }
            </SignedOut>
         </AnimatePresence>
         {
            timerState === TypingRunState.FINISHED && <TypingRunSummary />
         }
      </div>
   );
};


export default TypingEditor;