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

export interface GlobalCommandProps {
}

const GlobalCommandsDialog = ({}: GlobalCommandProps) => {
   const [open, setOpen] = useBoolean();
   const [search, setSearch] = useState(``);

   useEffect(() => {
      const down = (e: KeyboardEvent) => {
         if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            setOpen((open) => !open);
         }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
   }, []);

   return (
      <CommandDialog open={open} onOpenChange={setOpen}>
         <CommandInput
            inputMode={`text`} onValueChange={setSearch} value={search} className={`bg-neutral-950`}
            placeholder="Search ..." />
         <CommandList className={`bg-neutral-950`}>
            {!!search?.length && (
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
                  <CaretStyleOptions />
                  <PaceCaretStyleOptions  />
                  <SmoothCaretOptions />
               </Fragment>
            )}
         </CommandList>
      </CommandDialog>
   );
};

export default GlobalCommandsDialog;