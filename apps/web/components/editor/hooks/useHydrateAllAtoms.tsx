"use client";

import {
   DEFAULT_WORD_COUNT,
   TypingMode,
   TypingRunState,
   WORDS_COUNTS,
} from "@atoms/consts";
import {
   lettersCorrectnessAtom,
   typingModeAtom,
   typingRunStateAtom,
   wordsAtom,
} from "@atoms/editor";
import { typingFlagsAtom } from "@atoms/flags";
import { TIMES, currentTimestampAtom } from "@atoms/timer";
import {
   cookiePreferencesAtom,
   globalUserNotificationsAtom,
   prevUserXpAtom, typingTimeTodayAtom,
   userActiveTagsAtom,
   userAtom,
   userConfigAtom,
   userDataLoadingAtom, userLastRunWpmAtom, userPbAtom, userPbTodayAtom,
   userXpAtom,
} from "@atoms/user";
import { wordsCountsAtom } from "@atoms/words";
import { injectCSSClass } from "@lib/utils";
import { Tag, TypingRun, User, UserConfiguration, UserNotification } from "@repo/db";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { max, sum } from "lodash";
import moment from "moment";
import { generate } from "random-words";
import { useEffect, useRef } from "react";

export function useHydrateAllAtoms(
   user?: User & {
      configuration: UserConfiguration;
      notifications: UserNotification[];
      typingRuns: TypingRun[];
   },
) {
   const WORDS = useRef(generate(DEFAULT_WORD_COUNT) as string[]);
   const [userConfig, setUserConfig] = useAtom(userConfigAtom);

   useEffect(() => {
      if (!!userConfig) {
         const ls_value = JSON.parse(
            localStorage.getItem(`user-configuration`) ?? `{}`,
         );
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

   const ls_value =
      typeof global?.window !== `undefined`
         ? JSON.parse(
            window?.localStorage.getItem(`user-configuration`) ?? `{}`,
         )
         : {};

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
      [typingTimeTodayAtom, sum(user?.typingRuns?.filter(r => {
         const [date, today] = [new Date(r.createdAt), new Date()];
         let equal = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
         return equal;
      }).map(r => r.totalTimeMilliseconds))],
      [userPbAtom, max(user?.typingRuns?.map(r => r.metadata?.wpm) ?? []) ?? 0],
      [
         globalUserNotificationsAtom,
         user?.notifications?.map((n) => ({
            id: n.id,
            timestamp: new Date(n.createdAt),
            payload: n.payload,
         })) ?? [],
      ],
      [userPbTodayAtom, max(user?.typingRuns?.filter(r => moment(r.createdAt).isBetween(moment().subtract(24, `hours`), moment()))?.map(r => r.metadata?.wpm) ?? []) ?? 0],
      [userLastRunWpmAtom, user?.typingRuns?.at(-1)?.metadata?.wpm ?? 0],
      [cookiePreferencesAtom, user?.cookiePreferences ?? {}],
      [userDataLoadingAtom, true],
      [
         userXpAtom,
         {
            points: user?.experience?.points ?? 0,
            level: user?.experience?.level ?? 0,
         },
      ],
      [
         prevUserXpAtom,
         {
            points: user?.experience?.points ?? 0,
            level: user?.experience?.level ?? 0,
         },
      ],
      [
         lettersCorrectnessAtom,
         Array.from({
            length: WORDS.current.reduce((a, b) => a + b.length, 0),
         }).fill(null) as null[],
      ],
      [userAtom, user],
      [currentTimestampAtom, TIMES["10"]],
      [typingRunStateAtom, TypingRunState.STOPPED],
      [typingModeAtom, TypingMode.TIME],
      [wordsCountsAtom, WORDS_COUNTS["10"]],
      [typingFlagsAtom, 0],
      [userActiveTagsAtom, (user?.tags! as Tag[])?.map((t) => t.name)],
      [userConfigAtom, newUserConfig],
   ] as const);

   const userCustomThemes = user?.configuration.metadata?.customThemes ?? [];
   if (Array.isArray(userCustomThemes) && userCustomThemes.length) {
      userCustomThemes.forEach((t) => {
         const { name, ...vars } = t;
         injectCSSClass(name, vars);
      });
   }
}
