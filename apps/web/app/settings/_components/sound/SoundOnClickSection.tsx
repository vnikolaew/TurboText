"use client";
import React from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { soundOnClickAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";

export interface SoundOnClickSectionProps {
}

const SOUNDS = [
   "Off",
   "Click",
   "Beep",
   "Pop",
   "Nk creams",
   "Typewriter",
   "Osu",
   "Hitmarker",
   "Sine",
   "Sawtooth",
   "Square",
   "Triangle",
   "Pentatonic",
   "Wholetone",
   "Fist fight",
   "Rubber keys",
];

const SoundOnClickSection = ({}: SoundOnClickSectionProps) => {
   const [soundOnClick, setSoundOnClick] = useAtom(soundOnClickAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.success) {
            console.log(res);
            setSoundOnClick(res.userConfig.sound_click_sound);
         }
      },
   });


   return (
      <div className={`flex flex-col w-full items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <Volume2 className={`text-neutral-500 `} size={20} />
            <span className={`text-xl text-neutral-500`}>
               Play sound on click
            </span>
         </div>
         <p className={`mt-2 text-base`}>
            Plays a short sound when you press a key.
         </p>
         <div className={`w-full grid grid-cols-5 gap-4 mt-4`}>
            {SOUNDS.map((sound, index) => (
               <Button
                  onClick={_ => execute({ sound_click_sound: sound })}
                  variant={`secondary`}
                  className={cn(`!w-full`,
                     soundOnClick === sound && `bg-amber-500`)}
                  key={sound}>{sound}</Button>
            ))}

         </div>
      </div>
   );
};

export default SoundOnClickSection;