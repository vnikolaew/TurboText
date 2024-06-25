"use client";
import React from "react";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { Button } from "@repo/ui";
import { User } from "lucide-react";
import UpdateUsernameModal from "@app/settings/_components/danger/UpdateUsernameModal";
import { useSession } from "next-auth/react";

export interface UpdateUsernameSectionProps {
}

const UpdateUsernameSection = ({}: UpdateUsernameSectionProps) => {
   const session = useSession();

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <User className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Update username
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Change the name of your account. You can only do this once every 30 days.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center flex-wrap`}>
            <UpdateUsernameModal username={session?.data?.user?.name ?? ``}>
               <Button
                  className={`flex-1 !bg-red-700  text-black shadow-md hover:!opacity-90 transition-colors duration-100`}>
                  Update name
               </Button>
            </UpdateUsernameModal>
         </div>
      </SettingLayout>
   );
};

export default UpdateUsernameSection;