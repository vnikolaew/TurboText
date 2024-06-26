"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { TextCursor } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { paceCaretStyleAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";
import { CARET_STYLES } from "@app/settings/_components/caret/CaretStyleSection";
import { useIsSignedIn } from "@hooks/useIsSignedIn";

export interface PaceCaretStyleSectionProps {
}

const PaceCaretStyleSection = ({}: PaceCaretStyleSectionProps) => {
   const [caretStyle, setCaretStyle] = useAtom(paceCaretStyleAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setCaretStyle(res.data?.userConfig?.pace_caret_style);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <TextCursor className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Pace caret style
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Change the style of the pace caret during the test.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            {CARET_STYLES.map(({ label, value }, index) => (
               <Button title={value}
                       onClick={_ => signedIn ? execute({ pace_caret_style: value }) : setCaretStyle(value)} key={value}
                       className={cn(`flex-1`,
                          caretStyle === value && `bg-accent`)}
               >{label}</Button>
            ))}
         </div>
      </SettingLayout>
   );
};

export default PaceCaretStyleSection;