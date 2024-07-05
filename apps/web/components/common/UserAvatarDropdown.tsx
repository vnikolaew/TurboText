"use client";
import React, { useMemo } from "react";
import { useSession } from "next-auth/react";
import { Progress, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, UserAvatar } from "@repo/ui";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { userXpAtom } from "@atoms/user";

export interface UserAvatarDropdownProps {
}

const UserAvatarDropdown = ({}: UserAvatarDropdownProps) => {
   const session = useSession();
   const userXp = useAtomValue(userXpAtom);
   const { percentageUntilNextLevel, xpNeededForNextLevel, xpNeededForCurrentLevel } = useMemo(() => {
      const EXPONENT = 1.2;
      const { level, points } = userXp;

      const xpNeededForCurrentLevel = Math.floor((100 * Math.pow(level - 1, EXPONENT)));
      const xpNeededForNextLevel = Math.floor((100 * Math.pow(level, EXPONENT)));
      const percentageUntilNextLevel = ((points ?? 0) - xpNeededForCurrentLevel)
         / (xpNeededForNextLevel - xpNeededForCurrentLevel) * 100;
      return { percentageUntilNextLevel, xpNeededForNextLevel, xpNeededForCurrentLevel };
   }, [userXp]);

   return (
      <TooltipProvider>
         <Tooltip >
            <TooltipTrigger asChild>
               <Link className={`inline-flex items-center gap-2 group hover:!text-accent`} href={`/account`}>
                  <UserAvatar
                     title={session?.data?.user?.name!}
                     className={`cursor-pointer h-6 w-6`}
                     imageSrc={session?.data?.user?.image!} />
                  <span
                     className={`text-sm text-secondary group-hover:!text-accent transition-colors duration-200 text-nowrap`}>
            {session?.data?.user?.name}
         </span>
                  <span
                     className={`text-black transition-colors duration-200 text-nowrap bg-secondary p-1 px-1.5 rounded-sm text-xs group-hover:!bg-accent`}>
            {userXp.level}
         </span>
               </Link>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
               <div className={`flex items-center gap-4`}>
                  <span>{userXp.level}</span>
                  <div className={`w-fit relative`}>
                     <Progress className={`w-[140px] !h-4 !shadow-md`} value={percentageUntilNextLevel} />
                     <div className={`absolute left-1/2 text-[.6rem] text-accent top-1/2 -translate-y-1/2 -translate-x-1/2`}>
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