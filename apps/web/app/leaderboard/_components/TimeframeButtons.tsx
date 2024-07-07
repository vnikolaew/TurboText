"use client";
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { parseAsBoolean, useQueryState } from "nuqs";

export interface TimeframeButtonsProps {
   daily?: boolean;
}

const TimeframeButtons = ({ daily }: TimeframeButtonsProps) => {
   const [, setDaily] = useQueryState(
      `daily`,
      parseAsBoolean.withDefault(daily ?? false)
   );
   const router = useRouter();
   console.log({ daily });

   return (
      <div className={`flex items-center gap-4`}>
         <Button
            asChild
            variant={`secondary`}
            className={cn(
               `rounded-full px-8 shadow-md`,
               !daily && `bg-accent !text-black hover:!bg-accent`
            )}
         >
            <Link
               onClick={(_) => {
                  setDaily(null).then((_) => router.refresh());
               }}
               href={`/leaderboard`}
            >
               All-time
            </Link>
         </Button>
         <Button
            asChild
            variant={`secondary`}
            className={cn(
               `rounded-full px-8 shadow-md`,
               daily && `bg-accent !text-black hover:!bg-accent`
            )}
         >
            <Link
               onClick={(_) => {
                  setDaily(true).then((_) => router.refresh());
               }}
               href={`/leaderboard?daily=true`}
            >
               Daily
            </Link>
         </Button>
      </div>
   );
};

export default TimeframeButtons;
