"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { Save } from "lucide-react";
import { Button } from "@repo/ui";
import { cn } from "@lib/utils";
import { useAtom } from "jotai/index";
import { autoSaveModeAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";

export interface AutoSaveModeSectionProps {
}

const AutoSaveModeSection = ({}: AutoSaveModeSectionProps) => {
   const [autoSaveMode, setAutoSaveMode] = useAtom(autoSaveModeAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setAutoSaveMode(res.data?.userConfig?.auto_save_mode);
         }
      },
   });
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Save className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Auto save
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Automatically save your typing test results after finishing.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto`}>
            <Button
               onClick={_ => execute({ auto_save_mode: false })}
               className={cn(`flex-1`,
                  !autoSaveMode && `bg-accent`)}
            >
               Off
            </Button>
            <Button
               onClick={_ => execute({ auto_save_mode: true })}
               className={cn(`flex-1`,
                  autoSaveMode && `bg-accent`)}
            >
               On
            </Button>
         </div>
      </SettingLayout>
   );
};

export default AutoSaveModeSection;