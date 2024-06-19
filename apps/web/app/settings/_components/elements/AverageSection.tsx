"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { BarChart3 } from "lucide-react";
import { useAtom } from "jotai/index";
import { averageAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import SettingButton from "@app/settings/_components/common/SettingButton";

export interface AverageSectionProps {
}

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
];

const AverageSection = ({}: AverageSectionProps) => {
   const [average, setAverage] = useAtom(averageAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
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
               <BarChart3 className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Average
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Displays your average speed and/or accuracy over the last 10 tests.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            {AVERAGE.map(({ name, value }) => (
               <SettingButton
                  onClick={_ => execute({ elements_show_average: value })} active={average === value}
                  className={`flex-1`}>{name}</SettingButton>
            ))}
         </div>
      </SettingLayout>
   );
};

export default AverageSection;