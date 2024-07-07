"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { playSoundAtom } from "@app/settings/atoms";
import { soundOnClickAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { SOUNDS } from "@lib/consts";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom, useSetAtom } from "jotai/index";
import { Volume2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export interface SoundOnClickSectionProps {}

const SoundOnClickSection = ({}: SoundOnClickSectionProps) => {
   const [soundOnClick, setSoundOnClick] = useAtom(soundOnClickAtom);
   const signedIn = useIsSignedIn();

   const playSound = useSetAtom(playSoundAtom);

   const { execute, isExecuting } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setSoundOnClick(res.data?.userConfig?.sound_click_sound);
         }
      },
   });

   return (
      <div className={`flex w-full flex-col items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <Volume2 className={`text-main`} size={20} />
            <span className={`text-xl text-main`}>Play sound on click</span>
         </div>
         <p className={`mt-2 text-base !text-secondary`}>
            Plays a short sound when you press a key.
         </p>
         <div className={`mt-4 grid w-full grid-cols-5 gap-4`}>
            {SOUNDS.map((sound, index) => (
               <Button
                  onClick={async (_) => {
                     await playSound(index);
                     if (signedIn) {
                        execute({ sound_click_sound: sound });
                     } else setSoundOnClick(sound);
                  }}
                  variant={`secondary`}
                  className={cn(
                     `!w-full`,
                     soundOnClick === sound && `bg-accent`
                  )}
                  key={sound}
               >
                  {sound}
               </Button>
            ))}
         </div>
      </div>
   );
};

export default SoundOnClickSection;
