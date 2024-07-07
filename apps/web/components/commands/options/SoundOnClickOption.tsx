"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { soundOnClickAtom } from "@atoms/user";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai/index";
import { Check, ChevronRight, Volume2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export interface SoundOnClickOptionProps {
   sound: string;
}

const SoundOnClickOption = ({ sound }: SoundOnClickOptionProps) => {
   const [soundOnClick, setSoundOnClick] = useAtom(soundOnClickAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            setSoundOnClick(res.data.userConfig?.sound_click_sound);
         }
      },
   });

   return (
      <CommandItem
         value={`sound-on-click-${sound}`}
         onSelect={(_) => {
            execute({ sound_click_sound: sound });
         }}
         key={sound}
         className={`flex w-full cursor-pointer items-center gap-6`}
      >
         <div className={`flex items-center gap-1`}>
            <Volume2 size={8} />
            <span className={`text-xs`}>Sound on click</span>
            <ChevronRight size={10} />
         </div>
         <span>{sound}</span>
         {sound === soundOnClick && (
            <span className={`text-xs font-bold`}>
               <Check size={12} className={`text-neutral-300`} />
            </span>
         )}
      </CommandItem>
   );
};

export default SoundOnClickOption;
