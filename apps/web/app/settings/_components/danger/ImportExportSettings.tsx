"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@repo/ui";
import { useAtom } from "jotai";
import { userConfigAtom } from "@atoms/user";
import { exportObjectAsJson } from "@lib/utils";
import ImportSettingsModal from "@app/settings/_components/danger/ImportSettingsModal";

export interface ImportExportSettingsProps {
}

const ImportExportSettings = ({}: ImportExportSettingsProps) => {
   const [userConfig, setUserConfig] = useAtom(userConfigAtom);

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <SlidersHorizontal className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Import / Export settings
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Import or export the settings as JSON.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <ImportSettingsModal>
               <Button className={`flex-1`}>Import</Button>
            </ImportSettingsModal>
            <Button onClick={_ => {
               exportObjectAsJson(userConfig, `user-configuration.json`);
            }} className={`flex-1`}>Export</Button>
         </div>
      </SettingLayout>
   );
};

export default ImportExportSettings;