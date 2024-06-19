"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { PaintBucket } from "lucide-react";
import { useAtom } from "jotai/index";
import { colorfulModeAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import SettingButton from "@app/settings/_components/common/SettingButton";

export interface ColorfulModeSectionProps {
}

const ColorfulModeSection = ({}: ColorfulModeSectionProps) => {
   const [colorfulMode, setColorfulMode] = useAtom(colorfulModeAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setColorfulMode(res.data?.userConfig?.theme_colorful_mode);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <PaintBucket className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Colorful mode
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               When enabled, the test words will use the main color, instead of the text color, making the website more
               colorful.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <SettingButton
               onClick={_ => execute({ theme_colorful_mode: false })} active={!colorfulMode}
               className={`flex-1`}>
               Off
            </SettingButton>
            <SettingButton
               onClick={_ => execute({ theme_colorful_mode: true })} active={colorfulMode}
               className={`flex-1`}>On</SettingButton>
         </div>
      </SettingLayout>
   );
};

export default ColorfulModeSection;