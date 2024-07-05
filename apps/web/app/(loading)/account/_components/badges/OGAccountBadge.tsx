import { Badge, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { Baby } from "lucide-react";
import React from "react";

export interface OgAccountBadgeProps {
}

const OgAccountBadge = ({}: OgAccountBadgeProps) => {
   return (
      <TooltipProvider delayDuration={0}>
         <Tooltip>
            <TooltipTrigger asChild>
      <span>
         <Badge
            className={`!bg-accent !text-black inline-flex gap-2 items-center text-nowrap shadow-md text-xs cursor-pointer`}
            variant={`default`}>
            <Baby className={`!text-black`} size={14} />
            <span className={`!text-xs`}>
               OG Account
            </span>
         </Badge>
      </span>
            </TooltipTrigger>
            <TooltipContent
               side={`right`}
               className={`bg-black text-white rounded-xl !text-xs border-neutral-700 !px-4 !py-2`}>
               First 1000 users on the site
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default OgAccountBadge;