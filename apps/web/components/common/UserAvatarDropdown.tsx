"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { UserAvatar } from "@repo/ui";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { userXpAtom } from "@atoms/user";

export interface UserAvatarDropdownProps {
}

const UserAvatarDropdown = ({}: UserAvatarDropdownProps) => {
   const session = useSession();
   const userXp = useAtomValue(userXpAtom)

   console.log({ userXp });

   return (
      <Link className={`inline-flex items-center gap-2 group hover:!text-neutral-300`} href={`/account`}>
         <UserAvatar
            title={session?.data?.user?.name!} className={`cursor-pointer h-6 w-6`}
            imageSrc={session?.data?.user?.image!} />
         <span
            className={`text-sm text-neutral-500 group-hover:!text-neutral-300 transition-colors duration-200 text-nowrap`}>
            {session?.data?.user?.name}
         </span>
         <span
            className={`text-black transition-colors duration-200 text-nowrap bg-neutral-400 p-1 px-1.5 rounded-sm text-xs`}>
            {userXp.level}
         </span>
      </Link>
   )
};

export default UserAvatarDropdown;