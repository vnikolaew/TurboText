"use client";
import { Input, toast } from "@repo/ui";
import React, { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { resetPassword } from "@app/(loading)/account/forgot-password/actions";
import LoadingButton from "@components/common/LoadingButton";
import { useAtomValue } from "jotai";
import { useSetAtom } from "jotai";
import { resetPasswordCodeAtom, resetPasswordEmailAtom, resetPasswordStepAtom } from "../_atoms";
import { TOASTS } from "@config/toasts";

export interface CreateNewPasswordFormProps {
}

interface CreateNewPasswordInput {
   newPassword: string;
   confirmPassword: string;
}

const CreateNewPasswordForm = ({}: CreateNewPasswordFormProps) => {
   const [values, setValues] = useState<CreateNewPasswordInput>({
      newPassword: ``, confirmPassword: ``,
   });
   const code = useAtomValue(resetPasswordCodeAtom);
   const email = useAtomValue(resetPasswordEmailAtom);
   const setStep = useSetAtom(resetPasswordStepAtom);
   const { isExecuting: isResetting, execute: reset } = useAction(resetPassword, {
      onSuccess: res => {
         if (res.data?.success) {
            setStep(s => s + 1);
            toast(TOASTS.PASSWORD_RESET_SUCCESS);
         }
      },
   });

   return (
      <div className={`w-full mt-8 flex flex-col items-center gap-4 `}>
         <Input type={`password`} onChange={e => setValues({ ...values, newPassword: e.target.value })}
                value={values.newPassword}
                className={`w-[400px]`} placeholder={`Set new password`} />
         <Input type={`password`} onChange={e => setValues({ ...values, confirmPassword: e.target.value })}
                value={values.confirmPassword}
                className={`w-[400px]`}
                placeholder={`Confirm new password`} />
         <LoadingButton
            onClick={_ => reset({ ...values, code: Number(code), email })} loadingText={`Resetting ...`}
            loading={isResetting}
            className={`w-[400px] !bg-accent !text-foreground rounded-md shadow-md items-center gap-2`}>Reset
            password</LoadingButton>
      </div>
   );
};

export default CreateNewPasswordForm;