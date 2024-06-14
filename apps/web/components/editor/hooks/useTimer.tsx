"use client";
import { useCallback, useEffect, useRef } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
   completedWordsAtom,
   currentTimestampAtom,
   TypingMode,
   typingModeAtom,
   TypingRunState,
   typingRunStateAtom,
   wordsCountsAtom,
} from "@atoms/editor";


export function useTimer(onFinish?: () => void) {
   const [currentTimestamp, setCurrentTimestamp] = useAtom(currentTimestampAtom);
   const [wordCounts, setWordCounts] = useAtom(wordsCountsAtom);
   const typingMode = useAtomValue(typingModeAtom);
   const completedWords = useAtomValue(completedWordsAtom);

   const [timerState, setTimerState] = useAtom(typingRunStateAtom);

   const intervalId = useRef<NodeJS.Timeout>(null!);

   useEffect(() => {
      if(typingMode !== TypingMode.WORDS) return

      if(completedWords.length >= wordCounts) {
         console.log(`Finished!`);
         setTimerState(TypingRunState.FINISHED)
      }
   }, [completedWords, typingMode, wordCounts])

   useEffect(() => {
      if (currentTimestamp <= 0 && timerState === TypingRunState.RUNNING) {
         setTimerState(TypingRunState.FINISHED);
         clearInterval(intervalId?.current);
         onFinish?.();
      }
   }, [currentTimestamp, completedWords, typingMode, setTimerState ]);

   const start = useCallback(() => {
      if (timerState === TypingRunState.RUNNING || currentTimestamp === 0) return;

      console.log(`we are here`, typingMode, timerState, currentTimestamp, wordCounts);
      if (typingMode === TypingMode.TIME) {
         if (intervalId.current) clearInterval(intervalId.current);
         intervalId.current = setInterval(() => {
            setCurrentTimestamp(prev => prev - 1);
         }, 1_000);
      }

      setTimerState(TypingRunState.RUNNING);
   }, [timerState, typingMode, currentTimestamp, setCurrentTimestamp, setTimerState, wordCounts]);

   const pause = useCallback(() => {
      if (timerState !== TypingRunState.RUNNING) return;

      if (typingMode === TypingMode.TIME) {
         if (intervalId.current) clearInterval(intervalId.current);
         setTimerState(TypingRunState.PAUSED);
      }

   }, [timerState, typingMode, setTimerState]);

   const resume = useCallback(() => {
      if (timerState !== TypingRunState.PAUSED) return;

      if (typingMode === TypingMode.TIME) {
         if (intervalId.current) clearInterval(intervalId.current);

         intervalId.current = setInterval(() => {
            setCurrentTimestamp(prev => prev - 1);
         }, 1_000);
      }

      setTimerState(TypingRunState.RUNNING);
   }, [timerState, typingMode, setTimerState, setCurrentTimestamp]);

   return { start, pause, currentTimestamp, timerState, resume, typingMode };
}