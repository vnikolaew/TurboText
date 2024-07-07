"use client";
import { isValidUrl } from "@lib/strings";
import { normalizeURL } from "@lib/utils";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Globe } from "lucide-react";
import Link from "next/link";
import { match } from "ts-pattern";

export interface UserWebsiteProps {
   website?: string;
}

const UserWebsite = ({ website }: UserWebsiteProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               {match(website && isValidUrl(website))
                  .with(true, (_) => (
                     <Link
                        target={`_blank`}
                        href={`${normalizeURL(encodeURIComponent(website!))}`}
                     >
                        <Globe
                           size={32}
                           className={`cursor-pointer stroke-secondary transition-colors duration-200 hover:!stroke-accent`}
                        />
                     </Link>
                  ))
                  .otherwise((_) => (
                     <Globe
                        size={32}
                        className={`cursor-pointer stroke-secondary transition-colors duration-200 hover:!stroke-accent`}
                     />
                  ))}
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`rounded-xl border-none bg-secondary-bg !px-4 !py-2 text-sm text-main`}
            >
               {website ?? `No website`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default UserWebsite;
