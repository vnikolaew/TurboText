"use client";
import React from "react";
import { VolumeX } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { soundOnErrorAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";

export interface SoundOnErrorSectionProps {
}

const SOUNDS = [
   "Off",
   "Damage",
   "Triangle",
   "Square",
   "Missed punch",
];

const SoundOnErrorSection = ({}: SoundOnErrorSectionProps) => {
   const [soundOnError, setSoundOnError] = useAtom(soundOnErrorAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setSoundOnError(res.data?.userConfig?.sound_error_sound);
         }
      },
   });

   return (
      <div className={`flex flex-col w-full items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <VolumeX className={`text-main `} size={20} />
            <span className={`text-xl text-main`}>
               Play sound on error
            </span>
         </div>
         <p className={`mt-2 text-base !text-secondary`}>
            Plays a short sound if you press an incorrect key or press space too early.
         </p>
         <div className={`w-full grid grid-cols-5 gap-4 mt-4`}>
            {SOUNDS.map((sound, index) => (
               <Button
                  onClick={_ => execute({ sound_error_sound: sound })}
                  className={cn(`!w-full`,
                     soundOnError === sound && `bg-accent`)}
                  variant={`secondary`} key={sound}>{sound}</Button>
            ))}
         </div>
      </div>
   );
};

export default SoundOnErrorSection;