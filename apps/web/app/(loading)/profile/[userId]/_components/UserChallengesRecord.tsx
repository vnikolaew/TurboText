"use client";
import { challengePlayer } from "@app/lobby/actions";
import { TOASTS } from "@config/toasts";
import { useBoolean } from "@hooks/useBoolean";
import { CHANEL_NAME } from "@providers";
import { Button, toast } from "@repo/ui";
import { Swords } from "lucide-react";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useChannel } from "@hooks/websocket";

export interface UserChallengesRecordProps {
   record: {
      wins: number;
      losses: number;
      draws: number;
   };
   withChallenge?: boolean;
   userId?: string;
   username?: string;
}

export enum EventType {
   ChallengeUser = "challenge-user",
   ChallengeStarted = "challenge-started",
   Rejected = "rejected",
}

const UserChallengesRecord = ({
   record: { wins, losses, draws },
   withChallenge = true,
   userId,
   username,
}: UserChallengesRecordProps) => {
   const router = useRouter();
   const session = useSession();
   const [challenged, setChallenged] = useBoolean();

   const {clientId } = useChannel(CHANEL_NAME, async (message) => {
      if (
         message.messageName === EventType.ChallengeStarted &&
         ((message.data.acceptedByUserId === session.data?.user?.id &&
            message.data.matchedUserId === userId) ||
            (message.data.acceptedByUserId === userId &&
               message.data.matchedUserId === session.data?.user?.id))
      ) {
         console.log(`Challenge started!`, message);
         toast(TOASTS.CHALLENGE_ACCEPTED_BY_OPPONENT(username!));

         setTimeout(() => {
            router.push(`/game/${message.data.gameId!}`);
         }, 2000);
      }

      if (
         message.messageName === EventType.Rejected &&
         ((message.data.rejectedByUserId === session.data?.user?.id &&
            message.data.matchedUserId === userId) ||
            (message.data.rejectedByUserId === userId &&
               message.data.matchedUserId === session.data?.user?.id))
      ) {
         console.log(`Challenge rejected!`, message);
         toast(TOASTS.CHALLENGE_REJECTED_BY_OPPONENT(username!));
         setChallenged(false);
      }
   });
   const showChallengeButton = useMemo(
      () => withChallenge && !challenged,
      [challenged, withChallenge]
   );

   const { execute: challenge, isExecuting } = useAction(challengePlayer, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res.data.match);
         }
      },
   });

   const handleChallengePlayer = useCallback(async ()=> {
      if (challenged) return;

      challenge({ userId: userId!, clientId  });
      setChallenged(true);

      toast(TOASTS.CHALLENGES_USER_SUCCESS(username!));
      console.log(`Send a challenge invite!`);
   }, [clientId, challenged, userId])

   return (
      <div className={`flex w-full flex-col items-center gap-2`}>
         <div className={`mt-4 flex w-full items-center justify-center gap-0`}>
            <span
               className={`mr-4 inline-flex items-center gap-2 text-secondary`}
            >
               Record:
            </span>
            <span className={`text-green-500`}>{wins}W</span>
            <span className={`text-secondary`}>/</span>
            <span className={`text-amber-500`}>{draws}D</span>
            <span className={`text-secondary`}>/</span>
            <span className={`text-red-500`}>{losses}L</span>
         </div>
         {challenged && (
            <div
               className={`mt-4 flex w-4/5 animate-pulse flex-col items-center gap-2 shadow-md`}
            >
               <Swords size={18} className={`mr-0 text-accent`} />
               <span className={`text-center`}>
                  Waiting for opponent's response
               </span>
            </div>
         )}
         {showChallengeButton && (
            <Button
               onClick={handleChallengePlayer}
               className={`mt-4 items-center gap-4 shadow-md`}
               variant={`default`}
            >
               <Swords size={18} className={`mr-0 text-accent`} />
               Challenge
            </Button>
         )}
      </div>
   );
};

export default UserChallengesRecord;
