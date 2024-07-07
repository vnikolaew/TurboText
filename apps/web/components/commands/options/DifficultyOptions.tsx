"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { userTestDifficultyAtom } from "@atoms/user";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai/index";
import { Check, ChevronRight, Star } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Fragment } from "react";

export interface DifficultyOptionsProps {}

const DIFFICULTIES = [
   {
      value: `NORMAL`,
      label: `Normal`,
   },
   {
      value: `EXPERT`,
      label: `Expert`,
   },
   {
      value: `MASTER`,
      label: `Master`,
   },
] as const;

const DifficultyOptions = ({}: DifficultyOptionsProps) => {
   const [difficulty, setDifficulty] = useAtom(userTestDifficultyAtom);

   const { execute, isExecuting } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res?.data?.success) {
            console.log(res);
            setDifficulty(res.data.userConfig?.test_difficulty);
         }
      },
   });
   return (
      <Fragment>
         {DIFFICULTIES.map(({ value, label }, index) => (
            <CommandItem
               value={`difficulty-${label}`}
               onSelect={(_) => execute({ test_difficulty: value })}
               key={label}
               className={`flex w-full cursor-pointer items-center gap-6`}
            >
               <div className={`flex items-center gap-2`}>
                  <Star className={`fill-neutral-300`} size={8} />
                  <span className={`text-xs`}>Difficulty</span>
                  <ChevronRight size={10} />
               </div>
               <span>{label}</span>
               {value === difficulty && (
                  <span className={`text-xs font-bold`}>
                     <Check size={12} className={`text-neutral-300`} />
                  </span>
               )}
            </CommandItem>
         ))}
      </Fragment>
   );
};

export default DifficultyOptions;
