import { User } from "@repo/db";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { pick } from "lodash";
import { Flag } from "lucide-react";
import ReportUserModal from "./ReportUserModal";

export interface ReportUserButtonProps {
   user: User;
}

const ReportUserButton = ({ user }: ReportUserButtonProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
               <ReportUserModal user={pick(user, [`id`, `name`])}>
                  <Flag
                     size={28}
                     className={`cursor-pointer fill-secondary stroke-secondary transition-colors duration-200 hover:!fill-accent hover:!stroke-accent`}
                  />
               </ReportUserModal>
            </TooltipTrigger>
            <TooltipContent
               side={`left`}
               className={`rounded-xl border-none bg-secondary-bg !px-4 !py-2 text-sm text-main`}
            >
               Report user
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ReportUserButton;
