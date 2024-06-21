"use client";

import { atom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

export const soundClicksAtom = atom<string[]>([]);
soundClicksAtom.debugLabel = `soundClicksAtom`;

//@ts-ignore
export const playSoundAtom = atom<string[]>(null, async (get, set, index: number) => {
   const sound = get(soundClicksAtom).at(index);
   if (sound) {
      const audio = new Audio(sound);
      await audio?.play();
      console.log(`Sound played!`);
   }
});

playSoundAtom.debugLabel = `playSoundAtom`;

export function useHydrateAllAtoms(soundClicks: string[]) {
   useHydrateAtoms([
      [soundClicksAtom, soundClicks],
   ]);
}

