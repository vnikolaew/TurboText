"use client";
import React from "react";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { Button } from "@repo/ui";
import { RotateCcw } from "lucide-react";

export interface ResetAccountSectionProps {
}

const ResetAccountSection = ({}: ResetAccountSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <RotateCcw className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Reset account
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Completely resets your account to a blank state.
            </p>
            <p className={`mt-2 text-base !text-red-700`}>
               You can't undo this action!
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <Button className={`flex-1 bg-red-700 text-black shadow-md`}>
               Reset account
            </Button>
         </div>
      </SettingLayout>
   );
};

export default ResetAccountSection;