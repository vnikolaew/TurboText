"use client";
import React, { Fragment } from "react";
import { useSession } from "next-auth/react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
   UserAvatar,
} from "@repo/ui";
import { useBoolean } from "@/hooks/useBoolean";
import { Image } from "lucide-react";

export interface UserAvatarDropdownProps {
}

const UserAvatarDropdown = ({}: UserAvatarDropdownProps) => {
   const session = useSession();
   const [dropdownOpen, setDropdownOpen] = useBoolean();
   const [tooltipOpen, setTooltipOpen] = useBoolean();
   const [, setChangeAvatarModalOpen] = useBoolean(false);

   return (
      <Fragment>
         <DropdownMenu onOpenChange={setDropdownOpen} open={dropdownOpen}>
            <DropdownMenuTrigger>
               <div>
                  <TooltipProvider>
                     <Tooltip onOpenChange={setTooltipOpen} open={tooltipOpen}>
                        <TooltipTrigger>
                           <UserAvatar
                              title={session?.data?.user?.name!} className={`cursor-pointer`}
                              imageSrc={session?.data?.user?.image!} />
                        </TooltipTrigger>
                        <TooltipContent side={`bottom`} className={`bg-black text-white rounded-md text-xs border-neutral-700`}>
                           Signed in as {session?.data?.user?.name}
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`rounded-lg p-2 min-w-[300px]`}>
               <DropdownMenuItem
                  onClick={_ => {
                     setChangeAvatarModalOpen(true);
                  }}
                  className={`flex items-center gap-2 w-full hover:!bg-neutral-300 transition-all duration-200 !rounded-md cursor-pointer hover:!text-white !px-4 !py-2`}>
                  <Image size={18} />
                  Change profile picture
               </DropdownMenuItem>
               <DropdownMenuItem
                  onClick={e => {
                     e.preventDefault();
                     e.stopPropagation();
                  }}
                  className={`w-full hover:!bg-neutral-300 transition-all duration-200 !rounded-md cursor-pointer hover:!text-white !px-4 !py-2`}>
                  <div className={`w-full`}>
                  </div>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </Fragment>
   );
};

export default UserAvatarDropdown;