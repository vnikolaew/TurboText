"use client";

import { atom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { soundOnClickAtom, soundOnErrorAtom } from "@atoms/user";
import { SOUNDS } from "@lib/consts";

export const soundClicksAtom = atom<string[]>([]);
soundClicksAtom.debugLabel = `soundClicksAtom`;

//@ts-ignore
export const playSoundAtom = atom<string[]>(null, async (get, set, index: number) => {
   const sound = get(soundClicksAtom).at(index);
   if (sound) {
      const audio = new Audio(sound);
      await audio?.play();
   }
});
playSoundAtom.debugLabel = `playSoundAtom`;

//@ts-ignore
export const playClickSoundAtom = atom<string[]>(null, async (get, set) => {
   const userSoundOnClick = get(soundOnClickAtom) as unknown as string;
   const soundIndex = SOUNDS.findIndex(sound => sound === userSoundOnClick);

   const sound = get(soundClicksAtom).at(soundIndex);
   if (sound) {
      const audio = new Audio(sound);
      await audio?.play();
   }
});
playClickSoundAtom.debugLabel = `playClickSoundAtom`;


//@ts-ignore
export const playErrorSoundAtom = atom<string[]>(null, async (get, set) => {
   const userSoundOnError = get(soundOnErrorAtom) as unknown as string;
   const soundIndex = SOUNDS.findIndex(sound => sound === userSoundOnError);

   const sound = get(soundClicksAtom).at(soundIndex);
   if (sound) {
      const audio = new Audio(sound);
      await audio?.play();
   }
});
playErrorSoundAtom.debugLabel = `playErrorSoundAtom`;

export function useHydrateAllAtoms(soundClicks: string[]) {
   useHydrateAtoms([
      [soundClicksAtom, soundClicks],
   ]);
}

