import React from "react";
import { TypingRun, User, UsersChallenge } from "@repo/db";
import { Globe, Star, Swords, Timer } from "lucide-react";
import { TableCell, TableRow, UserAvatar } from "@repo/ui";
import moment from "moment";
import { cn } from "@lib/utils";
import Link from "next/link";

export interface UserChallengeRowProps {
   challenge: UsersChallenge & { userOne: User; userTwo: User, userOneRun: TypingRun, userTwoRun: TypingRun };
   userId: string;
}

function getChallengeInfo(challenge: UsersChallenge, userId: string) {
   const opponent = challenge.userOneId === userId ? challenge.userTwo : challenge.userOne;

   const isWin = challenge.userOneId === userId
      ? (challenge.userOneRun?.metadata.completedWords > challenge.userTwoRun?.metadata.completedWords)
      : (challenge.userTwoRun?.metadata.completedWords > challenge.userOneRun?.metadata.completedWords);

   const { myCompletedWords, opponentCompletedWords } = {
      myCompletedWords: challenge.userOneId === userId ? challenge.userOneRun?.metadata.completedWords : challenge.userTwoRun?.metadata.completedWords,
      opponentCompletedWords: challenge.userOneId === userId ? challenge.userTwoRun?.metadata.completedWords : challenge.userOneRun?.metadata.completedWords,
   };

   return { opponent, isWin, myCompletedWords, opponentCompletedWords };
}

const UserChallengeRow = ({ challenge, userId }: UserChallengeRowProps) => {
   const {opponentCompletedWords, myCompletedWords, opponent, isWin} = getChallengeInfo(challenge, userId)

   return (
      <TableRow className={`text-sm w-full !text-main `} key={challenge.id}>
         <TableCell className="font-medium !w-fit">
            <Swords className={`text-accent`} size={20} />
         </TableCell>
         <TableCell className="font-medium text-lg !w-fit text-center">
            <span
               className={cn(`!w-fit text-center`, isWin ? `text-green-500` : `text-red-500`)}>{isWin ? `VICTORY` : `DEFEAT`}</span>
         </TableCell>
         <TableCell className="font-medium !w-fit text-wrap text-center text-lg">
            {myCompletedWords ?? `?`}
            {` vs `}
            {opponentCompletedWords ?? `?`}
         </TableCell>
         <TableCell className="font-medium ">
            <Link className={`inline-flex items-center gap-2 flex-nowrap`} href={`/profile/${opponent?.id}`}>
               <UserAvatar className={`w-6 h-6`} imageSrc={opponent?.image!} />
               <span>{opponent?.name}</span>
            </Link>
         </TableCell>
         <TableCell className="font-medium flex items-center gap-1 text-center">
            <Globe className={`text-secondary`} size={18} />
            {challenge.metadata?.language}
         </TableCell>
         <TableCell className="font-medium text-center ">
            <span className={cn(
               `flex items-center gap-1`,
               challenge.metadata?.difficulty === `EASY` && `text-green-500`,
               challenge.metadata?.difficulty === `MEDIUM` && `text-amber-500`,
               challenge.metadata?.difficulty === `HARD` && `text-red-500`,
            )}>
               <Star size={18} />
               {challenge.metadata?.difficulty}
            </span>
         </TableCell>
         <TableCell className="font-medium flex items-center gap-1 text-center">
            <Timer size={18} /> {challenge.metadata?.time}s
         </TableCell>
         <TableCell className="font-medium text-secondary text-nowrap">
            {moment(challenge.createdAt).format(`DD MMM YYYY`)}
            <br />
            {moment(challenge.createdAt).format(`HH:mm`)}
         </TableCell>
      </TableRow>
   );
};

export default UserChallengeRow;