"use client";
import { userSelectedTimeAtom } from "@app/lobby/_atoms";
import { TIMES } from "@atoms/timer";
import {
   Label,
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { Timer } from "lucide-react";

export interface UserGameTimeSelectProps {}

export const UserGameTimeSelect = ({}: UserGameTimeSelectProps) => {
   const setUserTime = useSetAtom(userSelectedTimeAtom);

   return (
      <div className={`flex flex-col items-start gap-2`}>
         <Label className={`inline-flex items-center gap-2`}>
            <Timer className={`text-accent`} size={14} />
            Time (seconds):
         </Label>
         <Select onValueChange={(t) => setUserTime(Number(t))}>
            <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
               <SelectValue placeholder={TIMES[10].toFixed(0)} />
            </SelectTrigger>
            <SelectContent className={`!z-[100] !rounded-lg !bg-secondary-bg`}>
               {Object.values(TIMES).map((time, index) => (
                  <SelectItem
                     className={`cursor-pointer !rounded-md !text-main transition-colors duration-100 hover:!bg-accent hover:!text-main`}
                     key={time.toFixed(0)}
                     value={time.toFixed(0)}
                  >
                     {time}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
};
