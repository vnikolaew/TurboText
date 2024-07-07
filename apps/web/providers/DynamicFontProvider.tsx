"use client";
import { FONTS_MAP } from "@assets/fonts";
import { fontFamilyAtom, hoveredFontFamilyAtom } from "@atoms/user";
import { FONT_FAMILIES } from "@lib/consts";
import { cn } from "@lib/utils";
import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";

export interface FontProviderProps extends PropsWithChildren {}

const DynamicFontProvider = ({ children }: FontProviderProps) => {
   const hoveredFontFamily = useAtomValue(hoveredFontFamilyAtom);
   const userFont = useAtomValue(fontFamilyAtom);
   let font =
      FONTS_MAP[
         (hoveredFontFamily ?? userFont) as (typeof FONT_FAMILIES)[number]
      ];

   return (
      <div className={cn(`font-mono`, font ? font.variable : ``)}>
         {children}
      </div>
   );
};

export default DynamicFontProvider;
