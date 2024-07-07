"use client";

import { prevUserXpAtom, userDataLoadingAtom, userXpAtom } from "@atoms/user";
import { useAtomValue } from "jotai/index";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

export function useXpProgressToastCoords() {
   const userXp = useAtomValue(userXpAtom);
   const userXpPrev = useAtomValue(prevUserXpAtom);

   const session = useSession();
   const userDataLoading = useAtomValue(userDataLoadingAtom);

   const getAvatarElementCoords = useCallback(() => {
      const userAvatarElement = document.getElementById(`user-avatar`);
      if (userAvatarElement) {
         const rects = userAvatarElement.getBoundingClientRect();

         return {
            top: rects.top + rects.height,
            left: rects.left,
         };
      } else return null!;
   }, []);

   const [{ left, top }, setToastCoords] = useState<{
      top: number;
      left: number;
   }>(() => getAvatarElementCoords() ?? { top: 0, left: 0 });

   useEffect(() => {
      const coords = getAvatarElementCoords();
      if (coords) setToastCoords(coords);
   }, [userDataLoading, session]);

   useEffect(() => {
      if (userXp.points > userXpPrev?.points) {
         const coords = getAvatarElementCoords();
         if (coords) setToastCoords(coords);
      }
   }, [userXp]);

   return { left, top };
}
