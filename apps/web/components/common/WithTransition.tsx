"use client";
import { MotionProps, motion } from "framer-motion";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface WithTransitionProps extends MotionProps, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

const WithTransition = ({ children, ...props}: WithTransitionProps) => {
   return (
      <motion.div
         initial={{
            opacity: 0,
         }}
         animate={{
            opacity: 100,
         }}
         transition={{
            duration: 0.3,
         }}
         {...props}
      >
         {children}
      </motion.div>
   );
};

export default WithTransition;