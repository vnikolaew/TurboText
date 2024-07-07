import AnimatedProgress from "@app/(loading)/account/_components/AnimatedProgress";
import { getUserExperienceInfo } from "@app/(loading)/account/_queries";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";

export async function UserExperienceInfo() {
   const {
      percentageUntilNextLevel,
      xpNeededForNextLevel,
      level,
      userExperience,
   } = await getUserExperienceInfo();

   return (
      <div className={`flex w-full items-center gap-4`}>
         <TooltipProvider delayDuration={0}>
            <Tooltip>
               <TooltipTrigger asChild>
                  <span className={`text-lg text-main`}>{level}</span>
               </TooltipTrigger>
               <TooltipContent
                  side={`top`}
                  className={`rounded-xl !bg-secondary !px-4 !py-2 text-sm text-white`}
               >
                  {userExperience.label}
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
         <div className={`flex-1`}>
            <TooltipProvider delayDuration={0}>
               <Tooltip>
                  <TooltipTrigger asChild>
                     <AnimatedProgress value={percentageUntilNextLevel} />
                  </TooltipTrigger>
                  <TooltipContent
                     side={`top`}
                     className={`rounded-xl !bg-secondary !px-4 !py-2 text-sm text-white`}
                  >
                     {percentageUntilNextLevel.toFixed(2)}%
                  </TooltipContent>
               </Tooltip>
            </TooltipProvider>
         </div>

         <TooltipProvider delayDuration={0}>
            <Tooltip>
               <TooltipTrigger asChild>
                  <span
                     className={`cursor-pointer justify-self-end text-sm text-secondary`}
                  >
                     {userExperience?.points}/{xpNeededForNextLevel}
                  </span>
               </TooltipTrigger>
               <TooltipContent
                  side={`top`}
                  className={`rounded-xl border-none !bg-secondary !px-4 !py-2 text-sm text-main`}
               >
                  {xpNeededForNextLevel - userExperience?.points} xp until next
                  level
               </TooltipContent>
            </Tooltip>
         </TooltipProvider>
      </div>
   );
}
