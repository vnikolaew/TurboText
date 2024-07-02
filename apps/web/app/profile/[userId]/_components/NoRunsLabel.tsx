import React from "react";
import { motion } from "framer-motion";
import { cn } from "@lib/utils";

export interface NoRunsLabelProps {
   words?: number;
   time?: number;
}

const NoRunsLabel = ({ words, time }: NoRunsLabelProps) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 100 }}
         exit={{ opacity: 0 }}
         transition={{ duration: .3 }}
         key={`next`}
         className={cn(`flex flex-col items-center justify-between !h-[160px]`)}>
         <span className={`text-accent text-nowrap text-sm`}>{words ?? time} {words ? `words` : `seconds`}</span>
         <span className={`text-secondary text-center text-sm`}>
            No runs yet.
         </span>
        <span></span>
      </motion.div>
   );

};

export default NoRunsLabel;