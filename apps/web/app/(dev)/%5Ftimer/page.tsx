"use client";
import {
   currentTimerStampAtom,
   pauseAtom,
   resumeAtom,
   runningAtom,
   startAtom,
   timerAtom,
   timerIntervalAtom,
} from "@app/(dev)/%5Ftimer/atoms";
import { Button } from "@repo/ui";
import { useAtom, useAtomValue } from "jotai";
import { useSetAtom } from "jotai/index";

export interface PageProps {}

const Page = ({}: PageProps) => {
   const [] = useAtom(timerAtom);
   const [intervalId] = useAtom(timerIntervalAtom);
   const timestamp = useAtomValue(currentTimerStampAtom);

   const start = useSetAtom(startAtom);
   const pause = useSetAtom(pauseAtom);
   const resume = useSetAtom(resumeAtom);
   const running = useAtomValue(runningAtom);

   return (
      <div className="flex min-h-screen w-full flex-col items-center justify-start gap-16 p-8 pb-20 font-sans text-2xl sm:p-20">
         <h2>Timer testing page.</h2>
         <span>Interval ID: {intervalId ?? `None`}</span>
         <span>Timestamp: {timestamp}s</span>
         <div className={`flex w-full items-center justify-center gap-4`}>
            {!running && <Button onClick={(_) => start()}>Start</Button>}
            {running && <Button onClick={(_) => pause()}>Pause</Button>}
            {!running && <Button onClick={(_) => resume()}>Resume</Button>}
         </div>
      </div>
   );
};

export default Page;
