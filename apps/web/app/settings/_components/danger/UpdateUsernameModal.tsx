"use client";
import { changeUsername } from "@app/settings/_components/danger/actions";
import LoadingButton from "@components/common/LoadingButton";
import { TOASTS } from "@config/toasts";
import { useBoolean } from "@hooks/useBoolean";
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   Input,
   toast,
} from "@repo/ui";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { PropsWithChildren, useState } from "react";

export interface UpdateUsernameModalProps extends PropsWithChildren {
   username: string;
}

const UpdateUsernameModal = ({
   children,
   username,
}: UpdateUsernameModalProps) => {
   const [value, setValue] = useState(username);
   const [open, setOpen] = useBoolean();
   const { update } = useSession();
   const { execute, status, isExecuting } = useAction(changeUsername, {
      onSuccess: async (res) => {
         if (res?.data?.success) {
            console.log(res);
            toast(TOASTS.EDIT_USERNAME_SUCCESS);

            await update({ name: res.data.user.name });
         } else {
            toast(TOASTS.EDIT_USERNAME_FAILURE(res.data.error));
         }
         setOpen(false);
      },
   });

   function handleChangeUsername(_: MouseEvent): void {
      if (value?.length) execute({ username: value });
   }

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>Update username</DialogTitle>
            </DialogHeader>
            <div className={`w-full`}>
               <Input
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  placeholder={`new username`}
                  className={`!w-full !bg-black !text-lg focus:!outline-neutral-300`}
               />
            </div>
            <DialogFooter className={`!mt-2 w-full`}>
               <LoadingButton
                  onClick={handleChangeUsername}
                  loadingText={`Saving ...`}
                  loading={isExecuting}
               >
                  Update
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default UpdateUsernameModal;
