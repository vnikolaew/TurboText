"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { capsLockWarningAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { useAtom } from "jotai/index";
import { TriangleAlert } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";
import SettingButton from "../common/SettingButton";

export interface CapsLockWarningProps {}

const CapsLockWarning = ({}: CapsLockWarningProps) => {
   const [capsLockWarning, setCapsLockWarning] = useAtom(capsLockWarningAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            setCapsLockWarning(
               res.data?.userConfig?.elements_show_caps_lock_warning
            );
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <TriangleAlert className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Caps lock warning</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Displays a warning when caps lock is on.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ elements_show_caps_lock_warning: false })
                     : setCapsLockWarning(false)
               }
               active={!capsLockWarning}
               className={`flex-1`}
            >
               Hide
            </SettingButton>
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ elements_show_caps_lock_warning: true })
                     : setCapsLockWarning(true)
               }
               active={capsLockWarning}
               className={`flex-1`}
            >
               Show
            </SettingButton>
         </div>
      </SettingLayout>
   );
};

export default CapsLockWarning;
