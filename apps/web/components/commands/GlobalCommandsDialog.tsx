"use client";
import React, { Fragment, useEffect } from "react";
import { CommandDialog, CommandInput, CommandList } from "@repo/ui";
import { LANGUAGES } from "@app/settings/_components/behaviour/LanguageSection";
import { FONTS_MAP } from "@assets/fonts";
import { FontFamilyOption } from "@components/commands/options/FontFamilyOption";
import { LanguageOption } from "./options/LanguageOption";
import PunctuationOptions from "@components/commands/options/PunctuationOptions";
import SoundOnClickOption from "@components/commands/options/SoundOnClickOption";
import { SOUNDS } from "@lib/consts";
import FlipTestColorsOptions from "@components/commands/options/FlipTestColorsOptions";
import CaretStyleOptions from "@components/commands/options/CaretStyleOptions";
import SmoothCaretOptions from "@components/commands/options/SmoothCaretOptions";
import PaceCaretStyleOptions from "@components/commands/options/PaceCaretStyleOptions";
import { useSearchParams } from "next/navigation";
import BlindModeOptions from "@components/commands/options/BlindModeOptions";
import DifficultyOptions from "@components/commands/options/DifficultyOptions";
import { parseAsString, useQueryState } from "nuqs";
import ThemeOptions from "@components/commands/options/ThemeOptions";
import { atom } from "jotai";
import { useAtom, useSetAtom } from "jotai/index";
import { pauseAtom, resumeAtom } from "@atoms/timer";

export interface GlobalCommandProps {
}

const IGNORE_PARAMS = [`contact`, `edit-profile`, `report-user`, `import-settings`, `custom-words`, `custom-time`, `add-tag-modal`, `update-cookie-preferences`, `practice-words`] as const;

export const commandsDialogOpen = atom(false);
commandsDialogOpen.debugLabel = `commandsDialogOpen`;

const GlobalCommandsDialog = ({}: GlobalCommandProps) => {
   const pause = useSetAtom(pauseAtom);
   const resume = useSetAtom(resumeAtom);

   const [open, setOpen] = useAtom(commandsDialogOpen);
   const [qs, setQs] = useQueryState(`search`, parseAsString.withDefault(``));
   const sp = useSearchParams();

   useEffect(() => {
      let contactModalOpen = IGNORE_PARAMS.some(p => sp.get(p) === `true`);
      if (contactModalOpen) return;

      const down = async (e: KeyboardEvent) => {
         if (e.code === `Space`) {
            e.preventDefault();
         }
         if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();

            if (open) resume();
            else pause();
            setOpen((open) => !open);
         }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
   }, [sp, open, pause, resume]);

   return (
      <CommandDialog dialogProps={{ className: `!bg-secondary` }} open={open} onOpenChange={value => {
         setOpen(value);
      }}>
         <CommandInput
            id={`global-commands`}
            inputMode={`text`} onValueChange={setQs} value={qs}
            className={`!bg-secondary placeholder:!text-accent !border-none`}
            placeholder="Search ..." />
         <CommandList className={`bg-secondary`}>
            {!!qs?.length && (
               <Fragment>
                  {LANGUAGES.map((language, index) => (
                     <LanguageOption key={index} language={language} />
                  ))}
                  {Object.keys(FONTS_MAP).map((font, index) => (
                     <FontFamilyOption key={index} fontFamily={font} />
                  ))}
                  {SOUNDS.map((sound, index) => (
                     <SoundOnClickOption key={index} sound={sound} />
                  ))}
                  <PunctuationOptions />
                  <FlipTestColorsOptions />
                  <BlindModeOptions />
                  <CaretStyleOptions />
                  <DifficultyOptions />
                  <ThemeOptions />
                  <PaceCaretStyleOptions />
                  <SmoothCaretOptions />
               </Fragment>
            )}
         </CommandList>
      </CommandDialog>
   );
};

export default GlobalCommandsDialog;