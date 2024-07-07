import { updateUserConfiguration } from "@app/settings/actions";
import { fontFamilyAtom, hoveredFontFamilyAtom } from "@atoms/user";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai/index";
import { CaseSensitive, Check, ChevronRight } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export const FontFamilyOption = ({ fontFamily }: { fontFamily: string }) => {
   const [userFontFamily, setUserFontFamily] = useAtom(fontFamilyAtom);
   const [hoveredFontFamily, setHoveredFontFamily] = useAtom(
      hoveredFontFamilyAtom
   );

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            let newFontFamily = res.data.userConfig?.font_family;

            setUserFontFamily(newFontFamily);
            setHoveredFontFamily(newFontFamily);
         }
      },
   });

   function handleHoverFontOption(event: any): void {
      //@ts-ignore
      setHoveredFontFamily(fontFamily);
   }

   return (
      <CommandItem
         onMouseEnter={handleHoverFontOption}
         onMouseLeave={(_) => setHoveredFontFamily(null!)}
         value={`font-family-${fontFamily}`}
         onSelect={(_) => execute({ font_family: fontFamily })}
         key={fontFamily}
         className={`flex w-full cursor-pointer items-center gap-6`}
      >
         <div className={`flex items-center gap-1`}>
            <CaseSensitive size={12} />
            <span className={`text-xs`}>Font family</span>
            <ChevronRight size={10} />
         </div>
         <span>{fontFamily}</span>
         {fontFamily === userFontFamily && (
            <span className={`text-xs font-bold`}>
               <Check size={12} className={`text-neutral-300`} />
            </span>
         )}
      </CommandItem>
   );
};
