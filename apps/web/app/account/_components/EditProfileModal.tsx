"use client";
import {
   Button,
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   Input,
   Textarea,
} from "@repo/ui";
import React from "react";

export interface EditProfileModalProps {
   editProfileModalOpen: boolean;
   setEditProfileModalOpen: (open: boolean) => void;
}

const EditProfileModal = ({ setEditProfileModalOpen, editProfileModalOpen }: EditProfileModalProps) => {
   return (
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
   );
};

export default EditProfileModal;