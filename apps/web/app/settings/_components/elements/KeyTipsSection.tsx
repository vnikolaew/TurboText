"use client";
import SettingButton from "@app/settings/_components/common/SettingButton";
import { updateUserConfiguration } from "@app/settings/actions";
import { keyTipsAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { useAtom } from "jotai/index";
import { CircleHelp } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface KeyTipsSectionProps {}

const KeyTipsSection = ({}: KeyTipsSectionProps) => {
   const [keyTips, setKeyTips] = useAtom(keyTipsAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setKeyTips(res.data?.userConfig?.elements_show_key_tips);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <CircleHelp className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Key tips</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Shows the keybind tips at the bottom of the page.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ elements_show_key_tips: false })
                     : setKeyTips(false)
               }
               active={!keyTips}
               className={`flex-1`}
            >
               Hide
            </SettingButton>
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ elements_show_key_tips: true })
                     : setKeyTips(true)
               }
               active={keyTips}
               className={`flex-1`}
            >
               Show
            </SettingButton>
         </div>
      </SettingLayout>
   );
};

export default KeyTipsSection;
