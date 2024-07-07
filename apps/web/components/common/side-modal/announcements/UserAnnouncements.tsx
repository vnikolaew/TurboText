import { Separator } from "@repo/ui";
import { Megaphone } from "lucide-react";

export interface UserAnnouncementsProps {}

const UserAnnouncements = ({}: UserAnnouncementsProps) => {
   return (
      <div className={`mt-4 flex w-full flex-col items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <Megaphone />
            <span className={`text-xl`}>Announcements</span>
         </div>
         <div className={`flex h-[100px] w-full items-center justify-center`}>
            Nothing to show
         </div>
         <Separator orientation={`horizontal`} />
      </div>
   );
};

export default UserAnnouncements;
