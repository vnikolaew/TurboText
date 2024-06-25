"use client";
import React, { Fragment, useCallback, useState } from "react";
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
import { ChevronDown, ChevronUp, Crown, Tag } from "lucide-react";
import { cn } from "@lib/utils";
import moment from "moment";
import TypingRunInfoCell from "@app/account/_components/TypingRunInfoCell";
import { atom, useAtomValue } from "jotai";
import { useAtom } from "jotai/index";

export interface LatestRunsTableProps {
   runs: TypingRun[],
   tagsById: Record<string, TTag[]>
}

interface TableRun {
   wpm: any;
   consistency: any;
   accuracy: any;
   modeNormalized: string;
   tags: string;
   dateFormatted: React.JSX.Element;
   id: string;
   userId: string;
   time: number | null;
   wordCount: number | null;
   updatedAt: Date;
   createdAt: Date;
}

const tableSortAtom = atom<{ key: keyof TableRun; desc: boolean }>({
   key: `createdAt`,
   desc: true,
});

function mapRun(run: TypingRun, tagsById: Record<string, TTag[]>) {
   return {
      ...run,
      wpm: run.wpm.toFixed(2),
      consistency: run.consistency.toFixed(2),
      accuracy: run.accuracy.toFixed(2),
      modeNormalized: `${run.mode?.toLowerCase()} ${run.mode === `TIME` ? run.time : run.wordCount}`,
      tags: tagsById[run.metadata?.tags?.[0]]?.map(t => t.name)?.join(`, `) ?? `no tags`,
      dateFormatted: <div className={`flex flex-col items-start gap-0`}>
         <span>{moment(run.createdAt).format(`DD MMM YYYY`)}</span>
         <span>{moment(run.createdAt).format(`HH:mm`)}</span>
      </div>,
   } as const;
}

type RunNormalized = ReturnType<typeof mapRun>

function sortRuns(a: RunNormalized, b: RunNormalized, tableSort: { key: keyof TableRun; desc: boolean }) {
   const first = a[tableSort.key];
   const second = b[tableSort.key];

   if (typeof first === `string`) {
      return first.localeCompare(second) * (tableSort.desc ? -1 : 1);
   }

   return (first > second ? 1 : -1) * (tableSort.desc ? -1 : 1);
}


const LatestRunsTable = ({ runs, tagsById }: LatestRunsTableProps) => {
   const [pagingCursor, setPagingCursor] = useState(10);
   const tableSort = useAtomValue(tableSortAtom);

   const runsNormalized = runs?.slice(0, pagingCursor)
      .map(r => mapRun(r, tagsById))
      .sort((a, b) =>sortRuns(a,b, tableSort));

   console.log({ runsNormalized });

   return (
      <Fragment>
         <Table className={`!mb-12`}>
            <TableCaption className={`!text-background !font-semibold !text-base`}>
               A list of your latest typing runs.
            </TableCaption>
            <TableHeader className={`w-full`}>
               <TableRow className={`text-sm w-full !text-secondary`}>
                  <TableHead className="w-[100px]"></TableHead>
                  <SortableTableHead column={`wpm`} />
                  <TableHead className="text-left">raw</TableHead>
                  <SortableTableHead column={`accuracy`} />
                  <SortableTableHead column={`consistency`} />
                  <TableHead className="text-left">chars</TableHead>
                  <TableHead className="text-left">mode</TableHead>
                  <TableHead className="text-left">info</TableHead>
                  <TableHead className="text-left">tags</TableHead>
                  <SortableTableHead title={`date`} column={`createdAt`} />
               </TableRow>
            </TableHeader>
            <TableBody className={`w-full`}>
               {runsNormalized.map((run, index) => (
                  <TableRow className={`text-sm w-full !text-main`} key={run.id}>
                     <TableCell className="font-medium">
                        {run.metadata?.isPersonalBest && (
                           <Crown className={`fill-neutral-300`} size={20} />
                        )}
                     </TableCell>
                     <TableCell className={`text-left`}>{run.wpm}</TableCell>
                     <TableCell className={`text-left`}>-</TableCell>
                     <TableCell className="text-left">{`${run.accuracy}%`}</TableCell>
                     <TableCell className="text-left">{`${run.consistency}%`}</TableCell>
                     <TableCell className={`text-left`}></TableCell>
                     <TableCell className={`text-left`}>{run.modeNormalized?.toLowerCase()}</TableCell>
                     <TableCell className={`text-left`}>
                        <TypingRunInfoCell run={run} />
                     </TableCell>
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
         <div className={`flex items-center justify-center w-full`}>
            {runs.length > pagingCursor && (
               <Button onClick={_ => setPagingCursor(p => Math.min(p + 10, runs.length))}>
                  Load more
               </Button>
            )}
         </div>
      </Fragment>
   );
};

const SortableTableHead = ({ column, title }: { column: keyof TableRun, title?: string }) => {
   const [tableSort, setTableSort] = useAtom(tableSortAtom);

   const handleChangeSort = useCallback((key: keyof TableRun) => {
      setTableSort(ts => ({
         key,
         desc: ts.key === key ? !ts.desc : false,
      }));
   }, [tableSort]);

   return (
      <TableHead
         onClick={_ => handleChangeSort(column)}
         className="text-left cursor-pointer inline-flex items-center gap-1">
         {title ?? column}
         {tableSort.key === column && !tableSort.desc && (
            <ChevronUp size={18} />
         )}
         {tableSort.key === column && tableSort.desc && (
            <ChevronDown size={18} />
         )}
      </TableHead>
   );

};

export default LatestRunsTable;