"use client";
import SettingsAccordionItem from "@app/settings/_components/SettingsAccordionItem";
import MoreAccountSettingsSection from "@app/settings/_components/account/MoreAccountSettingsSection";
import SettingsTagsSection from "@app/settings/_components/account/SettingsTagsSection";
import FontFamilySection from "@app/settings/_components/appearance/FontFamilySection";
import AutoSaveModeSection from "@app/settings/_components/behaviour/AutoSaveModeSection";
import BlindModeSection from "@app/settings/_components/behaviour/BlindModeSection";
import LanguageSection from "@app/settings/_components/behaviour/LanguageSection";
import TestDifficultySection from "@app/settings/_components/behaviour/TestDifficultySection";
import CaretStyleSection from "@app/settings/_components/caret/CaretStyleSection";
import PaceCaretSection from "@app/settings/_components/caret/PaceCaretSection";
import PaceCaretStyleSection from "@app/settings/_components/caret/PaceCaretStyleSection";
import SmoothCaretSection from "@app/settings/_components/caret/SmoothCaretSection";
import CookiePreferencesSection from "@app/settings/_components/danger/CookiePreferencesSection";
import DeleteAccountSection from "@app/settings/_components/danger/DeleteAccountSection";
import ImportExportSettings from "@app/settings/_components/danger/ImportExportSettings";
import ResetAccountSection from "@app/settings/_components/danger/ResetAccountSection";
import ResetSettingsSection from "@app/settings/_components/danger/ResetSettingsSection";
import UpdateUsernameSection from "@app/settings/_components/danger/UpdateUsernameSection";
import AverageSection from "@app/settings/_components/elements/AverageSection";
import CapsLockWarning from "@app/settings/_components/elements/CapsLockWarning";
import KeyTipsSection from "@app/settings/_components/elements/KeyTipsSection";
import OutOfFocusWarning from "@app/settings/_components/elements/OutOfFocusWarning";
import ConfidenceModeSection from "@app/settings/_components/input/ConfidenceModeSection";
import FreedomModeSection from "@app/settings/_components/input/FreedomModeSection";
import SoundOnClickSection from "@app/settings/_components/sound/SoundOnClickSection";
import SoundOnErrorSection from "@app/settings/_components/sound/SoundOnErrorSection";
import ColorfulModeSection from "@app/settings/_components/theme/ColorfulModeSection";
import FlipTestColors from "@app/settings/_components/theme/FlipTestColorsSection";
import { cookiePreferencesAtom, userConfigAtom } from "@atoms/user";
import { SignedIn } from "@components/common/Auth";
import { Tag, User, UserConfiguration } from "@repo/db";
import { Accordion } from "@repo/ui";
import { useHydrateAtoms } from "jotai/utils";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import FontSizeSection from "./appearance/FontSizeSection";
import ThemesSection from "./theme/ThemesSection";

export interface SettingsAccordionProps {
   user: User & { tags: Tag[]; configuration: UserConfiguration };
}

const SettingsAccordion = ({ user }: SettingsAccordionProps) => {
   const [sections, setSections] = useQueryState(
      `sections`,
      parseAsArrayOf(parseAsString).withDefault([])
   );

   //@ts-ignore
   if (user) {
      useHydrateAtoms([
         [userConfigAtom, user?.configuration],
         [cookiePreferencesAtom, user.cookiePreferences!],
      ]);
   }
   return (
      <Accordion
         onValueChange={setSections}
         value={sections}
         className={`w-full`}
         type="multiple"
         collapsible={"true"}
      >
         <SignedIn>
            <SettingsAccordionItem name={`Account`} value={`account`}>
               <SettingsTagsSection tags={user?.tags ?? []} />
               <MoreAccountSettingsSection />
            </SettingsAccordionItem>
         </SignedIn>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Behaviour`}
            value={`behaviour`}
         >
            <TestDifficultySection />
            <SignedIn>
               <AutoSaveModeSection />
            </SignedIn>
            <BlindModeSection />
            <LanguageSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Input`}
            value={`input`}
         >
            <FreedomModeSection />
            <ConfidenceModeSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Sound`}
            value={`sound`}
         >
            <SoundOnClickSection />
            <SoundOnErrorSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Caret`}
            value={`caret`}
         >
            <SmoothCaretSection />
            <CaretStyleSection />
            <PaceCaretSection />
            <PaceCaretStyleSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Appearance`}
            value={`appearance`}
         >
            <FontSizeSection />
            <FontFamilySection />
         </SettingsAccordionItem>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Theme`}
            value={`theme`}
         >
            <FlipTestColors />
            <ColorfulModeSection />
            <ThemesSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Elements`}
            value={`elements`}
         >
            <KeyTipsSection />
            <OutOfFocusWarning />
            <CapsLockWarning />
            <AverageSection />
         </SettingsAccordionItem>
         <SettingsAccordionItem
            className={`!mt-4`}
            name={`Danger zone`}
            value={`danger`}
         >
            <ImportExportSettings />
            <CookiePreferencesSection />
            <SignedIn>
               <UpdateUsernameSection />
               <DeleteAccountSection />
            </SignedIn>
            <ResetSettingsSection />
            <SignedIn>
               <ResetAccountSection />
            </SignedIn>
         </SettingsAccordionItem>
      </Accordion>
   );
};

export default SettingsAccordion;
