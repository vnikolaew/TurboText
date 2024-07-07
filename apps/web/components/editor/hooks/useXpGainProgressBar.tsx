"use client";

import { prevUserXpAtom, userXpAtom } from "@atoms/user";
import { useBoolean } from "@hooks/useBoolean";
import { useAtomValue } from "jotai/index";
import { useEffect, useMemo, useState } from "react";

const EXPONENT = 1.2;

function percentageUntilNextLevel({ points }: { points: number }) {
   const level = Math.floor(Math.pow(points / 100, 1 / EXPONENT)) + 1;

   const xpNeededForCurrentLevel = Math.floor(
      100 * Math.pow(level - 1, EXPONENT)
   );
   const xpNeededForNextLevel = Math.floor(100 * Math.pow(level, EXPONENT));

   console.log({ xpNeededForCurrentLevel, xpNeededForNextLevel, level });
   return (
      ((points - xpNeededForCurrentLevel) /
         (xpNeededForNextLevel - xpNeededForCurrentLevel)) *
      100
   );
}

export function useXpGainProgressBar() {
   const userXp = useAtomValue(userXpAtom);
   const currentLevel = useMemo(
      () => Math.ceil(Math.pow(userXp.points / 100, 1 / EXPONENT)),
      [userXp]
   );
   const userXpPrev = useAtomValue(prevUserXpAtom);

   const percentsUntilNextLevel = useMemo(
      () => percentageUntilNextLevel(userXp),
      [userXp]
   );
   const xpGained = useMemo(
      () => userXp?.points - userXpPrev?.points,
      [userXp, userXpPrev]
   );

   const [showProgressAnimation, setShowProgressAnimation] = useBoolean();
   const [progressValue, setProgressValue] = useState(0);

   useEffect(() => {
      let showTimeoutId: NodeJS.Timeout;
      let hideTimeoutId: NodeJS.Timeout;
      let changePercentageValue: NodeJS.Timeout;

      if (userXp?.points > userXpPrev?.points) {
         const percentXp = percentageUntilNextLevel(userXp);
         const percentXpPrev = percentageUntilNextLevel(userXpPrev);
         setProgressValue(percentXpPrev);

         showTimeoutId = setTimeout(() => setShowProgressAnimation(true), 1000);
         hideTimeoutId = setTimeout(
            () => setShowProgressAnimation(false),
            4000
         );
         changePercentageValue = setTimeout(
            () => setProgressValue(percentXp),
            1500
         );
      }

      return () => {
         clearTimeout(showTimeoutId);
         clearTimeout(hideTimeoutId);
         clearTimeout(changePercentageValue);
      };
   }, [userXp, xpGained]);

   return {
      progressValue,
      showProgressAnimation,
      xpGained,
      percentsUntilNextLevel,
      currentLevel,
   };
}
