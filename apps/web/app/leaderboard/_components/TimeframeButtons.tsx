import { cn } from "@lib/utils";
import { Button } from "@repo/ui";
import Link from "next/link";
import React from "react";

export interface TimeframeButtonsProps {
   daily?: boolean
}

const TimeframeButtons = ({daily}: TimeframeButtonsProps) => {
   return (
      <div className={`flex items-center gap-4`}>
         <Button asChild variant={`secondary`}
                 className={cn(`rounded-full shadow-md px-8 `,
                    !daily && `bg-accent hover:!bg-accent !text-black`)}>
            <Link href={`/leaderboard`}>
               All-time
            </Link>
         </Button>
         <Button asChild variant={`secondary`} className={cn(`rounded-full shadow-md px-8`,
            daily && `bg-accent hover:!bg-accent !text-black`)}>
            <Link href={`/leaderboard?daily=true`}>
               Daily
            </Link>
         </Button>
      </div>
   );
};

export default TimeframeButtons;