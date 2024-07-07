import { TypingMode, TypingRunState } from "@atoms/consts";
import {
   endTimeAtom,
   startTimeAtom,
   typingModeAtom,
   typingRunStateAtom,
} from "@atoms/editor";
import { atom } from "jotai/index";

export const TIMES = {
   10: 10,
   15: 15,
   30: 30,
   60: 60,
   120: 120,
} as const;

export const currentTimestampAtom = atom<number>(TIMES["10"]!);
currentTimestampAtom.debugLabel = `currentTimestampAtom`;

// @ts-ignore
export const timeAtom = atom<number>(
   TIMES["10"]!,
   (get, set, value: number) => {
      set(timeAtom, value);
      set(currentTimestampAtom, value);
   }
);
timeAtom.debugLabel = `timeAtom`;

export const timerIntervalAtom = atom<NodeJS.Timeout>(
   null!,
   (get, set, value: number) => {
      set(timerIntervalAtom, value);
      if (value) set(runningAtom, true);
      else set(runningAtom, false);
   }
);

timerIntervalAtom.debugLabel = `timerIntervalAtom`;

export const runningAtom = atom<boolean>(false);
runningAtom.debugLabel = `runningAtom`;

export const startAtom = atom(null, (get, set) => {
   const timerState = get(typingRunStateAtom);
   const currentTimestamp = get(currentTimestampAtom);

   if (timerState === TypingRunState.RUNNING || currentTimestamp === 0) return;

   set(typingRunStateAtom, TypingRunState.RUNNING);
   const mode = get(typingModeAtom);

   set(startTimeAtom, performance.now());
   set(totalPauseTimeAtom, 0);
   set(currentPauseStartTimeAtom, 0);
   if (mode === TypingMode.WORDS) return;

   let interval = get(timerIntervalAtom);
   if (interval) clearInterval(interval);

   set(currentTimestampAtom, get(timeAtom));

   interval = setInterval(() => {
      const current = get(currentTimestampAtom);
      if (current <= 0) {
         clearInterval(interval);
         set(timerIntervalAtom, null);
         return;
      } else {
         set(currentTimestampAtom, (t) => Math.max(t - 1, 0));
      }
   }, 1000);

   set(timerIntervalAtom, interval);
});
startAtom.debugLabel = `startAtom`;

export const pauseAtom = atom(null, (get, set) => {
   console.log(`Pausing...`);
   const timerState = get(typingRunStateAtom);
   if (timerState !== TypingRunState.RUNNING) return;

   const mode = get(typingModeAtom);
   set(typingRunStateAtom, TypingRunState.PAUSED);
   set(currentPauseStartTimeAtom, performance.now());

   if (mode === TypingMode.TIME) {
      let interval = get(timerIntervalAtom);
      if (!interval) return;

      clearInterval(interval);
      set(timerIntervalAtom, null!);
   }
});
pauseAtom.debugLabel = `pauseAtom`;

export const totalPauseTimeAtom = atom(0);
totalPauseTimeAtom.debugLabel = `totalPauseTimeAtom`;

export const currentPauseStartTimeAtom = atom(0);
currentPauseStartTimeAtom.debugLabel = `currentPauseStartTimeAtom`;

export const resumeAtom = atom(null, (get, set) => {
   console.log(`Resuming...`);
   const timerState = get(typingRunStateAtom);
   if (timerState !== TypingRunState.PAUSED) return;

   const mode = get(typingModeAtom);

   set(typingRunStateAtom, TypingRunState.RUNNING);
   const currentPause = performance.now() - get(currentPauseStartTimeAtom);

   set(totalPauseTimeAtom, (t) => t + currentPause);
   set(currentPauseStartTimeAtom, 0);

   if (mode === TypingMode.TIME) {
      let interval = get(timerIntervalAtom);
      if (interval) return;

      interval = setInterval(() => {
         const current = get(currentTimestampAtom);
         if (current <= 0) {
            clearInterval(interval);
            set(timerIntervalAtom, null);
            return;
         } else {
            set(currentTimestampAtom, (t) => Math.max(t - 1, 0));
         }
      }, 1000);

      set(timerIntervalAtom, interval);
   }
});
resumeAtom.debugLabel = `resumeAtom`;

export const stopAtom = atom(null, (get, set) => {
   let interval = get(timerIntervalAtom);
   const time = get(timeAtom);

   clearInterval(interval);
   set(timerIntervalAtom, null!);
   set(currentTimestampAtom, time);
   set(typingRunStateAtom, TypingRunState.FINISHED);
   set(endTimeAtom, performance.now());
});
stopAtom.debugLabel = `stopAtom`;
