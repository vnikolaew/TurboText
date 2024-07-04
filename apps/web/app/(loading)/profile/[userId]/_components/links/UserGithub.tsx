"use client";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";

export interface UserGithubProps {
   github?: string;
}

const UserGithub = ({github}: UserGithubProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               {github ? (
                  <Link target={"_blank"}
                        href={`https://www.github.com/${encodeURIComponent(github)}`}>
                     <Github size={32}
                             className={`cursor-pointer stroke-secondary fill-secondary hover:!fill-accent hover:!stroke-accent transition-colors duration-200`} />
                  </Link>
               ) : (
                  <Github size={32}
                          className={`cursor-pointer stroke-secondary fill-secondary hover:!fill-accent hover:!stroke-accent transition-colors duration-200`} />
               )}
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`bg-secondary-bg text-main rounded-xl text-sm border-none !px-4 !py-2`}>
               {github ?? `Unspecified`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default UserGithub;