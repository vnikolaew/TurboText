"use client";
import { useHydrateAtoms } from "jotai/utils";
import React, { Fragment, useRef } from "react";
import {
   currentTimestampAtom,
   lettersCorrectnessAtom,
   TIMES,
   typingFlagsAtom,
   TypingMode,
   typingModeAtom,
   TypingRunState,
   typingRunStateAtom,
   WORDS_COUNTS,
   wordsAtom,
   wordsCountsAtom,
} from "@atoms/editor";
import { generate } from "random-words";
import { userAtom, userConfigAtom, userDataLoadingAtom } from "@atoms/user";
import { User, UserConfiguration } from "@repo/db";

export interface WithInitialStateProps {
   user?: User & { configuration: UserConfiguration };
}


const WithInitialState = ({ user }: WithInitialStateProps) => {
   const WORDS = useRef(generate(40) as string[]);
   console.log({ user });

   // @ts-ignore
   useHydrateAtoms([
      [wordsAtom, WORDS.current],
      [userDataLoadingAtom, false],
      [lettersCorrectnessAtom, Array
         .from({ length: WORDS.current.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]],
      [userAtom, user],
      [currentTimestampAtom, TIMES["10"]],
      [userAtom, user],
      [typingRunStateAtom, TypingRunState.STOPPED],
      [typingModeAtom, TypingMode.TIME],
      [wordsCountsAtom, WORDS_COUNTS['10']],
      [typingFlagsAtom, 0],
      [userConfigAtom, user?.configuration ?? {
      test_difficulty: "NORMAL",
         elements_show_oof_warning: false,
         elements_show_key_tips :false,
         elements_show_caps_lock_warning: true,
         elements_show_average: false,
         theme_colorful_mode: false,
         theme_flip_colors: false,
         pace_caret_style: `OFF`,
         caret_style: `NORMAL`,
      }]
   ] as const);

   return (
      <Fragment />
   );
};

export default WithInitialState;