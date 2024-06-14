"use client";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import React from "react";
import { useSetAtom } from "jotai/index";
import { restartAtom } from "@atoms/editor";
import { RotateCw } from "lucide-react";

export interface RestartButtonProps {
}

const RestartButton = ({}: RestartButtonProps) => {
   const restart = useSetAtom(restartAtom);

   function handleRestart(): void {
      restart(undefined);
   }
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={handleRestart}
                  variant={`ghost`}
                  size={`icon`}>
                  <RotateCw size={18} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
               Restart
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default RestartButton;