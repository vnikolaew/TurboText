"use client";
import { useCallback, useEffect, useRef } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
   completedWordsAtom,
   typingModeAtom,
   typingRunStateAtom,
} from "@atoms/editor";
import { currentTimestampAtom, pauseAtom, resumeAtom, startAtom, timerIntervalAtom } from "@atoms/timer";
import { useSetAtom } from "jotai/index";
import { wordsCountsAtom } from "@atoms/words";
import { TypingMode, TypingRunState } from "@atoms/consts";

export function useTimer(onFinish?: () => void) {
   const [currentTimestamp, setCurrentTimestamp] = useAtom(currentTimestampAtom);
   const wordCounts = useAtomValue(wordsCountsAtom);
   const typingMode = useAtomValue(typingModeAtom);
   const completedWords = useAtomValue(completedWordsAtom);

   const [timerState, setTimerState] = useAtom(typingRunStateAtom);

   const intervalId = useRef<NodeJS.Timeout>(null!);
   const timerIntervalId = useAtom(timerIntervalAtom);

   const startAction = useSetAtom(startAtom);
   const pauseAction = useSetAtom(pauseAtom);
   const resumeAction = useSetAtom(resumeAtom);

   const handleFinish = useCallback(() => {
      clearInterval(intervalId?.current);
      setTimerState(TypingRunState.FINISHED);
      onFinish?.();
   }, [intervalId, onFinish, setTimerState]);

   useEffect(() => {
      if (timerState === TypingRunState.FINISHED) {
         console.log(`Finished!`);
      }
   }, [timerState]);

   useEffect(() => {
      if (typingMode !== TypingMode.WORDS) return;

      if (completedWords.length >= wordCounts) {
         console.log(`Finished!`);
         handleFinish();
      }
   }, [completedWords, typingMode, wordCounts, timerState]);

   useEffect(() => {
      if (currentTimestamp <= 0 && timerState === TypingRunState.RUNNING) {
         handleFinish();
      }
   }, [currentTimestamp, completedWords, typingMode, setTimerState]);

   const start = useCallback(() => {
      if (timerState === TypingRunState.RUNNING || currentTimestamp === 0) return;

      if (typingMode === TypingMode.TIME) {
         // if (intervalId.current) clearInterval(intervalId.current);
         // intervalId.current = setInterval(() => {
         //    setCurrentTimestamp(prev => prev - 1);
         // }, 1_000);
         startAction();
      }

      setTimerState(TypingRunState.RUNNING);
   }, [timerState, typingMode, currentTimestamp, setCurrentTimestamp, setTimerState, wordCounts]);

   const pause = useCallback(() => {
      if (timerState !== TypingRunState.RUNNING) return;

      if (typingMode === TypingMode.TIME) {
         // if (intervalId.current) clearInterval(intervalId.current);
         pauseAction();
         setTimerState(TypingRunState.PAUSED);
      }

   }, [timerState, typingMode, setTimerState]);

   const resume = useCallback(() => {
      if (timerState !== TypingRunState.PAUSED) return;

      if (typingMode === TypingMode.TIME) {
         // if (intervalId.current) clearInterval(intervalId.current);
         //
         // intervalId.current = setInterval(() => {
         //    setCurrentTimestamp(prev => prev - 1);
         // }, 1_000);
         resumeAction();
      }

      setTimerState(TypingRunState.RUNNING);
   }, [timerState, typingMode, setTimerState, setCurrentTimestamp]);

   return { start, pause, currentTimestamp, timerState, resume, typingMode };
}