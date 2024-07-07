"use client";
import {
   Button,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import useWindowScroll from "hooks/useWindowScroll";
import { ChevronUp } from "lucide-react";
import { useMemo } from "react";

export interface ScrollToTopButtonProps {}

const MotionButton = motion(Button);

/**
 * A reusable Scroll to Top button.
 * @constructor
 */
const ScrollToTopButton = ({}: ScrollToTopButtonProps) => {
   const { y } = useWindowScroll();
   const showButton = useMemo(() => y >= 300, [y]);

   const scrollToTop = () => {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      window.focus();
      document.body.scrollTop = 0;
   };

   // @ts-ignore
   return (
      <AnimatePresence>
         {showButton && (
            <motion.div
               key={`scroll-to-top`}
               transition={{ duration: 0.3 }}
               initial={{
                  opacity: 100,
               }}
               className={`!z-[100]`}
               animate={{ opacity: 100 }}
               exit={{ opacity: 0 }}
            >
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <MotionButton
                           variant={`secondary`}
                           onClick={scrollToTop}
                           className={`fixed bottom-8 right-8 !z-[100] !h-fit rounded-full !bg-secondary-bg !p-2 !text-main opacity-70`}
                        >
                           <ChevronUp size={28} />
                        </MotionButton>
                     </TooltipTrigger>
                     <TooltipContent
                        side={`top`}
                        className={`rounded-full bg-secondary-bg text-xs text-main`}
                     >
                        Scroll to top
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default ScrollToTopButton;
