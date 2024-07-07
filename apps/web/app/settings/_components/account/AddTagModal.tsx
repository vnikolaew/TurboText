"use client";
import { addTag } from "@app/settings/_components/account/actions";
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
import { useAction } from "next-safe-action/hooks";
import { parseAsBoolean, useQueryState } from "nuqs";
import { PropsWithChildren, useState } from "react";

export interface AddTagModalProps extends PropsWithChildren {}

const AddTagModal = ({ children }: AddTagModalProps) => {
   const [value, setValue] = useState(``);
   const [open, setOpen] = useBoolean();
   const [, setAddTagModalQs] = useQueryState(
      `add-tag-modal`,
      parseAsBoolean.withDefault(false)
   );

   const { execute, status, isExecuting } = useAction(addTag, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            toast(TOASTS.ADD_NEW_TAG_SUCCESS);
         } else {
            toast(TOASTS.ADD_NEW_TAG_FAILURE(res.data.error!));
         }
         setOpen(false);
      },
   });

   const handleAddTag = () => {
      if (value?.length) execute({ name: value });
   };

   return (
      <Dialog
         onOpenChange={async (value) => {
            if (value) await setAddTagModalQs(true);
            else await setAddTagModalQs(null);
            setOpen(value);
         }}
         open={open}
      >
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className={`z-[100] !bg-secondary-bg`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl !text-main`}>
                  Add new tag
               </DialogTitle>
            </DialogHeader>
            <div className={`w-full`}>
               <Input
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  className={`!w-full !bg-secondary !text-lg !text-main focus:!outline-neutral-300`}
               />
            </div>
            <DialogFooter className={`!mt-2 w-full`}>
               <LoadingButton
                  onClick={handleAddTag}
                  loadingText={`Adding ...`}
                  loading={isExecuting}
               >
                  Add
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default AddTagModal;
