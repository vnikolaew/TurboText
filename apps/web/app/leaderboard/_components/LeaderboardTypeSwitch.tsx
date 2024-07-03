"use client";
import React from "react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { SquarePlay, Swords } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export interface LeaderboardTypeSwitchProps {
}

const MotionSwords = motion(Swords)
const MotionSquarePlay = motion(SquarePlay)

const LeaderboardTypeSwitch = ({}: LeaderboardTypeSwitchProps) => {
   const [challenges, setChallenges] = useQueryState(`challenges`, parseAsBoolean.withDefault(false));
   const router = useRouter()

   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger onClick={_ => {
               return setChallenges(challenges ? null : true).then(_ => router.refresh())
            }} className={`cursor-pointer`}>
               <AnimatePresence mode={`wait`}>
                  {challenges ? (
                     <MotionSwords
                        initial={{opacity: 0}}
                        animate={{opacity: 100}}
                        exit={{opacity: 0}}
                        transition={{ duration: .3}}

                        key={`swords`} className={`text-accent`} />
                  ) : (
                     <MotionSquarePlay
                        initial={{opacity: 0}}
                        animate={{opacity: 100}}
                        exit={{opacity: 0}}
                        transition={{ duration: .3}}
                        key={`square`} className={`text-accent`} />
                  )}
               </AnimatePresence>
            </TooltipTrigger>
            <TooltipContent
               side={`bottom`}
               className={`bg-black text-white rounded-xl text-sm border-neutral-700 !px-4 !py-2`}>
               {challenges ? (
                     <div className={`text-center`}>
                  <span>
                    Viewing challenges leaderboard.
                  </span>
                        <br />
                        <span>
                     Click to see runs leaderboard.
                  </span>
                     </div>
                  ) :
                  (
                     <div className={`text-center`}>
                  <span>
                    Viewing runs leaderboard.
                  </span>
                        <br />
                        <span>
                     Click to see challenges leaderboard.
                  </span>
                     </div>
                  )
               }
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default LeaderboardTypeSwitch;