"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { Circle } from "lucide-react";
import { useAtom } from "jotai/index";
import { flipColorsAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import SettingButton from "@app/settings/_components/common/SettingButton";

export interface FlipTestColorsProps {
}

const FlipTestColorsSection = ({}: FlipTestColorsProps) => {
   const [flipColors, setFlipColors] = useAtom(flipColorsAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setFlipColors(res.data?.userConfig?.theme_flip_colors);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Circle className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Flip test colors
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               By default, typed text is brighter than the future text. When enabled, the colors will be flipped and the
               future text will be brighter than the already typed text.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <SettingButton
               onClick={_ => execute({ theme_flip_colors: false })}
               className={`flex-1`}
               active={!flipColors}>
               Off
            </SettingButton>
            <SettingButton
               onClick={_ => execute({ theme_flip_colors: true })}
               className={`flex-1`}
               active={flipColors}>
               On
            </SettingButton>
         </div>
      </SettingLayout>
   );
};

export default FlipTestColorsSection;