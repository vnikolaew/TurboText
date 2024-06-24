"use client";
import React, { PropsWithChildren } from "react";
import {
   Alert,
   AlertDescription,
   AlertTitle,
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   toast,
} from "@repo/ui";
import LoadingButton from "@components/common/LoadingButton";
import { useBoolean } from "@hooks/useBoolean";
import { useAction } from "next-safe-action/hooks";
import { TOASTS } from "@config/toasts";
import { deleteAccount } from "@app/settings/_components/danger/actions";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";

export interface DeleteAccountModalProps extends PropsWithChildren {
}

const DeleteAccountModal = ({ children }: DeleteAccountModalProps) => {
   const [open, setOpen] = useBoolean();

   const router = useRouter();
   const { execute, status, isExecuting } = useAction(deleteAccount, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            // toast(TOASTS.IMPORT_SETTINGS_SUCCESS)
            router.push(`/`);
         } else {
            toast(TOASTS.IMPORT_SETTINGS_FAILURE);
         }

         setOpen(false);
      },
   });

   function handleDelete(event: MouseEvent): void {
      execute({});
   }

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>
            {children}
         </DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>
                  Delete account
               </DialogTitle>
            </DialogHeader>
            <div className={`w-full text-base leading-tight text-neutral-500`}>
               This is the last time you can change your mind. After pressing the button everything is gone.
            </div>
            <Alert className={`text-red-600 !border-red-600 shadow-md !py-2 mt-4`}>
               <TriangleAlert className="h-8 w-8 text-red-600" />
               <AlertTitle className={`ml-4`}>Warning!</AlertTitle>
               <AlertDescription className={`ml-4`}> This action cannot be undone. </AlertDescription>
            </Alert>
            <DialogFooter className={`w-full !mt-2`}>
               <LoadingButton
                  onClick={handleDelete}
                  loadingText={`Saving ...`}
                  loading={isExecuting}>
                  Delete
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default DeleteAccountModal;