import {
   Badge,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Baby } from "lucide-react";

export interface OgAccountBadgeProps {}

const OgAccountBadge = ({}: OgAccountBadgeProps) => {
   return (
      <TooltipProvider delayDuration={0}>
         <Tooltip>
            <TooltipTrigger asChild>
               <span>
                  <Badge
                     className={`inline-flex cursor-pointer items-center gap-2 text-nowrap !bg-accent text-xs !text-black shadow-md`}
                     variant={`default`}
                  >
                     <Baby className={`!text-black`} size={14} />
                     <span className={`!text-xs`}>OG Account</span>
                  </Badge>
               </span>
            </TooltipTrigger>
            <TooltipContent
               side={`right`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 !text-xs text-white`}
            >
               First 1000 users on the site
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default OgAccountBadge;
