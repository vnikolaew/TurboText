import { auth } from "@auth";
import React from "react";
import { xprisma } from "@repo/db";
import { Progress, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";

const EXPONENT = 1.2;

export async function UserExperienceInfo() {
   const session = await auth();
   const userExperience = await xprisma.userExperience.findFirst({
      where: { userId: session?.user?.id },
   });
   const level = xprisma.userExperience.getLevelFromXp({ points: userExperience?.points ?? 0 });

   const xpNeededForCurrentLevel = Math.floor((100 * Math.pow(level - 1, EXPONENT)));
   const xpNeededForNextLevel = Math.floor((100 * Math.pow(level, EXPONENT)));
   const percentageUntilNextLevel = ((userExperience?.points ?? 0) - xpNeededForCurrentLevel)
      / (xpNeededForNextLevel - xpNeededForCurrentLevel) * 100;

   console.log({ userExperience, level, xpNeededForCurrentLevel, xpNeededForNextLevel });

   return (
      <div className={`w-full flex items-center gap-4`}>
         <span className={`text-lg text-neutral-300`}>{level}</span>
         <div className={`flex-1`}>
            <TooltipProvider delayDuration={0}>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <Progress className={`w-full !h-2 cursor-pointer`} value={percentageUntilNextLevel} />
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