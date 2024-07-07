import { cn } from "@lib/utils";
import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

export interface InteractiveLinkProps
   extends React.HTMLAttributes<HTMLAnchorElement> {
   href: UrlObject | string;
   underlineClassname?: string;
}

export const InteractiveLink = ({
   href,
   underlineClassname,
   className,
   children,
   ...props
}: InteractiveLinkProps) => {
   return (
      <Link className={cn(`group relative`, className)} href={href} {...props}>
         {children}
         <span
            className={cn(
               `absolute -bottom-1 left-0 h-[1px] w-0 bg-white text-inherit transition-all duration-200 group-hover:w-full`,
               underlineClassname
            )}
         ></span>
      </Link>
   );
};
