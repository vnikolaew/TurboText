"use server";

import { authorizedAction } from "@lib/actions";
import { sleep } from "@lib/utils";
import { Tag, TypingRunMode, xprisma } from "@repo/db";
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

   const activeTags: Tag[] = await xprisma.user.getActiveTags({ userId });
   const userConfig = await xprisma.userConfiguration.findFirst({ where: { userId } });
   if(!userConfig) return { success: false, error: `User configuration for user ${userId} not found.` };

   const userWpm = await xprisma.user.getUserPersonalBestWpm({ userId });
   console.log({ userWpm, userConfig });

   const currentWpm = getRunWpm(mode, totalRunTime, wordCounts);

   const run = await xprisma.typingRun.create({
      data: {
         metadata: {
            ...(metadata ?? {}),
            tags: activeTags.map(t => t.id),
            language: userConfig.language,
            test_difficulty: userConfig.test_difficulty,
            blind_mode: userConfig.blind_mode,
            confidence_mode: userConfig.input_confidence_mode,
            isPersonalBest: currentWpm > userWpm,
         },
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

function getRunWpm(mode: string, totalTimeMilliseconds: number, wordCount: number | null) {
   const wc = mode === `TIME` ? 40 : wordCount!;
   return (wc / (totalTimeMilliseconds / 1000)) * 60;
}
