import React from "react";
import LatestRunsTable from "@app/account/_components/LatestRunsTable";
import { Tag as TTag, TypingRun, User } from "@repo/db";
import { getUniqueRunTags } from "@app/account/_queries";

interface LatestUserRunsProps {
   user: User & { typingRuns: TypingRun[] };
}

const LatestUserRuns = async ({ user }: LatestUserRunsProps) => {
   const tagsById: Record<string, TTag[]> = await getUniqueRunTags(user)

   return (
      <LatestRunsTable tagsById={tagsById} runs={user.typingRuns} />
   );
};

export default LatestUserRuns;