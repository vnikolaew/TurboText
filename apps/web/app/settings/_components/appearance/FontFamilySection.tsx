"use client";
import React from "react";
import { ALargeSmall } from "lucide-react";
import { Button } from "@repo/ui";
import { cn } from "@lib/utils";
import { useAtom } from "jotai/index";
import { fontFamilyAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { FONT_FAMILIES } from "@lib/consts";
import { useIsSignedIn } from "@hooks/useIsSignedIn";

export interface FontFamilySectionProps {
}


const FontFamilySection = ({}: FontFamilySectionProps) => {
   const [fontFamily, setFontFamily] = useAtom(fontFamilyAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setFontFamily(res.data?.userConfig?.font_family);
         }
      },
   });

   return (
      <div className={`flex flex-col w-full items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <ALargeSmall className={`text-main `} size={20} />
            <span className={`text-xl text-main`}>
               Font family
            </span>
         </div>
         <div className={`w-full grid grid-cols-5 gap-4 mt-4`}>
            {FONT_FAMILIES.sort((a, b) => a.localeCompare(b)).map((font, index) => (
               <Button
                  onClick={_ => {
                     if(signedIn) {
                        execute({ font_family: font });
                     } else setFontFamily(font)
                  }}
                  variant={`secondary`}
                  className={cn(`!w-full`,
                     font === fontFamily && `bg-accent`)}
                  key={font}>
                  {font}
               </Button>
            ))}

         </div>
      </div>
   );
};

export default FontFamilySection;