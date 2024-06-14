"use client";
import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import { Progress } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { userDataLoadingAtom } from "@atoms/user";
import { useAtom } from "jotai";

export interface UserLoadingPageProps extends PropsWithChildren {
}

const WithUserLoading = ({ children }: UserLoadingPageProps) => {
   const intervalId = useRef<NodeJS.Timeout>();
   const [value, setValue] = useState(0);
   const [userDataLoading, setUserDataLoading] = useAtom(userDataLoadingAtom);

   const onTick = useCallback(() => {
      if (value >= 100) {
         clearInterval(intervalId?.current);
         setTimeout(() => {
            setUserDataLoading(false);
         }, 1000);
      }

      setValue(prev => prev + 5);
   }, [value]);

   useEffect(() => {
      if(value >= 100) clearInterval(intervalId.current)

      intervalId.current = setInterval(onTick, 50);
      return () => clearInterval(intervalId.current);
   }, [value]);

   return (
      <AnimatePresence mode={`sync`} initial={true}>
         {!userDataLoading && children}
         {userDataLoading && (
            <motion.div
               initial={{ opacity: 100 }}
               animate={{ opacity: 100 }}
               transition={{ duration: 0.3 }}
               exit={{ opacity: 0 }}
               className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-2xl w-full">
               <div className={`flex flex-col items-center gap-4 w-[300px]`}>
                  <Progress value={value} className={` text-amber-600 bg-neutral-800 shadow-md !h-2`} />
                  <span className={`text-xl text-neutral-300 animate-pulse`}>Downloading user data ...</span>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default WithUserLoading;