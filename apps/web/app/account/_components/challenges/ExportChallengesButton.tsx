"use client";
import React from "react";
import { CSVLink } from "react-csv";
import { Button } from "@repo/ui";
import { FileText } from "lucide-react";
import { UsersChallenge } from "@repo/db";
import moment from "moment/moment";

export interface ExportChallengesButtonProps {
   challenges: UsersChallenge[];
}

function mapChallenge(challenge: UsersChallenge) {
   const { metadata, id, createdAt, userOneId, userTwoId, userOne, userTwo, userOneRun, userTwoRun } = challenge;
   const winnerId = userOneRun?.metadata.completedWords
   > userTwoRun?.metadata.comppletedWods
      ? challenge.userOneId
      : challenge.userTwoId;

   return {
      id,
      userOneId,
      userTwoId,
      winnerId,
      userOneName: userOne?.name,
      userTwoName: userTwo?.name,
      time: metadata.time,
      difficulty: metadata.difficulty,
      language: metadata?.language,
      timestamp: moment(createdAt).toDate().getTime(),
   };
}

const ExportChallengesButton = ({ challenges }: ExportChallengesButtonProps) => {
   return (
      <CSVLink filename={`challenges.csv`} data={challenges.map(mapChallenge)}>
         <Button variant={`secondary`}
                 className={`px-20 rounded-full items-center gap-2 shadow-md`}>
            <FileText size={20} />
            Export CSV
         </Button>
      </CSVLink>
   );
};

export default ExportChallengesButton;