"use client"
import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import Link from "next/link";
import React from "react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { useRouter } from "next/navigation";

export interface TimeframeButtonsProps {
   daily?: boolean;
}

const TimeframeButtons = ({ daily }: TimeframeButtonsProps) => {
   const [, setDaily] = useQueryState(`daily`, parseAsBoolean.withDefault(daily ?? false));
   const router = useRouter()
   console.log({ daily });

   return (
      <div className={`flex items-center gap-4`}>
         <Button asChild variant={`secondary`}
                 className={cn(`rounded-full shadow-md px-8 `,
                    !daily && `bg-accent hover:!bg-accent !text-black`)}>
            <Link onClick={_ => {
               setDaily(null).then(_ => router.refresh())
            }}  href={`/leaderboard`}>
               All-time
            </Link>
         </Button>
         <Button asChild variant={`secondary`} className={cn(`rounded-full shadow-md px-8`,
            daily && `bg-accent hover:!bg-accent !text-black`)}>
            <Link
               onClick={_ => {
                  setDaily(true).then(_ => router.refresh())
               }}
               href={`/leaderboard?daily=true`}>
               Daily
            </Link>
         </Button>
      </div>
   );
};

export default TimeframeButtons;