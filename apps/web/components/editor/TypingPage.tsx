"use client";
import React from "react";
import { useTimer } from "@components/editor/hooks/useTimer";
import { currentTimestampAtom, TypingRunState, typedLettersAtom } from "@atoms/editor";
import { useAtomValue } from "jotai";
import TypingRunSummary from "@components/editor/TypingRunSummary";
import { useSaveLatestUserRun } from "@components/editor/hooks/useSaveLatestUserRun";
import Confetti from "react-confetti";
import RestartButton from "@components/editor/RestartButton";
import TypeRunState from "./TypeRunState";
import TypingInput from "@components/editor/TypingInput";

export interface TypingEditorProps {
}

const TIME = 10;
export const TYPED_LETTER_LS_KEY = `typed-letters`;

const TypingPage = ({}: TypingEditorProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const time = useAtomValue(currentTimestampAtom);

   useSaveLatestUserRun();

   const { start, timerState } = useTimer(() => {
      console.log(typedLetters);

      // Save to local storage:
      localStorage.setItem(TYPED_LETTER_LS_KEY, JSON.stringify({ typedLetters, time }));
   });

   return (
      <div className={`flex flex-col items-start gap-8 w-3/4 mx-auto`}>
         {timerState === TypingRunState.FINISHED && (
            <Confetti
               className={`w-full h-full`}
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
               <TypingInput start={start} />
            </div>
         )}
         <div className={`flex items-center justify-center w-full`}>
            <RestartButton />
         </div>
         {timerState === TypingRunState.FINISHED && (
            <div className={`text-sm`}>
               <TypingRunSummary time={TIME} />
            </div>
         )}
      </div>
   );
};

export default TypingPage;