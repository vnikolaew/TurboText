"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { TriangleAlert } from "lucide-react";
import { useAtom } from "jotai/index";
import { capsLockWarningAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import SettingButton from "../common/SettingButton";

export interface CapsLockWarningProps {
}

const CapsLockWarning = ({}: CapsLockWarningProps) => {
   const [capsLockWarning, setCapsLockWarning] = useAtom(capsLockWarningAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res?.data?.success) {
            console.log(res);
            setCapsLockWarning(res.data?.userConfig?.elements_show_caps_lock_warning);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <TriangleAlert className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Caps lock warning
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Displays a warning when caps lock is on.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <SettingButton
               onClick={_ => execute({ elements_show_caps_lock_warning: false })} active={!capsLockWarning}
               className={`flex-1`}>
               Hide
            </SettingButton>
            <SettingButton
               onClick={_ => execute({ elements_show_caps_lock_warning: true })} active={capsLockWarning}
               className={`flex-1`}>Show</SettingButton>
         </div>
      </SettingLayout>
   );
};

export default CapsLockWarning;