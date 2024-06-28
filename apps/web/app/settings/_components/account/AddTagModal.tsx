"use client";
import React, { PropsWithChildren, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, toast } from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { addTag } from "@app/settings/_components/account/actions";
import { TOASTS } from "@config/toasts";
import LoadingButton from "@components/common/LoadingButton";
import { useBoolean } from "@hooks/useBoolean";
import { parseAsBoolean, useQueryState } from "nuqs";

export interface AddTagModalProps extends PropsWithChildren {
}

const AddTagModal = ({ children }: AddTagModalProps) => {
   const [value, setValue] = useState(``);
   const [open, setOpen] = useBoolean();
   const [, setAddTagModalQs] = useQueryState(`add-tag-modal`, parseAsBoolean.withDefault(false));

   const { execute, status, isExecuting } = useAction(addTag, {
      onSuccess: res => {
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
      <Dialog onOpenChange={async value => {
         if(value) await setAddTagModalQs(true);
         else await setAddTagModalQs(null)
         setOpen(value);
      }} open={open}>
         <DialogTrigger asChild>
            {children}
         </DialogTrigger>
         <DialogContent className={`z-[100] !bg-secondary-bg`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl !text-main`}>Add new tag</DialogTitle>
            </DialogHeader>
            <div className={`w-full`}>
               <Input
                  onChange={e => setValue(e.target.value)} value={value}
                  className={`!w-full !text-lg !bg-secondary focus:!outline-neutral-300 !text-main`} />
            </div>
            <DialogFooter className={`w-full !mt-2`}>
               <LoadingButton onClick={handleAddTag} loadingText={`Adding ...`} loading={isExecuting}>
                  Add
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default AddTagModal;