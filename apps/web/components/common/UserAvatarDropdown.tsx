"use client";
import { userXpAtom } from "@atoms/user";
import {
   Progress,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
   UserAvatar,
} from "@repo/ui";
import { useAtomValue } from "jotai";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useMemo } from "react";

export interface UserAvatarDropdownProps {}

const UserAvatarDropdown = ({}: UserAvatarDropdownProps) => {
   const session = useSession();
   const userXp = useAtomValue(userXpAtom);
   const {
      percentageUntilNextLevel,
      xpNeededForNextLevel,
      xpNeededForCurrentLevel,
   } = useMemo(() => {
      const EXPONENT = 1.2;
      const { level, points } = userXp;

      const xpNeededForCurrentLevel = Math.floor(
         100 * Math.pow(level - 1, EXPONENT)
      );
      const xpNeededForNextLevel = Math.floor(100 * Math.pow(level, EXPONENT));
      const percentageUntilNextLevel =
         (((points ?? 0) - xpNeededForCurrentLevel) /
            (xpNeededForNextLevel - xpNeededForCurrentLevel)) *
         100;
      return {
         percentageUntilNextLevel,
         xpNeededForNextLevel,
         xpNeededForCurrentLevel,
      };
   }, [userXp]);

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Link
                  className={`group inline-flex items-center gap-2 hover:!text-accent`}
                  href={`/account`}
               >
                  <UserAvatar
                     title={session?.data?.user?.name!}
                     className={`h-6 w-6 cursor-pointer`}
                     imageSrc={session?.data?.user?.image!}
                  />
                  <span
                     className={`text-nowrap text-sm text-secondary transition-colors duration-200 group-hover:!text-accent`}
                  >
                     {session?.data?.user?.name}
                  </span>
                  <span
                     className={`text-nowrap rounded-sm bg-secondary p-1 px-1.5 text-xs text-black transition-colors duration-200 group-hover:!bg-accent`}
                  >
                     {userXp.level}
                  </span>
               </Link>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`rounded-xl border-none bg-secondary-bg !px-4 !py-2 text-sm text-main`}
            >
               <div className={`flex items-center gap-4`}>
                  <span>{userXp.level}</span>
                  <div className={`relative w-fit`}>
                     <Progress
                        className={`!h-4 w-[140px] !shadow-md`}
                        value={percentageUntilNextLevel}
                     />
                     <div
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[.6rem] text-accent`}
                     >
                        {xpNeededForCurrentLevel}/{xpNeededForNextLevel}
                     </div>
                  </div>
                  <span>{userXp.level + 1}</span>
               </div>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default UserAvatarDropdown;
