"use client";
import { useEffect, useRef } from "react";

function useInterval(callback: Function, delay: number) {
   const savedCallback = useRef();

   // Remember the latest callback.
   useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);

   // Set up the interval.
   useEffect(() => {
      function tick() {
         savedCallback.current();
      }
      if (delay !== null) {
         let id = setInterval(tick, delay);
         return () => clearInterval(id);
      }
   }, [delay]);
}
