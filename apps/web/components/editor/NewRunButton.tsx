"use client"
import React from "react";
import { useSetAtom } from "jotai/index";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { ChevronRight } from "lucide-react";
import { newTestAtom } from "@atoms/actions";

export interface NewRunButtonProps {
}

const NewRunButton = ({}: NewRunButtonProps) => {
   const newTest = useSetAtom(newTestAtom);

   function handleNewTest(): void {
      newTest();
   }

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={handleNewTest}
                  className={`hover:!bg-transparent group`}
                  variant={`ghost`}
                  size={`icon`}>
                  <ChevronRight className={`group-hover:!text-neutral-400  transition-colors duration-200`} size={18} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
               New test
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default NewRunButton;