"use client";
import React, { useMemo } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowScroll from "hooks/useWindowScroll";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";

export interface ScrollToTopButtonProps {
}

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
   return <AnimatePresence>
      {
         showButton && (
            <motion.div
               key={`scroll-to-top`}
               transition={{ duration: 0.3 }}
               initial={{
                  opacity: 100,
               }}
               className={`!z-[100]`}
               animate={{ opacity: 100 }} exit={{ opacity: 0 }}
            >
               <TooltipProvider>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <MotionButton
                           variant={`secondary`}
                           onClick={scrollToTop}
                           className={`rounded-full !p-2 fixed bottom-8 right-8 !h-fit opacity-70 !z-[100] !bg-secondary-bg !text-main`}>
                           <ChevronUp size={28} />
                        </MotionButton>
                     </TooltipTrigger>
                     <TooltipContent side={`top`} className={`bg-secondary-bg text-main rounded-full text-xs`}>
                        Scroll to top
                     </TooltipContent>
                  </Tooltip>
               </TooltipProvider>
            </motion.div>
         )
      }

   </AnimatePresence>;
};

export default ScrollToTopButton;