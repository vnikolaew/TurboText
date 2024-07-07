"use client";
import SettingLayout from "@app/settings/_components/SettingLayout";
import DeleteAccountModal from "@app/settings/_components/danger/DeleteAccountModal";
import { Button } from "@repo/ui";
import { Trash } from "lucide-react";

export interface DeleteAccountSectionProps {}

const DeleteAccountSection = ({}: DeleteAccountSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Trash className={`text-main`} size={20} />
               <span className={`text-xl text-main`}>Delete account</span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Deletes your account and all data connected to it.
            </p>
            <p className={`mt-2 text-base !text-red-700`}>
               You can't undo this action!
            </p>
         </div>
         <div
            className={`my-auto flex h-full w-full flex-wrap items-center justify-center gap-2`}
         >
            <DeleteAccountModal>
               <Button
                  className={`flex-1 !bg-red-700 text-black shadow-md transition-colors duration-100 hover:!opacity-90`}
               >
                  Delete account
               </Button>
            </DeleteAccountModal>
         </div>
      </SettingLayout>
   );
};

export default DeleteAccountSection;
