import { Separator } from "@repo/ui";
import { Inbox } from "lucide-react";

export interface UserInboxProps {}

const UserInbox = ({}: UserInboxProps) => {
   return (
      <div className={`flex w-full flex-col items-start gap-2`}>
         <div className={`flex items-center gap-2`}>
            <Inbox />
            <span className={`text-xl`}>Inbox</span>
         </div>
         <div className={`flex h-[100px] w-full items-center justify-center`}>
            Nothing to show
         </div>
         <Separator orientation={`horizontal`} />
      </div>
   );
};

export default UserInbox;
