"use client";
import { newTestAtom } from "@atoms/actions";
import {
   Button,
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { ChevronRight } from "lucide-react";

export interface NewRunButtonProps {}

const NewRunButton = ({}: NewRunButtonProps) => {
   const newTest = useSetAtom(newTestAtom);

   async function handleNewTest() {
      await newTest();
   }

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button
                  onClick={handleNewTest}
                  className={`group hover:!bg-transparent`}
                  variant={`ghost`}
                  size={`icon`}
               >
                  <ChevronRight
                     className={`!text-main transition-colors duration-200 group-hover:!text-neutral-400`}
                     size={18}
                  />
               </Button>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
            >
               New test
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default NewRunButton;
