"use client";
import { Button } from "@repo/ui";
import { CircleAlert } from "lucide-react";

export interface EmailNotVerifiedNotificationProps {}

const EmailNotVerifiedNotification =
   ({}: EmailNotVerifiedNotificationProps) => {
      async function handleSendEmailVerification() {
         await fetch(`/api/email/verification/send`, {
            method: `POST`,
            credentials: `include`,
            headers: {
               Accept: `application/json`,
            },
         })
            .then((res) => res.json())
            .then((res) => {
               if (res.ok) {
                  console.log({ res });
               }
            });
      }

      return (
         <div
            className={`mx-auto flex !w-full items-center justify-center gap-2 rounded-md !bg-secondary-bg/30 p-4 !px-12 !text-main`}
         >
            <span className={`inline-flex items-center gap-2`}>
               <CircleAlert className={`text-accent`} size={18} />
               Your account is not verified - {` `}
            </span>
            <Button
               onClick={handleSendEmailVerification}
               size={`sm`}
               variant={`default`}
               className={``}
            >
               Send a verification email again
            </Button>
         </div>
      );
   };

export default EmailNotVerifiedNotification;
