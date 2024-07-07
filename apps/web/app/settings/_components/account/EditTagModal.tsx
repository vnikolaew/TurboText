import { editTag } from "@app/settings/_components/account/actions";
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
   Input,
   toast,
} from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { PropsWithChildren, useState } from "react";

export interface EditTagModalProps extends PropsWithChildren {
   tag: Tag;
}

const EditTagModal = ({ tag, children }: EditTagModalProps) => {
   const [value, setValue] = useState(tag.name);
   const [open, setOpen] = useBoolean();
   const { execute, status, isExecuting } = useAction(editTag, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            toast(TOASTS.EDIT_TAG_SUCCESS);
         } else {
            toast(TOASTS.EDIT_TAG_FAILURE);
         }
         setOpen(false);
      },
   });

   const handleAddTag = () => {
      if (value?.length) execute({ name: value, id: tag.id });
   };

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>Edit tag</DialogTitle>
            </DialogHeader>
            <div className={`w-full`}>
               <Input
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  className={`!w-full !bg-black !text-lg focus:!outline-neutral-300`}
               />
            </div>
            <DialogFooter className={`!mt-2 w-full`}>
               <LoadingButton
                  onClick={handleAddTag}
                  loadingText={`Saving ...`}
                  loading={isExecuting}
               >
                  Edit
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default EditTagModal;
