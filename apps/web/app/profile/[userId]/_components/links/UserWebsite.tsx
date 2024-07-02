"use client";
import { isValidUrl, normalizeURL } from "@lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface UserWebsiteProps {
   website?: string;
}

const UserWebsite = ({ website }: UserWebsiteProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               {website && isValidUrl(website) ? (
                  <Link
                     target={`_blank`}
                     href={`${normalizeURL(encodeURIComponent(website))}`}>
                     <Globe size={32}
                            className={`cursor-pointer stroke-secondary  hover:!stroke-accent transition-colors duration-200`} />
                  </Link>
               ) : (
                  <Globe size={32}
                         className={`cursor-pointer stroke-secondary hover:!stroke-accent transition-colors duration-200`} />
               )}
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
               {website ?? `No website`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default UserWebsite;