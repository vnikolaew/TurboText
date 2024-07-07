"use client";
import { deleteTag } from "@app/settings/_components/account/actions";
import LoadingButton from "@components/common/LoadingButton";
import { TOASTS } from "@config/toasts";
import { useBoolean } from "@hooks/useBoolean";
import { Tag } from "@repo/db";
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   toast,
} from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { PropsWithChildren } from "react";

export interface DeleteTagModalProps extends PropsWithChildren {
   tag: Tag;
}

const DeleteTagModal = ({ children, tag }: DeleteTagModalProps) => {
   const [open, setOpen] = useBoolean();
   const { execute, status, isExecuting } = useAction(deleteTag, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            toast(TOASTS.DELETE_TAG_SUCCESS);
         } else {
            toast(TOASTS.DELETE_TAG_FAILURE);
         }
         setOpen(false);
      },
   });

   const handleAddTag = () => {
      execute({ id: tag.id });
   };

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>Delete tag</DialogTitle>
            </DialogHeader>
            <div className={`w-full`}>
               Are you sure you want to delete tag {tag.name}?
            </div>
            <DialogFooter className={`!mt-2 w-full`}>
               <LoadingButton
                  onClick={handleAddTag}
                  loadingText={`Deleting ...`}
                  loading={isExecuting}
               >
                  Delete
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default DeleteTagModal;
