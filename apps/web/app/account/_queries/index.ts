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
   if(!session?.user) return null;

   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id },
      include: {
         typingRuns: {
            orderBy: {
               createdAt: `desc`,
            },
         },
      },
   });
   if (!user) return null;

   return user;
}
