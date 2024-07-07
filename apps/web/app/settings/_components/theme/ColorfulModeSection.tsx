"use client";
import SettingButton from "@app/settings/_components/common/SettingButton";
import { updateUserConfiguration } from "@app/settings/actions";
import { colorfulModeAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { useAtom } from "jotai/index";
import { PaintBucket } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface ColorfulModeSectionProps {}

const ColorfulModeSection = ({}: ColorfulModeSectionProps) => {
   const signedIn = useIsSignedIn();
   const [colorfulMode, setColorfulMode] = useAtom(colorfulModeAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setColorfulMode(res.data?.userConfig?.theme_colorful_mode);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <PaintBucket className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Colorful mode</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               When enabled, the test words will use the main color, instead of
               the text color, making the website more colorful.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ theme_colorful_mode: false })
                     : setColorfulMode(false)
               }
               active={!colorfulMode}
               className={`flex-1`}
            >
               Off
            </SettingButton>
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ theme_colorful_mode: true })
                     : setColorfulMode(true)
               }
               active={colorfulMode}
               className={`flex-1`}
            >
               On
            </SettingButton>
         </div>
      </SettingLayout>
   );
};

export default ColorfulModeSection;
