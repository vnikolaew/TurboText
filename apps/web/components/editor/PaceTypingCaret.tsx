"use client";
import { paceCaretSpeedAtom, paceCaretStyleAtom } from "@atoms/user";
import { usePaceCaret } from "@components/editor/hooks/usePaceCaret";
import { cn } from "@lib/utils";
import { useAtomValue } from "jotai";
import { Fragment, useMemo } from "react";
import { CARET_CLASSNAMES } from "./TypingCaret";

interface PaceTypingCaretProps {
   coords: { left: number; top: number };
}

const PaceTypingCaret = ({ coords: { top, left } }: PaceTypingCaretProps) => {
   const caretStyle = useAtomValue(paceCaretStyleAtom);
   const paceCaretSpeed = useAtomValue(paceCaretSpeedAtom);
   const { paceCaretCoords } = usePaceCaret({ top, left });

   const caretCn = useMemo(
      () =>
         CARET_CLASSNAMES[caretStyle as string] ??
         `h-[2rem] w-[2px] bg-neutral-100 animate-pulse absolute z-10 text-red-500 `,
      [caretStyle]
   );

   if (caretStyle === `OFF`) return <Fragment />;

   return (
      <div
         className={cn(
            `absolute z-10 flex h-[2rem] w-[2px] animate-pulse items-center justify-center bg-red-500 text-xs text-red-500`,
            caretCn
         )}
         style={{ ...paceCaretCoords, position: `absolute` }}
      />
   );
};

export default PaceTypingCaret;
