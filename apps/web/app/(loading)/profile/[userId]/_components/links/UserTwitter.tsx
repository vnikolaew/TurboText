"use client";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Twitter } from "lucide-react";
import Link from "next/link";
import { P, match } from "ts-pattern";

export interface UserTwitterProps {
   twitter?: string;
}

const UserTwitter = ({ twitter }: UserTwitterProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               {match(twitter)
                  .with(P.string.minLength(1), (t) => (
                     <Link
                        target={`_blank`}
                        href={`https://www.twitter.com/${encodeURIComponent(t)}`}
                     >
                        <Twitter
                           size={32}
                           className={`cursor-pointer fill-secondary stroke-secondary transition-colors duration-200 hover:!fill-accent hover:!stroke-accent`}
                        />
                     </Link>
                  ))
                  .otherwise((_) => (
                     <Twitter
                        size={32}
                        className={`cursor-pointer fill-secondary stroke-secondary transition-colors duration-200 hover:!fill-accent hover:!stroke-accent`}
                     />
                  ))}
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`rounded-xl border-none bg-secondary-bg !px-4 !py-2 text-sm text-main`}
            >
               {twitter ?? `Unspecified`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default UserTwitter;
