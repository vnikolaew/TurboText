"use client"
import React, { Fragment } from "react";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai/index";
import { blindModeAtom } from "@atoms/user";
import { Check, ChevronRight, EyeOff } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";

export interface BlindModeOptionsProps {
}

const OPTIONS = [{
   value: true,
   label: "on",
}, {
   value: false,
   label: "off",
}];

const BlindModeOptions = ({}: BlindModeOptionsProps) => {
   const [blindMode, setBlindMode] = useAtom(blindModeAtom);

   const { execute, isExecuting } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res?.data?.success) {
            console.log(res);
            setBlindMode(res.data.userConfig?.blind_mode);
         }
      },
   });

   return (
      <Fragment>
         {OPTIONS.map(({ value, label }, index) => (
            <CommandItem
               value={`blind-mode-${label}`}
               onSelect={_ => execute({ blind_mode: value })}
               key={label} className={`flex items-center gap-6 w-full cursor-pointer`}>
               <div className={`flex items-center gap-2`}>
                  <EyeOff size={8} />
                  <span className={`text-xs`}>Blind mode</span>
                  <ChevronRight size={10} />
               </div>
               <span>{label}</span>
               {value === blindMode && <span className={`text-xs font-bold`}>
                  <Check size={12} className={`text-neutral-300`} />
                     </span>}
            </CommandItem>
         ))}
      </Fragment>
   );
};

export default BlindModeOptions;