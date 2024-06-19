"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { TextCursor } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { caretStyleAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";

export interface CaretStyleSectionProps {
}

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
const CaretStyleSection = ({}: CaretStyleSectionProps) => {
   const [caretStyle, setCaretStyle] = useAtom(caretStyleAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setCaretStyle(res.data?.userConfig?.caret_style);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <TextCursor className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Caret style
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Change the style of the caret during the test.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            {CARET_STYLES.map(({ label, value }, index) => (
               <Button title={value} onClick={_ => execute({ caret_style: value })} key={value}
                       className={cn(`flex-1`,
                       caretStyle === value && `bg-amber-500`)}
               >{label}</Button>
            ))}
         </div>
      </SettingLayout>
   );
};

export default CaretStyleSection;