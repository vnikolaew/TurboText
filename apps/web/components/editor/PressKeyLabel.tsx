"use client";
import React from "react";
import { useAtomValue } from "jotai";
import { TypingRunState, typingRunStateAtom } from "@atoms/editor";

export interface PressKeyLabelProps {
}

const PressKeyLabel = ({}: PressKeyLabelProps) => {
   const state = useAtomValue(typingRunStateAtom);
   if(state !== TypingRunState.STOPPED) return null;

   return (
      <div className={`text-sm text-neutral-500 mt-2`}>
         Press a key to begin your typing run.
      </div>
   );
};

export default PressKeyLabel;