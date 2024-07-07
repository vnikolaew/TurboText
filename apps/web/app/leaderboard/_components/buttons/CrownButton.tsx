"use client";
import {
   Button,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Crown } from "lucide-react";

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
                  className={`!rounded-xl !bg-black`}
                  size={`icon`}
               >
                  <Crown size={18} className={`text-white`} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-xs text-white`}
            >
               Go to top
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default CrownButton;
