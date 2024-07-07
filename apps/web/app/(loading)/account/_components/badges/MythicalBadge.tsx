import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Rocket } from "lucide-react";

export interface MythicalBadgeProps {}

const MythicalBadge = ({}: MythicalBadgeProps) => {
   return (
      <TooltipProvider delayDuration={0}>
         <Tooltip>
            <TooltipTrigger asChild>
               <span
                  className={`inline-flex animate-rainbow-bg !cursor-pointer items-center gap-2 text-nowrap !rounded-full bg-white px-2 py-1 text-xs !text-black shadow-md duration-200`}
               >
                  <Rocket size={14} />
                  <h3 className={`text-xs`}>Mythical</h3>
               </span>
            </TooltipTrigger>
            <TooltipContent
               side={`right`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 !text-xs text-white`}
            >
               Yes, I'm actually that fast.
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default MythicalBadge;
