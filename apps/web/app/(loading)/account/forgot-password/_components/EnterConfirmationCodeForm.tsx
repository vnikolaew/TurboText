"use client";
import React, { } from "react";
import { buttonVariants, InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui";
import { cn } from "@lib/utils";
import { useAction } from "next-safe-action/hooks";
import { resendEmailResetCode, submitEmailResetCode } from "@app/(loading)/account/forgot-password/actions";
import LoadingButton from "@components/common/LoadingButton";
import { useAtom, useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";
import { resetPasswordCodeAtom, resetPasswordEmailAtom, resetPasswordStepAtom } from "../_atoms";

export interface EnterConfirmationCodeFormProps {
}

const EnterConfirmationCodeForm = ({}: EnterConfirmationCodeFormProps) => {
   const [code, setCode] = useAtom(resetPasswordCodeAtom);
   const setStep = useSetAtom(resetPasswordStepAtom);
   const email =  useAtomValue(resetPasswordEmailAtom)
   const { isExecuting: resending, execute: resend } = useAction(resendEmailResetCode, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
         }
      },
   });
   const { isExecuting, execute } = useAction(submitEmailResetCode, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setStep(s => s + 1)
         }
      },
   });

   async function handleResendCode() {
      resend({});
   }

   async function handleSubmitCode() {
      execute({ code: Number(code), email});
   }

   return (
      <div className={`w-full mt-4 flex flex-col items-center gap-4 `}>
         <InputOTP
            maxLength={4}
            type={`email`} onChange={setCode} value={code}
            className={`mt-4 !w-[400px]`}>
            <InputOTPGroup>
               <InputOTPSlot index={0} />
               <InputOTPSlot index={1} />
               <InputOTPSlot index={2} />
               <InputOTPSlot index={3} />
            </InputOTPGroup>
         </InputOTP>
         <LoadingButton
            loading={isExecuting}
            loadingText={`Sending ...`}
            className={`!w-[400px] shadow-md mt-2 !bg-accent !text-foreground hover:!bg-opacity-70 transition-all duration-200 items-center gap-2`}
            onClick={handleSubmitCode!}>
            Continue
         </LoadingButton>
         <p className={`text-sm text-secondary`}>
            Didn't receive the email? <LoadingButton loading={resending} onClick={handleResendCode} variant={`link`}
                                                     loadingText={`Resending ...`}
                                                     className={cn(`underline decoration-accent !text-accent !mx-1 !px-0`, buttonVariants({ variant: `link` }))}>Click
            to resend</LoadingButton>
         </p>
      </div>
   );
};

export default EnterConfirmationCodeForm;