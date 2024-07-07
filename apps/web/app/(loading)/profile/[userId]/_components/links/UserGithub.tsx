"use client";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { Github } from "lucide-react";
import Link from "next/link";
import { P, match } from "ts-pattern";

export interface UserGithubProps {
   github?: string;
}

const UserGithub = ({ github }: UserGithubProps) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               {match(github)
                  .with(P.string.minLength(1), (g) => (
                     <Link
                        target={"_blank"}
                        href={`https://www.github.com/${encodeURIComponent(g)}`}
                     >
                        <Github
                           size={32}
                           className={`cursor-pointer fill-secondary stroke-secondary transition-colors duration-200 hover:!fill-accent hover:!stroke-accent`}
                        />
                     </Link>
                  ))
                  .otherwise((_) => (
                     <Github
                        size={32}
                        className={`cursor-pointer fill-secondary stroke-secondary transition-colors duration-200 hover:!fill-accent hover:!stroke-accent`}
                     />
                  ))}
            </TooltipTrigger>
            <TooltipContent
               side={`top`}
               className={`rounded-xl border-none bg-secondary-bg !px-4 !py-2 text-sm text-main`}
            >
               {github ?? `Unspecified`}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default UserGithub;
