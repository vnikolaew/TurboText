"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import Link from "next/link";
import React from "react";
import { Twitter } from "lucide-react";

export interface UserTwitterProps {
   twitter?: string;
}

const UserTwitter = ({twitter}: UserTwitterProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               {twitter ? (
                  <Link target={`_blank`}
                        href={`https://www.twitter.com/${encodeURIComponent(twitter)}`}>
                     <Twitter size={32}
                              className={`cursor-pointer stroke-secondary fill-secondary hover:!fill-accent hover:!stroke-accent transition-colors duration-200`} />
                  </Link>
               ) : (
                  <Twitter size={32}
                           className={`cursor-pointer stroke-secondary fill-secondary hover:!fill-accent hover:!stroke-accent transition-colors duration-200`} />
               )}
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
               {twitter ?? `Unspecified`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default UserTwitter;