import React from "react";
import { Tag as TTag, TypingRun, User } from "@repo/db";
import { getUniqueRunTags } from "@app/(loading)/account/_queries";
import ExportRunsButton from "@app/(loading)/account/_components/runs/ExportRunsButton";
import LatestRunsTable from "@app/(loading)/account/_components/runs/LatestRunsTable";

interface LatestUserRunsProps {
   user: User & { typingRuns: TypingRun[] };
}

const LatestUserRuns = async ({ user }: LatestUserRunsProps) => {
   const tagsById: Record<string, TTag[]> = await getUniqueRunTags(user);
   user.typingRuns = user.typingRuns.map(run => {
      const { hasFlag, ...rest } = run;
      return rest;
   });

   return (
      <section id={`runs`} className={`w-full flex flex-col gap-8 `}>
         <div className={`flex justify-end`}>
            <ExportRunsButton runs={user.typingRuns} />
         </div>
         <LatestRunsTable tagsById={tagsById} runs={user.typingRuns} />
      </section>
   );
};

export default LatestUserRuns;