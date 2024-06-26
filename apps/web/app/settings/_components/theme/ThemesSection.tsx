"use client";
import React from "react";
import { Palette } from "lucide-react";
import { Button } from "@repo/ui";
import { useTheme } from "next-themes";
import { cn } from "@lib/utils";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { useAtom } from "jotai/index";
import { themeAtom } from "@atoms/user";

export interface ThemesSectionProps {
}

const THEMES = [
   `dark`,
   `light`,
   `nighthawk`,
   ...Array.from({ length: 3 }).map((_, i) => `theme-${i + 2}`),
   `frost`
];

const ThemesSection = ({}: ThemesSectionProps) => {
   // const [fontFamily, setFontFamily] = useAtom();
   const { theme, setTheme } = useTheme();
   const [userTheme, setUserTheme] = useAtom(themeAtom);

   const { execute, isExecuting } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setUserTheme(res?.data?.userConfig.theme);
         }
      },
   });

   return (
      <div className={`flex flex-col w-full items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <Palette className={`text-main `} size={20} />
            <span className={`text-xl text-main`}>
               Theme
            </span>
         </div>
         <div className={`w-full grid grid-cols-5 gap-4 mt-4`}>
            {THEMES.sort((a, b) => a.localeCompare(b)).map((newTheme, index) => (
               <Button
                  onClick={_ => {
                     setTheme(newTheme);
                     document.querySelector(`html`).className = document.querySelector(`html`)?.className?.replace(theme, newTheme);
                     execute({ theme: newTheme });
                  }}
                  variant={`secondary`}
                  className={cn(`!w-full`,
                     newTheme === theme && `bg-accent`)}
                  key={newTheme}>
                  {newTheme}
               </Button>
            ))}

         </div>
      </div>
   );
};

export default ThemesSection;