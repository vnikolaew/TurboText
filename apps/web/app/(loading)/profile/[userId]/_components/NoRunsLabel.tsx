import { cn } from "@lib/utils";
import { motion } from "framer-motion";

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
         transition={{ duration: 0.3 }}
         key={`next`}
         className={cn(`flex !h-[160px] flex-col items-center justify-between`)}
      >
         <span className={`text-nowrap text-sm text-accent`}>
            {words ?? time} {words ? `words` : `seconds`}
         </span>
         <span className={`text-center text-sm text-secondary`}>
            No runs yet.
         </span>
         <span></span>
      </motion.div>
   );
};

export default NoRunsLabel;
