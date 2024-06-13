"use client";
import { cn } from "@lib/utils";
import React from "react";
import { useTypingEditor } from "@components/editor/hooks/useTypingEditor";
import Letter from "@components/common/Letter";
import { useTimer } from "@components/editor/hooks/useTimer";
import { TimerState, typedLettersAtom, wordsAtom } from "./atoms";
import { useAtomValue } from "jotai";
import TypingRunSummary from "@components/editor/TypingRunSummary";
import { useSaveLatestUserRun } from "@components/editor/hooks/useSaveLatestUserRun";


export interface TypingEditorProps {
}

const TIME = 10;
export const TYPED_LETTER_LS_KEY = `typed-letters`

const TypingEditor = ({}: TypingEditorProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const words = useAtomValue(wordsAtom);

   useSaveLatestUserRun();

   const { start, currentTimestamp, timerState } = useTimer(TIME, () => {
      console.log(typedLetters);

      // Save to local storage:
      localStorage.setItem(TYPED_LETTER_LS_KEY, JSON.stringify({ typedLetters, time: TIME }));
   });


   const {
      editorRef,
      currentLetterRef,
      currentCharIndex,
      left,
      top,
      lettersCorrectness,
      onKeyDown,
   } = useTypingEditor(start);

   return (
      <div className={`flex flex-col items-start gap-8 w-3/4 mx-auto`}>
         <div id={`editor`} className={`rounded-md px-4 py-8`}>
            <div className={`text-amber-600 text-5xl inline-flex items-center gap-4`}> {currentTimestamp} <span
               className={`text-xl`}>
            {timerState}
         </span>
            </div>
            <div
               style={{
                  caretColor: `transparent`,
               }}
               ref={editorRef}
               className={`bg-transparent flex w-full items-center gap-2 text-wrap break-normal !py-2 cursor-default focus:!outline-none text-wrap flex-wrap`}
               tabIndex={0}
               autoFocus
               onKeyDown={timerState === TimerState.FINISHED ? null : onKeyDown}>
               <div
                  style={{
                     top, left,
                     transition: `left 100ms`,
                  }}
                  className={`h-[2rem] w-[2px] bg-neutral-100 animate-pulse absolute z-10 text-red-500 `}></div>
               {/*<div className={``} ref={editorBeginningRef} id={`editor-beginning self-start`} />*/}
               {words.map((word, index) => (
                  <span className={`inline-flex items-center gap-.5 text-neutral-600 `} key={word + index}>
               {[...word].map((char, i) => (
                  <Letter ref={
                     currentCharIndex === i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0) ? currentLetterRef! : ((currentCharIndex <= 0 && index === 0 && i === 0) ? currentLetterRef : null)
                  } className={cn(
                     lettersCorrectness[i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] && `text-neutral-300`,
                     lettersCorrectness[i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] === false && `text-red-500 line-through decoration-red-500 decoration-3`,
                  )
                  } key={char + i}>{char}</Letter>
               ))}
            </span>
               ))}
            </div>
         </div>
         <div className={`text-sm`}>
            <TypingRunSummary time={TIME} />
         </div>
      </div>
   );
};

export default TypingEditor;