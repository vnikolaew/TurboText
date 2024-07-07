"use client"
import React from "react";
import { ShieldEllipsis } from "lucide-react";
import CreateNewPasswordForm from "@app/(loading)/account/forgot-password/_components/CreateNewPasswordForm";

export interface CreateNewPasswordProps {
}

const CreateNewPassword = ({}: CreateNewPasswordProps) => {
   return (
      <div className={`flex flex-col w-[600px] items-center gap-2`}>
         <div className={`rounded-lg p-3 bg-secondary-bg/10`}>
            <ShieldEllipsis className={`text-accent`} size={32} />
         </div>
         <h1 className={`text-3xl`}> Create a new password</h1>
         <p className={`text-secondary text-base max-w-[500px] text-balance text-center`}>
            Please choose a password that hasn't been used before.
            Must be at least <b className={`!font-semibold`}>8</b> characters long.
         </p>
         <CreateNewPasswordForm />
      </div>
   );
};

export default CreateNewPassword;