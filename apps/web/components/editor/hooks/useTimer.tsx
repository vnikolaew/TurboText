"use client";
import { useCallback, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { TimerState, currentTimestampAtom, timerStateAtom } from "@components/editor/atoms";


export function useTimer(seconds: number ,onFinish?: () => void) {
   const [currentTimestamp, setCurrentTimestamp] = useAtom(currentTimestampAtom)
   const [timerState, setTimerState] =useAtom(timerStateAtom);

   const intervalId = useRef<NodeJS.Timeout>(null!);

   useEffect(() => {
      if(currentTimestamp <= 0){
         setTimerState(TimerState.FINISHED)
         clearInterval(intervalId?.current)
         onFinish?.()
      }
   }, [currentTimestamp]);

   const start = useCallback(() => {
      if (timerState === TimerState.RUNNING || currentTimestamp === 0) return;

      if (intervalId.current) clearInterval(intervalId.current);
      intervalId.current = setInterval(() => {
         setCurrentTimestamp(prev => prev - 1);
      }, 1_000);
      setTimerState(TimerState.RUNNING);
   }, [timerState]);

   const pause = useCallback(() => {
      if (timerState !== TimerState.RUNNING) return;

      if (intervalId.current) clearInterval(intervalId.current);
      setTimerState(TimerState.PAUSED);

   }, [timerState]);

   const resume = useCallback(() => {
      if (timerState !== TimerState.PAUSED) return;

      if (intervalId.current) clearInterval(intervalId.current);

      intervalId.current = setInterval(() => {
         setCurrentTimestamp(prev => prev - 1);
      }, 1_000);
      setTimerState(TimerState.RUNNING);

   }, [timerState]);

   return { start, pause, currentTimestamp, timerState, resume };
}