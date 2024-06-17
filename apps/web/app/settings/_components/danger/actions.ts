"use server";

import { auth } from "@auth";
import { authorizedAction } from "@lib/actions";
import { xprisma } from "@repo/db";
import { z } from "zod";
import moment from "moment";

const schema = z.object({
   username: z.string(),
});

/**
 * An authorized action for changing the user's username.
 */
export const changeUsername = authorizedAction(schema, async ({ username }, { userId }) => {
   const session = await auth();
   if (session?.user?.name === username) return {
      success: false,
      error: "You can't change your username to the same name",
   };
   let user = await xprisma.user.findUnique({
      where: { id: userId },
   });

   if (user?.metadata?.usernameLastUpdated
      && moment(user?.metadata?.usernameLastUpdated).add(30, `day`).toDate() > new Date()) {
      return {
         success: false,
         error: "You can only change your username once every 30 days.",
      };
   }

   user = await xprisma.user.update({
      where: { id: userId },
      data: {
         name: username, metadata: {
            ...(user?.metadata || {}),
            usernameLastUpdated: new Date().toISOString(),
         },
      },
   });
   const { updatePassword, verifyPassword, ...rest } = user;

   return { success: true, user: rest };
});

/**
 * An authorized action for deleting the user's account.
 */
export const deleteAccount = authorizedAction(z.any(), async (_, { userId }) => {
   const session = await auth();

   let user =
   await xprisma.user.delete({
      where: { id: userId },
   });
   return { success: true, user };
});
