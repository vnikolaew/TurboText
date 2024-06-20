"use client"

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useAtomValue } from "jotai/index";
import { prevUserXpAtom, userDataLoadingAtom, userXpAtom } from "@atoms/user";

export function useXpProgressToastCoords() {
   const userXp = useAtomValue(userXpAtom);
   const userXpPrev = useAtomValue(prevUserXpAtom);

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

   return { left, top };
}