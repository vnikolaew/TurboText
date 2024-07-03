import { Separator } from "@repo/ui";
import { Megaphone } from "lucide-react";
import React from "react";

export interface UserAnnouncementsProps {
}

const UserAnnouncements = ({}: UserAnnouncementsProps) => {
   return (
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
   );
};

export default UserAnnouncements;