"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { customThemesAtom, themeAtom, userConfigAtom } from "@atoms/user";
import LoadingButton from "@components/common/LoadingButton";
import { cn, hexToHsl, hslToHex } from "@lib/utils";
import { Button, Input } from "@repo/ui";
import { useAtomValue } from "jotai";
import { useAtom } from "jotai/index";
import { Palette, Trash } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useTheme } from "next-themes";
import {
   Fragment,
   useCallback,
   useLayoutEffect,
   useRef,
   useState,
} from "react";

export interface CustomThemeSectionProps {}

interface NewTheme {
   "name": string;
   "background": string;
   "accent": string;
   "main": string;
   "secondary": string;
   "secondary-bg": string;
}

function getHexColor(cssVar: string) {
   return hslToHex(
      getComputedStyle(document.documentElement)?.getPropertyValue(cssVar)
   );
}

const CustomThemeSection = ({}: CustomThemeSectionProps) => {
   const { theme, setTheme } = useTheme();

   const userConfig = useAtomValue(userConfigAtom);
   const [userTheme, setUserTheme] = useAtom(themeAtom);
   const [customThemes, setCustomThemes] = useAtom(customThemesAtom);

   const { execute, isExecuting } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setCustomThemes(res.data.userConfig?.metadata?.customThemes);
            setUserTheme(res.data.userConfig?.theme);
         }
      },
   });
   const [themeColors, setThemeColors] = useState<NewTheme>({
      "secondary-bg": getHexColor(`--secondary-bg`) || ``,
      "background": "",
      "accent": "",
      "main": "",
      "secondary": "",
      "name": `custom`,
   });

   const handleChange = useCallback(
      (key: keyof NewTheme, value: string) => {
         setThemeColors((t) => ({
            ...t,
            [key]: value,
         }));
      },
      [setThemeColors]
   );

   useLayoutEffect(() => {
      setThemeColors(
         (t) =>
            Object.keys(t)
               .filter((k) => k !== `name`)
               .map((key) => {
                  return { key, value: getHexColor(`--${key}`) };
               })
               .reduce(
                  (acc, { key, value }) => {
                     return { ...acc, [key]: value };
                  },
                  { name: `custom` }
               ) as NewTheme
      );
   }, []);

   function handleSaveTheme() {
      const { name, ...vars } = themeColors;

      execute({
         metadata: {
            ...(userConfig?.metadata || {}),
            customThemes: [
               ...(userConfig?.metadata?.customThemes || []),
               {
                  name,
                  ...Object.entries(vars)
                     .map(([k, v]) => ({ [k]: hexToHsl(v) }))
                     .reduce((acc, cur) => ({ ...acc, ...cur })),
               },
            ],
         },
      });
   }

   async function handleDeleteCustomTheme(name: string) {
      execute({
         metadata: {
            ...(userConfig?.metadata || {}),
            customThemes: [
               ...(userConfig?.metadata?.customThemes || []).filter(
                  (t) => t.name !== name
               ),
            ],
         },
      });
      if (name === userTheme) {
         setTheme(name);
         document.querySelector(`html`).className = document
            .querySelector(`html`)
            ?.className?.replace(theme, name);

         execute({ theme: name });
      }
   }

   return (
      <div className={`mt-4 grid w-full grid-cols-4 gap-4`}>
         {customThemes.map((theme, index) => (
            <div className={`col-span-2 flex w-full items-center gap-2`}>
               <Button
                  onClick={(_) => {
                     execute({ theme: theme.name as string });
                  }}
                  className={cn(
                     `col-span-2 w-full`,
                     theme.name === userTheme && `bg-accent`
                  )}
               >
                  {theme.name}
               </Button>
               <Button
                  className={``}
                  variant={`ghost`}
                  onClick={(_) => handleDeleteCustomTheme(theme.name!)}
                  size={"icon"}
               >
                  <Trash className={`text-accent`} />
               </Button>
            </div>
         ))}
         <div
            className={`col-span-4 col-start-1 mt-4 flex items-center justify-center`}
         >
            <Input
               placeholder={`Enter a name for your custom theme`}
               className={`w-1/4 text-accent`}
               onChange={(e) => handleChange(`name`, e.target.value)}
               value={themeColors.name}
               type={`text`}
            />
         </div>
         <div
            className={`col-span-4 col-start-1 mt-4 flex items-center justify-center`}
         />
         <ColorPickerRow
            label={`background`}
            value={themeColors.background}
            onValueChange={(value) => {
               console.log({ value });
               handleChange(`background`, value);
            }}
         />
         <ColorPickerRow
            label={`accent`}
            value={themeColors.accent}
            onValueChange={(value) => {
               console.log({ value });
               handleChange(`accent`, value);
            }}
         />
         <ColorPickerRow
            label={`main`}
            value={themeColors.main}
            onValueChange={(value) => handleChange(`main`, value)}
         />
         <ColorPickerRow
            label={`secondary`}
            value={themeColors.secondary}
            onValueChange={(value) => handleChange(`secondary`, value)}
         />
         <ColorPickerRow
            label={`secondary-background`}
            value={themeColors["secondary-bg"]}
            onValueChange={(value) => handleChange(`secondary-bg`, value)}
         />

         <div
            className={`col-span-4 col-start-1 mt-4 flex items-center justify-center`}
         >
            <LoadingButton
               className={`w-1/5 items-center gap-2`}
               loadingText={`Saving ...`}
               loading={isExecuting}
               onClick={handleSaveTheme}
            >
               Save
            </LoadingButton>
         </div>
      </div>
   );
};

interface ColorPickerRowProps {
   label: string;
   value: string;
   onValueChange: (value: string) => void;
}

const ColorPickerRow = ({
   onValueChange,
   value,
   label,
}: ColorPickerRowProps) => {
   const colorPickerRef = useRef<HTMLInputElement>();

   return (
      <Fragment>
         <div>
            <span className={`text-main`}>{label}</span>
         </div>
         <div className={`flex items-center gap-2`}>
            <Input
               className={`text-main`}
               onChange={(e) => onValueChange(e.target.value)}
               value={value}
               type={`text`}
            />
            <Button
               onClick={(_) => colorPickerRef?.current?.click()}
               variant={`ghost`}
               size={`icon`}
            >
               <Palette size={20} />
            </Button>
            <Input
               id={`${label}-input`}
               onChange={(e) => {
                  console.log(e.target.value);
                  onValueChange(e.target.value);
               }}
               ref={colorPickerRef}
               className={`hidden`}
               hidden
               type={`color`}
            />
         </div>
      </Fragment>
   );
};

export default CustomThemeSection;
