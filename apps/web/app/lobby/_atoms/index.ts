"use client";

import { TIMES } from "@atoms/timer";
import { atom } from "jotai";

export enum UserDifficulty {
   EASY = "EASY",
   MEDIUM = "MEDIUM",
   HARD = "HARD",
}

export const userSelectedLanguageAtom = atom<string>(`English`);
userSelectedLanguageAtom.debugLabel = `userSelectedLanguageAtom`;

export const userSelectedTimeAtom = atom<number>(TIMES[10]);
userSelectedTimeAtom.debugLabel = `userSelectedTimeAtom`;

export const userSelectedDifficultyAtom = atom<UserDifficulty>(
   UserDifficulty.MEDIUM
);
userSelectedDifficultyAtom.debugLabel = `userSelectedDifficultyAtom`;

export const matchParamsAtom = atom((get) => {
   const language = get(userSelectedLanguageAtom);
   const time = get(userSelectedTimeAtom);
   const difficulty = get(userSelectedDifficultyAtom);

   return { language, time, difficulty };
});
matchParamsAtom.debugLabel = `matchParams`;

export enum UserAcceptState {
   Pending = `Pending`,
   Accepted = `Accepted`,
   Declined = `Declined`,
}

export const userAcceptStateAtom = atom<UserAcceptState>(
   UserAcceptState.Pending
);
userAcceptStateAtom.debugLabel = `userAcceptStateAtom`;
