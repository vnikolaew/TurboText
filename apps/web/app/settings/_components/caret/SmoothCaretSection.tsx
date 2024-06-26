"use client";
import React from "react";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { TextCursor } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { smoothCaretAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { cn } from "@lib/utils";
import { useIsSignedIn } from "@hooks/useIsSignedIn";

export interface SmoothCaretSectionProps {
}

const CARET_SMOOTHNESSES = [{
   value: `OFF`,
   label: `Off`,
},
   {
      value: `SLOW`,
      label: `Slow`,
   },
   {
      value: `MEDIUM`,
      label: `Medium`,
   },
   {
      value: `FAST`,
      label: `Fast`,
   },
];

const SmoothCaretSection = ({}: SmoothCaretSectionProps) => {
   const [smoothCaret, setSmoothCaret] = useAtom(smoothCaretAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setSmoothCaret(res.data?.userConfig?.caret_smoothness);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <TextCursor className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Smooth caret
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               The caret will move smoothly between letters and words.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            {CARET_SMOOTHNESSES.map(({ value, label }, index) => (
               <Button
                  onClick={_ => signedIn ? execute({ caret_smoothness: value }) : setSmoothCaret(value)}
                  key={value}
                  className={cn(`flex-1`,
                     smoothCaret === value && `bg-accent`)}
               >
                  {label}</Button>
            ))}
         </div>
      </SettingLayout>
   );
};

export default SmoothCaretSection;