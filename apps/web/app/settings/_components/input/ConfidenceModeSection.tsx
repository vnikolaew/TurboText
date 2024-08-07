"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { confidenceModeAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { Delete } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface ConfidenceModeSetionProps {}

const CONFIDENCE_MODES = [
   {
      value: `OFF`,
      label: `Off`,
   },
   {
      value: `ON`,
      label: `On`,
   },
   {
      value: `MAX`,
      label: `Max`,
   },
];

const ConfidenceModeSection = ({}: ConfidenceModeSetionProps) => {
   const [confidenceMode, setConfidenceMode] = useAtom(confidenceModeAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setConfidenceMode(res.data?.userConfig?.input_confidence_mode);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Delete className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Confidence mode</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               When enabled, you will not be able to go back to previous words
               to fix mistakes. When turned up to the max, you won't be able to
               backspace at all.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full items-center justify-center gap-2`}
         >
            {CONFIDENCE_MODES.map(({ value, label }, index) => (
               <Button
                  key={value}
                  onClick={(_) =>
                     signedIn
                        ? execute({ input_confidence_mode: value })
                        : setConfidenceMode(value)
                  }
                  className={cn(
                     `flex-1`,
                     confidenceMode === value && `bg-accent`
                  )}
               >
                  {label}
               </Button>
            ))}
         </div>
      </SettingLayout>
   );
};

export default ConfidenceModeSection;
