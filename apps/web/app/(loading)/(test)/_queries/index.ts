"use server";

import { auth } from "@auth";
import { xprisma } from "@repo/db";

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
                  totalTimeMilliseconds: true,
               },
            },
         },
      });
      if (!dbUser) user = null;
      else {
         const { updatePassword, verifyPassword, ...rest } = dbUser;
         user = rest;
      }
   }

   return user;
}
