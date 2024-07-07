"use client";
import React from "react";
import { GripHorizontal } from "lucide-react";
import EnterConfirmationCodeForm from "@app/(loading)/account/forgot-password/_components/EnterConfirmationCodeForm";
import { useAtomValue } from "jotai";
import { resetPasswordEmailAtom } from "../_atoms";

export interface EnterConfirmationCodeProps {
}

const EnterConfirmationCode = ({ }: EnterConfirmationCodeProps) => {
   const email = useAtomValue(resetPasswordEmailAtom)

   return (
      <div className={`flex flex-col w-[600px] items-center gap-2`}>
         <div className={`rounded-lg p-3 bg-secondary-bg/10`}>
            <GripHorizontal className={`text-accent`} size={32} />
         </div>
         <h1 className={`text-3xl`}>Enter confirmation code</h1>
         <p className={`text-secondary text-base max-w-[500px] text-balance text-center`}>
            We send a code to <b className={`!font-semibold !text-foreground`}>{email}</b>
         </p>
         <EnterConfirmationCodeForm />
      </div>
   );
};

export default EnterConfirmationCode;