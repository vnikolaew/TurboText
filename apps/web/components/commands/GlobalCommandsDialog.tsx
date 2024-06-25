"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useBoolean } from "@hooks/useBoolean";
import { CommandDialog, CommandInput, CommandList } from "@repo/ui";
import { LANGUAGES } from "@app/settings/_components/behaviour/LanguageSection";
import { FONTS_MAP } from "@assets/fonts";
import { FontFamilyOption } from "@components/commands/options/FontFamilyOption";
import { LanguageOption } from "./options/LanguageOption";
import PunctuationOptions from "@components/commands/options/PunctuationOptions";
import SoundOnClickOption from "@components/commands/options/SoundOnClickOption";
import { SOUNDS } from "@lib/sounds";
import FlipTestColorsOptions from "@components/commands/options/FlipTestColorsOptions";
import CaretStyleOptions from "@components/commands/options/CaretStyleOptions";
import SmoothCaretOptions from "@components/commands/options/SmoothCaretOptions";
import PaceCaretStyleOptions from "@components/commands/options/PaceCaretStyleOptions";
import { useSearchParams } from "next/navigation";
import BlindModeOptions from "@components/commands/options/BlindModeOptions";
import DifficultyOptions from "@components/commands/options/DifficultyOptions";
import {  parseAsString, useQueryState } from "nuqs";

export interface GlobalCommandProps {
}

const IGNORE_PARAMS = [`contact`, `edit-profile`, `report-user`] as const

const GlobalCommandsDialog = ({}: GlobalCommandProps) => {
   const [open, setOpen] = useBoolean();
   const [qs, setQs] =  useQueryState(`search`, parseAsString.withDefault(``))
   const sp = useSearchParams();

   useEffect(() => {
      let contactModalOpen = IGNORE_PARAMS.some(p => sp.get(p) === `true`)
      if(contactModalOpen) return;

      const down = async (e: KeyboardEvent) => {
         if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            setOpen((open) => !open);
         }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
   }, [sp]);

   return (
      <CommandDialog open={open} onOpenChange={setOpen}>
         <CommandInput
            id={`global-commands`}
            inputMode={`text`} onValueChange={setQs} value={qs}
            className={`bg-neutral-950 placeholder:!text-amber-500 !border-none`}
            placeholder="Search ..." />
         <CommandList className={`bg-neutral-950`}>
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
                  <PaceCaretStyleOptions />
                  <SmoothCaretOptions />
               </Fragment>
            )}
         </CommandList>
      </CommandDialog>
   );
};

export default GlobalCommandsDialog;