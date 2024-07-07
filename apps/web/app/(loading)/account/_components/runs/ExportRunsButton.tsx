"use client";
import { TypingFlags } from "@atoms/consts";
import { TypingRun } from "@repo/db";
import { Button } from "@repo/ui";
import { FileText } from "lucide-react";
import moment from "moment";
import { CSVLink } from "react-csv";

export interface ExportRunsButtonProps {
   runs: TypingRun[];
}

function mapRun(run: TypingRun) {
   const {
      metadata,
      id,
      totalTimeMilliseconds,
      wordCount,
      time,
      createdAt,
      flags,
      mode,
      userId,
   } = run;
   return {
      id,
      wordCount,
      userId,
      isPersonalBest: run.isPersonalBest ?? false,
      wpm: run.wpm.toFixed(2),
      acc: run.accuracy.toFixed(2),
      consistency: run.consistency.toFixed(2),
      mode: mode ?? `NORMAL`,
      duration: (totalTimeMilliseconds / 1000).toFixed(2),
      punctuation: (run.flags & TypingFlags.PUNCTUATION) !== 0,
      numbers: (run.flags & TypingFlags.NUMBERS) !== 0,
      language: metadata?.language,
      difficulty: metadata?.test_difficulty,
      blind_mode: metadata?.blind_mode,
      tags: metadata?.tags?.map((t) => t?.name) ?? [],
      timestamp: moment(createdAt).toDate().getTime(),
   };
}

const ExportRunsButton = ({ runs }: ExportRunsButtonProps) => {
   return (
      <CSVLink filename={`results.csv`} data={runs.map(mapRun)}>
         <Button
            variant={`secondary`}
            className={`items-center gap-2 rounded-full px-20 shadow-md`}
         >
            <FileText size={20} />
            Export CSV
         </Button>
      </CSVLink>
   );
};

export default ExportRunsButton;
