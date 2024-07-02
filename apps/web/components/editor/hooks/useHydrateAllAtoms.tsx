"use client";

import { lettersCorrectnessAtom, typingModeAtom, typingRunStateAtom, wordsAtom } from "@atoms/editor";
import { generate } from "random-words";
import {
   cookiePreferencesAtom, globalUserNotificationsAtom,
   prevUserXpAtom,
   userActiveTagsAtom,
   userAtom,
   userConfigAtom,
   userDataLoadingAtom,
   userXpAtom,
} from "@atoms/user";
import { useEffect, useRef } from "react";
import { currentTimestampAtom, TIMES } from "@atoms/timer";
import { Tag, User, UserConfiguration, UserNotification } from "@repo/db";
import { useHydrateAtoms } from "jotai/utils";
import { DEFAULT_WORD_COUNT, TypingMode, TypingRunState, WORDS_COUNTS } from "@atoms/consts";
import { wordsCountsAtom } from "@atoms/words";
import { typingFlagsAtom } from "@atoms/flags";
import { useAtom } from "jotai";
import { injectCSSClass } from "@lib/utils";

export function useHydrateAllAtoms(user?: User & { configuration: UserConfiguration, notifications: UserNotification[] }) {
   const WORDS = useRef(generate(DEFAULT_WORD_COUNT) as string[]);
   const [userConfig, setUserConfig] = useAtom(userConfigAtom);

   useEffect(() => {
      if (!!userConfig) {
         const ls_value = JSON.parse(localStorage.getItem(`user-configuration`) ?? `{}`);
         setUserConfig({
            test_difficulty: "NORMAL",
            elements_show_oof_warning: false,
            elements_show_key_tips: false,
            elements_show_caps_lock_warning: true,
            elements_show_average: false,
            theme_colorful_mode: false,
            theme_flip_colors: false,
            pace_caret_style: `OFF`,
            caret_style: `NORMAL`,
            ...ls_value,
            ...userConfig,
            ...(user?.configuration ?? {}),
         });
      }
   }, []);

   const ls_value = typeof global?.window !== `undefined` ? JSON.parse(window?.localStorage.getItem(`user-configuration`) ?? `{}`) : {};

   let newUserConfig: Partial<UserConfiguration> = {
      test_difficulty: "NORMAL",
      elements_show_oof_warning: false,
      elements_show_key_tips: false,
      elements_show_caps_lock_warning: true,
      elements_show_average: false,
      theme_colorful_mode: false,
      theme_flip_colors: false,
      pace_caret_style: `OFF`,
      caret_style: `NORMAL`,
      ...ls_value,
      ...userConfig,
      ...(user?.configuration ?? {}),
   };

   //@ts-ignore
   useHydrateAtoms([
      [wordsAtom, WORDS.current],
      [globalUserNotificationsAtom, user?.notifications?.map(n => ({
         id: n.id,
         timestamp: new Date(n.createdAt),
         payload: n.payload
      })) ?? []],
      [cookiePreferencesAtom, user?.cookiePreferences ?? {}],
      [userDataLoadingAtom, false],
      [userXpAtom, { points: user?.experience?.points ?? 0, level: user?.experience?.level ?? 0 }],
      [prevUserXpAtom, { points: user?.experience?.points ?? 0, level: user?.experience?.level ?? 0 }],
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
      [userConfigAtom, newUserConfig],
   ] as const);

   const userCustomThemes = user?.configuration.metadata?.customThemes ?? [];
   if (Array.isArray(userCustomThemes) && userCustomThemes.length) {
      console.log(` we are here: `, { userCustomThemes });
      userCustomThemes.forEach(t => {
         const { name, ...vars } = t;
         injectCSSClass(name, vars);
      });
   }
}