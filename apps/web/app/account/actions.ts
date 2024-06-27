"use server";


import { authorizedAction } from "@lib/actions";
import { xprisma } from "@repo/db";
import { z } from "zod";
import { revalidate } from "@app/(test)/page";
import { revalidatePath } from "next/cache";

const schema = z.object({
   runs: z.array(z.object({})),
});

export const exportRuns = authorizedAction.schema(schema).action(async (
   { parsedInput: { runs }, ctx: { userId } },
) => {
   return { success: true };
});


const editProfileSchema = z.object({
   bio: z.string().nullable(),
   keyboard: z.string().nullable(),
   github: z.string().nullable(),
   twitter: z.string().nullable(),
   website: z.string().nullable(),
});

export const editProfile = authorizedAction
   .schema(editProfileSchema)
   .action(async (
      { parsedInput: { bio, github, keyboard, twitter, website }, ctx: { userId } },
   ) => {
      const user = await xprisma.user.findUnique({
         where: { id: userId },
      });
      if (!user) return { success: false };
      await xprisma.user.update({
         where: { id: userId },
         data: {
            metadata: {
               ...(user.metadata ?? {}),
               ...(bio && { bio }),
               ...(github && { github }),
               ...(keyboard && { keyboard }),
               ...(twitter && { twitter }),
               ...(website && { website }),
            },
         },
      });

      const {updatePassword, verifyPassword, ...rest} = user;
      revalidatePath(`/account`)
      return { success: true, user: rest };
   });
