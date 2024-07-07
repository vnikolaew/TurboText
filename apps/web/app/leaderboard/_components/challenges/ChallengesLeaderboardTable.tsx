"use client";
import { WARNING_MESSAGE } from "@app/leaderboard/_components/_consts";
import ChallengeLeaderboardTableRow, {
   ChallengeLeaderboardRow,
} from "@app/leaderboard/_components/challenges/ChallengeLeaderboardTableRow";
import DevOnly from "@components/common/DevOnly";
import {
   ScrollArea,
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHeader,
   TableRow,
} from "@repo/ui";

export interface ChallengesLeaderboardTableProps {
   caption?: string;
   rows: ChallengeLeaderboardRow[];
   showWarning: boolean;
}

const ChallengesLeaderboardTable = ({
   caption,
   rows,
   showWarning,
}: ChallengesLeaderboardTableProps) => {
   return (
      <div className={`mb-12 flex flex-col items-start`}>
         <ScrollArea className={`relative h-[600px] w-full`}>
            <div
               className={`sticky top-0 !z-[100] grid w-full grid-cols-13 !py-1 backdrop-blur`}
            >
               <div className={`col-span-1 text-center text-secondary`}>#</div>
               <div className={`col-span-6 text-left !text-main`}>name</div>
               <div className={`col-span-2 flex flex-col text-right text-base`}>
                  W/D/L
               </div>
               <div className={`col-span-2 flex flex-col text-right text-base`}>
                  Score
               </div>
            </div>
            <Table className={`min-h-[600px]`}>
               <TableCaption>{caption}</TableCaption>
               <TableHeader></TableHeader>
               <TableBody>
                  {!rows?.length && (
                     <TableRow className={`hover:!bg-transparent`}>
                        <TableCell
                           className={`w-full text-center !text-lg !text-secondary`}
                        >
                           There are no runs to show yet.
                        </TableCell>
                     </TableRow>
                  )}
                  {rows?.map((row, index) => (
                     <ChallengeLeaderboardTableRow
                        key={index}
                        row={row}
                        index={index}
                     />
                  ))}
               </TableBody>
            </Table>
         </ScrollArea>
         <DevOnly>
            {showWarning && (
               <div
                  className={`mt-2 w-full text-center text-sm !font-semibold text-accent`}
               >
                  {WARNING_MESSAGE}
               </div>
            )}
         </DevOnly>
      </div>
   );
};

export default ChallengesLeaderboardTable;
