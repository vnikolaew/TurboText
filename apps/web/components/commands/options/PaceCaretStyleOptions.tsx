"use client";
import React, { Fragment } from "react";
import { useAtom } from "jotai/index";
import { paceCaretStyleAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { CommandItem } from "@repo/ui";
import { Check, ChevronRight, TextCursor } from "lucide-react";

export interface PaceCaretStyleOptionsProps {
}

export const PACE_CARET_STYLES = [
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

const PaceCaretStyleOptions = ({}: PaceCaretStyleOptionsProps) => {
   const [paceCaretStyle, setPaceCaretStyle] = useAtom(paceCaretStyleAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res?.data?.success) {
            console.log(res);
            setPaceCaretStyle(res.data.userConfig?.pace_caret_style);
         }
      },
   });

   // @ts-ignore
   return (
      <Fragment>
         {PACE_CARET_STYLES.map(({ value, label }, index) => (
            <CommandItem
               value={`pace-caret-style-${label}`}
               onSelect={_ => execute({ pace_caret_style: value })}
               key={label} className={`flex items-center gap-6 w-full cursor-pointer`}>
               <div className={`flex items-center gap-1`}>
                  <TextCursor size={8} />
                  <span className={`text-xs`}>Caret style</span>
                  <ChevronRight size={10} />
               </div>
               <span>{label}</span>
               {value === paceCaretStyle && <span className={`text-xs font-bold`}>
                  <Check size={12} className={`text-neutral-300`} />
                     </span>}
            </CommandItem>
         ))}
      </Fragment>
   );
};

export default PaceCaretStyleOptions;