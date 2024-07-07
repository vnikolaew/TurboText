"use client";
import {
   Button,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

export interface RefreshButtonProps {}

const RefreshButton = ({}: RefreshButtonProps) => {
   const router = useRouter();
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={(_) => router.refresh()}
                  variant={`ghost`}
                  className={`!rounded-xl`}
                  size={`icon`}
               >
                  <RefreshCw size={18} className={`text-white`} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-xs text-white`}
            >
               Refresh
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default RefreshButton;
