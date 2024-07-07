"use client";
import { getThemeVariables } from "@app/settings/_components/theme/_components/ThemeButton";
import { updateUserConfiguration } from "@app/settings/actions";
import { themeAtom } from "@atoms/user";
import { THEMES } from "@lib/consts";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai/index";
import { Check, ChevronRight, Palette } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Fragment } from "react";

export interface ThemeOptionsProps {}

const ThemeOptions = ({}: ThemeOptionsProps) => {
   const [, setUserTheme] = useAtom(themeAtom);

   const { execute, isExecuting } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            setUserTheme(res.data.userConfig?.theme);
         }
      },
   });
   return (
      <Fragment>
         {THEMES.map((theme, index) => (
            <ThemeOption
               index={index}
               key={theme}
               onThemeChange={(theme) => execute({ theme })}
               theme={theme}
            />
         ))}
      </Fragment>
   );
};

interface ThemeOptionProps {
   theme: string;
   index: number;
   onThemeChange: (theme: string) => void;
}

const ThemeOption = ({ theme, index, onThemeChange }: ThemeOptionProps) => {
   const themeVariables = getThemeVariables(theme);
   const [userTheme, setUserTheme] = useAtom(themeAtom);

   return (
      <CommandItem
         value={`theme-${theme}`}
         onSelect={(_) => onThemeChange(theme)}
         key={theme}
         className={`flex w-full cursor-pointer items-center gap-6`}
      >
         <div className={`flex items-center gap-1`}>
            <Palette size={8} />
            <span className={`text-xs`}>Theme</span>
            <ChevronRight size={10} />
         </div>
         <span>{theme}</span>
         {theme === userTheme && (
            <span className={`text-xs font-bold`}>
               <Check size={12} className={`text-neutral-300`} />
            </span>
         )}
         <div
            className={`mr-2 flex !w-fit flex-1 items-center justify-end gap-2 justify-self-end rounded-full p-1`}
         >
            <div
               style={{
                  backgroundColor: `hsl(${themeVariables.secondaryBg})`,
               }}
               className={`flex !w-fit items-center gap-1 rounded-full p-1`}
            >
               {([`accent`, `background`, `secondary`] as const).map(
                  (varName, i) => (
                     <span
                        style={{
                           backgroundColor: `hsl(${themeVariables[varName!]})`,
                        }}
                        className={`h-3 w-3 rounded-full`}
                        key={varName}
                     ></span>
                  )
               )}
            </div>
         </div>
      </CommandItem>
   );
};

export default ThemeOptions;
