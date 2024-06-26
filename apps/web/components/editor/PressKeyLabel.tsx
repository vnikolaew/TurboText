"use client";
import React from "react";
import { useAtomValue } from "jotai";
import { typingRunStateAtom } from "@atoms/editor";
import { TypingRunState } from "@atoms/consts";

export interface PressKeyLabelProps {
}

const PressKeyLabel = ({}: PressKeyLabelProps) => {
   const state = useAtomValue(typingRunStateAtom);
   if(state !== TypingRunState.STOPPED) return null;

   return (
      <div className={`text-sm text-secondary mt-2`}>
         Press a key to begin your typing run.
      </div>
   );
};

export default PressKeyLabel;