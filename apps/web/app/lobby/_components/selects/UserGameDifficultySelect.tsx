"use client";
import { cn } from "@lib/utils";
import {
   Label,
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useMemo, useState } from "react";
import { UserDifficulty, userSelectedDifficultyAtom } from "../../_atoms";
import { getUserAverageWpm } from "@app/lobby/actions";

export interface UserGameDifficultySelectProps {}

export const UserGameDifficultySelect = ({}: UserGameDifficultySelectProps) => {
   const session = useSession();
   const setUserDifficulty = useSetAtom(userSelectedDifficultyAtom);
   const [userAvgWpm, setUserAvgWpm] = useState(0);

   const difficultyCategories = useMemo<Record<
      UserDifficulty,
      [number, number]
   > | null>(() => {
      if (userAvgWpm === 0) return null;

      const MEDIUM = [
         Math.floor(userAvgWpm / 10) * 10,
         Math.floor(userAvgWpm / 10) * 10 + 10,
      ] as const;
      return {
         EASY: [MEDIUM[0] - 10, MEDIUM[0]],
         MEDIUM: MEDIUM,
         HARD: [MEDIUM[1], MEDIUM[1] + 10],
      };
   }, [userAvgWpm]);

   const { execute: getAvgWpm, isExecuting } = useAction(getUserAverageWpm, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res.data.avgWpm);
            setUserAvgWpm(res.data.avgWpm);
         }
      },
   });
   useEffect(() => {
      if (session.status === `authenticated`) {
         getAvgWpm({ userId: session?.data.user!.id! });
      }
   }, [session.status]);

   return (
      <div className={`flex flex-col items-start gap-2`}>
         <Label>Difficulty:</Label>
         <Select onValueChange={(d) => setUserDifficulty(d as UserDifficulty)}>
            <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
               <SelectValue placeholder={UserDifficulty.MEDIUM} />
            </SelectTrigger>
            <SelectContent className={`!z-[100] !rounded-lg !bg-secondary-bg`}>
               {Object.values(UserDifficulty).map((d, index) => (
                  <SelectItem
                     className={cn(
                        `cursor-pointer !rounded-md !text-main transition-colors duration-100 hover:!bg-accent hover:!text-main`,
                        d === UserDifficulty.EASY && `hover:!bg-green-500`,
                        d === UserDifficulty.MEDIUM && `hover:!bg-orange-500`,
                        d === UserDifficulty.HARD && `hover:!bg-red-500`
                     )}
                     key={d}
                     value={d}
                  >
                     {d}{" "}
                     {difficultyCategories &&
                        `(${difficultyCategories[d][0]} - ${difficultyCategories[d][1]} WPM)`}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
         <span
            className={`mt-1 max-w-[300px] text-wrap text-xs text-secondary`}
         >
            Note that difficulty is relative to your current skill level.
         </span>
      </div>
   );
};
