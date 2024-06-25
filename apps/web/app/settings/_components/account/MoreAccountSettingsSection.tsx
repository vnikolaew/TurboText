"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { UserRound } from "lucide-react";
import { Button } from "@repo/ui";

export interface MoreAccountSettingsSectionProps {
}

const MoreAccountSettingsSection = ({}: MoreAccountSettingsSectionProps) => {
   return (
      <SettingLayout className={`mt-8`}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <UserRound className={`text-main`} size={22} />
               <span className={`text-xl text-main`}>More account settings</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               You can access more account settings (such as changing your name, password, resetting or deleting your
               account) in the danger zone section.
            </p>
         </div>
         <div className={`w-full flex flex-col items-start gap-2`}>
            <Button
               onClick={_ => {
                  document.getElementById(`danger`)?.scrollIntoView({ behavior: `smooth` });
               }}
               variant={`destructive`}
               className={`w-full hover:!text-black hover:!bg-neutral-300 transition-colors duration-200 mt-8`}>
               Go to danger zone
            </Button>
         </div>
      </SettingLayout>
   );
};

export default MoreAccountSettingsSection;