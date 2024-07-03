import { Separator } from "@repo/ui";
import { Inbox } from "lucide-react";
import React from "react";

export interface UserInboxProps {
}

const UserInbox = ({}: UserInboxProps) => {
   return (
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
   );
};

export default UserInbox;