"use client";
import { RunNormalized } from "@app/(loading)/account/_components/runs/LatestRunsTable";
import TypingRunInfoCell from "@app/(loading)/account/_components/runs/TypingRunInfoCell";
import { cn } from "@lib/utils";
import {
   TableCell,
   TableRow,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Crown, Tag } from "lucide-react";

export interface UserRunRowProps {
   run: RunNormalized;
}

const UserRunRow = ({ run }: UserRunRowProps) => {
   return (
      <TableRow className={`w-full text-sm !text-main`} key={run.id}>
         <TableCell className="!w-fit font-medium">
            {run.metadata?.isPersonalBest && (
               <Crown className={`fill-neutral-300`} size={20} />
            )}
         </TableCell>
         <TableCell className={`!w-fit text-left`}>{run.wpmString}</TableCell>
         <TableCell className={`!w-fit text-left`}>
            {run.rawWpmString}
         </TableCell>
         <TableCell className="!w-fit text-left">{`${run.accuracyString}%`}</TableCell>
         <TableCell className="!w-fit text-left">{`${run.consistencyString}%`}</TableCell>
         <TableCell className={`!w-fit text-left`}>
            {run.correct}/{run.incorrect}/{run.extra}/0
         </TableCell>
         <TableCell className={`!w-fit text-left`}>
            {run.modeNormalized?.toLowerCase()}
         </TableCell>
         <TableCell className={`text-left`}>
            <TypingRunInfoCell run={run} />
         </TableCell>
         <TableCell className="text-left">
            <TooltipProvider>
               <Tooltip>
                  <TooltipTrigger className={`cursor-pointer`} asChild>
                     <Tag
                        className={cn(
                           `fill-main stroke-transparent`,
                           run.tags?.length && `!fill-secondary`
                        )}
                        size={22}
                     />
                  </TooltipTrigger>
                  <TooltipContent
                     side={`top`}
                     className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
                  >
                     {run.tags}
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>
         </TableCell>
         <TableCell className="text-right">{run.dateFormatted}</TableCell>
      </TableRow>
   );
};

export default UserRunRow;
