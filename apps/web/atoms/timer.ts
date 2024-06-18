import { atom } from "jotai/index";
import { startTimeAtom } from "@atoms/editor";

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
export const timeAtom = atom<number>(TIMES["10"]!, (get, set, value: number) => {
   set(timeAtom, value);
   set(currentTimestampAtom, value);
});
timeAtom.debugLabel = `timeAtom`;

export const timerIntervalAtom = atom<NodeJS.Timeout>(null!, (get, set, value: number) =>  {
   set(timerIntervalAtom, value)
   if(value) set(runningAtom, true)
   else set(runningAtom, false)
});

timerIntervalAtom.debugLabel = `timerIntervalAtom`

export const runningAtom = atom<boolean>(false);
runningAtom.debugLabel = `runningAtom`

export const startAtom = atom(null, (get, set) => {
   let interval = get(timerIntervalAtom);
   if (interval) clearInterval(interval);

   set(currentTimestampAtom , get(timeAtom))
   set(startTimeAtom, performance.now())

   interval = setInterval(() => {
      const current = get(currentTimestampAtom);
      console.log({ current });
      if (current <= 0) {
         clearInterval(interval);
         set(timerIntervalAtom, null)
         return
      } else {
         set(currentTimestampAtom, t => Math.max(t - 1, 0));
      }
   }, 1000);

   set(timerIntervalAtom, interval);
});
startAtom.debugLabel = `startAtom`

export const pauseAtom = atom(null, (get, set) => {
   let interval = get(timerIntervalAtom);
   if (!interval) return;

   clearInterval(interval);
   set(timerIntervalAtom, null!)
});
pauseAtom.debugLabel = `pauseAtom`

export const resumeAtom = atom(null, (get, set) => {
   let interval = get(timerIntervalAtom);
   if (interval) return;

   interval = setInterval(() => {
      const current = get(currentTimestampAtom);
      console.log({ current });
      if (current <= 0) {
         clearInterval(interval);
         set(timerIntervalAtom, null)
         return
      } else {
         set(currentTimestampAtom, t => Math.max(t - 1, 0));
      }
   }, 1000);

   set(timerIntervalAtom, interval);
});
resumeAtom.debugLabel = `resumeAtom`

export const stopAtom = atom(null, (get, set) => {
   let interval = get(timerIntervalAtom);
   const time = get(timeAtom)

   clearInterval(interval);
   set(timerIntervalAtom, null!)
   set(currentTimestampAtom, time)
});
stopAtom.debugLabel = `stopAtom`
