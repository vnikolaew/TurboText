"use client";
import { Button } from "@repo/ui";
import React from "react";
import { CircleAlert } from "lucide-react";

export interface EmailNotVerifiedNotificationProps {
}

const EmailNotVerifiedNotification = ({}: EmailNotVerifiedNotificationProps) => {
   async function handleSendEmailVerification() {
      await fetch(`/api/email/verification/send`, {
         method: `POST`,
         credentials: `include`,
         headers: {
            Accept: `application/json`,
         },
      }).then(res => res.json()).then(res => {
         if (res.ok) {
            console.log({ res });
         }
      });
   }

   return (
      <div className={`!w-full mx-auto flex items-center justify-center gap-2 !text-main !bg-secondary-bg/30 p-4 rounded-md !px-12`}>
         <span className={`inline-flex items-center gap-2`}>
            <CircleAlert className={`text-accent`} size={18} />
            Your account is not verified - {` `}
         </span>
         <Button onClick={handleSendEmailVerification} size={`sm`} variant={`default`} className={``}>Send a
            verification email again</Button>
      </div>
   );
};

export default EmailNotVerifiedNotification;