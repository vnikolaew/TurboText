"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { autoSaveModeAtom, userConfigAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtomValue } from "jotai";
import { useAtom } from "jotai/index";
import { Save } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface AutoSaveModeSectionProps {}

const AutoSaveModeSection = ({}: AutoSaveModeSectionProps) => {
   const userConfig = useAtomValue(userConfigAtom);
   const signedIn = useIsSignedIn();

   const [autoSaveMode, setAutoSaveMode] = useAtom(autoSaveModeAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setAutoSaveMode(res.data?.userConfig?.auto_save_mode);
         }
      },
   });
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Save className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Auto save</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Automatically save your typing test results after finishing.
            </p>
         </div>
         <div className={`my-auto flex h-full w-full items-center gap-2`}>
            <Button
               onClick={(_) =>
                  signedIn
                     ? execute({ auto_save_mode: false })
                     : setAutoSaveMode(false)
               }
               className={cn(`flex-1`, !autoSaveMode && `bg-accent`)}
            >
               Off
            </Button>
            <Button
               onClick={(_) =>
                  signedIn
                     ? execute({ auto_save_mode: true })
                     : setAutoSaveMode(true)
               }
               className={cn(`flex-1`, autoSaveMode && `bg-accent`)}
            >
               On
            </Button>
         </div>
      </SettingLayout>
   );
};

export default AutoSaveModeSection;
