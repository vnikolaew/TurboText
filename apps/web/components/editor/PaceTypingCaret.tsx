"use client";
import React, { Fragment } from "react";
import { useAtomValue } from "jotai";
import { paceCaretStyleAtom } from "@atoms/user";
import { usePaceCaret } from "@components/editor/hooks/usePaceCaret";

interface PaceTypingCaretProps {
   coords: { left: number; top: number };
}

const PaceTypingCaret = ({ coords: { top, left } }: PaceTypingCaretProps) => {
   const caretStyle = useAtomValue(paceCaretStyleAtom);
   // const paceCaretSpeed = useAtomValue(paceCaretSpeedAtom);
   const { paceCaretCoords  } = usePaceCaret({ top, left });

   // const caretCn = useMemo(() => CARET_CLASSNAMES[caretStyle as string] ?? `h-[2rem] w-[2px] bg-neutral-100 animate-pulse absolute z-10 text-red-500 `,
   //    [caretStyle]);

   if (caretStyle === `OFF`) return <Fragment />;

   return <div
      className={`h-[2rem] w-[2px] bg-red-500 animate-pulse absolute z-10 text-red-500 `}
      style={{ ...paceCaretCoords, position: `absolute` }} />;
};

export default PaceTypingCaret;