"use client";
import { keyTipsAtom } from "@atoms/user";
import { useAtomValue } from "jotai";

export interface ShortcutsSectionProps {}

const ShortcutsSection = ({}: ShortcutsSectionProps) => {
   const keyTips: boolean = useAtomValue(keyTipsAtom);

   if (!keyTips) return null;
   return (
      <div className={`mt-16 flex w-full flex-col items-center text-xs`}>
         <span className={`text-accent`}>
            <kbd
               className={`rounded-sm bg-accent/90 px-2 py-0.5 !text-main shadow-sm`}
            >
               esc
            </kbd>{" "}
            - command line
         </span>
      </div>
   );
};

export default ShortcutsSection;
