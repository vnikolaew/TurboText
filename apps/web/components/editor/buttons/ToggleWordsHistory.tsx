"use client";
import React from "react";
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { BarChartHorizontal } from "lucide-react";
import { useAtom } from "jotai/index";
import { toggleWordsAtom } from "@atoms/editor";

export interface ToggleWordsHistoryProps {
}


const ToggleWordsHistory = ({}: ToggleWordsHistoryProps) => {
   const [toggleWords, setToggleWords] = useAtom(toggleWordsAtom);

   const handleToggleWordsHistory = () => setToggleWords(!toggleWords)

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={handleToggleWordsHistory}
                  className={`hover:!bg-transparent group`}
                  variant={`ghost`}
                  size={`icon`}>
                  <BarChartHorizontal className={`group-hover:!text-neutral-400  transition-colors duration-200 !text-main`} size={18} />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
               Toggle words history
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ToggleWordsHistory;