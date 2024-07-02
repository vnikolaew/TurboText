"use client";
import React from "react";
import { Swords } from "lucide-react";
import { Button } from "@repo/ui";
import { useChannel } from "ably/react";
import { CHANEL_NAME } from "@providers/AblyProvider";
import { useSession } from "next-auth/react";

export interface UserChallengesRecordProps {
   record: {
      wins: number;
      losses: number;
      draws: number;
   },
   withChallenge?: boolean,
   userId?: string;
}

export enum EventType {
   ChallengeUser = "challenge-user",
}

const DEFAULT_CHALLENGE_PARAMS = {
   language: `English`,
   difficulty: `MEDIUM`,
   time: 10
}

const UserChallengesRecord = ({
                                 record: { wins, losses, draws },
                                 withChallenge = true,
                                 userId,
                              }: UserChallengesRecordProps) => {
   const { channel } = useChannel(CHANEL_NAME);
   const session = useSession()

   async function handleChallengePlayer() {
      await channel.publish({
         name: EventType.ChallengeUser,
         data: {
            fromUserId: session.data?.user?.id,
            fromUserImage: session.data?.user?.image,
            fromUserName: session.data?.user?.name,
            challengeeId: userId,
            type: EventType.ChallengeUser,
            ...DEFAULT_CHALLENGE_PARAMS
         },
         extras: {
            headers: {
               fromUserId: session.data?.user?.id,
               challengeeId: userId
            }
         }
      })

      console.log(`Send a challenge invite!`);
   }

   return (
      <div className={`flex flex-col items-center gap-2 w-full`}>
         <div className={`w-full mt-4 flex items-center justify-center gap-0`}>
         <span className={`inline-flex items-center gap-2 mr-4 text-secondary`}>
            Record:
         </span>
            <span className={`text-green-500`}>
            {wins}W
         </span>
            <span className={`text-secondary`}>
            /
         </span>
            <span className={`text-amber-500`}>
            {draws}D
         </span>
            <span className={`text-secondary`}>
            /
         </span>
            <span className={`text-red-500`}>
            {losses}L
         </span>
         </div>
         {withChallenge && (
            <Button onClick={handleChallengePlayer} className={`mt-4 items-center shadow-md gap-4`} variant={`default`}>
               <Swords size={18} className={`text-accent mr-0`} />
               Challenge
            </Button>
         )}
      </div>
   );
};

export default UserChallengesRecord;