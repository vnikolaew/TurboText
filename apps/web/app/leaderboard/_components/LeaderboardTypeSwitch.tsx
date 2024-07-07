"use client";
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { SquarePlay, Swords } from "lucide-react";
import { useRouter } from "next/navigation";
import { parseAsBoolean, useQueryState } from "nuqs";

export interface LeaderboardTypeSwitchProps {}

const MotionSwords = motion(Swords);
const MotionSquarePlay = motion(SquarePlay);

const LeaderboardTypeSwitch = ({}: LeaderboardTypeSwitchProps) => {
   const [challenges, setChallenges] = useQueryState(
      `challenges`,
      parseAsBoolean.withDefault(false)
   );
   const router = useRouter();

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger
               onClick={(_) => {
                  return setChallenges(challenges ? null : true).then((_) =>
                     router.refresh()
                  );
               }}
               className={`cursor-pointer`}
            >
               <AnimatePresence mode={`wait`}>
                  {challenges ? (
                     <MotionSwords
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 100 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        key={`swords`}
                        className={`text-accent`}
                     />
                  ) : (
                     <MotionSquarePlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 100 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        key={`square`}
                        className={`text-accent`}
                     />
                  )}
               </AnimatePresence>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`rounded-xl border-neutral-700 bg-black !px-4 !py-2 text-sm text-white`}
            >
               {challenges ? (
                  <div className={`text-center`}>
                     <span>Viewing challenges leaderboard.</span>
                     <br />
                     <span>Click to see runs leaderboard.</span>
                  </div>
               ) : (
                  <div className={`text-center`}>
                     <span>Viewing runs leaderboard.</span>
                     <br />
                     <span>Click to see challenges leaderboard.</span>
                  </div>
               )}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default LeaderboardTypeSwitch;
