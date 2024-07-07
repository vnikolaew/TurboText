"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { soundOnErrorAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { VolumeX } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export interface SoundOnErrorSectionProps {}

const SOUNDS = ["Off", "Damage", "Triangle", "Square", "Missed punch"];

const SoundOnErrorSection = ({}: SoundOnErrorSectionProps) => {
   const [soundOnError, setSoundOnError] = useAtom(soundOnErrorAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setSoundOnError(res.data?.userConfig?.sound_error_sound);
         }
      },
   });

   return (
      <div className={`flex w-full flex-col items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <VolumeX className={`text-main`} size={20} />
            <span className={`text-xl text-main`}>Play sound on error</span>
         </div>
         <p className={`mt-2 text-base !text-secondary`}>
            Plays a short sound if you press an incorrect key or press space too
            early.
         </p>
         <div className={`mt-4 grid w-full grid-cols-5 gap-4`}>
            {SOUNDS.map((sound, index) => (
               <Button
                  onClick={(_) =>
                     signedIn
                        ? execute({ sound_error_sound: sound })
                        : setSoundOnError(sound)
                  }
                  className={cn(
                     `!w-full`,
                     soundOnError === sound && `bg-accent`
                  )}
                  variant={`secondary`}
                  key={sound}
               >
                  {sound}
               </Button>
            ))}
         </div>
      </div>
   );
};

export default SoundOnErrorSection;
