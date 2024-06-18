"use client"

import { atom } from "jotai"
import { useHydrateAtoms } from "jotai/utils";

export const soundClicksAtom = atom<string[]>([]);
soundClicksAtom.debugLabel = `soundClicksAtom`

export function useHydrateAllAtoms(soundClicks: string[]) {
   useHydrateAtoms([
      [soundClicksAtom, soundClicks]
   ])
}

