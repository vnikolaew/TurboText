"use client";
import React from "react";
import { TimerState, useTimer } from "@app/_hooks/useTimer";
import { Button } from "@repo/ui";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   const { start, pause, timerState, currentTimestamp, resume } = useTimer(30);

   return (
      <div className={`w-full m-24 flex flex-col items-center gap-2j`}>
         <span>Current: {currentTimestamp}</span>
         <span>State: {timerState}</span>
         <Button onClick={_ => start()} variant={`default`}>Start</Button>
         {timerState === TimerState.PAUSED ? (
            <Button onClick={_ => resume()} variant={`outline`}>Resume</Button>
         ) : (
            <Button onClick={_ => pause()} variant={`outline`}>Pause</Button>
         )}
      </div>
   );
};

export default Page;