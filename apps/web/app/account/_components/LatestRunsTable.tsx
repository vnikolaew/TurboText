"use client";
import React, { Fragment, useState } from "react";
import {
   Button,
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Tag as TTag, TypingRun } from "@repo/db";
import { Crown, Tag } from "lucide-react";
import { cn } from "@lib/utils";
import moment from "moment";
import TypingRunInfoCell from "@app/account/_components/TypingRunInfoCell";

export interface LatestRunsTableProps {
   runs: TypingRun[],
   tagsById: Record<string, TTag[]>
}

const LatestRunsTable = ({ runs, tagsById }: LatestRunsTableProps) => {
   const [pagingCursor, setPagingCursor] = useState(10);

   const runsNormalized = runs?.slice(0, pagingCursor).map((run, index) => {
      return {
         ...run,
         wpm: run.wpm.toFixed(2),
         consistency: run.consistency.toFixed(2),
         accuracy: run.accuracy.toFixed(2),
         modeNormalized: `${run.mode?.toLowerCase()} ${run.wordCount}`,
         tags: tagsById[run.metadata?.tags?.[0]]?.map(t => t.name)?.join(`, `) ?? `no tags`,
         dateFormatted: <div className={`flex flex-col items-start gap-0`}>
            <span>{moment(run.createdAt).format(`DD MMM YYYY`)}</span>
            <span>{moment(run.createdAt).format(`HH:mm`)}</span>
         </div>,
      };

   });
   return (
      <Fragment>
         <Table>
            <TableCaption className={``}>
               A list of your latest typing runs.
            </TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[100px]"></TableHead>
                  <TableHead className="text-left">wpm</TableHead>
                  <TableHead className="text-left">raw</TableHead>
                  <TableHead className="text-left">accuracy</TableHead>
                  <TableHead className="text-left">consistency</TableHead>
                  <TableHead className="text-left">chars</TableHead>
                  <TableHead className="text-left">mode</TableHead>
                  <TableHead className="text-left">info</TableHead>
                  <TableHead className="text-left">tags</TableHead>
                  <TableHead className="text-left">date</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {runsNormalized.map((run, index) => (
                  <TableRow className={`text-base`} key={run.id}>
                     <TableCell className="font-medium">
                        {run.metadata?.isPersonalBest && (
                           <Crown className={`fill-neutral-300`} size={20} />
                        )}
                     </TableCell>
                     <TableCell className={`text-left`}>{run.wpm}</TableCell>
                     <TableCell className={`text-left`}></TableCell>
                     <TableCell className="text-left">{run.accuracy}%</TableCell>
                     <TableCell className="font-medium text-left">{run.consistency}%</TableCell>
                     <TableCell className={`text-left`}></TableCell>
                     <TableCell className={`text-left`}>{run.modeNormalized?.toLowerCase()}</TableCell>
                     <TypingRunInfoCell run={run} />
                     <TableCell className="text-left">
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger className={`cursor-pointer`} asChild>
                                 <Tag className={cn(`fill-neutral-500 stroke-transparent`,
                                    run.tags?.length && `!fill-white`)} size={22} />
                              </TooltipTrigger>
                              <TooltipContent
                                 side={`top`}
                                 className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                                 {run.tags}
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                     </TableCell>
                     <TableCell className="text-left">
                        {run.dateFormatted}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         <div>
            {runs.length > pagingCursor && (
               <Button onClick={_ => setPagingCursor(p => p + 10)}>Load more</Button>
            )}
         </div>
      </Fragment>
   );
};

export default LatestRunsTable;