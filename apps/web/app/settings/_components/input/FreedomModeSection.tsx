"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { Feather } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { freedomModeAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";

export interface FreedomModeSectionProps {
}

const FreedomModeSection = ({}: FreedomModeSectionProps) => {
   const [freedomMode, setFreedomMode] = useAtom(freedomModeAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.success) {
            console.log(res);
            setFreedomMode(res.userConfig.input_freedom_mode);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Feather className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Freedom mode
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Allows you to delete any word, even if it was typed correctly.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            <Button
               onClick={_ => execute({ input_freedom_mode: false })}
               className={cn(`flex-1`,
                  !freedomMode && `bg-amber-500`)}
            >
               Off
            </Button>
            <Button
               onClick={_ => execute({ input_freedom_mode: true })}
               className={cn(`flex-1`,
                  freedomMode && `bg-amber-500`)}
            >
               On
            </Button>
         </div>
      </SettingLayout>
   );
};

export default FreedomModeSection;