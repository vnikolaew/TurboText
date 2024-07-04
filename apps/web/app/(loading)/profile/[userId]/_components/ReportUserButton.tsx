import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import React from "react";
import { pick } from "lodash";
import { Flag } from "lucide-react";
import { User } from "@repo/db";
import ReportUserModal from "./ReportUserModal";

export interface ReportUserButtonProps {
   user: User;
}

const ReportUserButton = ({user}: ReportUserButtonProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
               <ReportUserModal user={pick(user, [`id`, `name`])}>
                  <Flag size={28}
                        className={`cursor-pointer stroke-secondary fill-secondary hover:!stroke-accent transition-colors duration-200 hover:!fill-accent`} />
               </ReportUserModal>
            </TooltipTrigger>
            <TooltipContent
               side={`left`}
               className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
               Report user
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ReportUserButton;