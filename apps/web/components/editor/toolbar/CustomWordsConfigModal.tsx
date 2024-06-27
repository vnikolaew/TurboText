"use client";
import {
   Button,
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   Input,
} from "@repo/ui";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { Kbd } from "@components/editor/toolbar/CustomTimeConfigModal";
import { wordsCountsAtom } from "@atoms/words";

export interface CustomWordsConfigModalProps {
   open: boolean;
   setOpen: (value: boolean) => void;
}

const CustomWordsConfigModal = ({ open, setOpen }: CustomWordsConfigModalProps) => {
   const [value, setValue] = useState(``);
   const [error, setError] = useState(``);
   const [, setWordsCount] = useAtom(wordsCountsAtom);

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogContent className={`z-[100] !bg-secondary-bg`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl !text-accent`}>
                  Custom word amount
               </DialogTitle>
               <DialogDescription>
               </DialogDescription>
            </DialogHeader>
            <div className={`flex flex-col gap-2 items-start`}>
               <Input onChange={e => setValue(e.target.value)} value={value}
                      className={`w-full border-main rounded-full !text-main`} />
               {error && (
                  <span className={`text-red-500 text-sm`}>{error}</span>
               )}
               <p className={`text-sm mt-2 text-secondary`}>
                  You can start an infinite test by inputting 0. Then, to stop the test, use the Bail Out feature
                  (<Kbd>esc</Kbd>{` `}
                  or <Kbd>ctrl/cmd</Kbd> + <Kbd>shift</Kbd> + <Kbd>p</Kbd> &gt; Bail Out)
               </p>
            </ div>
            <DialogFooter className={`mt-4`}>
               <Button onClick={_ => {
                  if (Number.isNaN(Number(value))) setError(`Input is not a number`);
                  else {
                     setWordsCount(Number(value));
                     setOpen(false);
                  }
               }} variant={`default`} className={`w-full`}>OK</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default CustomWordsConfigModal;