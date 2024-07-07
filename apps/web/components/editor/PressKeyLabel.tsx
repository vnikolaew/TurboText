"use client";
import { TypingRunState } from "@atoms/consts";
import { typingRunStateAtom } from "@atoms/editor";
import { useAtomValue } from "jotai";

export interface PressKeyLabelProps {}

const PressKeyLabel = ({}: PressKeyLabelProps) => {
   const state = useAtomValue(typingRunStateAtom);
   if (state !== TypingRunState.STOPPED) return null;

   return (
      <div className={`mt-2 text-sm text-secondary`}>
         Press a key to begin your typing run.
      </div>
   );
};

export default PressKeyLabel;
