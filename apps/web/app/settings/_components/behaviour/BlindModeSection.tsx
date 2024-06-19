"use client";
import React from "react";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { EyeOff } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { blindModeAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";

export interface BlindModeSectionProps {
}

const BlindModeSection = ({}: BlindModeSectionProps) => {
   const [blindMode, setBlindMode] = useAtom(blindModeAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res?.data?.success) {
            console.log(res);
            setBlindMode(res.data?.userConfig.blind_mode);
         }
      },
   });

   function handleUpdate(value: boolean): void {
      execute({ blind_mode: value });
   }

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <EyeOff className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Blind mode
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               No errors or incorrect words are highlighted. Helps you to focus on raw speed. If enabled, quick end is recommended.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            <Button
               onClick={_ => handleUpdate(false)}
               className={cn(`flex-1`,
                  !blindMode && `bg-amber-500`)}
            >
               Off
            </Button>
            <Button onClick={_ => handleUpdate(true)}
                    className={cn(`flex-1`,
                       blindMode && `bg-amber-500`)}
            >
               On
            </Button>
         </div>
      </SettingLayout>
   );
};

export default BlindModeSection;