"use client";
import React from "react";
import { Button } from "@repo/ui";
import { FileText } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { exportRuns } from "@app/account/actions";
import { CSVLink } from "react-csv";
import moment from "moment";
import { TypingFlags } from "@atoms/editor";
import { TypingRun } from "@repo/db";

export interface ExportRunsButtonProps {
   runs: TypingRun[];
}

const ExportRunsButton = ({ runs }: ExportRunsButtonProps) => {
   const { result, execute, status } = useAction(exportRuns, {
      onSuccess: res => {
         if (res.success) {
            console.log({ res });
         }
      },
   });

   console.log({ runs });

   async function handleExport() {
      execute({ runs });
   }

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
         <Button onClick={handleExport} variant={`secondary`}
                 className={`px-20 rounded-full items-center gap-2 shadow-md`}>
            <FileText size={20} />
            Export CSV
         </Button>
      </CSVLink>
   );
};

export default ExportRunsButton;