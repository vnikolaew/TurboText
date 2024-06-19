"use client";
import React from "react";
import { useAtomValue } from "jotai/index";
import { capsLockOnAtom } from "@atoms/editor";
import { Lock } from "lucide-react";

export interface CapsLockWarningProps {
}

const CapsLockWarning = ({}: CapsLockWarningProps) => {
   const capsLockOn = useAtomValue(capsLockOnAtom);

   return (
      <>
         {capsLockOn && (
            <div
               className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] !rounded-lg !px-6 shadow-md text-black flex items-center gap-2 !z-[100] !bg-amber-600/70 py-2`}>
               <Lock className={`text-black stroke-black`} size={18} />
               <span>
            Caps Lock
            </span>
            </div>
         )}
      </>
   );
};

export default CapsLockWarning;