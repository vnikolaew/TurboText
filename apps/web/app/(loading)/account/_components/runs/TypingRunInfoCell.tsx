"use client";
import { TypingRun } from "@repo/db";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { EyeOff, Globe, Star } from "lucide-react";
import React from "react";

export interface TypingRunInfoCellProps {
   run: TypingRun;
}

const TypingRunInfoCell = ({ run }: TypingRunInfoCellProps) => {
   return (
      <div className={`flex items-center gap-1`}>
         <IconWithTooltip text={run.metadata?.language ?? `english`}>
            <Globe size={20} />
         </IconWithTooltip>
         <IconWithTooltip
            text={run.metadata?.test_difficulty?.toLowerCase() ?? `normal`}
         >
            <Star size={20} />
         </IconWithTooltip>
         {run.blindMode && (
            <IconWithTooltip text={`blind mode`}>
               <EyeOff size={20} />
            </IconWithTooltip>
         )}
      </div>
   );
};

const IconWithTooltip = ({
   children,
   text,
}: {
   children: React.ReactNode;
   text: string;
}) => {
   return (
      <TooltipProvider delayDuration={100}>
         <Tooltip>
            <TooltipTrigger className={`cursor-pointer`} asChild>
               {children}
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
            >
               {text}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};
export default TypingRunInfoCell;
