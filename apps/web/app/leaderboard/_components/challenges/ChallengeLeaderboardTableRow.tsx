"use client";
import MythicalBadge from "@app/(loading)/account/_components/badges/MythicalBadge";
import OgAccountBadge from "@app/(loading)/account/_components/badges/OGAccountBadge";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { useBoolean } from "@hooks/useBoolean";
import { cn } from "@lib/utils";
import { TypingRun, User, UserExperience } from "@repo/db";
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
   TableCell,
   TableRow,
   UserAvatar,
} from "@repo/ui";
import { Crown } from "lucide-react";
import moment from "moment";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export interface ChallengeLeaderboardRow {
   position: number;
   user: {
      id: string;
      image?: string;
      level: number;
      name: string;
      og: boolean;
   };
   wins: number;
   losses: number;
   draws: number;
   score: number;
}

export interface ChallengeLeaderboardTableRowProps {
   row: ChallengeLeaderboardRow;
   index: number;
}

const ChallengeLeaderboardTableRow = ({
   row,
   index,
}: ChallengeLeaderboardTableRowProps) => {
   const session = useSession();
   const [userDetails, setUserDetails] = useState<
      Partial<
         User & {
            typingRuns: TypingRun[];
            experience: UserExperience;
         }
      >
   >(null!);
   const [loading, setLoading] = useBoolean();

   async function handleOnHover() {
      if (userDetails) return;
      setLoading(true);
      fetch(`/api/user/${row.user.id}/details`, {
         method: "GET",
      })
         .then((r) => r.json())
         .then((res) => {
            if (res.success) {
               setUserDetails(res.user);
               console.log({ user: res.user });
            }
         })
         .finally(() => setLoading(false));
   }

   return (
      <TableRow
         key={index}
         className={cn(
            `grid w-full grid-cols-13 !border-none`,
            index % 2 === 1 && `bg-secondary-bg`
         )}
      >
         <TableCell className="col-span-1 inline-flex items-center justify-center text-center font-medium !text-main">
            {row.position === 1 ? (
               <Crown
                  className={`fill-neutral-300 stroke-neutral-300`}
                  size={18}
               />
            ) : (
               row.position
            )}
         </TableCell>
         <TableCell className={`col-span-6 inline-flex items-center gap-2`}>
            <div className={`relative`}>
               <UserAvatar className={`h-8 w-8`} imageSrc={row?.user.image} />
               <span
                  className={`absolute bottom-0 right-0 rounded-full bg-black p-0 px-0.5 text-xs text-amber-500`}
               >
                  {row.user.level}
               </span>
            </div>
            <div className={`flex items-center gap-2`}>
               <HoverCard>
                  <HoverCardTrigger asChild>
                     {row.user.id !== session?.data?.user?.id ? (
                        <Link
                           onMouseEnter={handleOnHover}
                           href={`/profile/${row.user.id}`}
                        >
                           <span className={`text-nowrap !text-main`}>
                              {" "}
                              {row.user.name}{" "}
                              {row.user.id === session?.data?.user?.id
                                 ? "(you)"
                                 : ""}
                           </span>
                        </Link>
                     ) : (
                        <span className={`text-nowrap !text-main`}>
                           {row.user.name}{" "}
                           {row.user.id === session?.data?.user?.id
                              ? "(you)"
                              : ""}
                        </span>
                     )}
                  </HoverCardTrigger>
                  <HoverCardContent>
                     {loading ? (
                        <span className={`inline-flex items-center gap-2`}>
                           <LoadingSpinner text={`Loading...`} />
                        </span>
                     ) : (
                        <div className={`flex flex-col items-start gap-4`}>
                           <div className={`flex items-center gap-2`}>
                              <UserAvatar imageSrc={userDetails?.image} />
                              <div
                                 className={`flex flex-col justify-between gap-0`}
                              >
                                 <span>{userDetails?.name}</span>
                                 <span
                                    className={`text-xs text-muted-foreground`}
                                 >
                                    Joined{" "}
                                    {moment(userDetails?.createdAt)?.format(
                                       `DD MMM YYYY`
                                    )}
                                 </span>
                              </div>
                           </div>
                           <span className={`text-muted-foreground`}>
                              &bull; {userDetails?.typingRuns?.length} total
                              runs
                           </span>
                        </div>
                     )}
                  </HoverCardContent>
               </HoverCard>

               {index === 0 && <MythicalBadge />}
               {row.user.og && index > 0 && <OgAccountBadge />}
            </div>
         </TableCell>
         <TableCell
            className={`col-span-2 flex justify-end !px-0 text-right !text-base`}
         >
            <span className={`text-green-500`}>{row.wins}</span>/
            <span className={`text-amber-500`}>{row.draws}</span>/
            <span className={`text-red-500`}>{row.losses}</span>
         </TableCell>
         <TableCell
            className={cn(
               `col-span-2 flex flex-col justify-end !px-0 text-right !text-base`,
               row.score < 0 && `text-red-500`
            )}
         >
            {row.score.toFixed(2)}
         </TableCell>
      </TableRow>
   );
};

export default ChallengeLeaderboardTableRow;
