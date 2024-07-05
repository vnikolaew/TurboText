"use client";
import React from "react";
import { RefreshCw } from "lucide-react";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { useRouter } from "next/navigation";

export interface RefreshButtonProps {
}

const RefreshButton = ({}: RefreshButtonProps) => {
   const router = useRouter();
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button onClick={_ => router.refresh()} variant={`ghost`} className={`!rounded-xl`} size={`icon`}>
                  <RefreshCw size={18} className={`text-white`} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`bg-black text-white rounded-xl text-xs border-neutral-700 !px-4 !py-2`}>
               Refresh
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default RefreshButton;