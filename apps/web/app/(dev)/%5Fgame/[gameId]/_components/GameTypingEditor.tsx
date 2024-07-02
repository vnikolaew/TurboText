"use client";
import React, { useEffect, useMemo } from "react";
import { TYPING_RUN_LS_KEY } from "@components/editor/TypingEditor";
import { User } from "@repo/db";
import { useAtomValue, useSetAtom } from "jotai/index";
import { endTimeAtom, totalRunTimeAtom, typingRunAtom, typingRunStateAtom, useTypingRunSuccess } from "@atoms/editor";
import { totalPauseTimeAtom } from "@atoms/timer";
import { autoSaveModeAtom, updateUserXpAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { saveTypingRun } from "@components/editor/actions";
import { Button, toast } from "@repo/ui";
import { TOASTS } from "@config/toasts";
import { useTimer } from "@components/editor/hooks/useTimer";
import { LocalStorage } from "@lib/local-storage";
import { TypingRunState } from "@atoms/consts";
import TypeRunState from "@components/editor/TypeRunState";
import TypingInput from "@components/editor/TypingInput";
import TypingRunInfo from "@components/editor/TypingRunInfo";
import ToggleWords from "@components/editor/ToggleWords";
import { AnimatePresence } from "framer-motion";
import SaveTypingRunPrompt from "@components/editor/SaveTypingRunPrompt";
import { SignedOut } from "@components/common/Auth";
import { signIn } from "next-auth/react";
import TypingRunSummary from "@components/editor/TypingRunSummary";
import GameEndConfetti from "@app/(dev)/%5Fgame/[gameId]/_components/GameEndConfetti";
import { finishChallenge } from "@app/(dev)/%5Fgame/[gameId]/actions";
import RestartButton from "@components/editor/buttons/RestartButton";
import ToggleWordsHistory from "@components/editor/buttons/ToggleWordsHistory";
import CopyToClipboardButton from "@components/editor/buttons/CopyToClipboardButton";

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

   const { execute: finish, isExecuting: finishing } = useAction(finishChallenge, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res.data);
         }
      },
   });

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

   const showSavePrompt = useMemo(() =>
         timerState === TypingRunState.FINISHED,
      [timerState, result, autoSave]);

   function handleSaveTypingRun(): void {
      execute(typingRun);
   }

   return <div className={`flex flex-col items-center gap-8 w-3/4 mx-auto`}>
      {timerState === TypingRunState.FINISHED && <GameEndConfetti />}
      <div id={`editor`} className={`rounded-md px-4 py-8`}>
         {timerState !== TypingRunState.FINISHED && <TypeRunState />}
         {timerState !== TypingRunState.RUNNING && (
            <TypingRunInfo runs={user?.typingRuns} />
         )}
         {timerState !== TypingRunState.FINISHED && <TypingInput />}
      </div>
      <div className={`flex items-center gap-2 w-full justify-center`}>
         <span className={`mt-4 w-full text-center !text-main`}>Total run time: {totalRunTime}ms</span>
         <span className={`mt-4 w-full text-center !text-main`}>Total pause time: {totalPauseTime}ms</span>
      </div>
      <ToggleWords />
      <div className={`flex items-center justify-center w-full gap-4`}>
         <RestartButton />
         <ToggleWordsHistory />
         <CopyToClipboardButton />
      </div>
      <AnimatePresence>
         {(showSavePrompt) &&
            <SaveTypingRunPrompt
               loading={isExecuting}
               onDismiss={() => LocalStorage.removeItem(TYPING_RUN_LS_KEY)}
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
   </div>;

};

export default GameTypingEditor;