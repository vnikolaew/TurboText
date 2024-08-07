"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { paceCaretSpeedAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { TextCursor } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface PaceCaretSectionProps {}

const PACE_CARET_SPEEDS = [
   {
      value: `OFF`,
      label: `Off`,
   },
   {
      value: `AVG`,
      label: `Avg`,
   },
   {
      value: `PB`,
      label: `Pb`,
   },
   {
      value: `LAST`,
      label: `Last`,
   },
   {
      value: `DAILY`,
      label: `Daily`,
   },
   {
      value: `CUSTOM`,
      label: `Custom`,
   },
] as const;

const PaceCaretSection = ({}: PaceCaretSectionProps) => {
   const [paceCaretSpeed, setPaceCaretSpeed] = useAtom(paceCaretSpeedAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setPaceCaretSpeed(res.data?.userConfig?.pace_caret_speed);
         }
      },
   });
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <TextCursor className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Pace caret</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Displays a second caret that moves at constant speed. The
               'average' option averages the speed of last 10 results. The
               'daily' option takes the highest speed of the last 24 hours.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            {PACE_CARET_SPEEDS.map(({ value, label }, index) => (
               <Button
                  onClick={(_) =>
                     signedIn
                        ? execute({ pace_caret_speed: value })
                        : setPaceCaretSpeed(value)
                  }
                  className={cn(
                     `flex-1 shadow-md`,
                     paceCaretSpeed === value && `bg-accent`
                  )}
                  key={value}
               >
                  {label}
               </Button>
            ))}
         </div>
      </SettingLayout>
   );
};

export default PaceCaretSection;
