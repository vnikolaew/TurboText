"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export enum TimerState {
   STOPPED = `STOPPED`,
   RUNNING = `RUNNING`,
   PAUSED = `PAUSED`,
   FINISHED = `FINISHED`
}

export function useTimer(seconds: number) {
   const [currentTimestamp, setCurrentTimestamp] = useState(seconds);

   const [timerState, setTimerState] = useState<TimerState>(TimerState.STOPPED);
   const intervalId = useRef<NodeJS.Timeout>(null!);

   useEffect(() => {
      if(currentTimestamp <= 0){
         setTimerState(TimerState.FINISHED)
         clearInterval(intervalId?.current)
      }
   }, [currentTimestamp]);

   const start = useCallback(() => {
      if (timerState === TimerState.RUNNING || currentTimestamp === 0) return;

      if (intervalId.current) clearInterval(intervalId.current);
      intervalId.current = setInterval(() => {
         console.log(currentTimestamp);
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