"use client";
import { capsLockOnAtom } from "@atoms/editor";
import { capsLockWarningAtom } from "@atoms/user";
import { useAtomValue } from "jotai/index";
import { Lock } from "lucide-react";
import { Fragment } from "react";

export interface CapsLockWarningProps {}

const CapsLockWarning = ({}: CapsLockWarningProps) => {
   const capsLockOn = useAtomValue(capsLockOnAtom);
   const showCapsLock: boolean = useAtomValue(capsLockWarningAtom);

   return (
      <Fragment>
         {capsLockOn && showCapsLock && (
            <div
               className={`absolute left-1/2 top-1/2 !z-[100] flex translate-x-[-50%] translate-y-[-50%] items-center gap-2 !rounded-lg !bg-amber-500/70 !px-6 py-2 text-base text-black shadow-md backdrop-blur`}
            >
               <Lock className={`stroke-black text-black`} size={18} />
               <span>Caps Lock</span>
            </div>
         )}
      </Fragment>
   );
};

export default CapsLockWarning;
