"use client";
import React, { ReactNode } from "react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle } from "@repo/ui";
import { LINKS } from "@config/site";
import Link from "next/link";
import { BriefcaseBusiness, Bug, CircleHelp, Dot, MessageCircleMore, User } from "lucide-react";

export interface ContactUsModalProps {
}

const ContactUsModal = ({}: ContactUsModalProps) => {
   const [open, setOpen] = useQueryState(`contact`, parseAsBoolean.withDefault(false));

   return (
      <Dialog modal open={open} onOpenChange={async value => {
         if (!value) await setOpen(null);
         else await setOpen(true);
      }}>
         <DialogContent className={`!min-w-1/2 !w-1/2 !max-w-[800px] !bg-secondary-bg !border-neutral-700`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl !text-main`}>
                  Contact
               </DialogTitle>
            </DialogHeader>
            <p className={`!mt-4 !text-secondary`}>
               Feel free to send an email to {LINKS.supportEmail}. For business inquiries, email {` `}
               {LINKS.email} (the buttons below will open the default mail client).
            </p>
            <p className={`!mt-4 !text-secondary`}>
               Please <b className={`text-red-500`}>
               do not send
            </b> requests to delete account, update email, update name or clear personal bests - you
               can do that in the settings page.
            </p>
            <div className={`grid grid-cols-2 gap-4 w-full mt-4`}>
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Question]`} icon={<CircleHelp />}
                  text={`Question`} />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Feedback]`} icon={<MessageCircleMore />}
                  text={`Feedback`} />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Bug]`} icon={<Bug />}
                  text={`Bug Report`} />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Account]`} icon={<User />}
                  text={`Account Help`} />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Business]`} icon={<BriefcaseBusiness />}
                  text={`Business Inquiry`} />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Other]`}
                  icon={<ThreeDots />}
                  text={`Other`} />
            </div>
         </DialogContent>
      </Dialog>
   );
};

const ThreeDots = () => (
   <div className={`flex items-center gap-1 relative h-full min-w-8`}>
      <Dot className={`absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2`} size={32}></Dot>
      <Dot className={`absolute top-0 left-3 -translate-y-1/2 -translate-x-1/2`} size={32}></Dot>
      <Dot className={`absolute top-0 left-6 -translate-y-1/2 -translate-x-1/2`} size={32}></Dot>
   </div>
);


const EmailButton = ({ icon, text, href }: { icon: ReactNode, text: string, href: string }) => {
   return (
      <Button variant={`ghost`} asChild className={`rounded-full flex items-center justify-start gap-4 !py-6 !text-main`}>
         <Link className={`flex items-center justify-start gap-4`} href={href!}>
            {icon}
            <span className={`text-lg`}>{text}</span>
         </Link>
      </Button>
   );

};

export const WithContactModal = () => {
   return <ContactUsModal />;
};

export default ContactUsModal;