"use client";
import React from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom, useSetAtom } from "jotai/index";
import { soundOnClickAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";
import { playSoundAtom, soundClicksAtom } from "@app/settings/atoms";
import { useAtomValue } from "jotai";
import { SOUNDS } from "@lib/sounds";

export interface SoundOnClickSectionProps {
}



const SoundOnClickSection = ({}: SoundOnClickSectionProps) => {
   const [soundOnClick, setSoundOnClick] = useAtom(soundOnClickAtom);
   const soundClicks = useAtomValue(soundClicksAtom)
   const playSound = useSetAtom(playSoundAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setSoundOnClick(res.data?.userConfig?.sound_click_sound);
         }
      },
   });
   console.log({ sounds: SOUNDS.length, files: soundClicks.length });

   return (
      <div className={`flex flex-col w-full items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <Volume2 className={`text-main `} size={20} />
            <span className={`text-xl text-main`}>
               Play sound on click
            </span>
         </div>
         <p className={`mt-2 text-base !text-secondary`}>
            Plays a short sound when you press a key.
         </p>
         <div className={`w-full grid grid-cols-5 gap-4 mt-4`}>
            {SOUNDS.map((sound, index) => (
               <Button
                  onClick={async _ => {
                     await playSound(index);
                     execute({ sound_click_sound: sound });
                  }}
                  variant={`secondary`}
                  className={cn(`!w-full`,
                     soundOnClick === sound && `bg-accent`)}
                  key={sound}>
                  {sound}
               </Button>
            ))}

         </div>
      </div>
   );
};

export default SoundOnClickSection;