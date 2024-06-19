"use server";

import { authorizedAction } from "@lib/actions";
import { sleep } from "@lib/utils";
import { Tag, TypingRunMode, xprisma } from "@repo/db";
import { z } from "zod";
import { TypedLetterInfo } from "@components/editor/hooks/useTypingEditor";
import { kogasa, mean, roundTo2, stdDev } from "@lib/numbers";
import { groupBy } from "lodash";

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
export const saveTypingRun = authorizedAction
   .schema(schema)
   .action(async ({
                     parsedInput: {
                        typedLetters,
                        time,
                        totalRunTime,
                        wordCounts,
                        mode,
                        flags,
                        metadata,
                     }, ctx: { userId },
                  }) => {
         await sleep(1_000);

         const activeTags: Tag[] = await xprisma.user.getActiveTags({ userId });
         const userConfig = await xprisma.userConfiguration.findFirst({ where: { userId } });
         if (!userConfig) return { success: false, error: `User configuration for user ${userId} not found.` };

         const {
            wpm,
            consistency,
            accuracy,
            isPersonalBest,
         } = await getRunStats(mode, typedLetters, totalRunTime, wordCounts, userId);

         const { language, test_difficulty, blind_mode, input_confidence_mode } = userConfig;
         console.log({ userConfig });

         const run = await xprisma.typingRun.create({
            data: {
               metadata: {
                  ...(metadata ?? {}),
                  tags: activeTags.map(t => t.id),
                  language,
                  test_difficulty,
                  blind_mode,
                  confidence_mode: input_confidence_mode,
                  isPersonalBest,
                  wpm,
                  consistency,
                  accuracy,
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
      },
   );

async function getRunStats(mode: string, typedLetters: TypedLetterInfo[], totalTimeMilliseconds: number, wordCount: number | null, userId: string) {
   const wpm = getRunWpm(mode, totalTimeMilliseconds, wordCount);
   const consistency = getRunConsistency(typedLetters);
   const accuracy = getRunAccuracy(typedLetters);

   const userBestWpm = await xprisma.user.getUserPersonalBestWpm({ userId });
   const isPersonalBest = wpm > userBestWpm;

   return { wpm, consistency, accuracy, isPersonalBest } as const;
}

function getRunWpm(mode: string, totalTimeMilliseconds: number, wordCount: number | null) {
   const wc = mode === `TIME` ? 40 : wordCount!;
   return (wc / (totalTimeMilliseconds / 1000)) * 60;
}

function getRunConsistency(typedLetters: TypedLetterInfo[]) {
   const typedLettersGrouped = Object.entries(groupBy(
      typedLetters,
      l => Math.floor(l!.timestamp / 1000)))
      .map(([k, v]) => v.length);

   const rawPerSecond = typedLettersGrouped.map((count) =>
      Math.round((count / 5) * 60),
   );

   const stddev = stdDev(rawPerSecond);
   const avg = mean(rawPerSecond);
   return roundTo2(kogasa(stddev / avg));
}

function getRunAccuracy(typedLetters: TypedLetterInfo[]) {
   return typedLetters?.filter(l => l.correct === true)?.length
      / typedLetters?.filter(l => l !== null)?.length * 100;
}

