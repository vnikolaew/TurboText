"use client";
import React from "react";
import { Button } from "@repo/ui";
import { FileText } from "lucide-react";
import { CSVLink } from "react-csv";
import moment from "moment";
import { TypingRun } from "@repo/db";
import { TypingFlags } from "@atoms/consts";

export interface ExportRunsButtonProps {
   runs: TypingRun[];
}

const ExportRunsButton = ({ runs }: ExportRunsButtonProps) => {
   return (
      <CSVLink filename={`results.csv`} data={runs.map(run => {
         const { metadata, id, totalTimeMilliseconds, wordCount, time, createdAt, flags, mode, userId } = run;
         return {
            id,
            wordCount,
            userId,
            isPersonalBest: run.isPersonalBest ?? false,
            wpm: run.wpm.toFixed(2),
            acc: run.accuracy.toFixed(2),
            consistency: run.consistency.toFixed(2),
            mode : mode ?? `NORMAL`,
            duration: (totalTimeMilliseconds / 1000).toFixed(2),
            punctuation: (run.flags & TypingFlags.PUNCTUATION) !== 0,
            numbers: (run.flags & TypingFlags.NUMBERS) !== 0,
            language: metadata?.language,
            difficulty: metadata?.test_difficulty,
            blind_mode: metadata?.blind_mode,
            tags: metadata?.tags?.map(t => t?.name) ?? [],
            timestamp: moment(createdAt).toDate().getTime()
         }
      })}>
         <Button variant={`secondary`}
                 className={`px-20 rounded-full items-center gap-2 shadow-md`}>
            <FileText size={20} />
            Export CSV
         </Button>
      </CSVLink>
   );
};

export default ExportRunsButton;