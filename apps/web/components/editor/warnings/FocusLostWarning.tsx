import { TypingRunState } from "@atoms/consts";
import { typingRunStateAtom } from "@atoms/editor";
import { resumeAtom } from "@atoms/timer";
import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";
import { MousePointer } from "lucide-react";

export interface FocusLostWarningProps {
   onClick?: () => void;
}

const FocusLostWarning = ({ onClick }: FocusLostWarningProps) => {
   const timerState = useAtomValue(typingRunStateAtom);
   const resume = useSetAtom(resumeAtom);

   return (
      <div
         className={`absolute left-0 top-0 flex h-full w-full items-center justify-center bg-transparent backdrop-blur-sm`}
      >
         <motion.div
            id={`focus-lost`}
            initial={{ opacity: 100 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            onKeyDown={console.log}
            onClick={(_) => {
               if (timerState === TypingRunState.PAUSED) {
                  resume();
               }

               onClick?.();
            }}
            className={`!z-[100] flex items-center gap-2 text-main`}
         >
            <MousePointer size={18} />
            <span className={`text-sm`}>
               Click here or press any key to focus
            </span>
         </motion.div>
      </div>
   );
};

export default FocusLostWarning;
