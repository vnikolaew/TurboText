"use client";
import { User } from "@repo/db";
import { Badge, UserAvatar } from "@repo/ui";
import Link from "next/link";

export interface UserSearchRowProps {
   user: User;
}

const UserSearchRow = ({ user }: UserSearchRowProps) => {
   return (
      <Link className={`w-full`} key={user.id} href={`/profile/${user.id}`}>
         <div
            className={`flex !w-full items-center gap-2 rounded-md p-1 !px-2 transition-all duration-200 hover:!bg-secondary`}
            key={user.id}
         >
            <div className={`relative`}>
               <UserAvatar className={`h-6 w-6`} imageSrc={user.image!} />
               <span
                  className={`absolute -bottom-1 -right-1 rounded-full bg-black p-0 px-0.5 text-xs text-accent`}
               >
                  {user.experience!.level}
               </span>
            </div>
            <span
               className={`flex cursor-pointer items-center text-nowrap rounded-md p-1 !px-2 transition-all duration-200`}
            >
               {user.name}
            </span>
            <div className={`flex flex-1 items-center justify-end`}>
               <Badge
                  variant={`secondary`}
                  className={`!my-0 !mb-0.5 !justify-self-end text-xs`}
               >
                  {user.experience!.label}
               </Badge>
            </div>
         </div>
      </Link>
   );
};

export default UserSearchRow;
