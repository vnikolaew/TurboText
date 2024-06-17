"use client";
import React, { PropsWithChildren, useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, toast } from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { addTag } from "@app/settings/_components/account/actions";
import { TOASTS } from "@config/toasts";
import { isExecuting } from "next-safe-action/status";
import LoadingButton from "@components/common/LoadingButton";
import { useBoolean } from "@hooks/useBoolean";

export interface AddTagModalProps extends PropsWithChildren {
}

const AddTagModal = ({ children }: AddTagModalProps) => {
   const [value, setValue] = useState(``);
   const [ open, setOpen] = useBoolean()
   const { execute, status } = useAction(addTag, {
      onSuccess: res => {
         if (res.success) {
            console.log(res);
            toast(TOASTS.ADD_NEW_TAG_SUCCESS);
         } else {
            toast(TOASTS.ADD_NEW_TAG_FAILURE(res.error));
         }
         setOpen(false)
      },
   });

   const handleAddTag = () => {
      if (value?.length) execute({ name: value });
   };

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>
            {children}
         </DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>Add new tag</DialogTitle>
            </DialogHeader>
            <div className={`w-full`}>
               <Input
                  onChange={e => setValue(e.target.value)} value={value}
                  className={`!w-full !text-lg !bg-black focus:!outline-neutral-300`} />
            </div>
            <DialogFooter className={`w-full !mt-2`}>
               <LoadingButton onClick={handleAddTag} loadingText={`Adding ...`} loading={isExecuting(status)}>
                  Add
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default AddTagModal;