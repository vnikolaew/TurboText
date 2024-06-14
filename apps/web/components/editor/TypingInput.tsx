"use client";
import React, { Fragment, useEffect } from "react";
import { useTypingEditor } from "@components/editor/hooks/useTypingEditor";
import { useAtomValue } from "jotai";
import { TypingRunState, typingRunStateAtom, wordsAtom } from "@atoms/editor";
import { userAtom } from "@atoms/user";
import Letter from "@components/common/Letter";
import { cn } from "@lib/utils";
import { useBoolean } from "@hooks/useBoolean";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointer } from "lucide-react";

export interface TypingInputProps {
   start: () => void;
}

const TypingInput = ({ start }: TypingInputProps) => {
   const {
      editorRef,
      currentLetterRef,
      currentCharIndex,
      left,
      top,
      lettersCorrectness,
      onKeyDown,
   } = useTypingEditor(start);

   const timerState = useAtomValue(typingRunStateAtom);
   const words = useAtomValue(wordsAtom);
   const user = useAtomValue(userAtom);
   const [showFocusLost, setShowFocusLost] = useBoolean();

   useEffect(() => {
      const handler= () => {
         if(showFocusLost) {
            setShowFocusLost(false)
            editorRef.current?.focus()
         }
      }

      window.addEventListener(`keydown`, handler)
      return () => window.removeEventListener(`keydown`, handler)

   }, [showFocusLost]);

   return (
      <Fragment>
         <AnimatePresence>
            {showFocusLost && (
               <motion.div
                  id={`focus-lost`}
                  initial={{ opacity: 100 }}
                  animate={{ opacity: 100 }}
                  transition={{ duration: .3 }}
                  exit={{ opacity: 0 }}
                  onKeyDown={console.log}
                  onClick={_ => setShowFocusLost(false)}
                  className={`absolute left-1/2 top-3/5 -translate-x-1/2 -translate-y-1/2 text-neutral-300 flex items-center gap-2 z-[30]`}>
                  <MousePointer size={18} />
                  <span className={`text-sm`}>
                       Click here or press any key to focus
                   </span>
               </motion.div>
            )}
         </AnimatePresence>
         <div
            onBlur={_ => setTimeout(() => setShowFocusLost(true), 2000)}
            style={{
               caretColor: `transparent`,
            }}
            ref={editorRef}
            className={cn(`bg-transparent flex w-full items-center gap-2 text-wrap break-normal !py-2 cursor-default focus:!outline-none text-wrap flex-wrap mt-8`,
               showFocusLost && `blur-sm`)}
            tabIndex={0}
            autoFocus
            onKeyDown={timerState === TypingRunState.FINISHED ? null : onKeyDown}>
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
                          <Letter
                             ref={currentCharIndex === i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0) ? currentLetterRef! : ((currentCharIndex <= 0 && index === 0 && i === 0) ? currentLetterRef : null)}
                             className={cn(
                                lettersCorrectness[i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] && `text-neutral-300`,
                                lettersCorrectness[i + words.slice(0, index).reduce((prev, curr) => prev + curr.length, 0)] === false && `text-red-500 line-through decoration-red-500 decoration-3`,
                             )} key={char + i}>{char}</Letter>
                       ))}
                   </span>
            ))}
         </div>
      </Fragment>
   );
};

export default TypingInput;