import React from "react";
import { Swords } from "lucide-react";
import { Button } from "@repo/ui";

export interface UserChallengesRecordProps {
   record: {
      wins: number;
      losses: number;
      draws: number;
   };
}

const UserChallengesRecord = ({ record: { wins, losses, draws } }: UserChallengesRecordProps) => {
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
         <Button className={`mt-4 items-center shadow-md gap-4`} variant={`default`}>
            <Swords size={18} className={`text-accent mr-0`} />
            Challenge
         </Button>
      </div>
   );
};

export default UserChallengesRecord;