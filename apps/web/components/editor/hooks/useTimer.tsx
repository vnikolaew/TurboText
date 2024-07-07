"use client";
import { TypingMode, TypingRunState } from "@atoms/consts";
import {
   completedWordsAtom,
   typingModeAtom,
   typingRunStateAtom,
} from "@atoms/editor";
import {
   currentTimestampAtom,
   pauseAtom,
   resumeAtom,
   startAtom,
} from "@atoms/timer";
import { wordsCountsAtom } from "@atoms/words";
import { useAtom, useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";
import { useCallback, useEffect, useRef } from "react";

export function useTimer(onFinish?: () => void) {
   const currentTimestamp = useAtomValue(currentTimestampAtom);
   const wordCounts = useAtomValue(wordsCountsAtom);
   const typingMode = useAtomValue(typingModeAtom);
   const completedWords = useAtomValue(completedWordsAtom);

   const [timerState, setTimerState] = useAtom(typingRunStateAtom);

   const intervalId = useRef<NodeJS.Timeout>(null!);

   const startAction = useSetAtom(startAtom);
   const pauseAction = useSetAtom(pauseAtom);
   const resumeAction = useSetAtom(resumeAtom);

   const handleFinish = useCallback(() => {
      clearInterval(intervalId?.current);
      setTimerState(TypingRunState.FINISHED);
      onFinish?.();
   }, [intervalId, onFinish, setTimerState]);

   useEffect(() => {
      if (typingMode !== TypingMode.WORDS) return;

      if (completedWords.length >= wordCounts) {
         handleFinish();
      }
   }, [completedWords, typingMode, wordCounts, timerState]);

   useEffect(() => {
      if (currentTimestamp <= 0 && timerState === TypingRunState.RUNNING) {
         handleFinish();
      }
   }, [currentTimestamp, completedWords, typingMode, setTimerState]);

   const start = useCallback(() => startAction(), [startAction]);
   const pause = useCallback(() => pauseAction(), [pauseAction]);
   const resume = useCallback(() => resumeAction(), [resumeAction]);

   return { start, pause, currentTimestamp, timerState, resume, typingMode };
}
