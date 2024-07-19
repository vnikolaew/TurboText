"use client";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { Button } from "@repo/ui";
import { RotateCcw, TriangleAlert } from "lucide-react";

export interface ResetAccountSectionProps {}

const ResetAccountSection = ({}: ResetAccountSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <RotateCcw className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Reset account</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Completely resets your account to a blank state.
            </p>
            <p className={`mt-2 text-base !text-red-700 inline-flex items-center gap-2`}>
               <TriangleAlert size={14} /> You can't undo this action!
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <Button
               className={`flex-1 !bg-red-700 text-black shadow-md transition-colors duration-100 hover:!opacity-90`}
            >
               Reset account
            </Button>
         </div>
      </SettingLayout>
   );
};

export default ResetAccountSection;
