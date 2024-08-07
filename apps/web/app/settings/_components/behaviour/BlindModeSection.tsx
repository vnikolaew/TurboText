"use client";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { updateUserConfiguration } from "@app/settings/actions";
import { blindModeAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { EyeOff } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export interface BlindModeSectionProps {}

const BlindModeSection = ({}: BlindModeSectionProps) => {
   const [blindMode, setBlindMode] = useAtom(blindModeAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            setBlindMode(res.data?.userConfig.blind_mode);
         }
      },
   });

   function handleUpdate(value: boolean): void {
      if (signedIn) {
         execute({ blind_mode: value });
      } else setBlindMode(value);
   }

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <EyeOff className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Blind mode</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               No errors or incorrect words are highlighted. Helps you to focus
               on raw speed. If enabled, quick end is recommended.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full items-center justify-center gap-2`}
         >
            <Button
               onClick={(_) => handleUpdate(false)}
               className={cn(`flex-1`, !blindMode && `bg-accent`)}
            >
               Off
            </Button>
            <Button
               onClick={(_) => handleUpdate(true)}
               className={cn(`flex-1`, blindMode && `bg-accent`)}
            >
               On
            </Button>
         </div>
      </SettingLayout>
   );
};

export default BlindModeSection;
