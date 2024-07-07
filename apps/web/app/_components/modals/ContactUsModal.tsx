"use client";
import { LINKS } from "@config/site";
import {
   Button,
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@repo/ui";
import {
   BriefcaseBusiness,
   Bug,
   CircleHelp,
   Dot,
   MessageCircleMore,
   User,
} from "lucide-react";
import Link from "next/link";
import { parseAsBoolean, useQueryState } from "nuqs";
import { ReactNode } from "react";

export interface ContactUsModalProps {}

const ContactUsModal = ({}: ContactUsModalProps) => {
   const [open, setOpen] = useQueryState(
      `contact`,
      parseAsBoolean.withDefault(false)
   );

   return (
      <Dialog
         modal
         open={open}
         onOpenChange={async (value) => {
            if (!value) await setOpen(null);
            else await setOpen(true);
         }}
      >
         <DialogContent
            className={`!min-w-1/2 !w-1/2 !max-w-[800px] !border-neutral-700 !bg-secondary-bg !p-8`}
         >
            <DialogHeader>
               <DialogTitle className={`text-2xl !text-main`}>
                  Contact
               </DialogTitle>
            </DialogHeader>
            <p className={`!mt-4 !text-secondary`}>
               Feel free to send an email to{" "}
               <Link
                  className={`text-accent`}
                  href={`mailto:${LINKS.supportEmail}`}
               >
                  {LINKS.supportEmail}
               </Link>
               . For business inquiries, email {` `}{" "}
               <Link className={`text-accent`} href={`mailto:${LINKS.email}`}>
                  {LINKS.email}
               </Link>
               {` `} (the buttons below will open the default mail client).
            </p>
            <p className={`!mt-4 !text-secondary`}>
               Please <b className={`text-destructive`}>do not send</b> requests
               to delete account, update email, update name or clear personal
               bests - you can do that in the settings page.
            </p>
            <div className={`mt-4 grid w-full grid-cols-2 gap-4`}>
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Question]`}
                  icon={<CircleHelp />}
                  text={`Question`}
               />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Feedback]`}
                  icon={<MessageCircleMore />}
                  text={`Feedback`}
               />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Bug]`}
                  icon={<Bug />}
                  text={`Bug Report`}
               />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Account]`}
                  icon={<User />}
                  text={`Account Help`}
               />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Business]`}
                  icon={<BriefcaseBusiness />}
                  text={`Business Inquiry`}
               />
               <EmailButton
                  href={`mailto:${LINKS.supportEmail}?subject=[Other]`}
                  icon={<ThreeDots />}
                  text={`Other`}
               />
            </div>
         </DialogContent>
      </Dialog>
   );
};

const ThreeDots = () => (
   <div className={`relative flex h-full min-w-8 items-center gap-1`}>
      <Dot
         className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2`}
         size={32}
      ></Dot>
      <Dot
         className={`absolute left-3 top-0 -translate-x-1/2 -translate-y-1/2`}
         size={32}
      ></Dot>
      <Dot
         className={`absolute left-6 top-0 -translate-x-1/2 -translate-y-1/2`}
         size={32}
      ></Dot>
   </div>
);

const EmailButton = ({
   icon,
   text,
   href,
}: {
   icon: ReactNode;
   text: string;
   href: string;
}) => {
   return (
      <Button
         variant={`ghost`}
         asChild
         className={`flex items-center justify-start gap-4 rounded-full !py-6 !text-main`}
      >
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
