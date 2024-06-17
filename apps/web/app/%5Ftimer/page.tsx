"use client";
import { useAtom, useAtomValue } from "jotai";
import React from "react";
import {
   currentTimerStampAtom,
   pauseAtom,
   resumeAtom,
   runningAtom,
   startAtom,
   timerAtom,
   timerIntervalAtom,
} from "@app/%5Ftimer/atoms";
import { useSetAtom } from "jotai/index";
import { Button } from "@repo/ui";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   const [] = useAtom(timerAtom);
   const [intervalId] = useAtom(timerIntervalAtom);
   const timestamp = useAtomValue(currentTimerStampAtom);

   const start = useSetAtom(startAtom);
   const pause = useSetAtom(pauseAtom);
   const resume = useSetAtom(resumeAtom);
   const running = useAtomValue(runningAtom);

   return (
      <div
         className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 text-2xl w-full">
         <h2>
            Timer testing page.
         </h2>
         <span>Interval ID: {intervalId ?? `None`}</span>
         <span>Timestamp: {timestamp}s</span>
         <div className={`w-full flex items-center gap-4 justify-center `}>
            {!running && (
               <Button onClick={_ => start()}>Start</Button>
            )}
            {running && (
               <Button onClick={_ => pause()}>Pause</Button>
            )}
            {!running && (
               <Button onClick={_ => resume()}>Resume</Button>
            )}
         </div>

      </div>
   );
};

export default Page;