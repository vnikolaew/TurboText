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
import { useSession } from "next-auth/react";
import Link from "next/link";
import { forwardRef, useState } from "react";
import { match } from "ts-pattern";
import "./styles.css";

export interface LeaderboardRow {
   position: number;
   user: {
      id: string;
      image?: string;
      level: number;
      name: string;
      og: boolean;
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
   onScrollToTop?: () => void;
}

export const LeaderboardTable = forwardRef<
   HTMLDivElement,
   LeaderboardTableProps
>(({ caption, rows, showWarning }: LeaderboardTableProps, ref) => {
   return (
      <div className={`mb-12 flex flex-col items-start`}>
         <ScrollArea
            ref={ref}
            className={`relative h-[600px] w-full !scrollbar-track-red-500 !scrollbar-thumb-accent`}
         >
            <div
               className={`sticky top-0 !z-[100] grid w-full grid-cols-13 !py-1 backdrop-blur`}
            >
               <div className={`col-span-1 text-center text-secondary`}>#</div>
               <div className={`col-span-6 text-left !text-main`}>name</div>
               <div className={`col-span-2 flex flex-col text-right text-xs`}>
                  <span className={`text-main`}>wpm</span>
                  <span className={`text-secondary`}>accuracy</span>
               </div>
               <div className={`col-span-2 flex flex-col text-right text-xs`}>
                  <span className={`text-main`}>raw</span>
                  <span className={`text-xs text-secondary`}>consistency</span>
               </div>
               <div
                  className={`col-span-2 flex items-center justify-end px-4 text-right text-xs text-secondary`}
               >
                  date
               </div>
            </div>
            <Table className={`min-h-[600px]`}>
               <TableCaption>{caption}</TableCaption>
               <TableHeader></TableHeader>
               <TableBody>
                  {!rows?.length && (
                     <TableRow className={`hover:!bg-transparent`}>
                        <TableCell
                           className={`w-full text-center !text-secondary`}
                        >
                           There are no runs to show yet.
                        </TableCell>
                     </TableRow>
                  )}
                  {rows?.map((row, index) => (
                     <LeaderboardTableRow key={index} row={row} index={index} />
                  ))}
               </TableBody>
            </Table>
         </ScrollArea>
         {showWarning && (
            <div
               className={`mt-2 w-full text-center text-sm !font-semibold text-accent`}
            >
               Your account must have 2 hours typed to be placed on the
               leaderboard.
            </div>
         )}
      </div>
   );
});

const LeaderboardTableRow = ({
   row,
   index,
}: {
   row: LeaderboardRow;
   index: number;
}) => {
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
            {match(row.position)
               .with(1, (_) => (
                  <Crown
                     className={`fill-neutral-300 stroke-neutral-300`}
                     size={18}
                  />
               ))
               .otherwise((_) => row.position)}
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
                     {match(row.user.id === session?.data?.user?.id)
                        .with(true, (_) => (
                           <span className={`text-nowrap !text-main`}>
                              {row.user.name}{" "}
                              {row.user.id === session?.data?.user?.id
                                 ? "(you)"
                                 : ""}
                           </span>
                        ))
                        .otherwise((_) => (
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
                        ))}
                  </HoverCardTrigger>
                  <HoverCardContent>
                     {match(loading)
                        .with(true, (_) => (
                           <span className={`inline-flex items-center gap-2`}>
                              <LoadingSpinner text={`Loading...`} />
                           </span>
                        ))
                        .otherwise((_) => (
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
                        ))}
                  </HoverCardContent>
               </HoverCard>

               {index === 0 && <MythicalBadge />}
               {row.user.og && index > 0 && <OgAccountBadge />}
            </div>
         </TableCell>
         <TableCell
            className={`col-span-2 flex flex-col justify-end !px-0 text-right !text-xs`}
         >
            <span className={`!text-main`}>{row.wpm}</span>
            <span className={`text-secondary`}>{row.accuracy}%</span>
         </TableCell>
         <TableCell
            className={`col-span-2 flex flex-col justify-end !px-0 text-right !text-xs`}
         >
            <span className={`!text-main`}>{row.raw}</span>
            <span className={`text-secondary`}>{row.consistency}%</span>
         </TableCell>
         <TableCell className="col-span-2 flex flex-col justify-end !pr-4 text-right !text-xs">
            <span className={`text-nowrap !text-main`}>
               {moment(row.date).format(`DD MMM YYYY`)}
            </span>
            <span className={`text-right text-secondary`}>
               {moment(row.date).format(`HH:mm`)}
            </span>
         </TableCell>
      </TableRow>
   );
};
