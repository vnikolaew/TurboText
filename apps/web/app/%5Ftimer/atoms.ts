"use client";
import { atom } from "jotai";

export const timerAtom = atom(10);
timerAtom.debugLabel = `timerAtom`

export const currentTimerStampAtom = atom(10);
currentTimerStampAtom.debugLabel = `currentTimerStampAtom`

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

   set(currentTimerStampAtom, 10)

   interval = setInterval(() => {
      const current = get(currentTimerStampAtom);
      console.log({ current });
      if (current <= 0) {
         clearInterval(interval);
         set(timerIntervalAtom, null)
         return
      } else {
         set(currentTimerStampAtom, t => Math.max(t - 1, 0));
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
      const current = get(currentTimerStampAtom);
      console.log({ current });
      if (current <= 0) {
         clearInterval(interval);
         set(timerIntervalAtom, null)
         return
      } else {
         set(currentTimerStampAtom, t => Math.max(t - 1, 0));
      }
   }, 1000);

   set(timerIntervalAtom, interval);
});
resumeAtom.debugLabel = `resumeAtom`
