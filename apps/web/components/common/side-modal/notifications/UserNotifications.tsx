"use client"
import React from "react";
import { BookCheck, MessageCircle } from "lucide-react";
import { globalUserNotificationsAtom, UserNotification as UN } from "@atoms/user";
import { ScrollArea, Separator, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import LoadingButton from "@components/common/LoadingButton";
import { useAction } from "next-safe-action/hooks";
import { markAllNotificationsRead, saveUserNotification } from "@components/common/actions";
import { useChannel } from "ably/react";
import { CHANEL_NAME } from "@providers/AblyProvider";
import { useSetAtom } from "jotai/index";
import { useSession } from "next-auth/react";
import UserNotification from "./UserNotification";

export interface UserNotificationsProps {
   notifications: UN[];
}

const UserNotifications = ({ notifications }: UserNotificationsProps) => {
   const session = useSession();
   const setNotifications = useSetAtom(globalUserNotificationsAtom);

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
   const { channel } = useChannel(CHANEL_NAME, `challenge-user`, async message => {
      console.log(`New notification: `, { message });

      // Apply message filter first:
      if (message.data.challengeeId === session.data?.user?.id) {
         // Save notification to database ...
         save({
            id: message.id ?? null,
         });
            payload: message.data,

         setNotifications(n => [...n, {
            id: message.id ?? crypto.randomUUID(),
            timestamp: new Date(message.timestamp!),
            payload: message.data,
         }]);
      }
   });
   return (
      <div className={`flex flex-col w-full items-start gap-2 mt-4`}>
         <div className={`flex items-center justify-between gap-4 w-full`}>
            <div className={`flex items-center gap-2`}>
               <MessageCircle />
               <span className={`text-xl`}>Notifications</span>
            </div>
            {!!notifications.length && (
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger>
                        <LoadingButton
                           loading={marking}
                           loadingText={``}
                           onClick={_ => markAllRead({})}
                           className={`hover:!bg-transparent group !text-white`}
                           variant={`ghost`}
                           size={`icon`}>
                           <BookCheck size={20} />
                        </LoadingButton>
                     </TooltipTrigger>
                     <TooltipContent
                        side={`top`}
                        className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                        Mark all as read
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            )}
         </div>
         {notifications.length === 0 ? (
            <div className={`h-[100px] flex items-center justify-center w-full`}>
               Nothing to show
            </div>
         ) : (
            <ScrollArea
               className={`flex flex-col items-center justify-center w-full gap-2 my-4 h-[400px] py-4 px-2`}>
               <div className={`h-full w-full flex flex-col items-center gap-6`}>
                  {notifications
                     .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
                     .map((n, index) => (
                        <UserNotification key={n.id} notification={n} />
                     ))}
               </div>
            </ScrollArea>
         )}
         <Separator orientation={`horizontal`} />
      </div>
   );
};

export default UserNotifications;