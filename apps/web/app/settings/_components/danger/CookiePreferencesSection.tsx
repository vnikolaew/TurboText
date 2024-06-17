"use client";
import React from "react";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { Button } from "@repo/ui";
import { Cookie } from "lucide-react";
import UpdateCookiePreferencesModal from "@app/settings/_components/danger/UpdateCookiePreferencesModal";

export interface CookiePreferencesSectionProps {
}

const CookiePreferencesSection = ({}: CookiePreferencesSectionProps) => {

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Cookie className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Update cookie preferences
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               If you changed your mind about which cookies you consent to, you can change your preferences here.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <UpdateCookiePreferencesModal>
               <Button className={`flex-1`}>Open</Button>
            </UpdateCookiePreferencesModal>
         </div>
      </SettingLayout>
   );
};

export default CookiePreferencesSection;