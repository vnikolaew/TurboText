import React from "react";
import { LockKeyhole } from "lucide-react";
import ResetPasswordForm from "@app/(loading)/account/forgot-password/_components/ResetPassordForm";

export interface ResetPasswordProps {
}

const ResetPassword = ({}: ResetPasswordProps) => {
   return (
      <div className={`flex flex-col w-[600px] items-center gap-2`}>
         <div className={`rounded-lg p-3 bg-secondary-bg/10`}>
            <LockKeyhole className={`text-accent`} size={32} />
         </div>
         <h1 className={`text-3xl`}>Reset your password</h1>
         <p className={`text-secondary text-base max-w-[500px] text-balance text-center line-clamp-3`}>
            Forgot your password? Enter your email address and we will send you a 4-digit code to reset your
            password.
         </p>
         <ResetPasswordForm />
      </div>
   );
};

export default ResetPassword;