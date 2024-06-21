"use client";

import { cn } from "@lib/utils";
import { Badge, ScrollArea, Table, TableBody, TableCaption, TableCell, TableHeader, TableRow, UserAvatar } from "@repo/ui";
import { Baby, Crown } from "lucide-react";
import moment from "moment";
import React from "react";
import { useSession } from "next-auth/react";

export interface LeaderboardRow {
   position: number;
   user: {
      id: string;
      image?: string;
      level: number;
      name: string;
      og: boolean
   };
   wpm: number;
   accuracy: number;
   consistency: number;
   raw: number;
   date: number;
   metadata?: Record<string, any>;
}

export interface LeaderboardTableProps {
   caption?: string;
   rows: LeaderboardRow[];
   showWarning: boolean;
}

export const LeaderboardTable = ({ caption, rows, showWarning }: LeaderboardTableProps) => {
   return (
      <div className={`flex flex-col items-start mb-12`}>
         <ScrollArea className={`h-[600px] w-full relative`}>
            <div className={`grid w-full grid-cols-13 sticky top-0 !py-1 !z-[100] backdrop-blur`}>
               <div className={`col-span-1 text-neutral-500 text-center`}>#</div>
               <div className={`col-span-6 text-left`}>name</div>
               <div className={`col-span-2 text-right flex flex-col text-sm`}>
                     <span className={`text-neutral-400 `}>
                      wpm
                     </span>
                  <span className={`text-neutral-500`}>
                        accuracy
                      </span>
               </div>
               <div className={`col-span-2 text-right flex flex-col text-sm`}>
                     <span className={`text-neutral-400`}>
                     raw
                     </span>
                  <span className={`text-neutral-500`}>
                        consistency
                      </span>
               </div>
               <div className={`col-span-2 text-right flex items-center justify-end px-4 text-neutral-400 text-xs`}>
                  date
               </div>
            </div>
            <Table className={`min-h-[600px]`}>
               <TableCaption>{caption}</TableCaption>
               <TableHeader>
               </TableHeader>
               <TableBody>
                  {!rows?.length && (
                     <TableRow className={`hover:!bg-transparent`}>
                        <TableCell className={`w-full text-center`}>
                           There are no runs to show yet.
                        </TableCell>
                     </TableRow>
                  )}
                  {rows?.map((row, index) => <LeaderboardTableRow key={index} row={row} index={index} />)}
               </TableBody>
            </Table>
         </ScrollArea>
         {showWarning && (
            <div className={`w-full text-center text-amber-600 text-sm mt-2`}>
               Your account must have 2 hours typed to be placed on the leaderboard.
            </div>
         )}
      </div>

   );
};

const LeaderboardTableRow = ({ row, index }: { row: LeaderboardRow, index: number }) => {
   const session = useSession();

   return (
      <TableRow key={index} className={cn(`grid grid-cols-13 w-full `,
         index % 2 === 1 && `bg-black`)}>
         <TableCell
            className="font-medium text-center inline-flex justify-center items-center col-span-1">
            {row.position === 1 ? (
               <Crown className={`stroke-neutral-300 fill-neutral-300`} size={18} />
            ) : row.position}
         </TableCell>
         <TableCell className={`inline-flex items-center gap-2 col-span-6`}>
            <div className={`relative`}>
               <UserAvatar className={`w-8 h-8 `} imageSrc={row?.user.image} />
               <span className={`rounded-full bg-black p-0 text-xs absolute bottom-0 right-0 text-amber-500 px-0.5`}>
                  {row.user.level}
               </span>
            </div>
            <div className={`flex items-center gap-2`}>
               <span className={`text-nowrap`}>
                  {row.user.name} {row.user.id === session?.data?.user?.id ? "(you)" : ""}
               </span>
               {row.user.og && (
                  <span>
                  <Badge className={`!bg-amber-500 !text-black inline-flex gap-2 items-center text-nowrap shadow-md`} variant={`default`} >
                     <Baby size={14} />
                     <span>
                     OG Account
                     </span>
                  </Badge>
                  </span>
               )}
            </div>
         </TableCell>
         <TableCell className={`col-span-2 text-right flex flex-col justify-end !px-0`}>
            <span>{row.wpm}</span>
            <span className={`text-neutral-500`}>{row.accuracy}%</span>
         </TableCell>
         <TableCell className={`col-span-2 text-right flex flex-col justify-end !px-0`}>
            <span>{row.raw}</span>
            <span className={`text-neutral-500`}>{row.consistency}%</span>
         </TableCell>
         <TableCell className="col-span-2 text-right flex flex-col justify-end !pr-4">
            <span className={`text-nowrap`}>{moment(row.date).format(`DD MMM YYYY`)}</span>
            <span className={`text-neutral-500`}>
               {moment(row.date).format(`HH:mm`)}
            </span>
         </TableCell>
      </TableRow>
   );
};