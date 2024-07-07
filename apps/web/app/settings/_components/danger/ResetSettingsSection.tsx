"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { userConfigAtom } from "@atoms/user";
import { TOASTS } from "@config/toasts";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { DEFAULT_USER_SETTINGS } from "@lib/consts";
import { Button, toast } from "@repo/ui";
import { useAtom } from "jotai/index";
import { RotateCcw } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface ResetSettingsSectionProps {}

const ResetSettingsSection = ({}: ResetSettingsSectionProps) => {
   const [userConfig, setUserConfig] = useAtom(userConfigAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setUserConfig(res.data?.userConfig);
            toast(TOASTS.SETTINGS_RESET_SUCCESS);
         }
      },
   });

   async function handleResetSettings() {
      console.log(`Resetting ...`);
      if (signedIn) {
         execute({ ...DEFAULT_USER_SETTINGS });
      } else {
         setUserConfig((c) => ({ ...c, ...DEFAULT_USER_SETTINGS }));
         toast(TOASTS.SETTINGS_RESET_SUCCESS);
      }
   }

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <RotateCcw className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Reset settings</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Resets settings to the default (but doesn't touch your tags).
            </p>
            <p className={`mt-2 text-base !text-red-700`}>
               You can't undo this action!
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <Button
               onClick={handleResetSettings}
               className={`flex-1 !bg-red-700 text-black shadow-md transition-colors duration-100 hover:!opacity-90`}
            >
               Reset settings
            </Button>
         </div>
      </SettingLayout>
   );
};

export default ResetSettingsSection;
