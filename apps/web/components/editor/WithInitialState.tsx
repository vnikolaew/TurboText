"use client";
import { useHydrateAtoms } from "jotai/utils";
import React, { Fragment, useRef } from "react";
import {
   currentTimestampAtom,
   lettersCorrectnessAtom,
   TimerState,
   timerStateAtom,
   TIMES,
   typingFlagsAtom,
   TypingMode,
   typingModeAtom,
   WORDS_COUNTS,
   wordsAtom,
   wordsCountsAtom,
} from "@atoms/editor";
import { generate } from "random-words";
import { Session } from "next-auth";
import { userAtom } from "@atoms/user";

export interface WithInitialStateProps {
   user?: Session["user"];
}


const WithInitialState = ({ user }: WithInitialStateProps) => {
   const WORDS = useRef(generate(40) as string[]);

   // @ts-ignore
   useHydrateAtoms([
      [wordsAtom, WORDS.current],
      [lettersCorrectnessAtom, Array
         .from({ length: WORDS.current.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]],
      [userAtom, user],
      [currentTimestampAtom, TIMES["10"]],
      [userAtom, user],
      [timerStateAtom, TimerState.STOPPED],
      [typingModeAtom, TypingMode.TIME],
      [wordsCountsAtom, WORDS_COUNTS['10']],
      [typingFlagsAtom, 0],
   ] as const);

   return (
      <Fragment />
   );
};

export default WithInitialState;