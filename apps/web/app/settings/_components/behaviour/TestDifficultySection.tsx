"use client";
import { updateUserConfiguration } from "@app/settings/actions";
import { userTestDifficultyAtom } from "@atoms/user";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import { useAtom } from "jotai";
import { Star } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import SettingLayout from "../SettingLayout";

export interface TestDifficultySectionProps {}

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
];

const TestDifficultySection = ({}: TestDifficultySectionProps) => {
   const [test_difficulty, setTestDifficulty] = useAtom(userTestDifficultyAtom);
   const signedIn = useIsSignedIn();

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setTestDifficulty(res.data?.userConfig?.test_difficulty!);
         }
      },
   });

   function handleUpdate(value: string): void {
      if (signedIn) {
         execute({ test_difficulty: value });
      } else {
         setTestDifficulty(value);
      }
   }

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Star className={`fill-main text-main`} size={20} />
               <span className={`text-xl text-main`}>Difficulty</span>
            </h2>
            <p className={`mt-2 text-base text-secondary`}>
               Normal is the classic type test experience. Expert fails the test
               if you submit (press space) an incorrect word. Master fails if
               you press a single incorrect key (meaning you have to achieve
               100% accuracy).
            </p>
         </div>
         <div className={`my-auto flex h-full w-full items-center gap-2`}>
            {DIFFICULTIES.map(({ label, value }, index) => (
               <Button
                  onClick={(_) => handleUpdate(value)}
                  key={value}
                  variant={`default`}
                  className={cn(
                     `w-full shadow-md`,
                     value === test_difficulty && `bg-accent`
                  )}
               >
                  {label}
               </Button>
            ))}
         </div>
      </SettingLayout>
   );
};

export default TestDifficultySection;
