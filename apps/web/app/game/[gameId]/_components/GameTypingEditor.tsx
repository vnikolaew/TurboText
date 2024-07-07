"use client";
import { finishChallenge } from "@app/%5Fgame/[gameId]/actions";
import { TypingRunState } from "@atoms/consts";
import {
   endTimeAtom,
   totalRunTimeAtom,
   typingRunAtom,
   typingRunStateAtom,
   useTypingRunSuccess,
} from "@atoms/editor";
import { totalPauseTimeAtom } from "@atoms/timer";
import { autoSaveModeAtom, updateUserXpAtom } from "@atoms/user";
import { SignedOut } from "@components/common/Auth";
import DevOnly from "@components/common/DevOnly";
import SaveTypingRunPrompt from "@components/editor/SaveTypingRunPrompt";
import ToggleWords from "@components/editor/ToggleWords";
import TypeRunState from "@components/editor/TypeRunState";
import { TYPING_RUN_LS_KEY } from "@components/editor/TypingEditor";
import TypingInput from "@components/editor/TypingInput";
import TypingRunInfo from "@components/editor/TypingRunInfo";
import TypingRunSummary from "@components/editor/TypingRunSummary";
import { saveTypingRun } from "@components/editor/actions";
import CopyToClipboardButton from "@components/editor/buttons/CopyToClipboardButton";
import RestartButton from "@components/editor/buttons/RestartButton";
import ToggleWordsHistory from "@components/editor/buttons/ToggleWordsHistory";
import { useTimer } from "@components/editor/hooks/useTimer";
import { TOASTS } from "@config/toasts";
import { LocalStorage } from "@lib/local-storage";
import { User } from "@repo/db";
import { Button, toast } from "@repo/ui";
import { AnimatePresence } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai/index";
import { signIn } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { Fragment, useEffect, useMemo } from "react";
import { match } from "ts-pattern";
import GameEndConfetti from "./GameEndConfetti";

export interface GameTypingEditorProps {
   user: User;
   gameId: string;
}

const GameTypingEditor = ({ user, gameId }: GameTypingEditorProps) => {
   const totalRunTime = useAtomValue(totalRunTimeAtom);
   const totalPauseTime = useAtomValue(totalPauseTimeAtom);
   const typingRun = useAtomValue(typingRunAtom);
   const autoSave = useAtomValue(autoSaveModeAtom) as boolean;
   const setUserXp = useSetAtom(updateUserXpAtom);
   const setEnd = useSetAtom(endTimeAtom);

   useTypingRunSuccess();

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

   const { execute: finish, isExecuting: finishing } = useAction(
      finishChallenge,
      {
         onSuccess: (res) => {
            if (res.data?.success) {
               console.log(res.data);
            }
         },
      }
   );

   const { timerState } = useTimer(() => {
      setEnd(performance.now());
      LocalStorage.setItem(TYPING_RUN_LS_KEY, typingRun);

      finish({ gameId, ...typingRun });
      console.log(`Run ended. Saving to database ...`);
   });

   const state = useAtomValue(typingRunStateAtom);
   useEffect(() => {
      if (state === TypingRunState.FINISHED && autoSave) {
         execute(typingRun);
      }
   }, [state, autoSave]);

   const showSavePrompt = useMemo(
      () => timerState === TypingRunState.FINISHED,
      [timerState, result, autoSave]
   );

   function handleSaveTypingRun(): void {
      execute(typingRun);
   }

   return (
      <div className={`mx-auto flex w-3/4 flex-col items-center gap-8`}>
         {timerState === TypingRunState.FINISHED && <GameEndConfetti />}
         <div id={`editor`} className={`rounded-md px-4 py-8`}>
            {match(timerState)
               .with(TypingRunState.FINISHED, () => (
                  <Fragment>
                     <TypeRunState />
                     <TypingInput />
                  </Fragment>
               ))
               .with(TypingRunState.RUNNING, () => (
                  <TypingRunInfo runs={user?.typingRuns} />
               ))
               .otherwise((_) => null!)}
         </div>
         <DevOnly>
            <div className={`flex w-full items-center justify-center gap-2`}>
               <span className={`mt-4 w-full text-center !text-main`}>
                  Total run time: {totalRunTime}ms
               </span>
               <span className={`mt-4 w-full text-center !text-main`}>
                  Total pause time: {totalPauseTime}ms
               </span>
            </div>
         </DevOnly>
         <ToggleWords />
         <div className={`flex w-full items-center justify-center gap-4`}>
            <RestartButton />
            <ToggleWordsHistory />
            <CopyToClipboardButton />
         </div>
         <AnimatePresence>
            {showSavePrompt && (
               <SaveTypingRunPrompt
                  loading={isExecuting}
                  onDismiss={() => LocalStorage.removeItem(TYPING_RUN_LS_KEY)}
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

export default GameTypingEditor;
