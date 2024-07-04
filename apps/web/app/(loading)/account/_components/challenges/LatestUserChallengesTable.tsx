import { Button, Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@repo/ui";
import React, { Fragment } from "react";
import { SortableTableHead } from "../common/SortableTableHead";
import { User } from "@repo/db";
import Link from "next/link";
import { Swords } from "lucide-react";
import { ChallengeNormalized, challengesTableSortAtom } from "./LatestUserChallenges";

export interface LatestUserChallengesTableProps {
   challenges: ChallengeNormalized[];
   user: User;
}

const LatestUserChallengesTable = ({ challenges, user }: LatestUserChallengesTableProps) => {
   return (
      <Fragment>
         <Table className={`!mb-12 !w-full`}> {!!challenges?.length && (
            <TableCaption className={`!text-secondary !font-semibold !text-sm`}>
               A list of your latest typing challenges.
            </TableCaption>
         )}
            <TableHeader className={`w-full`}>
               <TableRow className={`text-sm w-full !text-secondary`}>
                  <TableHead className="w-fit"></TableHead>
                  <SortableTableHead
                     title={`outcome`}
                     column={`outcome`} sort={challengesTableSortAtom}
                     className="w-fit" />
                  <TableHead className="text-center">completed words</TableHead>
                  <TableHead className="text-center">opponent</TableHead>
                  <SortableTableHead
                     column={`language`} sort={challengesTableSortAtom}
                     className="">language</SortableTableHead>
                  <SortableTableHead
                     sort={challengesTableSortAtom} column={`difficulty`}
                     className="">difficulty</SortableTableHead>
                  <SortableTableHead
                     column={`time`} sort={challengesTableSortAtom}
                     className="">time</SortableTableHead>
                  <SortableTableHead
                     sort={challengesTableSortAtom} className={`text-right`} title={`date`}
                     column={`createdAt`} />
               </TableRow>
            </TableHeader>
            <TableBody className={`w-full max-h-[1000px] !overflow-y-scroll relative`}>
               {challenges.map((challenge, index) => (
                  <UserChallengeRow key={challenge!.id} challenge={challenge} userId={user.id} />
               ))}
            </TableBody>
         </Table>
         <div>
            {!challenges?.length && (
               <div
                  className={`!w-full !h-fit !text-center text-secondary justify-center flex flex-col items-center gap-4 !mb-12`}>
                       <span>
                           You don't have any challenges yet.
                       </span>
                  <div>
                     <Button asChild>
                        <Link className={`inline-flex text-lg items-center gap-2 !text-accent !bg-secondary-bg`} href={`/_lobby`}>
                           <Swords className={``} size={24} />
                           Find opponents
                        </Link>
                     </Button>
                  </div>
               </div>
            )}
         </div>
      </Fragment>
   );
};

export default LatestUserChallengesTable;