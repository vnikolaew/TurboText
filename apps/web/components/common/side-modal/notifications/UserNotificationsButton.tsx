"use client";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from "@repo/ui";
import React from "react";
import { Bell } from "lucide-react";
import { useAtom } from "jotai/index";
import {
   globalUserAnnouncementsAtom,
   globalUserInboxAtom,
   globalUserNotificationsAtom,
   globalUserSheetAtom,
} from "@atoms/user";
import UserInbox from "../inbox/UserInbox";
import UserAnnouncements from "../announcements/UserAnnouncements";
import UserNotifications from "@components/common/side-modal/notifications/UserNotifications";
import { useAtomValue } from "jotai";

export interface UserNotificationsButtonProps {
}

const UserNotificationsButton = ({}: UserNotificationsButtonProps) => {
   const notifications = useAtomValue(globalUserNotificationsAtom);
   const inbox = useAtomValue(globalUserInboxAtom);
   const announcements = useAtomValue(globalUserAnnouncementsAtom);

   const [userSheetOpen, setUserSheetOpen] = useAtom(globalUserSheetAtom);

   return (
      <Sheet open={userSheetOpen} onOpenChange={open => {
         setUserSheetOpen(open);
      }}>
         <SheetTrigger>
            <div className={`relative`}>
               <Bell
                  className={`text-secondary fill-secondary  hover:!fill-main transition-colors duration-200 hover:!text-main cursor-pointer hover:!border-main`}
                  size={20} />
               <span className={`rounded-full bg-black p-0 text-xs absolute -bottom-1 -right-1 text-accent px-0.5`}>
                  {notifications.length + inbox.length + announcements.length}
               </span>
            </div>
         </SheetTrigger>
         <SheetContent className={`z-[100] !p-8 !max-w-fit !min-w-[350px]`}>
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