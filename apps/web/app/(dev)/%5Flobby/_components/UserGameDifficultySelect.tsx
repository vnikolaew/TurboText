"use client";
import React from "react";
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { UserDifficulty, userSelectedDifficultyAtom } from "../_atoms";
import { cn } from "@lib/utils";

export interface UserGameDifficultySelectProps {
}

const UserGameDifficultySelect = ({}: UserGameDifficultySelectProps) => {
   const setUserDifficulty = useSetAtom(userSelectedDifficultyAtom)

   return (
      <div className={`flex flex-col items-start gap-2`}>
         <Label>Difficulty:</Label>
         <Select
            onValueChange={d => setUserDifficulty(d as UserDifficulty)}
         >
            <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
               <SelectValue placeholder={UserDifficulty.MEDIUM} />
            </SelectTrigger>
            <SelectContent className={`!bg-secondary-bg !rounded-lg !z-[100] `}>
               {Object.values(UserDifficulty).map((d, index) => (
                  <SelectItem
                     className={cn(`!rounded-md cursor-pointer hover:!bg-accent hover:!text-main transition-colors duration-100 !text-main`,
                     d === UserDifficulty.EASY && `hover:!bg-green-500`,
                        d === UserDifficulty.MEDIUM && `hover:!bg-orange-500`,
                        d === UserDifficulty.HARD && `hover:!bg-red-500`,
                     )}
                     key={d} value={d}>{d}</SelectItem>
               ))}
            </SelectContent>
         </Select>
         <span className={`text-secondary mt-1 text-xs max-w-[300px] text-wrap`}>Note that difficulty is relative to your current skill level.</span>
      </div>
   );
};

export default UserGameDifficultySelect;