import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { getUserExperienceInfo } from "@app/account/_queries";
import AnimatedProgress from "@app/account/_components/AnimatedProgress";


export async function UserExperienceInfo() {
   const {
      percentageUntilNextLevel,
      xpNeededForNextLevel,
      level,
      userExperience,
   } = await getUserExperienceInfo();

   return (
      <div className={`w-full flex items-center gap-4`}>
         <span className={`text-lg text-neutral-300`}>{level}</span>
         <div className={`flex-1`}>
            <TooltipProvider delayDuration={0}>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <AnimatedProgress value={percentageUntilNextLevel} />
                  </TooltipTrigger>
                  <TooltipContent
                     side={`top`}
                     className={`bg-black text-white rounded-xl text-sm  !px-4 !py-2`}>
                     {percentageUntilNextLevel.toFixed(2)}%
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>
         </div>

         <TooltipProvider delayDuration={0}>
            <Tooltip>
               <TooltipTrigger asChild>
                  <span
                     className={`justify-self-end text-neutral-500 text-sm cursor-pointer`}>{userExperience?.points}/{xpNeededForNextLevel}</span>
               </TooltipTrigger>
               <TooltipContent
                  side={`top`}
                  className={`bg-black text-white rounded-xl text-sm  !px-4 !py-2`}>
                  {xpNeededForNextLevel - userExperience?.points} xp until next level
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </div>
   );
}