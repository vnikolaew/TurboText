"use client";

import {
   lettersCorrectnessAtom,
   typingFlagsAtom,
   typingModeAtom,
   typingRunStateAtom,
   wordsAtom,
} from "@atoms/editor";
import { generate } from "random-words";
import { userAtom, userConfigAtom, userDataLoadingAtom } from "@atoms/user";
import { useRef } from "react";
import { currentTimestampAtom, TIMES } from "@atoms/timer";
import { User, UserConfiguration } from "@repo/db";
import { useHydrateAtoms } from "jotai/utils";
import { DEFAULT_WORD_COUNT, TypingMode, TypingRunState, WORDS_COUNTS } from "@atoms/consts";
import { wordsCountsAtom } from "@atoms/words";

export function useHydrateAllAtoms(user?: User & { configuration: UserConfiguration }) {
   const WORDS = useRef(generate(DEFAULT_WORD_COUNT) as string[]);

   //@ts-ignore
   useHydrateAtoms([
      [wordsAtom, WORDS.current],
      [userDataLoadingAtom, false],
      [lettersCorrectnessAtom, Array
         .from({ length: WORDS.current.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]],
      [userAtom, user],
      [currentTimestampAtom, TIMES["10"]],
      [typingRunStateAtom, TypingRunState.STOPPED],
      [typingModeAtom, TypingMode.TIME],
      [wordsCountsAtom, WORDS_COUNTS["10"]],
      [typingFlagsAtom, 0],
      [userConfigAtom, user?.configuration ?? {
         test_difficulty: "NORMAL",
         elements_show_oof_warning: false,
         elements_show_key_tips: false,
         elements_show_caps_lock_warning: true,
         elements_show_average: false,
         theme_colorful_mode: false,
         theme_flip_colors: false,
         pace_caret_style: `OFF`,
         caret_style: `NORMAL`,
      }],
   ] as const);
}