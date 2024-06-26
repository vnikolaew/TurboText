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
import { useIsSignedIn } from "@hooks/useIsSignedIn";

export interface FreedomModeSectionProps {
}

const FreedomModeSection = ({}: FreedomModeSectionProps) => {
   const [freedomMode, setFreedomMode] = useAtom(freedomModeAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setFreedomMode(res.data?.userConfig?.input_freedom_mode);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Feather className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Freedom mode
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Allows you to delete any word, even if it was typed correctly.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            <Button
               onClick={_ => signedIn ? execute({ input_freedom_mode: false }) : setFreedomMode(false)}
               className={cn(`flex-1`,
                  !freedomMode && `bg-accent`)}
            >
               Off
            </Button>
            <Button
               onClick={_ => signedIn ? execute({ input_freedom_mode: true }) : setFreedomMode(true)}
               className={cn(`flex-1`,
                  freedomMode && `bg-accent`)}
            >
               On
            </Button>
         </div>
      </SettingLayout>
   );
};

export default FreedomModeSection;