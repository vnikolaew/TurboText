"use client";
import React from "react";
import { Progress } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useXpGainProgressBar } from "@components/editor/hooks/useXpGainProgressBar";
import { useXpProgressToastCoords } from "@components/editor/hooks/useXpProgressToastCoords";
import { RocketIcon } from "lucide-react";

export interface OnRunSavedProps {
}

const OnRunSaved = ({}: OnRunSavedProps) => {
   const {
      progressValue,
      showProgressAnimation,
      xpGained,
      currentLevel,
   } = useXpGainProgressBar();
   const { left, top } = useXpProgressToastCoords();

   return showProgressAnimation && <div style={{ top, left }}
                                        className={`bg-neutral-700/30 text-amber-600 backdrop-blur-sm p-2 rounded-md absolute !z-[100] text-sm flex flex-col items-start gap-2 w-[200px]`}>
      <div className={`w-full items-center gap-1 flex flex-col p-1`}>
         <div className={`w-full items-center flex justify-between`}>
            <span>{currentLevel}</span>
            <span>{currentLevel + 1}</span>
         </div>
         <AnimatePresence>
            {(showProgressAnimation || true) && (
               <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: .2 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                  key={`progress`} className={`w-full flex items-center gap-2`}>
                  <Progress className={`flex-1 h-1 shadow-md`} value={progressValue} />
                  <motion.div
                     initial={{ opacity: 0 }}
                     transition={{ duration: .2 }}
                     animate={{ opacity: 100 }}
                     exit={{ opacity: 0 }}
                     key={`xp-gained`}
                     className={`text-amber-600 drop-shadow-md flex items-center gap-1`}>
                     <RocketIcon className="h-3 w-3 stroke-amber-600 shadow-lg" />
                     <span>
                        +{xpGained}XP
                     </span>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   </div>;
};

export default OnRunSaved;