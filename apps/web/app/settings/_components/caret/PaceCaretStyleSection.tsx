"use client";
import { CARET_STYLES } from "@app/settings/_components/caret/CaretStyleSection";
import { updateUserConfiguration } from "@app/settings/actions";
import { paceCaretStyleAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai/index";
import { TextCursor } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface PaceCaretStyleSectionProps {}

const PaceCaretStyleSection = ({}: PaceCaretStyleSectionProps) => {
   const [caretStyle, setCaretStyle] = useAtom(paceCaretStyleAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
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
               <TextCursor className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Pace caret style</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Change the style of the pace caret during the test.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full items-center justify-center gap-2`}
         >
            {CARET_STYLES.map(({ label, value }, index) => (
               <Button
                  title={value}
                  onClick={(_) =>
                     signedIn
                        ? execute({ pace_caret_style: value })
                        : setCaretStyle(value)
                  }
                  key={value}
                  className={cn(`flex-1`, caretStyle === value && `bg-accent`)}
               >
                  {label}
               </Button>
            ))}
         </div>
      </SettingLayout>
   );
};

export default PaceCaretStyleSection;
