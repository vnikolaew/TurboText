import React from "react";
import { User, UsersChallenge } from "@repo/db";
import { ScrollArea, Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@repo/ui";
import UserChallengeRow from "@app/account/_components/challenges/UserChallengeRow";
import ExportChallengesButton from "@app/account/_components/challenges/ExportChallengesButton";

export interface LatestUserChallengesProps {
   user: User & { challenges_one: UsersChallenge[], challenges_two: UsersChallenge[] };
}

const LatestUserChallenges = ({ user }: LatestUserChallengesProps) => {
   const challenges = [...user.challenges_one, user.challenges_two]
      .filter(c => !!c?.id?.length)
      .sort((a, b) => b.createdAt - a.createdAt);

   return (
      <section id={`challenges`} className={`flex flex-col w-full gap-8`}>
         <div className={`flex justify-end`}>
            <ExportChallengesButton challenges={challenges} />
         </div>
         <ScrollArea className={`w-full`}>
            <Table className={`!mb-12 !overflow-y-scroll !w-full`}>
               <TableCaption className={`!text-secondary !font-semibold !text-base`}>
                  A list of your latest typing challenges.
               </TableCaption>
               <TableHeader className={`w-full`}>
                  <TableRow className={`text-sm w-full !text-secondary`}>
                     <TableHead className="w-fit"></TableHead>
                     <TableHead className="w-fit"></TableHead>
                     <TableHead className="">Completed words</TableHead>
                     <TableHead className="text-center">VS</TableHead>
                     <TableHead className="">Language</TableHead>
                     <TableHead className="">Difficulty</TableHead>
                     <TableHead className="">Time</TableHead>
                     <TableHead className="">Date</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody className={`w-full max-h-[1000px] !overflow-y-scroll`}>
                  {challenges.map((challenge, index) => (
                     <UserChallengeRow key={challenge!.id} challenge={challenge} userId={user.id} />
                  ))}
               </TableBody>
            </Table>
         </ScrollArea>
      </section>
   );
};

export default LatestUserChallenges;