"use client"
import React, { PropsWithChildren } from "react";
import { hoveredFontFamilyAtom } from "@atoms/user";
import { useAtomValue } from "jotai";
import { FONTS_MAP, sfMono } from "@assets/fonts";
import { FONT_FAMILIES } from "@lib/consts";
import { cn } from "@lib/utils";

export interface FontProviderProps extends PropsWithChildren {
}


const DynamicFontProvider = ({ children }: FontProviderProps) => {
   const hoveredFontFamily = useAtomValue(hoveredFontFamilyAtom)
   let font = FONTS_MAP[hoveredFontFamily as (typeof FONT_FAMILIES)[number]] ?? sfMono;

   return (
      <div className={cn(`font-mono `, font.variable)}>
         {children}
      </div>
   );
};

export default DynamicFontProvider;