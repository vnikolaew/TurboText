"use server";
import { Tag, TypingRun, User, xprisma } from "@repo/db";

import { groupBy } from "lodash";
import { auth } from "@auth";

/**
 * Get unique tags from a user's typing runs.
 * @param user The user
 */
export async function getUniqueRunTags(user: User & { typingRuns: TypingRun[] }): Promise<Record<string, Tag[]>> {
   const runsTagIds = user.typingRuns
      ?.filter(r => !!r.metadata?.tags?.length)
      ?.flatMap(r => r.metadata?.tags ?? []);

   const userTags = await xprisma.tag.findMany({
      where: {
         id: {
            in: runsTagIds,
         }, userId: user.id,
      },
   });
   const tagsById: Record<string, Tag[]> = groupBy(userTags, t => t.id);
   return tagsById;
}

/**
 * Get user with their typing runs.
 */
export async function getUserWithTypingRuns() {
   const session = await auth();

   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id },
      include: { typingRuns: true },
   });
   if (!user) return null;

   user.typingRuns = user.typingRuns.map(run => {
      const { hasFlag, ...rest } = run;
      return rest;
   });

   return user;
}
