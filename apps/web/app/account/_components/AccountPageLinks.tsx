"use client";
import { toast, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import React, { Fragment } from "react";
import { Link, Pencil } from "lucide-react";
import { useBoolean } from "@hooks/useBoolean";
import { TOASTS } from "@config/toasts";
import EditProfileModal from "@app/account/_components/EditProfileModal";

export interface AccountLinksProps {
   username: string;
}

const AccountPageLinks = ({ username }: AccountLinksProps) => {
   const [editProfileModalOpen, setEditProfileModalOpen] = useBoolean();

   function handleCopyLink(): void {
      window.navigator.clipboard
         .writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${encodeURIComponent(username)}`)
         .then(_ => toast(TOASTS.PUBLIC_LINK_COPIED_SUCCESS!));
   }

   return (
      <Fragment>
         <EditProfileModal
            editProfileModalOpen={editProfileModalOpen}
            setEditProfileModalOpen={setEditProfileModalOpen} />
         <div className={`h-full flex flex-col gap-4`}>
            <div className={`flex-1 items-center justify-center p-2 cursor-pointer`}>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Pencil onClick={_ => {
                           setEditProfileModalOpen(true);
                        }} className={`text-neutral-300`} size={20} />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`left`}
                        className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                        Edit profile
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
            <div className={`flex-1 items-center justify-center p-2 cursor-pointer`}>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link onClick={handleCopyLink} size={20} />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`left`}
                        className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                        Copy public link
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
         </div>
      </Fragment>);
};

export default AccountPageLinks;