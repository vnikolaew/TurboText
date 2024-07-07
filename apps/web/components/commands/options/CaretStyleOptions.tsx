"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { caretStyleAtom } from "@atoms/user";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai/index";
import { Check, ChevronRight, TextCursor } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Fragment } from "react";

export interface CaretStyleOptionsProps {}

export const CARET_STYLES = [
   {
      value: `OFF`,
      label: `Off`,
   },
   {
      value: `CURSOR`,
      label: `|`,
   },
   {
      value: `BLOCK`,
      label: `▌`,
   },
   {
      value: `BLOCK_FILLED`,
      label: `■`,
   },
   {
      value: `UNDERSCORE`,
      label: `_`,
   },
];

const CaretStyleOptions = ({}: CaretStyleOptionsProps) => {
   const [caretStyle, setCaretStyle] = useAtom(caretStyleAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            setCaretStyle(res.data.userConfig?.caret_style);
         }
      },
   });

   return (
      <Fragment>
         {CARET_STYLES.map(({ value, label }, index) => (
            <CommandItem
               value={`caret-style-${label}`}
               onSelect={(_) => execute({ caret_style: value })}
               key={label}
               className={`flex w-full cursor-pointer items-center gap-6`}
            >
               <div className={`flex items-center gap-1`}>
                  <TextCursor size={8} />
                  <span className={`text-xs`}>Caret style</span>
                  <ChevronRight size={10} />
               </div>
               <span>{label}</span>
               {value === caretStyle && (
                  <span className={`text-xs font-bold`}>
                     <Check size={12} className={`text-neutral-300`} />
                  </span>
               )}
            </CommandItem>
         ))}
      </Fragment>
   );
};

export default CaretStyleOptions;
