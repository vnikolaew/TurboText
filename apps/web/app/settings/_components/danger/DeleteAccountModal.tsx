"use client";
import { deleteAccount } from "@app/settings/_components/danger/actions";
import LoadingButton from "@components/common/LoadingButton";
import { TOASTS } from "@config/toasts";
import { useBoolean } from "@hooks/useBoolean";
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
import { TriangleAlert } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export interface DeleteAccountModalProps extends PropsWithChildren {}

const DeleteAccountModal = ({ children }: DeleteAccountModalProps) => {
   const [open, setOpen] = useBoolean();

   const router = useRouter();
   const { execute, isExecuting } = useAction(deleteAccount, {
      onSuccess: (res) => {
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

   function handleDelete(event: any): void {
      execute({});
   }

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>Delete account</DialogTitle>
            </DialogHeader>
            <div className={`w-full text-base leading-tight text-neutral-500`}>
               This is the last time you can change your mind. After pressing
               the button everything is gone.
            </div>
            <Alert
               className={`mt-4 !border-red-600 !py-2 text-red-600 shadow-md`}
            >
               <TriangleAlert className="h-8 w-8 text-red-600" />
               <AlertTitle className={`ml-4`}>Warning!</AlertTitle>
               <AlertDescription className={`ml-4`}>
                  {" "}
                  This action cannot be undone.{" "}
               </AlertDescription>
            </Alert>
            <DialogFooter className={`!mt-2 w-full`}>
               <LoadingButton
                  onClick={handleDelete}
                  loadingText={`Saving ...`}
                  loading={isExecuting}
               >
                  Delete
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default DeleteAccountModal;
