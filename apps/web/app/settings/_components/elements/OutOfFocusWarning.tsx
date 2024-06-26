"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { CircleAlert } from "lucide-react";
import { useAtom } from "jotai/index";
import { oofWarningtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import SettingButton from "../common/SettingButton";
import { useIsSignedIn } from "@hooks/useIsSignedIn";

export interface OutOfFocusWarningProps {
}

const OutOfFocusWarning = ({}: OutOfFocusWarningProps) => {
   const [oofWarning, setOofWarning] = useAtom(oofWarningtom);
   const signedIn = useIsSignedIn();

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
               <CircleAlert className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>
                  Out of focus warning
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Shows an out of focus reminder after 1 second of being 'out of focus' (not being able to type).
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <SettingButton
               onClick={_ => signedIn ?  execute({ elements_show_oof_warning: false }) : setOofWarning(false)} active={!oofWarning}
               className={`flex-1`}>
               Hide
            </SettingButton>
            <SettingButton
               onClick={_ => signedIn ?  execute({ elements_show_oof_warning: true }) : setOofWarning(true)} active={oofWarning}
               className={`flex-1`}>Show</SettingButton>
         </div>
      </SettingLayout>
   );
};

export default OutOfFocusWarning;