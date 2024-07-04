"use client";
import React, { Fragment, useEffect } from "react";
import { UsersChallenge } from "@repo/db";
import { useHydrateAtoms } from "jotai/utils";
import { currentCharIndexAtom, typedLettersAtom, typingModeAtom, typingRunStateAtom, wordsAtom } from "@atoms/editor";
import { TypingMode, TypingRunState } from "@atoms/consts";
import { timeAtom, totalPauseTimeAtom } from "@atoms/timer";
import {
   autoSaveModeAtom,
   blindModeAtom,
   capsLockWarningAtom,
   colorfulModeAtom,
   flipColorsAtom,
   paceCaretStyleAtom,
   userLanguageAtom,
   userTestDifficultyAtom,
} from "@atoms/user";
import { wordsCountsAtom } from "@atoms/words";
import { useSetAtom } from "jotai";

export interface HydrateAtomsProps {
   challenge: UsersChallenge;
}

const HydrateAtoms = ({ challenge }: HydrateAtomsProps) => {
   console.log({ challenge });
   const setWordsCounts = useSetAtom(wordsCountsAtom);
   useEffect(() => {
     setWordsCounts(challenge.metadata.words?.length, false);
   }, [])

   useHydrateAtoms([
      [currentCharIndexAtom, -1],
      [typingRunStateAtom, TypingRunState.STOPPED],
      [typedLettersAtom, []],
      [typingModeAtom, TypingMode.TIME],
      [totalPauseTimeAtom, 0],
      [timeAtom, challenge.metadata.time],
      [userLanguageAtom, challenge.metadata.language],
      [wordsAtom, challenge.metadata.words],
      // [wordsCountsAtom, challenge.metadata.words?.length],
      [autoSaveModeAtom, false],
      [paceCaretStyleAtom, `OFF`],
      [flipColorsAtom, false],
      [colorfulModeAtom, false],
      [capsLockWarningAtom, false],
      [userTestDifficultyAtom, `NORMAL`],
      [blindModeAtom, false],
   ], { dangerouslyForceHydrate: true });

   return (
      <Fragment />
   );
};

export default HydrateAtoms;