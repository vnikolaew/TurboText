"use client";
import { TypingRunState } from "@atoms/consts";
import {
   endTimeAtom,
   totalRunTimeAtom,
   typedLettersAtom,
   typingRunAtom,
   typingRunStateAtom,
   useTypingRunSuccess,
} from "@atoms/editor";
import { totalPauseTimeAtom } from "@atoms/timer";
import { autoSaveModeAtom, updateUserXpAtom } from "@atoms/user";
import { SignedOut } from "@components/common/Auth";
import DevOnly from "@components/common/DevOnly";
import {
   SaveTypingRunPrompt,
   ToggleWords,
   TypingInput,
   TypingRunSummary,
} from "@components/editor";
import { saveTypingRun } from "@components/editor/actions";
import EditorButtons from "@components/editor/buttons";
import { useTimer } from "@components/editor/hooks/useTimer";
import CapsLockWarning from "@components/editor/warnings/CapsLockWarning";
import { TOASTS } from "@config/toasts";
import { LocalStorage } from "@lib/local-storage";
import { TypingRun, User } from "@repo/db";
import { Button, toast } from "@repo/ui";
import { AnimatePresence } from "framer-motion";
import { useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";
import { signIn } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { Fragment, useEffect, useMemo } from "react";
import Confetti from "react-confetti";
import TypeRunState from "./TypeRunState";
import TypingRunInfo from "./TypingRunInfo";
import { useSaveLatestUserRun } from "./hooks/useSaveLatestUserRun";

export interface TypingEditorProps {
   user: User & { typingRuns: TypingRun[] };
}

export const TYPING_RUN_LS_KEY = `typing-run`;

const TypingEditor = ({ user }: TypingEditorProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const totalRunTime = useAtomValue(totalRunTimeAtom);
   const totalPauseTime = useAtomValue(totalPauseTimeAtom);
   const typingRun = useAtomValue(typingRunAtom);
   const autoSave = useAtomValue(autoSaveModeAtom) as boolean;
   const setUserXp = useSetAtom(updateUserXpAtom);
   const setEnd = useSetAtom(endTimeAtom);

   useTypingRunSuccess();
   useSaveLatestUserRun();

   const { isExecuting, execute, result } = useAction(saveTypingRun, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log({ result });
            localStorage.removeItem(TYPING_RUN_LS_KEY);

            const newUserXp = {
               level: res.data.userXp?.level,
               points: res.data.userXp?.points,
            };
            setUserXp(newUserXp);

            if (res.data?.notification) {
               toast(
                  TOASTS.SAVE_TYPING_RUN_SUCCESS_NOTIFICATION(
                     res.data?.notification!.message
                  )
               );
            } else {
               toast(TOASTS.SAVE_TYPING_RUN_SUCCESS);
            }
         }
      },
      onError: console.error,
   });

   const { timerState } = useTimer(() => {
      // console.log(typedLetters?.sort((a, b) => a.charIndex - b.charIndex));
      setEnd(performance.now());
      LocalStorage.setItem(TYPING_RUN_LS_KEY, typingRun);
   });

   const state = useAtomValue(typingRunStateAtom);
   useEffect(() => {
      if (state === TypingRunState.FINISHED && autoSave) {
         execute(typingRun);
      }
   }, [state, autoSave]);

   const autoSaveMode = useAtomValue(autoSaveModeAtom);
   const showSavePrompt = useMemo(
      () => timerState === TypingRunState.FINISHED,
      [timerState, result, autoSaveMode]
   );

   function handleSaveTypingRun(): void {
      execute(typingRun);
   }

   return (
      <div className={`mx-auto flex w-3/4 flex-col items-center gap-8`}>
         {timerState === TypingRunState.FINISHED && (
            <Confetti
               className={`h-full w-1/5`}
               numberOfPieces={500}
               width={300}
               confettiSource={{
                  x: 100,
                  y: 100,
                  w: 200,
                  h: 200,
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
            {timerState !== TypingRunState.FINISHED && <TypingInput />}
         </div>
         <DevOnly>
            <div className={`flex w-full items-center justify-center gap-2`}>
               <span className={`mt-4 w-full text-center !text-main`}>
                  Total run time: {totalRunTime.toFixed(2)}ms
               </span>
               <span className={`mt-4 w-full text-center !text-main`}>
                  Total pause time: {totalPauseTime.toFixed(2)}ms
               </span>
            </div>
         </DevOnly>
         <ToggleWords />
         <EditorButtons />
         <AnimatePresence>
            {showSavePrompt && (
               <SaveTypingRunPrompt
                  loading={isExecuting}
                  onDismiss={() => {
                     LocalStorage.removeItem(TYPING_RUN_LS_KEY);
                  }}
                  onSave={handleSaveTypingRun}
               />
            )}
         </AnimatePresence>
         <AnimatePresence>
            <SignedOut>
               {showSavePrompt && (
                  <div className={`flex w-full items-center justify-center`}>
                     <span className={`text-lg`}>
                        <Button
                           className={`!px-0 !text-base`}
                           variant={`link`}
                           onClick={(_) => signIn(`google`)}
                        >
                           Sign in{" "}
                        </Button>{" "}
                        to save your result.
                     </span>
                  </div>
               )}
            </SignedOut>
         </AnimatePresence>
         <DevOnly>
            {timerState === TypingRunState.FINISHED && <TypingRunSummary />}
         </DevOnly>
      </div>
   );
};

export default TypingEditor;
