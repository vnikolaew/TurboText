"use client";
import CustomThemeSection from "@app/settings/_components/theme/_components/CustomThemeSection";
import ThemeButton from "@app/settings/_components/theme/_components/ThemeButton";
import { updateUserConfiguration } from "@app/settings/actions";
import { themeAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { THEMES } from "@lib/consts";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { Palette } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useTheme } from "next-themes";
import { useState } from "react";

export interface ThemesSectionProps {}

const TABS = [`preset`, `custom`] as const;

function getThemeVariable(theme: string, varName: string) {
   return Array.from(document.styleSheets[0]?.cssRules ?? [])
      .find((r) => r?.selectorText === `.${theme}`)
      ?.style?.getPropertyValue(varName);
}

function getThemeVariables(theme: string) {
   const varNames = [
      `--main`,
      `--accent`,
      `--text`,
      `--secondary`,
      `--secondary-bg`,
   ] as const;

   return {
      main: getThemeVariable(theme, varNames[0]),
      accent: getThemeVariable(theme, varNames[1]),
      text: getThemeVariable(theme, varNames[2]),
      secondary: getThemeVariable(theme, varNames[3]),
      secondaryBg: getThemeVariable(theme, varNames[4]),
   };
}

const ThemesSection = ({}: ThemesSectionProps) => {
   // const [fontFamily, setFontFamily] = useAtom();
   const { theme, setTheme } = useTheme();
   const signedIn = useIsSignedIn();
   const [, setUserTheme] = useAtom(themeAtom);
   const [currentTab, setTab] = useState<(typeof TABS)[number]>(`preset`);

   const { execute, isExecuting } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setUserTheme(res?.data?.userConfig.theme);
         }
      },
   });

   const handleChangeTheme = (newTheme: string) => {
      setTheme(newTheme);
      document.querySelector(`html`).className = document
         .querySelector(`html`)
         ?.className?.replace(theme, newTheme);

      if (signedIn) execute({ theme: newTheme });
      else setUserTheme(newTheme);
   };

   return (
      <div className={`flex w-full flex-col items-start gap-2`}>
         <div className={`flex w-full items-center justify-between gap-2`}>
            <div className={`flex items-center gap-2`}>
               <Palette className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Theme</span>
            </div>
            <div className={`flex items-center gap-2`}>
               {TABS.map((tab) => (
                  <Button
                     onClick={(_) => setTab(tab)}
                     variant={`secondary`}
                     className={cn(
                        `!w-full`,
                        currentTab === tab && `bg-accent`
                     )}
                     key={tab}
                  >
                     {tab}
                  </Button>
               ))}
            </div>
         </div>
         {currentTab === `custom` ? (
            <CustomThemeSection />
         ) : (
            <div className={`mt-4 grid w-full grid-cols-5 gap-4`}>
               {THEMES.sort((a, b) => a.localeCompare(b)).map(
                  (newTheme, index) => (
                     <ThemeButton
                        key={newTheme}
                        theme={newTheme}
                        onThemeChange={handleChangeTheme}
                     />
                  )
               )}
            </div>
         )}
      </div>
   );
};

export default ThemesSection;
