"use client";
import { User } from "@repo/db";
import { Badge, UserAvatar } from "@repo/ui";
import Link from "next/link";
import React from "react";

export interface UserSearchRowProps {
   user: User;
}

const UserSearchRow = ({ user }: UserSearchRowProps) => {
   return (
      <Link className={`w-full`} key={user.id} href={`/profile/${user.id}`}>
         <div
            className={`flex items-center gap-2 hover:!bg-secondary p-1 !px-2 rounded-md transition-all duration-200 !w-full`}
            key={user.id}>
            <div className={`relative`}>
               <UserAvatar className={`w-6 h-6`} imageSrc={user.image!} />
               <span
                  className={`rounded-full bg-black p-0 text-xs absolute -bottom-1 -right-1 text-accent px-0.5`}>
                  {user.experience!.level}
               </span>
            </div>
            <span
               className={`rounded-md p-1 !px-2 transition-all duration-200 cursor-pointer flex items-center text-nowrap`}>
               {user.name}
            </span>
            <Badge
               variant={`secondary`}
               className={`text-xs !self-end !my-0 !mb-0.5`}>
               {user.experience!.label}
            </Badge>
         </div>
      </Link>
   );
};

export default UserSearchRow;