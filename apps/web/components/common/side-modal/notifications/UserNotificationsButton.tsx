"use client";
import {
   globalUserAnnouncementsAtom,
   globalUserInboxAtom,
   globalUserNotificationsAtom,
   globalUserSheetAtom,
} from "@atoms/user";
import UserNotifications from "@components/common/side-modal/notifications/UserNotifications";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@repo/ui";
import { useAtom, useAtomValue } from "jotai";
import { Bell } from "lucide-react";
import { parseAsBoolean, useQueryState } from "nuqs";
import UserAnnouncements from "../announcements/UserAnnouncements";
import UserInbox from "../inbox/UserInbox";

export interface UserNotificationsButtonProps {}

const UserNotificationsButton = ({}: UserNotificationsButtonProps) => {
   const notifications = useAtomValue(globalUserNotificationsAtom);
   const [, setNotificationsQs] = useQueryState(
      `side`,
      parseAsBoolean.withDefault(false)
   );

   const inbox = useAtomValue(globalUserInboxAtom);
   const announcements = useAtomValue(globalUserAnnouncementsAtom);

   const [userSheetOpen, setUserSheetOpen] = useAtom(globalUserSheetAtom);

   return (
      <Sheet
         open={userSheetOpen}
         onOpenChange={(open) => {
            setNotificationsQs(open ? true : null).then(() =>
               setUserSheetOpen(open)
            );
         }}
      >
         <SheetTrigger>
            <div className={`relative`}>
               <Bell
                  className={`cursor-pointer fill-secondary text-secondary transition-colors duration-200 hover:!border-main hover:!fill-main hover:!text-main`}
                  size={20}
               />
               <span
                  className={`absolute -bottom-1 -right-1 rounded-full bg-black p-0 px-0.5 text-xs text-accent`}
               >
                  {notifications.length + inbox.length + announcements.length}
               </span>
            </div>
         </SheetTrigger>
         <SheetContent className={`z-[100] !min-w-[350px] !max-w-fit !p-8`}>
            <SheetHeader>
               <SheetTitle></SheetTitle>
               <SheetDescription className={`w-full p-4`}>
                  <UserInbox />
                  <UserAnnouncements />
                  <UserNotifications notifications={notifications} />
               </SheetDescription>
            </SheetHeader>
         </SheetContent>
      </Sheet>
   );
};

export default UserNotificationsButton;
