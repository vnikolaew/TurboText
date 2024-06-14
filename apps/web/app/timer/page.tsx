"use client";
import React from "react";
import { Button } from "@repo/ui";
import { TypingRunState } from "@atoms/editor";
import { useTimer } from "@components/editor/hooks/useTimer";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   const { start, pause, timerState, currentTimestamp, resume } = useTimer();

   return (
      <div className={`w-full m-24 flex flex-col items-center gap-2j`}>
         <span>Current: {currentTimestamp}</span>
         <span>State: {timerState}</span>
         <Button onClick={_ => start()} variant={`default`}>Start</Button>
         {timerState === TypingRunState.PAUSED ? (
            <Button onClick={_ => resume()} variant={`outline`}>Resume</Button>
         ) : (
            <Button onClick={_ => pause()} variant={`outline`}>Pause</Button>
         )}
      </div>
   );
};

export default Page;