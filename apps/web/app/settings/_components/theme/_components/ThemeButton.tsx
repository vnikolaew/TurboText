"use client";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import React from "react";
import { useTheme } from "next-themes";

export interface ThemeButtonProps {
   theme: string;
   onThemeChange: (theme: string) => void;
}

export function getThemeVariable(theme: string, varName: string) {
   return Array.from(document.styleSheets[0]?.cssRules ?? []).find(r => r?.selectorText === `.${theme}`)?.style?.getPropertyValue(varName);
}

export function getThemeVariables(theme: string) {
   const varNames = [`--main`, `--accent`, `--background`, `--secondary`, `--secondary-bg`] as const;

   return {
      main: getThemeVariable(theme, varNames[0]),
      accent: getThemeVariable(theme, varNames[1]),
      background: getThemeVariable(theme, varNames[2]),
      secondary: getThemeVariable(theme, varNames[3]),
      secondaryBg: getThemeVariable(theme, varNames[4]),
   };
}

const ThemeButton = ({ theme, onThemeChange }: ThemeButtonProps) => {
   const { theme: userTheme, setTheme } = useTheme();
   const themeVariables = getThemeVariables(theme);

   return (
      <Button
         onClick={_ => onThemeChange(theme)}
         variant={`secondary`}
         style={{
            backgroundColor: `hsl(${themeVariables.secondaryBg})`,
            color: `hsl(${themeVariables.main})`,
         }}
         className={cn(`!w-full items-center gap-8 transition-colors duration-200`, userTheme === theme && `bg-accent !border-[2px] !border-accent`)}
         key={theme}>
         {theme}
         <div className={`flex items-center gap-1`}>
            {([`accent`, `background`, `secondary`] as const).map((varName, i) => (
               <span style={{
                  backgroundColor: `hsl(${themeVariables[varName!]})`,
               }} className={`w-3 h-3 rounded-full`} key={varName}></span>
            ))}
         </div>
      </Button>
   );
};

export default ThemeButton;