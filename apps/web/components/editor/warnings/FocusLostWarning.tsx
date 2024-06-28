import { motion } from "framer-motion";
import React from "react";
import { useAtomValue } from "jotai";
import { typingRunStateAtom } from "@atoms/editor";
import { useSetAtom } from "jotai/index";
import { resumeAtom } from "@atoms/timer";
import { MousePointer } from "lucide-react";
import { TypingRunState } from "@atoms/consts";

export interface FocusLostWarningProps {
   onClick?: () => void;
}

const FocusLostWarning = ({ onClick }: FocusLostWarningProps) => {
   const timerState = useAtomValue(typingRunStateAtom);
   const resume = useSetAtom(resumeAtom);

   return (
      <div
         className={`absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-transparent flex items-center justify-center`}>
         <motion.div
            id={`focus-lost`}
            initial={{ opacity: 100 }}
            animate={{ opacity: 100 }}
            transition={{ duration: .2 }}
            exit={{ opacity: 0 }}
            onKeyDown={console.log}
            onClick={_ => {
               if (timerState === TypingRunState.PAUSED) {
                  resume();
               }

               onClick?.();
            }}
            className={`text-main flex items-center gap-2 !z-[100]`}>
            <MousePointer size={18} />
            <span className={`text-sm`}>
                       Click here or press any key to focus
                   </span>
         </motion.div>
      </div>
   );
};

export default FocusLostWarning;