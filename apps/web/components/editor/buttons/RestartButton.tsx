"use client";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import React from "react";
import { useSetAtom } from "jotai/index";
import { RotateCw } from "lucide-react";
import { restartAtom } from "@atoms/actions";

export interface RestartButtonProps {
}

const RestartButton = ({}: RestartButtonProps) => {
   const restart = useSetAtom(restartAtom);

   function handleRestart(): void {
      restart();
   }

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={handleRestart}
                  className={`hover:!bg-transparent group`}
                  variant={`ghost`}
                  size={`icon`}>
                  <RotateCw className={`group-hover:!text-neutral-400  transition-colors duration-200 !text-main`} size={18} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
               Restart test
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default RestartButton;