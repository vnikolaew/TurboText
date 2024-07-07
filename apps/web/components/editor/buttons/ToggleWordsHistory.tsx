"use client";
import { toggleWordsAtom } from "@atoms/editor";
import {
   Button,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { useAtom } from "jotai/index";
import { BarChartHorizontal } from "lucide-react";

export interface ToggleWordsHistoryProps {}

const ToggleWordsHistory = ({}: ToggleWordsHistoryProps) => {
   const [toggleWords, setToggleWords] = useAtom(toggleWordsAtom);

   const handleToggleWordsHistory = () => setToggleWords(!toggleWords);

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={handleToggleWordsHistory}
                  className={`group hover:!bg-transparent`}
                  variant={`ghost`}
                  size={`icon`}
               >
                  <BarChartHorizontal
                     className={`!text-main transition-colors duration-200 group-hover:!text-neutral-400`}
                     size={18}
                  />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
            >
               Toggle words history
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ToggleWordsHistory;
