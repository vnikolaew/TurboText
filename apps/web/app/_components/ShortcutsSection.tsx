"use client"
import React from "react";
import { useAtomValue } from "jotai";
import { keyTipsAtom } from "@atoms/user";

export interface ShortcutsSectionProps {
}

const ShortcutsSection = ({}: ShortcutsSectionProps) => {
   const keyTips: boolean = useAtomValue(keyTipsAtom)

   if(!keyTips) return null;
   return (
      <div className={`w-full flex flex-col items-center mt-16 text-xs`}>
         <span className={`text-accent`}>
           <kbd className={`bg-accent/90 px-2 py-0.5 rounded-sm !text-main shadow-sm`}>esc</kbd> - command line
         </span>
      </div>
   );
};

export default ShortcutsSection;