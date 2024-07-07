"use client";
import { Progress } from "@repo/ui";
import { useEffect, useState } from "react";

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
         className={`!h-2 w-full cursor-pointer !bg-secondary`}
         value={currentValue}
      />
   );
};

export default AnimatedProgress;
