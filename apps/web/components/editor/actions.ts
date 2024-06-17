"use server";

import { authorizedAction } from "@lib/actions";
import { sleep } from "@lib/utils";
import { TypingRunMode, xprisma } from "@repo/db";
import { z } from "zod";


const schema = z.object({
   typedLetters: z.array(z.object({
      charIndex: z.number().min(0),
      timestamp: z.number().min(0),
      letter: z.string().max(1),
      correct: z.boolean().nullable(),
      flags: z.number().nullable(),
   })),
   time: z.number().nullable(),
   totalRunTime: z.number(),
   wordCounts: z.number().nullable(),
   mode: z.union([z.literal(TypingRunMode.TIME), z.literal(TypingRunMode.WORDS)]),
   flags: z.number().min(0).nullable(),
   metadata: z.record(z.string(), z.any()).nullable(),

});

/**
 * Save an authorized user's typing run.
 */
export const saveTypingRun = authorizedAction(schema, async ({
                                                                typedLetters,
                                                                time,
                                                                totalRunTime,
                                                                wordCounts,
                                                                mode,
                                                                flags,
                                                                metadata,
                                                             }, { userId }) => {
   await sleep(1_000);

   const run = await xprisma.typingRun.create({
      data: {
         metadata,
         userId,
         typedLetters,
         time,
         mode,
         wordCount: wordCounts,
         flags: flags ?? 0,
         totalTimeMilliseconds: totalRunTime,
      },
   });
   const { hasFlag, ...rest } = run;

   console.log({ run });
   return { success: true, run: rest };
});