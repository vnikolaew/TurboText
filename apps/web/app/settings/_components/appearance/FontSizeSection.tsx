"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { ALargeSmall, Save } from "lucide-react";
import { Button, Input } from "@repo/ui";
import { useAtom } from "jotai/index";
import { fontSizeAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { useIsSignedIn } from "@hooks/useIsSignedIn";

export interface FontSizeSectionProps {
}

const FontSizeSection = ({}: FontSizeSectionProps) => {
   const [fontSize, setfontSize] = useAtom(fontSizeAtom);
   const signedIn = useIsSignedIn();

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
               <ALargeSmall className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
               Font size
            </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Change the font size of the test words.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            <Input size={10} onChange={e => setfontSize(e.target.valueAsNumber)} value={fontSize} type={"number"}
                   className={`w-full !bg-secondary-bg !text-main`} />
            <Button title={`Save`} variant={`secondary`}
                    onClick={_ => signedIn ? execute({ font_size: fontSize }) : setfontSize(fontSize)}
                    className={`rounded-md shadow-md`} size={"icon"}>
               <Save size={14} />
            </Button>
         </div>
      </SettingLayout>
   );
};

export default FontSizeSection;