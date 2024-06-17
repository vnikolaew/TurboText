"use client";
import React, { PropsWithChildren, useMemo, useState } from "react";
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input } from "@repo/ui";
import { useAtom } from "jotai/index";
import {  timeAtom } from "@atoms/timer";

function parseTimeframe(timeframe: string) {
   // Regular expression to match the components
   const regex = /(\d+h)?(\d+m)?(\d+s)?/;
   const match = regex.exec(timeframe);

   // Extract the matched parts
   const hoursPart = match[1] ? parseInt(match[1].slice(0, -1)) : 0;
   const minutesPart = match[2] ? parseInt(match[2].slice(0, -1)) : 0;
   const secondsPart = match[3] ? parseInt(match[3].slice(0, -1)) : 0;

   // Calculate the total time in seconds
   const totalSeconds = (hoursPart * 3600) + (minutesPart * 60) + secondsPart;

   return {
      hours: hoursPart,
      minutes: minutesPart,
      seconds: secondsPart,
      totalSeconds: totalSeconds,
   };
}

type Timeframe = ReturnType<typeof parseTimeframe>

export interface CustomTimeConfigModalProps {
   open: boolean;
   setOpen: (value: boolean) => void;
}

export const Kbd = ({ children }: PropsWithChildren) => {
   return (
      <kbd className={`bg-slate-300 text-neutral-800 rounded-md !px-1`}>{children}</kbd>
   );
};

const CustomTimeConfigModal = ({ setOpen, open }: CustomTimeConfigModalProps) => {
   const [value, setValue] = useState(``);
   const [time, setTime] = useAtom(timeAtom);
   const [timeframe, setTimeframe] = useState<Timeframe>({
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
   });

   const timeFrameTitle = useMemo(() => {
      const parts = [];
      if (timeframe.hours > 0) parts.push(`${timeframe.hours} hour`);
      if (timeframe.minutes > 0) parts.push(`${timeframe.minutes} minutes`);
      if (timeframe.seconds > 0) parts.push(`${timeframe.seconds} seconds`);

      if (!parts.length) return ``;
      if (parts.length === 1) return parts[0];

      return parts.slice(0, -1).join(`, `) + ` and ${parts.at(-1)}`;
   }, [timeframe]);

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger></DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>
                  Test duration
               </DialogTitle>
            </DialogHeader>
            <div className={`flex flex-col gap-2 items-start`}>
               <div className={`text-sm`}>
                  {timeFrameTitle}
               </div>
               <Input
                  onChange={e => {
                     setValue(e.target.value);
                     setTimeframe(parseTimeframe(e.target.value));
                  }}
                  value={value}
                  className={`w-full border-neutral-500 rounded-full`} />
               <p className={`text-sm mt-2 text-neutral-400`}>
                  You can use "h" for hours and "m" for minutes, for example "1h30m".
               </p>

               <p className={`text-sm mt-4 text-neutral-400`}>
                  You can start an infinite test by inputting 0. Then, to stop the test, use the Bail Out feature
                  ( <Kbd>esc</Kbd>
                  or <Kbd>ctrl/cmd</Kbd> + <Kbd>shift</Kbd> + <Kbd>p</Kbd> &gt; Bail Out)
               </p>
            </ div>
            <DialogFooter className={`mt-4`}>
               <Button onClick={_ => {
                  if (Number.isNaN(Number(value))) console.log(`Input is not a number`);
                  setTime(Number(value));
                  setOpen(false);
               }} variant={`default`} className={`w-full`}>OK</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>);
};

export default CustomTimeConfigModal;