"use client";
import React from "react";
import { CircleCheckBig } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { magicSignIn } from "@app/(loading)/account/forgot-password/actions";
import LoadingButton from "@components/common/LoadingButton";
import { useAtomValue } from "jotai/index";
import { useRouter } from "next/navigation";
import { resetPasswordEmailAtom } from "../_atoms";

export interface ResetPasswordSuccessProps {
}

const ResetPasswordSuccess = ({ }: ResetPasswordSuccessProps) => {
   const email = useAtomValue(resetPasswordEmailAtom)
   const router = useRouter()
   const { execute: signIn, isExecuting } = useAction(magicSignIn, {
      onSuccess: res => {
         if (res.data?.success) {
            window.location.href = `/`
         }
      },
   });

   async function handleMagicSignIn() {
      signIn({ email });
   }

   return (
      <div className={`flex flex-col w-[600px] items-center gap-2`}>
         <div className={`rounded-lg p-3 bg-secondary-bg/10`}>
            <CircleCheckBig className={`text-accent`} size={32} />
         </div>
         <h1 className={`text-3xl`}>Password reset!</h1>
         <p className={`text-secondary text-base max-w-[500px] text-balance text-center`}>
            Your password has been successfully reset.
            Click below to log in magically.
         </p>
         <LoadingButton
            loadingText={`Logging in ...`} loading={isExecuting} onClick={handleMagicSignIn}
            className={`w-full rounded-md shadow-md !bg-accent !text-foreground items-center gap-2 mt-8`}>Continue</LoadingButton>
      </div>
   );
};

export default ResetPasswordSuccess;