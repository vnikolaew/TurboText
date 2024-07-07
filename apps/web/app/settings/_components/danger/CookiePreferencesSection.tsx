"use client";
import SettingLayout from "@app/settings/_components/SettingLayout";
import UpdateCookiePreferencesModal from "@app/settings/_components/danger/UpdateCookiePreferencesModal";
import { Button } from "@repo/ui";
import { Cookie } from "lucide-react";

export interface CookiePreferencesSectionProps {}

const CookiePreferencesSection = ({}: CookiePreferencesSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Cookie className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>
                  Update cookie preferences
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               If you changed your mind about which cookies you consent to, you
               can change your preferences here.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <UpdateCookiePreferencesModal>
               <Button className={`flex-1`}>Open</Button>
            </UpdateCookiePreferencesModal>
         </div>
      </SettingLayout>
   );
};

export default CookiePreferencesSection;
