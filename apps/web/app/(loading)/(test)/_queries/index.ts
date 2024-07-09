"use server";

import { auth } from "@auth";
import { TypingRun, xprisma } from "@repo/db";

export async function getUser() {
   const session = await auth();

   let user;
   if (!session?.user) user = null;
   else {
      let dbUser = await xprisma.user.findUnique({
         where: { id: session?.user?.id ?? `` },
         include: {
            tags: {
               select: {
                  id: true,
                  name: true,
               },
            },
            experience: {
               select: {
                  id: true,
                  points: true,
                  level: true,
               },
            },
            configuration: true,
            typingRuns: {
               select: {
                  id: true,
                  typedLetters: true,
                  mode: true,
                  metadata: true,
                  createdAt: true,
                  totalTimeMilliseconds: true,
               },
            },
         },
      });
      if (!dbUser) user = null;
      else {
         const { updatePassword, verifyPassword, ...rest } = dbUser;
         rest.typingRuns = rest.typingRuns.map((r: TypingRun) => ({
            ...r, createdAt: r.createdAt?.toISOString()
         }))
         user = rest;
      }
   }

   return user;
}
