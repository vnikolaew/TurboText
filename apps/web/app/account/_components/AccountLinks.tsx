"use client";
import {
   Button,
   Dialog,
   DialogContent, DialogFooter, DialogHeader, DialogTitle,
   DialogTrigger,
   Input,
   Textarea, toast,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import React, { Fragment } from "react";
import { Link, Pencil } from "lucide-react";
import { useBoolean } from "@hooks/useBoolean";
import { TOASTS } from "@config/toasts";

export interface AccountLinksProps {
   username: string;
}

const AccountLinks = ({ username }: AccountLinksProps) => {
   const [editProfileModalOpen, setEditProfileModalOpen] = useBoolean();

   function handleCopyLink(): void {
      window.navigator.clipboard
         .writeText(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${encodeURIComponent(username)}`)
         .then(_ => toast(TOASTS.PUBLIC_LINK_COPIED_SUCCESS!));
   }

   return (
      <Fragment>
         <Dialog onOpenChange={setEditProfileModalOpen} open={editProfileModalOpen}>
            <DialogTrigger></DialogTrigger>
            <DialogContent className={`z-[100] !bg-neutral-800`}>
               <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
               </DialogHeader>
               <div>
                  <h2>Avatar</h2>
                  <p className={`text-sm text-neutral-500`}>
                     To update your avatar make sure your Discord account is linked, then go to
                     Settings &gt; Account &gt;
                     Discord Integration and click "Update Avatar"
                  </p>
                  <h2 className={`mt-2`}>Bio</h2>
                  <Textarea className={`bg-stone-950 focus:!outline-neutral-300 focus:!ring-neutral-300 mt-1`} />

                  <h2 className={`mt-2`}>Keyboard</h2>
                  <Textarea className={`bg-stone-950 focus:!outline-neutral-300 focus:!ring-neutral-300 mt-1`} />

                  <h2 className={`mt-2`}>Github</h2>
                  <div className={`w-full flex items-center gap-4 mt-2`}>
                     <span className={`text-neutral-500 max-w-[120px] text-wrap text-sm leading-tight`}>
                        https://github.com/
                     </span>
                     <Input placeholder={`username`}
                            className={`flex-1 bg-stone-950 focus:!ring-neutral-300 focus:!outline-neutral-300`} />
                  </div>
                  <h2 className={`mt-2`}>Twitter</h2>
                  <div className={`w-full flex items-center gap-4 mt-2`}>
                     <span className={`text-neutral-500 max-w-[120px] text-wrap text-sm leading-tight`}>
                        https://twitter.com/
                     </span>
                     <Input placeholder={`username`}
                            className={`flex-1 bg-stone-950 focus:!ring-neutral-300 focus:!outline-neutral-300`} />
                  </div>

                  <h2 className={`mt-6`}>Website</h2>
                  <Input className={`bg-stone-950 focus:!outline-neutral-300 focus:!ring-neutral-300 mt-1`} />
               </div>
               <DialogFooter>
                  <Button onClick={_ => {

                  }} variant={`default`} className={`w-full`}>Save</Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
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

export default AccountLinks;