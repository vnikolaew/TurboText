"use client";

import { atom } from "jotai";
import { TIMES } from "@atoms/timer";

export enum UserDifficulty {
   EASY = "EASY",
   MEDIUM = "MEDIUM",
   HARD = "HARD",
}

export const userSelectedLanguageAtom = atom<string>(`English`)
userSelectedLanguageAtom.debugLabel = `userSelectedLanguageAtom`

export const userSelectedTimeAtom = atom<number>(TIMES[10])
userSelectedTimeAtom.debugLabel = `userSelectedTimeAtom`

export const userSelectedDifficultyAtom = atom<UserDifficulty>(UserDifficulty.MEDIUM)
userSelectedDifficultyAtom.debugLabel = `userSelectedDifficultyAtom`

export const matchParamsAtom = atom(get => {
   const language = get(userSelectedLanguageAtom)
   const time = get(userSelectedTimeAtom)
   const difficulty = get(userSelectedDifficultyAtom)

   return { language, time, difficulty }
})
matchParamsAtom.debugLabel = `matchParams`