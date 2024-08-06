import { cn } from "@lib/utils";
import { TypingRun, User, UsersChallenge } from "@repo/db";
import { TableCell, TableRow, UserAvatar } from "@repo/ui";
import { Globe, Star, Swords, Timer } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { getChallengeInfo } from "./LatestUserChallenges";

export interface UserChallengeRowProps {
   challenge: UsersChallenge & {
      userOne: User;
      userTwo: User;
      userOneRun: TypingRun;
      userTwoRun: TypingRun;
   };
   userId: string;
}

export enum ChallengeOutcome {
   WIN = "win",
   LOSE = "lose",
   DRAW = "draw",
}

const UserChallengeRow = ({ challenge, userId }: UserChallengeRowProps) => {
   const { opponentCompletedWords, myCompletedWords, opponent, outcome } =
      getChallengeInfo(challenge, userId);

   return (
      <TableRow className={`w-full text-sm !text-main`} key={challenge.id}>
         <TableCell className="!w-fit font-medium">
            <Swords className={`text-accent`} size={20} />
         </TableCell>
         <TableCell className="!w-fit text-center text-base font-medium">
            <span
               className={cn(
                  `!w-fit text-center`,
                  outcome === ChallengeOutcome.WIN && `text-green-400`,
                  outcome === ChallengeOutcome.DRAW && `text-amber-400`,
                  outcome === ChallengeOutcome.LOSE && `text-red-400`
               )}
            >
               {outcome === ChallengeOutcome.WIN
                  ? `VICTORY`
                  : outcome === ChallengeOutcome.LOSE
                    ? `DEFEAT`
                    : `DRAW`}
            </span>
         </TableCell>
         <TableCell className="!w-fit text-wrap text-center text-lg font-medium">
           <span className={`text-accent`}>
               {myCompletedWords ?? `?`}
           </span>
            <span className={``}>
               {` vs `}
            </span>
            <span className={`text-secondary`}>
               {opponentCompletedWords ?? `?`}
            </span>
         </TableCell>
         <TableCell className="font-medium">
            <Link
               className={`inline-flex flex-nowrap items-center gap-2`}
               href={`/profile/${opponent?.id}`}
            >
               <UserAvatar className={`h-6 w-6`} imageSrc={opponent?.image!} />
               <span>{opponent?.name}</span>
            </Link>
         </TableCell>
         <TableCell className="flex items-center gap-1 text-center font-medium h-full mt-2">
            <Globe className={`text-secondary`} size={18} />
            {challenge.metadata?.language}
         </TableCell>
         <TableCell className="text-center font-medium">
            <span
               className={cn(
                  `flex items-center gap-1`,
                  challenge.metadata?.difficulty === `EASY` && `text-green-500`,
                  challenge.metadata?.difficulty === `MEDIUM` &&
                     `text-amber-500`,
                  challenge.metadata?.difficulty === `HARD` && `text-red-500`
               )}
            >
               <Star size={18} />
               {challenge.metadata?.difficulty}
            </span>
         </TableCell>
         <TableCell className="flex items-center gap-1 text-center font-medium">
            <Timer size={18} /> {challenge.metadata?.time}s
         </TableCell>
         <TableCell className="text-nowrap text-right font-medium text-secondary">
            <span className={`text-main`}>
               {moment(challenge.createdAt).format(`DD MMM YYYY`)}
            </span>
            <br />
            <span className={`text-secondary`}>
               {moment(challenge.createdAt).format(`HH:mm`)}
            </span>
         </TableCell>
      </TableRow>
   );
};

export default UserChallengeRow;
