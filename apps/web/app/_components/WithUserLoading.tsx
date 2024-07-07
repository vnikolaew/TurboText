"use client";
import { userDataLoadingAtom } from "@atoms/user";
import { Progress } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { PrimitiveAtom } from "jotai/index";
import {
   PropsWithChildren,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";

export interface UserLoadingPageProps extends PropsWithChildren {
   userLoadingAtom?: PrimitiveAtom<boolean>;
}

const WithUserLoading = ({
   children,
   userLoadingAtom,
}: UserLoadingPageProps) => {
   const intervalId = useRef<NodeJS.Timeout>();
   const [value, setValue] = useState(0);
   const [userDataLoading, setUserDataLoading] = useAtom(
      userLoadingAtom ?? userDataLoadingAtom
   );

   const onTick = useCallback(() => {
      if (value >= 100) {
         clearInterval(intervalId?.current);
         setTimeout(() => {
            setUserDataLoading(false);
         }, 1000);
      }

      setValue((prev) => prev + 5);
   }, [value]);

   useEffect(() => {
      if (value >= 100) clearInterval(intervalId.current);

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
               className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8 pb-20 font-sans text-2xl sm:p-20"
            >
               <div className={`flex w-[300px] flex-col items-center gap-4`}>
                  <Progress
                     value={value}
                     className={`!h-2 bg-neutral-800 text-amber-600 shadow-md`}
                  />
                  <span
                     className={`animate-pulse text-nowrap text-lg text-neutral-300`}
                  >
                     Downloading user data ...
                  </span>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default WithUserLoading;
