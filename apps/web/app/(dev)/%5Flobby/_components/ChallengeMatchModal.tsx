"use client";
import React, { useEffect, useMemo, useState } from "react";
import { ChallengeState, currentUserMatchAtom } from "@app/(dev)/%5Flobby/hooks/useTypingChallenge";
import {
   Button,
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   Progress,
   Skeleton,
   UserAvatar,
} from "@repo/ui";
import { User } from "@repo/db";
import { useBoolean } from "@hooks/useBoolean";
import { useAtom } from "jotai/index";
import { UserAcceptState, userAcceptStateAtom } from "@app/(dev)/%5Flobby/_atoms";
import { useAtomValue } from "jotai";
import { getUserDetails } from "@app/(dev)/%5Flobby/_queries";

export interface ChallengeMatchModalProps {
   open: boolean;
   onAccept: () => void | Promise<void>;
   onReject: () => void | Promise<void>;
}


const ChallengeMatchModal = ({ open, onAccept, onReject }: ChallengeMatchModalProps) => {
   const [opponentDetails, setOpponentDetails] = useState<User>();
   const [userLoading, setUserLoading] = useBoolean();
   const [currentMatch, setCurrentMatch] = useAtom(currentUserMatchAtom);
   const userAcceptState = useAtomValue(userAcceptStateAtom);

   const percentageUntilNextLevel = useMemo(() => {
      if (!opponentDetails) return 0;

      const EXPONENT = 1.2;
      const level = opponentDetails?.experience?.level ?? 0;
      const xpNeededForCurrentLevel = Math.floor((100 * Math.pow(level - 1, EXPONENT)));
      const xpNeededForNextLevel = Math.floor((100 * Math.pow(level, EXPONENT)));

      return ((opponentDetails?.experience?.points ?? 0) - xpNeededForCurrentLevel)
         / (xpNeededForNextLevel - xpNeededForCurrentLevel) * 100;
   }, [opponentDetails]);

   useEffect(() => {
      if (!currentMatch.matchedUserId) {
         setCurrentMatch({
            "matchedUserId": "cly13xu5o0000vpgulhtyguwb",
            "matchId": "52b7caf6-14b3-49f0-bf94-95762159a483",
            "state": ChallengeState.Found,
            "userOneAccepted": false,
            "userTwoAccepted": false,
         });
      }
   }, []);

   useEffect(() => {
      (async () => {
         setUserLoading(true);
         const user = await getUserDetails(currentMatch.matchedUserId);
         if (user) setOpponentDetails(user);
         setUserLoading(false);
      })();

   }, [currentMatch?.matchedUserId]);

   return (
      <Dialog modal open={open}>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Found an opponent!</DialogTitle>
            </DialogHeader>
            <div className={`mt-8`}>
               {userLoading && <UserLoadingSkeleton />}
               {opponentDetails && (
                  <div className={`flex flex-col items-center gap-2`}>
                     <div className={`flex items-center gap-2 `}>
                        <UserAvatar imageSrc={opponentDetails.image!} />
                        <div className={`flex flex-col items-start gap-2`}>
                           <span>{opponentDetails.name}</span>
                           <div className={`flex items-center gap-2`}>
                              <span className={`text-accent text-sm`}>{opponentDetails.experience.level - 1}</span>
                              <Progress className={`w-[200px] !bg-secondary-bg !h-2`}
                                        value={percentageUntilNextLevel} />
                              <span className={`text-accent text-sm`}>{opponentDetails.experience.level}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
               {currentMatch?.userTwoAccepted && (
                  <div>{opponentDetails?.name} accepted the challenge.</div>
               )}

               {userAcceptState === UserAcceptState.Accepted && (
                  <div>You've already accepted the challenge.</div>
               )}
            </div>
            <DialogFooter className={`!mt-12 w-full items-center flex justify-between gap-4`}>
               <Button onClick={onReject} className={`flex-1`} variant={"destructive"}>
                  Reject
               </Button>
               <Button onClick={onAccept} className={`flex-1`} variant={"default"}>
                  Accept
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

const UserLoadingSkeleton = () => {
   return (
      <div className={`flex flex-col items-center gap-2`}>
         <div className={`flex items-center gap-2 `}>
            <Skeleton className={`rounded-full w-12 h-12 !bg-secondary-bg`} />
            <div className={`flex flex-col items-start gap-2`}>
               <Skeleton className={`w-[200px] !bg-secondary-bg !h-4`} />
               <div className={`flex items-center gap-2`}>
                  <Skeleton className={`text-sm w-3 !h-2 !bg-secondary-bg`} />
                  <Skeleton className={`w-[160px]  !h-2 !bg-secondary-bg`} />
                  <Skeleton className={`text-sm w-3 !h-2 !bg-secondary-bg`} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChallengeMatchModal;