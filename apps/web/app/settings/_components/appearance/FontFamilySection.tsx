"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { fontFamilyAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { FONT_FAMILIES } from "@lib/consts";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { ALargeSmall } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export interface FontFamilySectionProps {}

const FontFamilySection = ({}: FontFamilySectionProps) => {
   const [fontFamily, setFontFamily] = useAtom(fontFamilyAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setFontFamily(res.data?.userConfig?.font_family);
         }
      },
   });

   return (
      <div className={`flex w-full flex-col items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <ALargeSmall className={`text-main`} size={20} />
            <span className={`text-xl text-main`}>Font family</span>
         </div>
         <div className={`mt-4 grid w-full grid-cols-5 gap-4`}>
            {FONT_FAMILIES.sort((a, b) => a.localeCompare(b)).map(
               (font, index) => (
                  <Button
                     onClick={(_) => {
                        if (signedIn) {
                           execute({ font_family: font });
                        } else setFontFamily(font);
                     }}
                     variant={`secondary`}
                     className={cn(
                        `!w-full`,
                        font === fontFamily && `bg-accent`
                     )}
                     key={font}
                  >
                     {font}
                  </Button>
               )
            )}
         </div>
      </div>
   );
};

export default FontFamilySection;
