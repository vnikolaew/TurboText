"use client";
import { TypedLetterFlags, TypedLetterInfo } from "@atoms/consts";
import { Tag as TTag, TypingRun } from "@repo/db";
import {
   Button,
   ScrollArea,
   Table,
   TableBody,
   TableCaption,
   TableHead,
   TableHeader,
   TableRow,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { useAtomValue } from "jotai";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { tableSortAtom } from "../_atoms";
import { SortableTableHead } from "../common/SortableTableHead";
import UserRunRow from "./UserRunRow";

export interface LatestRunsTableProps {
   runs: TypingRun[];
   tagsById: Record<string, TTag[]>;
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

function mapRun(run: TypingRun, tagsById: Record<string, TTag[]>) {
   return {
      ...run,
      correct: (run.typedLetters as TypedLetterInfo[]).filter((t) => t.correct)
         .length,
      incorrect: (run.typedLetters as TypedLetterInfo[]).filter(
         (t) => t.correct === false
      ).length,
      extra: (run.typedLetters as TypedLetterInfo[]).filter(
         (t) => t.flags === TypedLetterFlags.EXTRA
      ).length,
      blindMode: run.metadata?.blind_mode ?? false,
      wpm: run.wpm,
      wpmString: run.wpm.toFixed(2),
      rawWpm: run.metadata?.rawWpm,
      rawWpmString: run.metadata?.rawWpm?.toFixed(2),
      consistency: run.consistency,
      consistencyString: run.consistency.toFixed(2),
      accuracy: run.accuracy,
      accuracyString: run.accuracy.toFixed(2),
      modeNormalized: `${run.mode?.toLowerCase()} ${run.mode === `TIME` ? run.time : run.wordCount}`,
      tags:
         tagsById[run.metadata?.tags?.[0]]?.map((t) => t.name)?.join(`, `) ??
         `no tags`,
      dateFormatted: (
         <div className={`flex flex-col items-start gap-0`}>
            <span>{moment(run.createdAt).format(`DD MMM YYYY`)}</span>
            <span className={`text-secondary`}>
               {moment(run.createdAt).format(`HH:mm`)}
            </span>
         </div>
      ),
   } as const;
}

export type RunNormalized = ReturnType<typeof mapRun>;

export function sortRuns<T>(
   a: T,
   b: T,
   tableSort: { key: keyof T; desc: boolean }
) {
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

   const runsNormalized = runs
      ?.slice(0, pagingCursor)
      .map((r) => mapRun(r, tagsById))
      .sort((a, b) => sortRuns(a, b, tableSort));

   return (
      <Fragment>
         <ScrollArea className={``}>
            <Table className={`!mb-12 !overflow-y-scroll`}>
               <TableCaption
                  className={`!text-sm !font-semibold !text-secondary`}
               >
                  A list of your latest typing runs.
               </TableCaption>
               <TableHeader className={`w-full`}>
                  <TableRow className={`w-full text-sm !text-secondary`}>
                     <TableHead className="w-[100px]"></TableHead>
                     <SortableTableHead sort={tableSortAtom} column={`wpm`} />
                     <SortableTableHead
                        sort={tableSortAtom}
                        title={`raw`}
                        column={`rawWpm`}
                     />
                     <SortableTableHead
                        sort={tableSortAtom}
                        column={`accuracy`}
                     />
                     <SortableTableHead
                        sort={tableSortAtom}
                        column={`consistency`}
                     />
                     <TableHead className="text-left">
                        <TooltipProvider>
                           <Tooltip>
                              <TooltipTrigger asChild>
                                 <span className={`cursor-pointer`}>chars</span>
                              </TooltipTrigger>
                              <TooltipContent
                                 side={`top`}
                                 className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
                              >
                                 correct/incorrect/extra/missed
                              </TooltipContent>
                           </Tooltip>
                        </TooltipProvider>
                     </TableHead>
                     <TableHead className="text-left">mode</TableHead>
                     <TableHead className="text-left">info</TableHead>
                     <TableHead className="text-left">tags</TableHead>
                     <SortableTableHead
                        sort={tableSortAtom}
                        title={`date`}
                        column={`createdAt`}
                     />
                  </TableRow>
               </TableHeader>
               <TableBody
                  className={`max-h-[1000px] w-full !overflow-y-scroll`}
               >
                  {runsNormalized.map((run, index) => (
                     <UserRunRow key={run.id} run={run} />
                  ))}
               </TableBody>
            </Table>
         </ScrollArea>
         <div className={`flex w-full items-center justify-center`}>
            {runs.length > pagingCursor && (
               <Button
                  onClick={(_) =>
                     setPagingCursor((p) => Math.min(p + 10, runs.length))
                  }
               >
                  Load more
               </Button>
            )}
         </div>
      </Fragment>
   );
};

export default LatestRunsTable;
