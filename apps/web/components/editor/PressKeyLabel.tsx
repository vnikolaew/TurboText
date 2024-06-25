"use client";
import React from "react";
import { useAtomValue } from "jotai";
import { typingModeAtom, typingRunStateAtom } from "@atoms/editor";
import { TypingRunState } from "@atoms/consts";

export interface PressKeyLabelProps {
}

const PressKeyLabel = ({}: PressKeyLabelProps) => {
   const state = useAtomValue(typingRunStateAtom);
   const mode = useAtomValue(typingModeAtom);
   if(state !== TypingRunState.STOPPED) return null;

   return (
      <div className={`text-sm text-secondary mt-2`}>
         Press a key to begin your typing run. Mode: {mode}
      </div>
   );
};

export default PressKeyLabel;