"use client";
import SettingButton from "@app/settings/_components/common/SettingButton";
import { updateUserConfiguration } from "@app/settings/actions";
import { averageAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { useAtom } from "jotai/index";
import { BarChart3 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface AverageSectionProps {}

const AVERAGE = [
   {
      name: "Off",
      value: "OFF",
   },
   {
      name: "Speed",
      value: "SPEED",
   },
   {
      name: "Accuracy",
      value: "ACC",
   },
   {
      name: "Both",
      value: "BOTH",
   },
] as const;

const AverageSection = ({}: AverageSectionProps) => {
   const [average, setAverage] = useAtom(averageAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setAverage(res.data?.userConfig?.elements_show_average);
         }
      },
   });

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <BarChart3 className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Average</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Displays your average speed and/or accuracy over the last 10
               tests.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            {AVERAGE.map(({ name, value }) => (
               <SettingButton
                  key={name}
                  onClick={(_) =>
                     signedIn
                        ? execute({ elements_show_average: value })
                        : setAverage(value)
                  }
                  active={average === value}
                  className={`flex-1`}
               >
                  {name}
               </SettingButton>
            ))}
         </div>
      </SettingLayout>
   );
};

export default AverageSection;
