"use client";
import SettingButton from "@app/settings/_components/common/SettingButton";
import { updateUserConfiguration } from "@app/settings/actions";
import { flipColorsAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { useAtom } from "jotai/index";
import { Circle } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface FlipTestColorsProps {}

const FlipTestColorsSection = ({}: FlipTestColorsProps) => {
   const [flipColors, setFlipColors] = useAtom(flipColorsAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setFlipColors(res.data?.userConfig?.theme_flip_colors);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Circle className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Flip test colors</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               By default, typed text is brighter than the future text. When
               enabled, the colors will be flipped and the future text will be
               brighter than the already typed text.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ theme_flip_colors: false })
                     : setFlipColors(false)
               }
               className={`flex-1`}
               active={!flipColors}
            >
               Off
            </SettingButton>
            <SettingButton
               onClick={(_) =>
                  signedIn
                     ? execute({ theme_flip_colors: true })
                     : setFlipColors(true)
               }
               className={`flex-1`}
               active={flipColors}
            >
               On
            </SettingButton>
         </div>
      </SettingLayout>
   );
};

export default FlipTestColorsSection;
