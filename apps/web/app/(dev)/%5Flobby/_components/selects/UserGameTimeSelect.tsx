"use client";
import React from "react";
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { userSelectedTimeAtom } from "@app/(dev)/%5Flobby/_atoms";
import { TIMES } from "@atoms/timer";

export interface UserGameTimeSelectProps {
}

export const UserGameTimeSelect = ({}: UserGameTimeSelectProps) => {
   const setUserTime = useSetAtom(userSelectedTimeAtom)

   return (
      <div className={`flex flex-col items-start gap-2`}>
         <Label>Time (seconds):</Label>
         <Select
            onValueChange={t => setUserTime(Number(t))}
         >
            <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
               <SelectValue placeholder={TIMES[10].toFixed(0)} />
            </SelectTrigger>
            <SelectContent className={`!bg-secondary-bg !rounded-lg !z-[100] `}>
               {Object.values(TIMES).map((time, index) => (
                  <SelectItem
                     className={`!rounded-md cursor-pointer hover:!bg-accent hover:!text-main transition-colors duration-100 !text-main`}
                     key={time.toFixed(0)} value={time.toFixed(0)}>{time}</SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
};
