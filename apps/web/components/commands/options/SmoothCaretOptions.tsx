"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { smoothCaretAtom } from "@atoms/user";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai/index";
import { Check, ChevronRight, TextCursor } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Fragment } from "react";

export interface SmoothCaretOptionsProps {}

const CARET_SMOOTHNESSES = [
   {
      value: `OFF`,
      label: `Off`,
   },
   {
      value: `SLOW`,
      label: `Slow`,
   },
   {
      value: `MEDIUM`,
      label: `Medium`,
   },
   {
      value: `FAST`,
      label: `Fast`,
   },
];

const SmoothCaretOptions = ({}: SmoothCaretOptionsProps) => {
   const [smoothCaret, setSmoothCaret] = useAtom(smoothCaretAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            setSmoothCaret(res.data.userConfig?.caret_smoothness);
         }
      },
   });

   return (
      <Fragment>
         {CARET_SMOOTHNESSES.map(({ value, label }, index) => (
            <CommandItem
               value={`caret-smoothness-${label}`}
               onSelect={(_) => execute({ caret_smoothness: value })}
               key={label}
               className={`flex w-full cursor-pointer items-center gap-6`}
            >
               <div className={`flex items-center gap-1`}>
                  <TextCursor size={8} />
                  <span className={`text-xs`}>Smooth caret</span>
                  <ChevronRight size={10} />
               </div>
               <span>{label}</span>
               {value === smoothCaret && (
                  <span className={`text-xs font-bold`}>
                     <Check size={12} className={`text-neutral-300`} />
                  </span>
               )}
            </CommandItem>
         ))}
      </Fragment>
   );
};

export default SmoothCaretOptions;
