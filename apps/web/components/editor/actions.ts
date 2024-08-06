"use server";

import { authorizedAction } from "@lib/actions";
import { createTypingRun } from "@lib/use-cases/saveTypingRun";
import { sleep } from "@lib/utils";
import { TypingRunMode, xprisma } from "@repo/db";
import { z } from "zod";

const schema = z.object({
   typedLetters: z.array(
      z.object({
         charIndex: z.number().min(0),
         timestamp: z.number().min(0),
         letter: z.string().max(1),
         correct: z.boolean().nullable(),
         flags: z.number().nullable(),
      })
   ),
   time: z.number().nullable(),
   totalRunTime: z.number(),
   completedWords: z.number(),
   wordRanges: z.array(
      z.object({
         word: z.string(),
         range: z.tuple([z.number(), z.number()]),
      })
   ),
   wordCorrectness: z.array(z.boolean().nullable()),
   wordCounts: z.number().nullable(),
   mode: z.union([
      z.literal(TypingRunMode.TIME),
      z.literal(TypingRunMode.WORDS),
   ]),
   flags: z.number().min(0).nullable(),
   metadata: z.record(z.string(), z.any()).nullable(),
});

export type SaveTypingRun = z.infer<typeof schema>;

export interface INotification {
   type: string;
   message: string;
}

/**
 * Save an authorized user's typing run.
 */
export const saveTypingRun = authorizedAction
   .schema(schema)
   .action(
      async ({
         parsedInput: {
            typedLetters,
            time,
            totalRunTime,
            wordCounts,
            wordCorrectness,
            mode,
            completedWords,
            wordRanges,
            flags,
            metadata,
         },
         ctx: { userId },
      }) => {
         await sleep(1_000);

         const result = await createTypingRun(
            {
               typedLetters,
               time,
               totalRunTime,
               wordCounts,
               wordCorrectness,
               mode,
               completedWords,
               wordRanges,
               flags,
               metadata,
            },
            userId!
         );

         if (!result.success) return result;
         const { run } = result;

         let userXp = await updateUserXp(run!.wpm, run!.accuracy, userId!);
         const topWpmAllTime = (await xprisma.typingRun.getTopWpmAllTime())
            ?.metadata?.wpm;
         const topWpmToday = (await xprisma.typingRun.getTopWpmToday())
            ?.metadata?.wpm;

         console.log({ topWpmToday, topWpmAllTime });

         let notification: INotification = null!;

         if (run!.wpm > topWpmAllTime) {
            notification = {
               type: `ALL_TIME`,
               message: `You scored a new all-time high WPM of ${run!.wpm.toFixed(0)}!`,
            };
         } else if (run!.wpm > topWpmToday) {
            notification = {
               type: `TODAY`,
               message: `You scored a new highest WPM today of ${rum!.wpm.toFixed(0)}!`,
            };
         }

         const { hasFlag, ...rest } = run;
         return { success: true, run: rest, userXp, notification };
      }
   );

async function updateUserXp(wpm: number, accuracy: number, userId: string) {
   const userXpGained = (wpm * accuracy) / 100;

   let userXp = await xprisma.userExperience.findFirst({ where: { userId } });
   let newXp = userXp!.points + userXpGained;

   const newUserLevel = xprisma.userExperience?.getLevelFromXp({
      points: newXp,
   });

   userXp = await xprisma.userExperience.update({
      where: { userId },
      data: {
         points: {
            increment: userXpGained,
         },
         level: newUserLevel,
      },
   });

   return userXp;
}
