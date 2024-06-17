"use client";
import { Button } from "@repo/ui";
import React from "react";

export interface EmailNotVerifiedNotificationProps {
}

const EmailNotVerifiedNotification = ({}: EmailNotVerifiedNotificationProps) => {

   function handleSendEmailVerification(): void {

   }

   return (
      <div className={`w-full mx-auto flex items-center justify-center gap-2`}>
         <span>
          Your account is not verified - {` `}
         </span>
         <Button onClick={handleSendEmailVerification} size={`sm`} variant={`default`} className={``}>Send a
            verification email again</Button>
      </div>
   );
};

export default EmailNotVerifiedNotification;