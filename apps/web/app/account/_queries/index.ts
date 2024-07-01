"use server";
import { Tag, TypingRun, User, UsersChallenge, xprisma } from "@repo/db";

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

function removeFunctions(challenges: UsersChallenge[]) {
   return challenges?.map(c => {
      const { updatePassword: _, verifyPassword: __, ...rest } = c.userOne;
      c.userOne = rest;

      const { updatePassword: _x, verifyPassword: __x, ...rest2 } = c.userTwo;
      c.userTwo = rest2;

      return c;
   });
}

/**
 * Get user with their typing runs.
 */
export async function getUserWithTypingRuns() {
   const session = await auth();
   if (!session?.user) return null;

   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id },
      include: {
         typingRuns: {
            orderBy: {
               createdAt: `desc`,
            },
         },
         challenges_one: {
            include: {
               userOne: true, userTwo: true,
               userOneRun: {
                  select: { id: true, userId: true, metadata: true },
               },
               userTwoRun: {
                  select: { id: true, userId: true, metadata: true },
               },
            },
         },
         challenges_two: {
            include: {
               userOne: true, userTwo: true,
               userOneRun: {
                  select: { id: true, userId: true, metadata: true },
               },
               userTwoRun: {
                  select: { id: true, userId: true, metadata: true },
               },
            },
         },
      },
   });
   if (!user) return null;

   const { updatePassword, verifyPassword, ...rest } = user;
   user.challenges_one = removeFunctions(user.challenges_one);
   user.challenges_two = removeFunctions(user.challenges_two);

   rest.typingRuns = rest.typingRuns.map(run => {
         const { hasFlag, ...rest } = run;
         return rest;
      },
   );
   return rest;
}

const EXPONENT = 1.2;

/**
 * Retrieve user experience info.
 */
export async function getUserExperienceInfo() {
   const session = await auth();
   const userExperience = await xprisma.userExperience.findFirst({
      where: { userId: session?.user?.id },
   });
   const level = xprisma.userExperience.getLevelFromXp({ points: userExperience?.points ?? 0 });

   const xpNeededForCurrentLevel = Math.floor((100 * Math.pow(level - 1, EXPONENT)));
   const xpNeededForNextLevel = Math.floor((100 * Math.pow(level, EXPONENT)));
   const percentageUntilNextLevel = ((userExperience?.points ?? 0) - xpNeededForCurrentLevel)
      / (xpNeededForNextLevel - xpNeededForCurrentLevel) * 100;

   return { xpNeededForCurrentLevel, xpNeededForNextLevel, percentageUntilNextLevel, level, userExperience };
}

export async function getUserChallengesDetails(user: User & {
   challenges_one: UsersChallenge[],
   challenges_two: UsersChallenge[]
}) {
   const challenges = [...user.challenges_one, user.challenges_two]
      .sort((a, b) => b.createdAt - a.createdAt);

}

