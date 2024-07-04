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
   toast,
} from "@repo/ui";
import React, { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { TOASTS } from "@config/toasts";
import { Github, Globe, Twitter } from "lucide-react";
import { editProfile } from "../actions";

export interface EditProfileModalProps {
   editProfileModalOpen: boolean;
   setEditProfileModalOpen: (open: boolean) => void;
   initial : Partial<EditProfileModel>;
}

export interface EditProfileModel {
   bio: string;
   keyboard: string;
   github: string;
   twitter: string;
   website: string;
}

const EditProfileModal = ({ setEditProfileModalOpen, editProfileModalOpen, initial }: EditProfileModalProps) => {
   const { execute, isExecuting } = useAction(editProfile, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res.data);
            setEditProfileModalOpen(false);
            toast(TOASTS.EDIT_PROFILE_SUCCESS)
            setEditProfileModel({
               bio: ``,
               keyboard: ``,
               github: ``,
               twitter: ``,
               website: ``,
            })
         }
      },
   });
   const [editProfileModel, setEditProfileModel] = useState<EditProfileModel>({
      bio: initial.bio ?? ``,
      keyboard: initial.keyboard ?? ``,
      github: initial.github ?? ``,
      twitter: initial.twitter ?? ``,
      website: initial.website ?? ``,
   });

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
               <Textarea
                  onChange={e => setEditProfileModel({ ...editProfileModel, bio: e.target.value })}
                  value={editProfileModel.bio}
                  className={`bg-stone-950 focus:!outline-neutral-300 focus:!ring-neutral-300 mt-1`} />

               <h2 className={`mt-2`}>Keyboard</h2>
               <Textarea
                  onChange={e => setEditProfileModel({ ...editProfileModel, keyboard: e.target.value })}
                  value={editProfileModel.keyboard}
                  className={`bg-stone-950 focus:!outline-neutral-300 focus:!ring-neutral-300 mt-1`} />

               <div className={`inline-flex items-center gap-2 mt-2`}>
                  <Github size={14} />
                  <h2 className={``}>
                     Github
                  </h2>
               </div>
               <div className={`w-full flex items-center gap-4 mt-2`}>
                     <span className={`text-neutral-500 max-w-[120px] text-wrap text-sm leading-tight`}>
                        https://github.com/
                     </span>
                  <Input
                     onChange={e => setEditProfileModel({ ...editProfileModel, github: e.target.value })}
                     value={editProfileModel.github}
                     placeholder={`username`}
                     className={`flex-1 bg-stone-950 focus:!ring-neutral-300 focus:!outline-neutral-300`} />
               </div>
               <div className={`inline-flex items-center gap-2 mt-2`}>
                  <Twitter size={14} />
                  <h2 className={``}>Twitter</h2>
               </div>
               <div className={`w-full flex items-center gap-4 mt-2`}>
                     <span className={`text-neutral-500 max-w-[120px] text-wrap text-sm leading-tight`}>
                        https://twitter.com/
                     </span>
                  <Input
                     onChange={e => setEditProfileModel({ ...editProfileModel, twitter: e.target.value })}
                     value={editProfileModel.twitter}
                     placeholder={`username`}
                     className={`flex-1 bg-stone-950 focus:!ring-neutral-300 focus:!outline-neutral-300`} />
               </div>

               <div className={`inline-flex items-center gap-2 mt-6`}>
                  <Globe size={14} />
                  <h2 className={``}>Website</h2>
               </div>
               <Input
                  onChange={e => setEditProfileModel({ ...editProfileModel, website: e.target.value })}
                  value={editProfileModel.website}
                  className={`bg-stone-950 focus:!outline-neutral-300 focus:!ring-neutral-300 mt-1`} />
            </div>
            <DialogFooter>
               <Button disabled={isExecuting} onClick={_ => {
                  execute({
                     ...editProfileModel,
                  });
               }} variant={`default`} className={`w-full flex items-center gap-2`}>
                  {isExecuting ? <LoadingSpinner text={`Saving ...`} /> : `Save`
                  }
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default EditProfileModal;