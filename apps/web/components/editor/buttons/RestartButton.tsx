"use client";
import { restartAtom } from "@atoms/actions";
import {
   Button,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { RotateCw } from "lucide-react";

export interface RestartButtonProps {}

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
                  className={`group hover:!bg-transparent`}
                  variant={`ghost`}
                  size={`icon`}
               >
                  <RotateCw
                     className={`!text-main transition-colors duration-200 group-hover:!text-neutral-400`}
                     size={18}
                  />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
            >
               Restart test
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default RestartButton;
