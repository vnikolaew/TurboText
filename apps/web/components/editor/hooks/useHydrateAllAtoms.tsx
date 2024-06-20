"use client";

import { lettersCorrectnessAtom, typingModeAtom, typingRunStateAtom, wordsAtom } from "@atoms/editor";
import { generate } from "random-words";
import {
   prevUserXpAtom,
   userActiveTagsAtom,
   userAtom,
   userConfigAtom,
   userDataLoadingAtom,
   userXpAtom,
} from "@atoms/user";
import { useRef } from "react";
import { currentTimestampAtom, TIMES } from "@atoms/timer";
import { Tag, User, UserConfiguration } from "@repo/db";
import { useHydrateAtoms } from "jotai/utils";
import { DEFAULT_WORD_COUNT, TypingMode, TypingRunState, WORDS_COUNTS } from "@atoms/consts";
import { wordsCountsAtom } from "@atoms/words";
import { typingFlagsAtom } from "@atoms/flags";

export function useHydrateAllAtoms(user?: User & { configuration: UserConfiguration }) {
   const WORDS = useRef(generate(DEFAULT_WORD_COUNT) as string[]);

   console.log({ user });

   //@ts-ignore
   useHydrateAtoms([
      [wordsAtom, WORDS.current],
      [userDataLoadingAtom, false],
      [userXpAtom, { points: user.experience?.points ?? 0, level: user.experience?.level ?? 0 }],
      [prevUserXpAtom, { points: user.experience?.points ?? 0, level: user.experience?.level ?? 0 }],
      [lettersCorrectnessAtom, Array
         .from({ length: WORDS.current.reduce((a, b) => a + b.length, 0) })
         .fill(null) as null[]],
      [userAtom, user],
      [currentTimestampAtom, TIMES["10"]],
      [typingRunStateAtom, TypingRunState.STOPPED],
      [typingModeAtom, TypingMode.TIME],
      [wordsCountsAtom, WORDS_COUNTS["10"]],
      [typingFlagsAtom, 0],
      [userActiveTagsAtom, (user?.tags! as Tag[])?.map(t => t.name)],
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