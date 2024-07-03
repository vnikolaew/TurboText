"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { TypingRun, User, UserExperience } from "@repo/db";
import { useBoolean } from "@hooks/useBoolean";
import { HoverCard, HoverCardContent, HoverCardTrigger, TableCell, TableRow, UserAvatar } from "@repo/ui";
import { cn } from "@lib/utils";
import { Crown } from "lucide-react";
import Link from "next/link";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import moment from "moment";
import MythicalBadge from "@app/account/_components/badges/MythicalBadge";
import OgAccountBadge from "@app/account/_components/badges/OGAccountBadge";

export interface ChallengeLeaderboardRow {
   position: number;
   user: {
      id: string;
      image?: string;
      level: number;
      name: string;
      og: boolean
   };
   wins: number;
   losses: number;
   draws: number;
   score: number
}

export interface ChallengeLeaderboardTableRowProps {
   row:  ChallengeLeaderboardRow;
   index: number;
}

const ChallengeLeaderboardTableRow = ({ row, index }: ChallengeLeaderboardTableRowProps) => {
   const session = useSession();
   const [userDetails, setUserDetails] = useState<Partial<User & {
      typingRuns: TypingRun[],
      experience: UserExperience
   }>>(null!);
   const [loading, setLoading] = useBoolean();

   async function handleOnHover() {
      if (userDetails) return;
      setLoading(true);
      fetch(`/api/user/${row.user.id}/details`, {
         method: "GET",
      }).then(r => r.json()).then(res => {
         if (res.success) {
            setUserDetails(res.user);
            console.log({ user: res.user });
         }
      }).finally(() => setLoading(false));
   }

   return (
      <TableRow key={index} className={cn(`grid grid-cols-13 w-full !border-none`,
         index % 2 === 1 && `bg-secondary-bg`)}>
         <TableCell
            className="font-medium text-center inline-flex justify-center items-center col-span-1 !text-main">
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
               <HoverCard>
                  <HoverCardTrigger asChild>
                     {row.user.id !== session?.data?.user?.id ? (
                        <Link onMouseEnter={handleOnHover} href={`/profile/${row.user.id}`}>
                           <span className={`text-nowrap !text-main`}> {row.user.name} {row.user.id === session?.data?.user?.id ? "(you)" : ""}
                           </span>
                        </Link>
                     ) : (
                        <span className={`text-nowrap !text-main`}>
                           {row.user.name} {row.user.id === session?.data?.user?.id ? "(you)" : ""}
                        </span>
                     )}
                  </HoverCardTrigger>
                  <HoverCardContent>
                     {loading ? (
                        <span className={`inline-flex items-center gap-2`}>
                        <LoadingSpinner text={`Loading...`} />
                        </span>
                     ) : (
                        <div className={`flex flex-col gap-4 items-start`}>
                           <div className={`flex items-center gap-2`}>
                              <UserAvatar imageSrc={userDetails?.image} />
                              <div className={`flex flex-col justify-between gap-0`}>
                                 <span>{userDetails?.name}</span>
                                 <span
                                    className={`text-xs text-muted-foreground`}>Joined {moment(userDetails?.createdAt)?.format(`DD MMM YYYY`)}</span>
                              </div>
                           </div>
                           <span className={`text-muted-foreground`}>
                              &bull; {userDetails?.typingRuns?.length} total runs
                           </span>
                        </div>
                     )}
                  </HoverCardContent>
               </HoverCard>

               {index === 0 && <MythicalBadge />}
               {row.user.og && index > 0 && <OgAccountBadge />}
            </div>
         </TableCell>
         <TableCell className={`col-span-2 text-right flex justify-end !px-0 !text-base`}>
           <span className={`text-green-500`}>{row.wins}</span>/
            <span className={`text-amber-500`}>{row.draws}</span>/
            <span className={`text-red-500`}>{row.losses}</span>
         </TableCell>
         <TableCell className={cn(`col-span-2 text-right flex flex-col justify-end !px-0 !text-base`, row.score < 0 && `text-red-500`)}>
            {row.score.toFixed(2)}
         </TableCell>
      </TableRow>
   );
};

export default ChallengeLeaderboardTableRow;