"use client";
import {
   Button,
   Separator,
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@repo/ui";
import React from "react";
import { Bell, Check, Inbox, Megaphone, MessageCircle } from "lucide-react";
import { useAtom } from "jotai/index";
import { globalUserNotificationsAtom } from "@atoms/user";
import { useChannel } from "ably/react";
import { CHANEL_NAME } from "@providers/AblyProvider";
import { EventType } from "@app/profile/[userId]/_components/UserChallengesRecord";
import { useSession } from "next-auth/react";
import UserNotification from "@components/common/UserNotification";
import { useAction } from "next-safe-action/hooks";
import { markAllNotificationsRead, saveUserNotification } from "@components/common/actions";
import LoadingButton from "@components/common/LoadingButton";

export interface UserNotificationsButtonProps {
}

const UserNotificationsButton = ({}: UserNotificationsButtonProps) => {
   const [notifications, setNotifications] = useAtom(globalUserNotificationsAtom);
   const session = useSession();
   const { execute: markAllRead, isExecuting: marking } = useAction(markAllNotificationsRead, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res.data!);
            setNotifications([]);
         }
      },
   });
   const { execute: save, isExecuting } = useAction(saveUserNotification, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res.data!.notification);
         }
      },
   });
   const { channel } = useChannel(CHANEL_NAME, EventType.ChallengeUser, async message => {
      console.log(`New notification: `, { message });

      // Apply message filter first:
      if (message.data.challengeeId === session.data?.user?.id) {
         // Save notification to database ...
         save({
            id: message.id ?? null,
            payload: message.data,
         });

         setNotifications(n => [...n, {
            id: message.id ?? crypto.randomUUID(),
            timestamp: new Date(message.timestamp!),
            payload: message.data,
         }]);
      }
   });

   return (
      <Sheet onOpenChange={open => {
         if (open && notifications.length) {
            console.log(`Opening sheet ...`);
         }
      }}>
         <SheetTrigger>
            <div className={`relative`}>
               <Bell
                  className={`text-secondary fill-secondary  hover:!fill-main transition-colors duration-200 hover:!text-main cursor-pointer hover:!border-main`}
                  size={20} />
               <span className={`rounded-full bg-black p-0 text-xs absolute -bottom-1 -right-1 text-accent px-0.5`}>
                  {notifications.length}
               </span>
            </div>
         </SheetTrigger>
         <SheetContent className={`z-[100] !p-8 !max-w-fit !min-w-[350px]`}>
            <SheetHeader>
               <SheetTitle></SheetTitle>
               <SheetDescription className={`w-full p-4`}>
                  <div className={`flex flex-col w-full items-start gap-2`}>
                     <div className={`flex items-center gap-2`}>
                        <Inbox />
                        <span className={`text-xl`}>Inbox</span>
                     </div>
                     <div className={`h-[100px] flex items-center justify-center w-full   `}>
                        Nothing to show
                     </div>
                     <Separator orientation={`horizontal`} />
                  </div>
                  <div className={`flex flex-col w-full items-start gap-2 mt-4`}>
                     <div className={`flex items-center gap-2`}>
                        <Megaphone />
                        <span className={`text-xl`}>Announcements</span>
                     </div>
                     <div className={`h-[100px] flex items-center justify-center w-full`}>
                        Nothing to show
                     </div>
                     <Separator orientation={`horizontal`} />
                  </div>
                  <div className={`flex flex-col w-full items-start gap-2 mt-4`}>
                     <div className={`flex items-center gap-2`}>
                        <MessageCircle />
                        <span className={`text-xl`}>Notifications</span>
                     </div>
                     {notifications.length === 0 ? (
                        <div className={`h-[100px] flex items-center justify-center w-full`}>
                           Nothing to show
                        </div>
                     ) : (
                        <div className={`flex flex-col items-center justify-center w-full gap-2 my-4`}>
                           {notifications.map((n, index) => (
                              <UserNotification key={n.id} notification={n} />
                           ))}
                        </div>
                     )}
                     <Separator orientation={`horizontal`} />
                  </div>

               </SheetDescription>
            </SheetHeader>
            <div className={`flex flex-col items-center justify-center`}>
               <LoadingButton className={`items-center gap-2`} loadingText={`Marking ...`} loading={isExecuting} onClick={_ => markAllRead({})}>
                  <Check size={14} />
                  Mark all as read
               </LoadingButton>
            </div>
         </SheetContent>
      </Sheet>

   );
};

export default UserNotificationsButton;