"use client";

import { cn } from "@lib/utils";
import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
   ScrollArea,
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHeader,
   TableRow,
   UserAvatar,
} from "@repo/ui";
import { Crown } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { TypingRun, User, UserExperience } from "@repo/db";
import { useBoolean } from "@hooks/useBoolean";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { WARNING_MESSAGE } from "@app/leaderboard/_components/_consts";
import DevOnly from "@components/common/DevOnly";
import MythicalBadge from "@app/(loading)/account/_components/badges/MythicalBadge";
import OgAccountBadge from "@app/(loading)/account/_components/badges/OGAccountBadge";

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
               <div className={`col-span-1 text-secondary text-center`}>#</div>
               <div className={`col-span-6 text-left !text-main`}>name</div>
               <div className={`col-span-2 text-right flex flex-col text-xs`}>
                     <span className={`text-main `}>
                      wpm
                     </span>
                  <span className={`text-secondary`}>
                        accuracy
                      </span>
               </div>
               <div className={`col-span-2 text-right flex flex-col text-xs`}>
                     <span className={`text-main`}>
                     raw
                     </span>
                  <span className={`text-secondary text-xs`}>
                        consistency
                      </span>
               </div>
               <div className={`col-span-2 text-right flex items-center justify-end px-4 text-secondary text-xs`}>
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
                        <TableCell className={`w-full text-center !text-secondary`}>
                           There are no runs to show yet.
                        </TableCell>
                     </TableRow>
                  )}
                  {rows?.map((row, index) => <LeaderboardTableRow key={index} row={row} index={index} />)}
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

const LeaderboardTableRow = ({ row, index }: { row: LeaderboardRow, index: number }) => {
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
         <TableCell className={`col-span-2 text-right flex flex-col justify-end !px-0 !text-xs`}>
            <span className={`!text-main`}>{row.wpm}</span>
            <span className={`text-secondary`}>{row.accuracy}%</span>
         </TableCell>
         <TableCell className={`col-span-2 text-right flex flex-col justify-end !px-0 !text-xs`}>
            <span className={`!text-main`}>{row.raw}</span>
            <span  className={`text-secondary`}>{row.consistency}%</span>
         </TableCell>
         <TableCell className="col-span-2 text-right flex flex-col justify-end !pr-4 !text-xs">
            <span className={`text-nowrap !text-main`}>{moment(row.date).format(`DD MMM YYYY`)}</span>
            <span className={`text-secondary text-right`}>
               {moment(row.date).format(`HH:mm`)}
            </span>
         </TableCell>
      </TableRow>
   );
};