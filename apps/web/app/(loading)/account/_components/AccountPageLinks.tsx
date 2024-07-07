"use client";
import { TOASTS } from "@config/toasts";
import { useBoolean } from "@hooks/useBoolean";
import { User } from "@repo/db";
import {
   toast,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Link, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import EditProfileModal from "./EditProfileModal";

export interface AccountLinksProps {
   user: User;
}

const AccountPageLinks = ({ user }: AccountLinksProps) => {
   const [editProfileModalOpen, setEditProfileModalOpen] = useBoolean();
   const router = useRouter();

   function handleCopyLink(): void {
      window.navigator.clipboard
         .writeText(
            `${process.env.NEXT_PUBLIC_BASE_URL}/profile/${encodeURIComponent(user.name!)}`
         )
         .then((_) => toast(TOASTS.PUBLIC_LINK_COPIED_SUCCESS!));
   }

   return (
      <Fragment>
         <EditProfileModal
            initial={{ ...(user?.metadata ?? {}) }}
            editProfileModalOpen={editProfileModalOpen}
            setEditProfileModalOpen={setEditProfileModalOpen}
         />
         <div className={`flex h-full flex-col gap-4`}>
            <div
               className={`flex-1 cursor-pointer items-center justify-center p-2`}
            >
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Pencil
                           onClick={(_) => {
                              setEditProfileModalOpen(true);
                              router.push(`?edit-profile=true`);
                           }}
                           className={`text-main`}
                           size={20}
                        />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`left`}
                        className={`rounded-xl border-none bg-secondary !px-4 !py-2 text-sm text-main`}
                     >
                        Edit profile
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
            <div
               className={`flex-1 cursor-pointer items-center justify-center p-2`}
            >
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <Link
                           className={`text-main`}
                           onClick={handleCopyLink}
                           size={20}
                        />
                     </TooltipTrigger>
                     <TooltipContent
                        side={`left`}
                        className={`rounded-xl border-none bg-secondary !px-4 !py-2 text-sm text-main`}
                     >
                        Copy public link
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </div>
         </div>
      </Fragment>
   );
};

export default AccountPageLinks;
