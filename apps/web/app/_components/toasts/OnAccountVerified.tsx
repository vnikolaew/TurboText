"use client";
import React, { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle, toast } from "@repo/ui";
import { TOASTS } from "@config/toasts";
import { Check, X } from "lucide-react";
import { useBoolean } from "@hooks/useBoolean";
import { AnimatePresence, motion } from "framer-motion";

export interface OnAccountVerifiedProps {
}

const OnAccountVerified = ({}: OnAccountVerifiedProps) => {
   const [show, setShow] = useBoolean(true);
   useEffect(() => {
      toast(TOASTS.ACCOUNT_VERIFIED);
   }, []);

   return (
      <AnimatePresence>
         {show && (
            <motion.div
               key={`alert`}
               initial={{ opacity: 100 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: .2 }}
               className={`w-full mx-auto flex items-center justify-center gap-2`}>
               <Alert className={`!w-fit border-neutral-700 shadow-md !px-8 !py-4`}>
                  <Check className="h-5 w-5 text-green-600 stroke-green-600 !mt-2" />
                  <div className={`flex w-full items-center justify-between gap-12`}>
                     <div className={`flex flex-col items-start gap-0`}>
                        <AlertTitle>Verification successful!</AlertTitle>
                        <AlertDescription
                           className={`text-neutral-500 flex w-full items-center justify-between gap-12 max-w-[600px] text-wrap`}>
                           <span>
                              Your account has been successfully verified. You can now enjoy all the features of our platform.
                           </span>
                        </AlertDescription>
                     </div>
                     <span className={``} onClick={_ => setShow(false)}>
                        <X className={`text-red-700 cursor-pointer`} />
                     </span>
                  </div>
               </Alert>

            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default OnAccountVerified;