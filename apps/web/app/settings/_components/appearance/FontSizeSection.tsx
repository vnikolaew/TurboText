"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { ALargeSmall, Save } from "lucide-react";
import { Button, Input } from "@repo/ui";
import { useAtom } from "jotai/index";
import { fontSizeAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";

export interface FontSizeSectionProps {
}

const FontSizeSection = ({}: FontSizeSectionProps) => {
   const [fontSize, setfontSize] = useAtom(fontSizeAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setfontSize(res.data?.userConfig?.font_size);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <ALargeSmall className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
               Font size
            </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Change the font size of the test words.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            <Input size={10} onChange={e => setfontSize(e.target.valueAsNumber)} value={fontSize} type={"number"}
                   className={`w-full`} />
            <Button title={`Save`} variant={`secondary`} onClick={_ => execute({ font_size: fontSize })} className={`rounded-md shadow-md`} size={"icon"}>
               <Save size={14} />
            </Button>
         </div>
      </SettingLayout>
   );
};

export default FontSizeSection;