"use client";
import { ScrollArea, Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from "@repo/ui";
import React from "react";
import ChallengeLeaderboardTableRow, {
   ChallengeLeaderboardRow,
} from "@app/leaderboard/_components/challenges/ChallengeLeaderboardTableRow";
import { WARNING_MESSAGE } from "@app/leaderboard/_components/_consts";
import DevOnly from "@components/common/DevOnly";

export interface ChallengesLeaderboardTableProps {
   caption?: string;
   rows: ChallengeLeaderboardRow[];
   showWarning: boolean;
}

const ChallengesLeaderboardTable = ({ caption, rows, showWarning }: ChallengesLeaderboardTableProps) => {
   return (
      <div className={`flex flex-col items-start mb-12`}>
         <ScrollArea className={`h-[600px] w-full relative`}>
            <div className={`grid w-full grid-cols-13 sticky top-0 !py-1 !z-[100] backdrop-blur`}>
               <div className={`col-span-1 text-secondary text-center`}>#</div>
               <div className={`col-span-6 text-left !text-main`}>name</div>
               <div className={`col-span-2 text-right flex flex-col text-base`}>
                  W/D/L
               </div>
               <div className={`col-span-2 text-right flex flex-col text-base`}>
                  Score
               </div>
            </div>
            <Table className={`min-h-[600px]`}>
               <TableCaption>{caption}</TableCaption>
               <TableHeader>
               </TableHeader>
               <TableBody>
                  {!rows?.length && (
                     <TableRow className={`hover:!bg-transparent`}>
                        <TableCell className={`w-full text-center !text-secondary !text-lg`}>
                           There are no runs to show yet.
                        </TableCell>
                     </TableRow>
                  )}
                  {rows?.map((row, index) => <ChallengeLeaderboardTableRow key={index} row={row} index={index} />)}
               </TableBody>
            </Table>
         </ScrollArea>
         <DevOnly>
            {showWarning && (
               <div className={`w-full text-center text-accent text-sm mt-2 !font-semibold`}>
                  {WARNING_MESSAGE}
               </div>
            )}
         </DevOnly>
      </div>
   );
};

export default ChallengesLeaderboardTable;