"use client";
import React from "react";
import { RunNormalized } from "@app/account/_components/runs/LatestRunsTable";
import { TableCell, TableRow, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { Crown, Tag } from "lucide-react";
import TypingRunInfoCell from "@app/account/_components/runs/TypingRunInfoCell";
import { cn } from "@lib/utils";

export interface UserRunRowProps {
   run: RunNormalized;
}

const UserRunRow = ({ run }: UserRunRowProps) => {
   return (
      <TableRow className={`text-sm w-full !text-main`} key={run.id}>
         <TableCell className="font-medium !w-fit">
            {run.metadata?.isPersonalBest && (
               <Crown className={`fill-neutral-300`} size={20} />
            )}
         </TableCell>
         <TableCell className={`text-left !w-fit`}>{run.wpmString}</TableCell>
         <TableCell className={`text-left !w-fit`}>{run.rawWpmString}</TableCell>
         <TableCell className="text-left !w-fit">{`${run.accuracyString}%`}</TableCell>
         <TableCell className="text-left !w-fit">{`${run.consistencyString}%`}</TableCell>
         <TableCell className={`text-left !w-fit`}>{run.correct}/{run.incorrect}/{run.extra}/0</TableCell>
         <TableCell className={`text-left !w-fit`}>{run.modeNormalized?.toLowerCase()}</TableCell>
         <TableCell className={`text-left`}>
            <TypingRunInfoCell run={run} />
         </TableCell>
         <TableCell className="text-left">
            <TooltipProvider>
               <Tooltip>
                  <TooltipTrigger className={`cursor-pointer`} asChild>
                     <Tag className={cn(`fill-main stroke-transparent`,
                        run.tags?.length && `!fill-secondary`)} size={22} />
                  </TooltipTrigger>
                  <TooltipContent
                     side={`top`}
                     className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                     {run.tags}
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>
         </TableCell>
         <TableCell className="text-right">
            {run.dateFormatted}
         </TableCell>
      </TableRow>
   );
};

export default UserRunRow;