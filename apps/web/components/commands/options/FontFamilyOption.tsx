import { useAtom } from "jotai/index";
import { fontFamilyAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { CommandItem } from "@repo/ui";
import { CaseSensitive, Check, ChevronRight } from "lucide-react";
import React from "react";

export const FontFamilyOption = ({ fontFamily }: { fontFamily: string }) => {
   const [userFontFamily, setUserFontFamily] = useAtom(fontFamilyAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res?.data?.success) {
            console.log(res);
            setUserFontFamily(res.data.userConfig?.font_family);
         }
      },
   });

   return (
      <CommandItem
         value={fontFamily}
         onSelect={_ => execute({ font_family: fontFamily })}
         key={fontFamily} className={`flex items-center gap-6 w-full cursor-pointer`}>
         <div className={`flex items-center gap-1`}>
            <CaseSensitive size={12} />
            <span className={`text-xs`}>Font family</span>
            <ChevronRight size={10} />
         </div>
         <span>{fontFamily}</span>
         {fontFamily === userFontFamily && <span className={`text-xs font-bold`}>
            <Check size={12} className={`text-neutral-300`} />
         </span>}
      </CommandItem>
   );
};