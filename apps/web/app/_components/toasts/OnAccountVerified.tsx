"use client";
import { TOASTS } from "@config/toasts";
import { useBoolean } from "@hooks/useBoolean";
import { Alert, AlertDescription, AlertTitle, toast } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export interface OnAccountVerifiedProps {}

const OnAccountVerified = ({}: OnAccountVerifiedProps) => {
   const [show, setShow] = useBoolean(true);
   useEffect(() => toast(TOASTS.ACCOUNT_VERIFIED), []);
   const router = useRouter();

   return (
      <AnimatePresence>
         {show && (
            <motion.div
               key={`alert`}
               initial={{ opacity: 100 }}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className={`mx-auto flex w-full items-center justify-center gap-2`}
            >
               <Alert
                  className={`!w-fit border-neutral-700 !px-8 !py-4 shadow-md`}
               >
                  <Check className="!mt-2 h-5 w-5 stroke-green-600 text-green-600" />
                  <div
                     className={`flex w-full items-center justify-between gap-12`}
                  >
                     <div className={`flex flex-col items-start gap-0`}>
                        <AlertTitle>Verification successful!</AlertTitle>
                        <AlertDescription
                           className={`flex w-full max-w-[600px] items-center justify-between gap-12 text-wrap text-neutral-500`}
                        >
                           <span>
                              Your account has been successfully verified. You
                              can now enjoy all the features of our platform.
                           </span>
                        </AlertDescription>
                     </div>
                     <span
                        className={``}
                        onClick={(_) => {
                           setShow(false);
                           router.push(`/account`);
                        }}
                     >
                        <X className={`cursor-pointer text-red-700`} />
                     </span>
                  </div>
               </Alert>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default OnAccountVerified;
