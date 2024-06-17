"use client";
import React from "react";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { Button } from "@repo/ui";
import { Trash } from "lucide-react";
import DeleteAccountModal from "@app/settings/_components/danger/DeleteAccountModal";

export interface DeleteAccountSectionProps {
}

const DeleteAccountSection = ({}: DeleteAccountSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Trash className={`text-neutral-500 `} size={20} />
               <span className={`text-xl text-neutral-500`}>
                  Delete account
               </span>
            </h2>
            <p className={`mt-2 text-base`}>
               Deletes your account and all data connected to it.
            </p>
            <p className={`mt-2 text-base !text-red-700`}>
               You can't undo this action!
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <DeleteAccountModal>
               <Button className={`flex-1 bg-red-700 text-black shadow-md`}>
                  Delete account
               </Button>
            </DeleteAccountModal>
         </div>
      </SettingLayout>
   );
};

export default DeleteAccountSection;