"use client";
import { Button } from "@repo/ui";
import { UserRound } from "lucide-react";
import SettingLayout from "../SettingLayout";

export interface MoreAccountSettingsSectionProps {}

const MoreAccountSettingsSection = ({}: MoreAccountSettingsSectionProps) => {
   return (
      <SettingLayout className={`mt-8`}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <UserRound className={`text-main`} size={22} />
               <span className={`text-xl text-main`}>
                  More account settings
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               You can access more account settings (such as changing your name,
               password, resetting or deleting your account) in the danger zone
               section.
            </p>
         </div>
         <div className={`flex w-full flex-col items-start gap-2`}>
            <Button
               onClick={(_) => {
                  document
                     .getElementById(`danger`)
                     ?.scrollIntoView({ behavior: `smooth` });
               }}
               variant={`destructive`}
               className={`mt-8 w-full transition-colors duration-200 hover:!bg-neutral-300 hover:!text-black`}
            >
               Go to danger zone
            </Button>
         </div>
      </SettingLayout>
   );
};

export default MoreAccountSettingsSection;
