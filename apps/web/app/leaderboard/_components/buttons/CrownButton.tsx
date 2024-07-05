"use client";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { Crown } from "lucide-react";
import React from "react";

export interface CrownButtonProps {
   onClick?: () => void;
}

const CrownButton = ({ onClick }: CrownButtonProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={onClick}
                  className={`!bg-black !rounded-xl`} size={`icon`}>
                  <Crown size={18} className={`text-white`} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`bg-black text-white rounded-xl text-xs border-neutral-700 !px-4 !py-2`}>
               Go to top
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default CrownButton;