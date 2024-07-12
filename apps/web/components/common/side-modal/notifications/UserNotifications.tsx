"use client";
import {
   UserNotification as UN,
   globalUserNotificationsAtom,
} from "@atoms/user";
import LoadingButton from "@components/common/LoadingButton";
import {
   markAllNotificationsRead,
   saveUserNotification,
} from "@components/common/actions";
import { CHANEL_NAME } from "@providers";
import {
   ScrollArea,
   Separator,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { BookCheck, MessageCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import UserNotification from "./UserNotification";
import { match } from "ts-pattern";
import { useChannel } from "@hooks/websocket";

export interface UserNotificationsProps {
   notifications: UN[];
}

const UserNotifications = ({ notifications }: UserNotificationsProps) => {
   const session = useSession();
   const setNotifications = useSetAtom(globalUserNotificationsAtom);

   const { execute: markAllRead, isExecuting: marking } = useAction(
      markAllNotificationsRead,
      {
         onSuccess: (res) => {
            if (res.data?.success) {
               console.log(res.data!);
               setNotifications([]);
            }
         },
      },
   );
   const { execute: save, isExecuting } = useAction(saveUserNotification, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res.data!.notification);
         }
      },
   });
   const { clientId } = useChannel(
      CHANEL_NAME,
      async (message) => {
         console.log(`New notification: `, { message });

         // Apply message filter first:
         if (message.messageName === `challenge-user` && message.data.challengeeId === session.data?.user?.id) {

            // Save notification to database ...
            save({
               id: message.data.id ?? null,
               payload: message.data,
            });
            setNotifications((n) => [
               ...n,
               {
                  id: message.data.id ?? crypto.randomUUID(),
                  timestamp: new Date(message.timestamp!),
                  payload: message.data,
               },
            ]);
         }
      },
   );
   return (
      <div className={`mt-4 flex w-full flex-col items-start gap-2`}>
         <div className={`flex w-full items-center justify-between gap-4`}>
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
                           onClick={(_) => markAllRead({})}
                           className={`group !text-white hover:!bg-transparent`}
                           variant={`ghost`}
                           size={`icon`}
                        >
                           <BookCheck size={20} />
                        </LoadingButton>
                     </TooltipTrigger>
                     <TooltipContent
                        side={`top`}
                        className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
                     >
                        Mark all as read
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            )}
         </div>
         {match(notifications.length)
            .with(0, _ => (
               <div className={`flex h-[100px] w-full items-center justify-center`}>
                  Nothing to show
               </div>
            ))
            .otherwise(_ => (
               <ScrollArea
                  className={`my-4 flex h-[400px] w-full flex-col items-center justify-center gap-2 px-2 py-4`}
               >
                  <div
                     className={`flex h-full w-full flex-col items-center gap-6`}
                  >
                     {notifications.sort(
                        (a, b) => b.timestamp.getTime()
                           - a.timestamp.getTime(),
                     ).map(n => <UserNotification key={n.id} notification={n} />)}
                  </div>
               </ScrollArea>
            ))}
         <Separator orientation={`horizontal`} />
      </div>
   );
};

export default UserNotifications;
