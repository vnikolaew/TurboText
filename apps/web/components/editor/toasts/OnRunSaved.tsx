"use client";
import { useXpGainProgressBar } from "@components/editor/hooks/useXpGainProgressBar";
import { useXpProgressToastCoords } from "@components/editor/hooks/useXpProgressToastCoords";
import { Progress } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { RocketIcon } from "lucide-react";

export interface OnRunSavedProps {}

const OnRunSaved = ({}: OnRunSavedProps) => {
   const { progressValue, showProgressAnimation, xpGained, currentLevel } =
      useXpGainProgressBar();
   const { left, top } = useXpProgressToastCoords();

   return (
      showProgressAnimation && (
         <div
            style={{ top, left }}
            className={`absolute !z-[100] flex w-[200px] flex-col items-start gap-2 rounded-md bg-secondary-bg p-2 text-sm text-accent backdrop-blur-sm`}
         >
            <div className={`flex w-full flex-col items-center gap-1 p-1`}>
               <div className={`flex w-full items-center justify-between`}>
                  <span>{currentLevel}</span>
                  <span>{currentLevel + 1}</span>
               </div>
               <AnimatePresence>
                  {(showProgressAnimation || true) && (
                     <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        animate={{ opacity: 100 }}
                        exit={{ opacity: 0 }}
                        key={`progress`}
                        className={`flex w-full items-center gap-2`}
                     >
                        <Progress
                           className={`h-1 flex-1 shadow-md`}
                           value={progressValue}
                        />
                        <motion.div
                           initial={{ opacity: 0 }}
                           transition={{ duration: 0.2 }}
                           animate={{ opacity: 100 }}
                           exit={{ opacity: 0 }}
                           key={`xp-gained`}
                           className={`flex items-center gap-1 text-accent drop-shadow-md`}
                        >
                           <RocketIcon className="h-3 w-3 stroke-accent shadow-lg" />
                           <span>+{xpGained}XP</span>
                        </motion.div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      )
   );
};

export default OnRunSaved;
