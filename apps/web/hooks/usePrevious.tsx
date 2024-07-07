import { useEffect, useRef } from "react";

export function usePrevious<T>(
   value: T,
   updateIf?: (prev: T | null | undefined, next: T) => boolean
) {
   // The ref object is a generic container whose current property is mutable
   // and can hold any value similar to an instance property on a class
   const ref = useRef<T>();

   // Store the current value in the ref object every time the component renders
   useEffect(() => {
      if (updateIf && !updateIf(ref.current, value)) return;

      ref.current = value;
   }, [value]);

   // Return the previous value (happens before the current value is updated in useEffect above)
   return ref.current!;
}
