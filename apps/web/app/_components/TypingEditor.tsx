"use client";
import { cn } from "@lib/utils";
import React, { Fragment, useCallback, useRef } from "react";
import { useTypingEditor, WordRange } from "@app/_hooks/useTypingEditor";
import { generate } from "random-words";
import { TimerState, useTimer } from "@app/_hooks/useTimer";

export interface TypingEditorProps {
}

declare namespace JSX {
   interface IntrinsicElements {
      letter: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
   }
}

const WORDS = generate(40) as string[];

const TypingEditor = ({}: TypingEditorProps) => {
   const editorBeginningRef = useRef<HTMLDivElement>(null!);
   const { start, currentTimestamp, timerState } = useTimer(10);


   const {
      editorRef,
      currentLetterRef,
      currentCharIndex,
      left,
      top,
      wordsCorrectness,
      onKeyDown,
      typedLetters,
      wordRanges,
   } = useTypingEditor(WORDS, editorBeginningRef, start);

   const getWordCompletionTime = useCallback(({ range: [start, end] }: WordRange) => {
      return typedLetters.reverse().find(l => l.charIndex === end)?.timestamp! - typedLetters.reverse().find(l => l.charIndex === start)?.timestamp!;
   }, [typedLetters]);

   return (
      <div className={`flex flex-col items-start gap-8 w-3/4 mx-auto`}>
         <div className={`text-amber-600 text-5xl inline-flex items-center gap-4`}>
            {currentTimestamp} <span className={`text-xl`}>
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
            <div ref={editorBeginningRef} id={`editor-beginning self-start`} />
            {WORDS.map((word, index) => (
               <span className={`inline-flex items-center gap-.5 text-neutral-600`} key={index}>
               {[...word].map((char, i) => (
                  <letter ref={
                     currentCharIndex === i + WORDS.slice(0, index).reduce((prev, curr) => prev + curr.length, 0) ? currentLetterRef : null
                  } className={cn(
                     wordsCorrectness[i + WORDS.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] && `text-neutral-300`,
                     wordsCorrectness[i + WORDS.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] === false && `text-neutral-400 line-through decoration-red-500 decoration-3`,
                  )
                  } key={i}>{char}</letter>
               ))}
            </span>
            ))}
         </div>
         <div className={`text-sm`}>
            {typedLetters.map(l => `${l.letter} - ${l.timestamp}`).join(`, `)}
         </div>
         <div className={`text-sm`}>
            {timerState === TimerState.FINISHED && (
               <div className={`flex flex-col gap-2`}>
                  {wordRanges
                     .filter(({ range: [start] }) => {
                        return start <= (typedLetters.at(-1)?.charIndex ?? Infinity);
                     }).map(({ word, range: [start, end] }, i) => (
                        <Fragment key={word + i}>
                        <span
                           key={word + i}>
                           {word} - {new Intl.NumberFormat().format(getWordCompletionTime({ word, range: [start, end] }) / 1000)}s
                        </span>
                        </Fragment>
                     ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default TypingEditor;