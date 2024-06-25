"use client";
import React from "react";
import { Accordion } from "@repo/ui";
import SettingsTagsSection from "@app/settings/_components/account/SettingsTagsSection";
import SettingsAccordionItem from "@app/settings/_components/SettingsAccordionItem";
import MoreAccountSettingsSection from "@app/settings/_components/account/MoreAccountSettingsSection";
import TestDifficultySection from "@app/settings/_components/behaviour/TestDifficultySection";
import BlindModeSection from "@app/settings/_components/behaviour/BlindModeSection";
import LanguageSection from "@app/settings/_components/behaviour/LanguageSection";
import FreedomModeSection from "@app/settings/_components/input/FreedomModeSection";
import ConfidenceModeSection from "@app/settings/_components/input/ConfidenceModeSection";
import SoundOnClickSection from "@app/settings/_components/sound/SoundOnClickSection";
import SoundOnErrorSection from "@app/settings/_components/sound/SoundOnErrorSection";
import SmoothCaretSection from "@app/settings/_components/caret/SmoothCaretSection";
import CaretStyleSection from "@app/settings/_components/caret/CaretStyleSection";
import PaceCaretSection from "@app/settings/_components/caret/PaceCaretSection";
import PaceCaretStyleSection from "@app/settings/_components/caret/PaceCaretStyleSection";
import FlipTestColors from "@app/settings/_components/theme/FlipTestColorsSection";
import ColorfulModeSection from "@app/settings/_components/theme/ColorfulModeSection";
import KeyTipsSection from "@app/settings/_components/elements/KeyTipsSection";
import OutOfFocusWarning from "@app/settings/_components/elements/OutOfFocusWarning";
import CapsLockWarning from "@app/settings/_components/elements/CapsLockWarning";
import AverageSection from "@app/settings/_components/elements/AverageSection";
import CookiePreferencesSection from "@app/settings/_components/danger/CookiePreferencesSection";
import UpdateUsernameSection from "@app/settings/_components/danger/UpdateUsernameSection";
import DeleteAccountSection from "@app/settings/_components/danger/DeleteAccountSection";
import ResetAccountSection from "@app/settings/_components/danger/ResetAccountSection";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Tag, User, UserConfiguration } from "@repo/db";
import { useHydrateAtoms } from "jotai/utils";
import { cookiePreferencesAtom, userConfigAtom } from "@atoms/user";
import ImportExportSettings from "@app/settings/_components/danger/ImportExportSettings";
import AutoSaveModeSection from "@app/settings/_components/behaviour/AutoSaveModeSection";
import FontFamilySection from "@app/settings/_components/appearance/FontFamilySection";
import FontSizeSection from "./appearance/FontSizeSection";
import ThemesSection from "./theme/ThemesSection";

export interface SettingsAccordionProps {
   user: User & { tags: Tag[], configuration: UserConfiguration };
}

const SettingsAccordion = ({ user }: SettingsAccordionProps) => {
   const [sections, setSections] = useQueryState(`sections`, parseAsArrayOf(parseAsString).withDefault([]));

   //@ts-ignore
   useHydrateAtoms([
      [userConfigAtom, user.configuration],
      [cookiePreferencesAtom, user.cookiePreferences!],
   ]);

   return (
      <Accordion onValueChange={setSections} value={sections} className={`w-full`} type="multiple" collapsible={"true"}>
         <SettingsAccordionItem name={`Account`} value={`account`}>
            <SettingsTagsSection tags={user!.tags} />
            <MoreAccountSettingsSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Behaviour`} value={`behaviour`}>
            <TestDifficultySection />
            <AutoSaveModeSection />
            <BlindModeSection />
            <LanguageSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Input`} value={`input`}>
            <FreedomModeSection />
            <ConfidenceModeSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Sound`} value={`sound`}>
            <SoundOnClickSection />
            <SoundOnErrorSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Caret`} value={`caret`}>
            <SmoothCaretSection />
            <CaretStyleSection />
            <PaceCaretSection />
            <PaceCaretStyleSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Appearance`} value={`appearance`}>
            <FontSizeSection />
            <FontFamilySection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Theme`} value={`theme`}>
            <FlipTestColors />
            <ColorfulModeSection />
            <ThemesSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Elements`} value={`elements`}>
            <KeyTipsSection />
            <OutOfFocusWarning />
            <CapsLockWarning />
            <AverageSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem className={`!mt-4`} name={`Danger zone`} value={`danger`}>
            <ImportExportSettings/>
            <CookiePreferencesSection />
            <UpdateUsernameSection />
            <DeleteAccountSection />
            <ResetAccountSection />
         </SettingsAccordionItem>
      </Accordion>
   );
};

export default SettingsAccordion;