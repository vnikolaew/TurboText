"use server";

import { authorizedAction } from "@lib/actions";
import { sleep } from "@lib/utils";
import { xprisma } from "@repo/db";
import { z } from "zod";


const schema = z.object({
   typedLetters: z.array(z.object({
      charIndex: z.number().min(0),
      timestamp: z.number().min(0),
      letter: z.string().max(1),
      correct: z.boolean(),
      flags: z.number().nullable(),
   })),
   time: z.number(),
});

/**
 * Save an authorized user's typing run.
 */
export const saveTypingRun = authorizedAction(schema, async ({ typedLetters, time }, { userId }) => {
   await sleep(1_000);

   const run = await xprisma.typingRun.create({
      //@ts-ignore
      data: {
         metadata: {},
         userId,
         typedLetters,
         time,
      },
   });

   return { success: true, run };
});