"use client";
import React, { useEffect, useMemo, useState } from "react";
import { prevUserXpAtom, userDataLoadingAtom, userXpAtom } from "@atoms/user";
import { useAtomValue } from "jotai";
import { useSession } from "next-auth/react";
import { Progress } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";

export interface OnRunSavedProps {
}

const EXPONENT = 1.2;

function percentageUntilNextLevel({ points }: { points: number }) {
   const level = Math.ceil(Math.pow((points / 100), 1 / EXPONENT));

   const xpNeededForCurrentLevel = Math.floor((100 * Math.pow(level - 1, EXPONENT)));
   const xpNeededForNextLevel = Math.floor((100 * Math.pow(level, EXPONENT)));

   console.log({ xpNeededForCurrentLevel, xpNeededForNextLevel });
   return (points - xpNeededForCurrentLevel)
      / (xpNeededForNextLevel - xpNeededForCurrentLevel) * 100;
};

const OnRunSaved = ({}: OnRunSavedProps) => {
   const userXp = useAtomValue(userXpAtom);
   const percentsUntilNextLevel = useMemo(() => percentageUntilNextLevel(userXp), [userXp]);

   const userXpPrev = useAtomValue(prevUserXpAtom);
   const xpGained = useMemo(() => userXp?.points - userXpPrev?.points, [userXp, userXpPrev]);

   const session = useSession();
   const userDataLoading = useAtomValue(userDataLoadingAtom);

   const [{ left, top }, setToastCoords] = useState<{ top: number, left: number }>(() => {
      const userAvatarElement = document.getElementById(`user-avatar`);
      if (userAvatarElement) {
         const rects = userAvatarElement.getBoundingClientRect();

         return {
            top: rects.top + rects.height,
            left: rects.left,
         };
      } else return { top: 0, left: 0 };
   });

   console.log({ userXp, userXpPrev, userDataLoading });

   useEffect(() => {
      const userAvatarElement = document.getElementById(`user-avatar`);
      if (userAvatarElement) {
         const rects = userAvatarElement.getBoundingClientRect();

         setToastCoords({
            top: rects.top + rects.height,
            left: rects.left,
         });
      }
   }, [userDataLoading, session]);

   useEffect(() => {
      if (userXp.points > userXpPrev?.points) {
         console.log(`Levelled up!`);
         const userAvatarElement = document.getElementById(`user-avatar`);
         if (userAvatarElement) {

            const rects = userAvatarElement.getBoundingClientRect();
            setToastCoords({
               top: rects.top + rects.height,
               left: rects.left,
            });
         }
      }
   }, [userXp]);

   return (userXp?.points >= userXpPrev?.points || true) && (
      <div style={{
        top, left
      }}
           className={`bg-neutral-700/30 text-amber-600 backdrop-blur-sm p-2 rounded-md absolute !z-[100] text-sm flex flex-col items-start gap-2`}>
         <span>
            Gaining XP: {userXpPrev?.points} XP -&gt; {userXp?.points} XP
         </span>
         <span>Percentage until next level: {percentsUntilNextLevel.toFixed(0)}%</span>
         <span className={`w-full inline-flex items-center gap-2`}>
            <Progress className={`flex-1 h-1 shadow-md`} value={percentsUntilNextLevel} />
            <AnimatePresence>
            {xpGained > 0 && (
               <motion.span
                  initial={{ opacity: 0 }}
                  transition={{ duration: .2 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                  key={`xp-gained`} className={`text-amber-600 drop-shadow-md`}>+{xpGained}XP</motion.span>
            )}
            </AnimatePresence>
         </span>
      </div>
   );
};

export default OnRunSaved;