"use client";
import { caretStyleAtom, smoothCaretAtom } from "@atoms/user";
import { cn } from "@lib/utils";
import { useAtomValue } from "jotai";
import { CSSProperties, Fragment, useMemo } from "react";

export interface TypingCaretProps {
   coords: {
      top: number;
      left: number;
   };
}

const TRANSITION_STYLES = {
   OFF: ``,
   SLOW: `left 300ms`,
   MEDIUM: `left 200ms`,
   FAST: `left 100ms`,
};

export const CARET_CLASSNAMES = {
   OFF: ``,
   UNDERSCORE: `h-[4px] w-[12px] bg-neutral-100 animate-pulse absolute z-10 text-red-500 `,
   BLOCK_FILLED: `h-[2rem] w-[12px] bg-neutral-100/70 animate-pulse absolute z-10 text-red-500 `,
   BLOCK: `h-[2rem] w-[12px] bg-transparent animate-pulse absolute z-10 text-red-500 border-neutral-100/70 border-[1px] `,
};

const TypingCaret = ({ coords: { top, left } }: TypingCaretProps) => {
   const caretStyle = useAtomValue(caretStyleAtom);
   const caretSmoothness = useAtomValue(smoothCaretAtom);

   const caretTransitionStyle = useMemo<Partial<CSSProperties>>(
      () => ({
         transition: TRANSITION_STYLES[caretSmoothness as string] ?? ``,
      }),
      [caretSmoothness]
   );

   const caretCn = useMemo(
      () =>
         CARET_CLASSNAMES[caretStyle as string] ??
         `h-[2rem] w-[2px] bg-neutral-100 animate-pulse absolute z-10 text-red-500 `,
      [caretStyle]
   );

   if (caretStyle === `OFF`) return <Fragment />;

   return (
      <div
         style={{ top, left, ...caretTransitionStyle }}
         className={cn(caretCn, `flex items-center justify-center text-xs`)}
      />
   );
};

export default TypingCaret;
