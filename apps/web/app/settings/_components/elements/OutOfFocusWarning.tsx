"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { CircleAlert } from "lucide-react";
import { useAtom } from "jotai/index";
import { oofWarningtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import SettingButton from "../common/SettingButton";

export interface OutOfFocusWarningProps {
}

const OutOfFocusWarning = ({}: OutOfFocusWarningProps) => {
   const [oofWarning, setOofWarning] = useAtom(oofWarningtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setOofWarning(res.data?.userConfig?.elements_show_oof_warning);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <CircleAlert className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Out of focus warning
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Shows an out of focus reminder after 1 second of being 'out of focus' (not being able to type).
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <SettingButton
               onClick={_ => execute({ elements_show_oof_warning: false })} active={!oofWarning}
               className={`flex-1`}>
               Hide
            </SettingButton>
            <SettingButton
               onClick={_ => execute({ elements_show_oof_warning: true })} active={oofWarning}
               className={`flex-1`}>Show</SettingButton>
         </div>
      </SettingLayout>
   );
};

export default OutOfFocusWarning;