"use client";
import React, { PropsWithChildren } from "react";
import { fontFamilyAtom, hoveredFontFamilyAtom } from "@atoms/user";
import { useAtomValue } from "jotai";
import { FONTS_MAP } from "@assets/fonts";
import { FONT_FAMILIES } from "@lib/consts";
import { cn } from "@lib/utils";

export interface FontProviderProps extends PropsWithChildren {
}


const DynamicFontProvider = ({ children }: FontProviderProps) => {
   const hoveredFontFamily = useAtomValue(hoveredFontFamilyAtom)
   const userFont = useAtomValue(fontFamilyAtom)
   let font = FONTS_MAP[(hoveredFontFamily ?? userFont) as (typeof FONT_FAMILIES)[number]]

   return (
      <div className={cn(`font-mono `, font ? font.variable : ``)}>
         {children}
      </div>
   );
};

export default DynamicFontProvider;