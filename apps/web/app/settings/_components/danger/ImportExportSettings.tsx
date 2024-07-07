"use client";
import ImportSettingsModal from "@app/settings/_components/danger/ImportSettingsModal";
import { userConfigAtom } from "@atoms/user";
import { exportObjectAsJson } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai";
import { SlidersHorizontal } from "lucide-react";
import SettingLayout from "../SettingLayout";

export interface ImportExportSettingsProps {}

const ImportExportSettings = ({}: ImportExportSettingsProps) => {
   const [userConfig, setUserConfig] = useAtom(userConfigAtom);

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <SlidersHorizontal className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>
                  Import / Export settings
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Import or export the settings as JSON.
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <ImportSettingsModal>
               <Button className={`flex-1`}>Import</Button>
            </ImportSettingsModal>
            <Button
               onClick={(_) => {
                  exportObjectAsJson(userConfig, `user-configuration.json`);
               }}
               className={`flex-1`}
            >
               Export
            </Button>
         </div>
      </SettingLayout>
   );
};

export default ImportExportSettings;
