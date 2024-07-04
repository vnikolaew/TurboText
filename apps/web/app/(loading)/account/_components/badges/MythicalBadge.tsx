import { Rocket } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";

export interface MythicalBadgeProps {
}

const MythicalBadge = ({}: MythicalBadgeProps) => {
   return (
      <TooltipProvider delayDuration={0}>
         <Tooltip>
            <TooltipTrigger asChild>
      <span
         className={`!text-black bg-white inline-flex gap-2 items-center text-nowrap shadow-md text-xs duration-200 animate-rainbow-bg !rounded-full px-2 py-1 !cursor-pointer`}>
         <Rocket size={14} />
         <h3 className={`text-xs`}>
            Mythical
         </h3>
      </span>
            </TooltipTrigger>
            <TooltipContent
               side={`right`}
               className={`bg-black text-white rounded-xl !text-xs border-neutral-700 !px-4 !py-2`}>
               Yes, I'm actually that fast.
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default MythicalBadge;