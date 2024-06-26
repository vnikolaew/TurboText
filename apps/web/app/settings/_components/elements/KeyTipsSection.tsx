"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { CircleHelp } from "lucide-react";
import { useAtom } from "jotai/index";
import { keyTipsAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import SettingButton from "@app/settings/_components/common/SettingButton";
import { useIsSignedIn } from "@hooks/useIsSignedIn";

export interface KeyTipsSectionProps {
}

const KeyTipsSection = ({}: KeyTipsSectionProps) => {
   const [keyTips, setKeyTips] = useAtom(keyTipsAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setKeyTips(res.data?.userConfig?.elements_show_key_tips);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <CircleHelp className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Key tips
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Shows the keybind tips at the bottom of the page.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <SettingButton
               onClick={_ => signedIn ? execute({ elements_show_key_tips: false }) : setKeyTips(false)} active={!keyTips}
               className={`flex-1`}>
               Hide
            </SettingButton>
            <SettingButton
               onClick={_ => signedIn ?  execute({ elements_show_key_tips: true }) : setKeyTips(true)} active={keyTips}
               className={`flex-1`}>Show</SettingButton>
         </div>
      </SettingLayout>
   );
};

export default KeyTipsSection;