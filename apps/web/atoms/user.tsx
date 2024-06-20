"use client";
import { UserConfiguration } from "@repo/db";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { Session } from "next-auth";
import { UserExperience } from "@atoms/consts";

export const userDataLoadingAtom = atom(false);

userDataLoadingAtom.debugLabel = `userDataLoadingAtom`;

export const userAtom = atom<Session["user"] | null>(null!);
userAtom.debugLabel = `userAtom`;

export const prevUserXpAtom = atom<UserExperience>({ points: 0, level: 0 });
prevUserXpAtom.debugLabel = `prevUserXpAtom`;

export const userXpAtom = atom<UserExperience>({ points: 0, level: 0 });
userXpAtom.debugLabel = `userXpAtom`;

// @ts-ignore
export const updateUserXpAtom = atom(null, (get, set, xp: UserExperience) => {
   const current = get(userXpAtom);
   set(userXpAtom, xp);
   set(prevUserXpAtom, current)
});

export const userActiveTagsAtom = atom<string[]>([]);
userActiveTagsAtom.debugLabel = `userActiveTagsAtom`;

export const userConfigAtom = atom<UserConfiguration>(null!);
userConfigAtom.debugLabel = `userConfigAtom`;

export interface CookiePreferences {
   Necessary: boolean,
   Statistics: boolean,
   Functionality: boolean,
   Marketing: boolean,

}
export const cookiePreferencesAtom = atom<CookiePreferences>({ });
cookiePreferencesAtom .debugLabel = `cookiePreferencesAtom`;

// @ts-ignore
export const userTestDifficultyAtom = focusAtom<UserConfiguration["test_difficulty"]>(userConfigAtom, optic => optic?.prop(`test_difficulty`));
userTestDifficultyAtom.debugLabel = `userTestDifficultyAtom`;

// @ts-ignore
export const blindModeAtom = focusAtom<UserConfiguration["blind_mode"]>(userConfigAtom, optic => optic.prop(`blind_mode`));
blindModeAtom.debugLabel = `blindModeAtom`;

// @ts-ignore
export const userLanguageAtom = focusAtom(userConfigAtom, optic => optic?.prop(`language`));
userLanguageAtom.debugLabel = `userLanguageAtom`;

// @ts-ignore
export const freedomModeAtom = focusAtom<UserConfiguration["input_freedom_mode"]>(userConfigAtom, optic => optic.prop(`input_freedom_mode`));
freedomModeAtom.debugLabel = `freedomModeAtom`;

// @ts-ignore
export const autoSaveModeAtom = focusAtom<UserConfiguration["auto_save_mode "]>(userConfigAtom, optic => optic.prop(`auto_save_mode`));
autoSaveModeAtom.debugLabel = `autoSaveModeAtom`;

// @ts-ignore
export const confidenceModeAtom = focusAtom<UserConfiguration["input_confidence_mode"]>(userConfigAtom, optic => optic.prop(`input_confidence_mode`));
confidenceModeAtom.debugLabel = `confidenceModeAtom`;

// @ts-ignore
export const soundOnClickAtom = focusAtom<UserConfiguration["sound_click_sound"]>(userConfigAtom, optic => optic.prop(`sound_click_sound`));
soundOnClickAtom.debugLabel = `soundOnClickAtom`;

// @ts-ignore
export const soundOnErrorAtom = focusAtom<UserConfiguration["sound_error_sound"]>(userConfigAtom, optic => optic.prop(`sound_error_sound`));
soundOnErrorAtom.debugLabel = `soundOnErrorAtom`;


// @ts-ignore
export const smoothCaretAtom = focusAtom<UserConfiguration["caret_smoothness"]>(userConfigAtom, optic => optic.prop(`caret_smoothness`));
smoothCaretAtom.debugLabel = `smoothCaretAtom`

// @ts-ignore
export const caretStyleAtom = focusAtom<UserConfiguration["caret_style"]>(userConfigAtom, optic => optic.prop(`caret_style`));
caretStyleAtom.debugLabel = `caretStyleAtom`

// @ts-ignore
export const paceCaretStyleAtom = focusAtom<UserConfiguration["pace_caret_style"]>(userConfigAtom, optic => optic.prop(`pace_caret_style`));
paceCaretStyleAtom.debugLabel = `paceCaretStyleAtom`

// @ts-ignore
export const flipColorsAtom = focusAtom<UserConfiguration["theme_flip_colors"]>(userConfigAtom, optic => optic.prop(`theme_flip_colors`));
flipColorsAtom.debugLabel = `flipColorsAtom`

// @ts-ignore
export const colorfulModeAtom = focusAtom<UserConfiguration["theme_colorful_mode"]>(userConfigAtom, optic => optic.prop(`theme_colorful_mode`));
colorfulModeAtom.debugLabel = `colorfulModeAtom`

// @ts-ignore
export const keyTipsAtom = focusAtom<UserConfiguration["elements_show_key_tips"]>(userConfigAtom, optic => optic.prop(`elements_show_key_tips`));
keyTipsAtom.debugLabel = `keyTipsAtom`

// @ts-ignore
export const oofWarningtom = focusAtom<UserConfiguration["elements_show_oof_warning"]>(userConfigAtom, optic => optic.prop(`elents_show_oof_warning`));
oofWarningtom.debugLabel = `oofWarningtom`

// @ts-ignore
export const capsLockWarningAtom = focusAtom<UserConfiguration["elements_show_caps_lock_warning"]>(userConfigAtom, optic => optic.prop(`elements_show_caps_lock_warning`));
capsLockWarningAtom.debugLabel = `capsLockWarningAtom`

// @ts-ignore
export const averageAtom = focusAtom<UserConfiguration["elements_show_average"]>(userConfigAtom, optic => optic.prop(`elements_show_average`));
averageAtom.debugLabel = `averageAtom`
