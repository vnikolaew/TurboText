import { User } from "@repo/db";
import {
   Button,
   Table,
   TableBody,
   TableCaption,
   TableHead,
   TableHeader,
   TableRow,
} from "@repo/ui";
import { Swords } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { SortableTableHead } from "../common/SortableTableHead";
import UserChallengeRow from "./UserChallengeRow";
import { ChallengeNormalized, challengesTableSortAtom } from "../_atoms";

export interface LatestUserChallengesTableProps {
   challenges: ChallengeNormalized[];
   user: User;
}

const LatestUserChallengesTable = ({
   challenges,
   user,
}: LatestUserChallengesTableProps) => {
   return (
      <Fragment>
         <Table className={`!mb-12 !w-full`}>
            {" "}
            {!!challenges?.length && (
               <TableCaption
                  className={`!text-sm !font-semibold !text-secondary`}
               >
                  A list of your latest typing challenges.
               </TableCaption>
            )}
            <TableHeader className={`w-full`}>
               <TableRow className={`w-full text-sm !text-secondary`}>
                  <TableHead className="w-fit"></TableHead>
                  <SortableTableHead
                     title={`outcome`}
                     column={`outcome`}
                     sort={challengesTableSortAtom}
                     className="w-fit"
                  />
                  <TableHead className="text-center">completed words</TableHead>
                  <TableHead className="text-center">opponent</TableHead>
                  <SortableTableHead
                     column={`language`}
                     sort={challengesTableSortAtom}
                     className=""
                  >
                     language
                  </SortableTableHead>
                  <SortableTableHead
                     sort={challengesTableSortAtom}
                     column={`difficulty`}
                     className=""
                  >
                     difficulty
                  </SortableTableHead>
                  <SortableTableHead
                     column={`time`}
                     sort={challengesTableSortAtom}
                     className=""
                  >
                     time
                  </SortableTableHead>
                  <SortableTableHead
                     sort={challengesTableSortAtom}
                     className={`text-right`}
                     title={`date`}
                     column={`createdAt`}
                  />
               </TableRow>
            </TableHeader>
            <TableBody
               className={`relative max-h-[1000px] w-full !overflow-y-scroll`}
            >
               {challenges.map((challenge, index) => (
                  <UserChallengeRow
                     key={challenge!.id}
                     challenge={challenge}
                     userId={user.id}
                  />
               ))}
            </TableBody>
         </Table>
         <div>
            {!challenges?.length && (
               <div
                  className={`!mb-12 flex !h-fit !w-full flex-col items-center justify-center gap-4 !text-center text-secondary`}
               >
                  <span>You don't have any challenges yet.</span>
                  <div>
                     <Button asChild>
                        <Link
                           className={`inline-flex items-center gap-2 !bg-secondary-bg text-lg !text-accent`}
                           href={`/lobby`}
                        >
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
