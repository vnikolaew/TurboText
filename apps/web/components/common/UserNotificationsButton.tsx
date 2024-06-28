"use client";
import { Separator, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@repo/ui";
import React from "react";
import { Bell, Inbox, Megaphone, MessageCircle } from "lucide-react";

export interface UserNotificationsButtonProps {
}

const UserNotificationsButton = ({}: UserNotificationsButtonProps) => {
   return (
      <Sheet>
         <SheetTrigger>
            <div>
               <Bell
                  className={`text-secondary fill-secondary  hover:!fill-main transition-colors duration-200 hover:!text-main cursor-pointer hover:!border-main`}
                  size={20} />
            </div>
         </SheetTrigger>
         <SheetContent>
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
                     <div className={`h-[100px] flex items-center justify-center w-full`}>
                        Nothing to show
                     </div>
                     <Separator orientation={`horizontal`} />
                  </div>

               </SheetDescription>
            </SheetHeader>
         </SheetContent>
      </Sheet>

   );
};

export default UserNotificationsButton;