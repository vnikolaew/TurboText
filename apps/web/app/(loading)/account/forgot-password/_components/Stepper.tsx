"use client";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import React, { useMemo } from "react";
import ResetPassword from "@app/(loading)/account/forgot-password/_components/ResetPassword";
import EnterConfirmationCode from "@app/(loading)/account/forgot-password/_components/EnterConfirmationCode";
import CreateNewPassword from "@app/(loading)/account/forgot-password/_components/CreateNewPassword";
import ResetPasswordSuccess from "@app/(loading)/account/forgot-password/_components/ResetPasswordSuccess";
import { useAtom } from "jotai";
import { resetPasswordStepAtom } from "../_atoms";

export interface StepperProps {
}


const Stepper = ({ }: StepperProps) => {
   const [current, setCurrent] = useAtom(resetPasswordStepAtom)
   const stepComponents = useMemo(() =>
      [
         <ResetPassword />,
         <EnterConfirmationCode />,
         <CreateNewPassword />,
         <ResetPasswordSuccess />,
      ], [])

   return (
      <div className={`flex flex-col items-center gap-12`}>
         <div>
            {stepComponents.at(current - 1)}
         </div>
         <div className={`flex items-center gap-2`}>
            {Array.from({ length: 4 }).map((_, i) => (
               <div className={cn(`rounded-full w-3 h-3 !bg-secondary-bg transition-all duration-400`,
                  current === i + 1 && `!w-8 !bg-accent`)} key={i} />
            ))}
            <Button onClick={_ => setCurrent(Math.max(0, current - 1))}>Prev</Button>
            <Button onClick={_ => setCurrent(Math.min(4,  current + 1))}>Next</Button>
         </div>
      </div>
   );
};

export default Stepper;