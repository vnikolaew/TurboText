"use client";
import { toast, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import React, { Fragment } from "react";
import { Link, Pencil } from "lucide-react";
import { useBoolean } from "@hooks/useBoolean";
import { TOASTS } from "@config/toasts";
import EditProfileModal from "@app/account/_components/EditProfileModal";
import { User } from "@repo/db";
import { useRouter } from "next/navigation";

export interface AccountLinksProps {
   user: User
}

const AccountPageLinks = ({ user }: AccountLinksProps) => {
   const [editProfileModalOpen, setEditProfileModalOpen] = useBoolean();
   const router = useRouter()

   function handleCopyLink(): void {
      window.navigator.clipboard
         .writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${encodeURIComponent(user.name!)}`)
         .then(_ => toast(TOASTS.PUBLIC_LINK_COPIED_SUCCESS!));
   }

   return (
      <Fragment>
         <EditProfileModal
            initial={{ ...(user?.metadata ?? {}) }}
            editProfileModalOpen={editProfileModalOpen}
            setEditProfileModalOpen={setEditProfileModalOpen} />
         <div className={`h-full flex flex-col gap-4`}>
            <div className={`flex-1 items-center justify-center p-2 cursor-pointer`}>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Pencil onClick={_ => {
                           setEditProfileModalOpen(true);
                           router.push(`?edit-profile=true`)
                        }} className={`text-main`} size={20} />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`left`}
                        className={`bg-black text-main rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                        Edit profile
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
            <div className={`flex-1 items-center justify-center p-2 cursor-pointer`}>
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link className={`text-main`} onClick={handleCopyLink} size={20} />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`left`}
                        className={`bg-black text-main rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
                        Copy public link
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
         </div>
      </Fragment>);
};

export default AccountPageLinks;