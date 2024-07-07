"use server";

import { authorizedAction } from "@lib/actions";
import { xprisma } from "@repo/db";
import { WebClient } from "@slack/web-api";
import { z } from "zod";

const schema = z.object({
   userId: z.string(),
   username: z.string(),
   reason: z.string(),
   comment: z.string().nullable(),
});

/**
 * An authorized action for reporting a user.
 */
export const reportUser = authorizedAction
   .schema(schema)
   .action(
      async ({
         ctx: { userId },
         parsedInput: { userId: reportUserId, username, comment, reason },
      }) => {
         const client = new WebClient(process.env.SLACK_TOKEN);

         let user = await xprisma.user.findUnique({ where: { id: userId } });
         if (!user) return { success: false, message: `User not found` };

         // Send a report message to Slack channel
         const result = await client.chat.postMessage({
            text: `User ${userId} submitted a report for user ${reportUserId} ...`,
            channel: process.env.SLACK_FEEDBACK_CHANNEL_ID!,
            blocks: [],
         });
         return { success: true };
      }
   );
