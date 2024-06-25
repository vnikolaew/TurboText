import React from "react";
import LatestRunsTable from "@app/account/_components/LatestRunsTable";
import { Tag as TTag, TypingRun, User } from "@repo/db";
import { getUniqueRunTags } from "@app/account/_queries";
import ExportRunsButton from "@app/account/_components/ExportRunsButton";

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
      <div className={`w-full flex flex-col gap-8 `}>
         <div className={`flex justify-end`}>
            <ExportRunsButton runs={user.typingRuns} />
         </div>
         <LatestRunsTable tagsById={tagsById} runs={user.typingRuns} />
      </div>
   );
};

export default LatestUserRuns;