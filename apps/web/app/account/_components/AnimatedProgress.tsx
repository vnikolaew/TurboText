"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "@repo/ui";

export interface AnimatedProgressProps {
   value: number;
   delay?: number;
}

const AnimatedProgress = ({ value, delay }: AnimatedProgressProps) => {
   const [currentValue, setCurrentValue] = useState(0);
   useEffect(() => {
      let timeoutId = setTimeout(() => {
         setCurrentValue(value);
      }, delay ?? 2000);

      return () => {
         clearTimeout(timeoutId);
      };
   }, []);

   return (
      <Progress
         className={`w-full !h-2 cursor-pointer !bg-accent`}
         value={currentValue} />
   );
};

export default AnimatedProgress;