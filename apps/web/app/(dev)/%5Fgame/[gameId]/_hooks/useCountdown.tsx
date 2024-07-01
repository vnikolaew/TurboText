"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useCountdown(seconds: number, onFinish?: () => void) {
   const [count, setCount] = useState<number | null>(null!);
   const countingDown = useMemo(() => count !== null, [count]);

   const intervalRef = useRef<NodeJS.Timeout>();

   useEffect(() => {
      if (count === 0 && intervalRef.current){
         clearInterval(intervalRef.current);
         setCount(null)
         onFinish?.()
      }
   }, [count]);

   const start = useCallback(() => {
      if (intervalRef.current) {
         clearInterval(intervalRef.current);
         setCount(null)
      }

      setCount(seconds);
      intervalRef.current = setInterval(() => {
         setCount((prev) => prev - 1);
      }, 1000);
   }, [seconds]);

   return { start, count, countingDown };
}