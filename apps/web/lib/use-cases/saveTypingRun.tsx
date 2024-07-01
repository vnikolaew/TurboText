"use server";

import { SaveTypingRun } from "@components/editor/actions";
import { Tag, TypingRun, xprisma } from "@repo/db";
import { TypedLetterInfo, WordRange } from "@atoms/consts";
import { groupBy, range, sum } from "lodash";
import { kogasa, mean, roundTo2, stdDev } from "@lib/numbers";

export async function getRunStats(typedLetters: TypedLetterInfo[], totalTimeMilliseconds: number, completedWords: number, wordCompleteness: (boolean | null)[], wordRanges: WordRange[], userId: string) {
   const [wpm, rawWpm, consistency, accuracy] = [
      getRunWpm(totalTimeMilliseconds, typedLetters, wordCompleteness, wordRanges),
      getRunRawWpm(totalTimeMilliseconds, typedLetters),
      getRunConsistency(typedLetters),
      getRunAccuracy(typedLetters),
   ];

   const userBestWpm = await xprisma.user.getUserPersonalBestWpm({ userId });
   const isPersonalBest = wpm > userBestWpm;

   return { wpm, consistency, accuracy, isPersonalBest, rawWpm } as const;
}

/**
 * Get the typing run's WPM (words per minute).
 * @param totalTimeMilliseconds Total time of the run in milliseconds
 * @param typedLetters All typed letters
 * @param wordCompleteness The completeness of each word
 * @param wordRanges The ranges of each word in terms of character indices.
 */
function getRunWpm(totalTimeMilliseconds: number, typedLetters: TypedLetterInfo[], wordCompleteness: (boolean | null)[], wordRanges: WordRange[]) {
   const correctWordChars = sum(range(0, wordCompleteness.length)
      .map(index => {
         const { range: [start, end] } = wordRanges[index]!;

         return sum(wordCompleteness[index] ? range(start, end + 1).map(i => {
            return typedLetters.toReversed().find(l => l.charIndex === i)?.correct ? 1 : 0;
         }) : [0]);
      }));

   return correctWordChars * (60 / (totalTimeMilliseconds / 1000)) / 5;
}

/**
 * Get the typing run's WPM (words per minute).
 * @param totalTimeMilliseconds Total time of the run in milliseconds
 * @param typedLetters All typed letters
 */
function getRunRawWpm(totalTimeMilliseconds: number, typedLetters: TypedLetterInfo[]) {
   return (typedLetters.length) * (60 / (totalTimeMilliseconds / 1000)) / 5;
}

/**
 * Get the typing run's consistency.
 * @param typedLetters All typed letters.
 */
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

/**
 * Get the typing run's accuracy in terms of correct letters.
 * @param typedLetters All typed letters.
 */
function getRunAccuracy(typedLetters: TypedLetterInfo[]) {
   return typedLetters?.filter(l => l.correct === true)?.length
      / typedLetters?.filter(l => l !== null)?.length * 100;
}


export async function createTypingRun({
                                       typedLetters,
                                       time,
                                       mode,
                                       wordCorrectness,
                                       wordRanges,
                                       completedWords,
                                       flags,
                                       wordCounts,
                                       totalRunTime,
                                       metadata,
                                    }: SaveTypingRun, userId: string) {
   const activeTags: Tag[] = await xprisma.user.getActiveTags({ userId });

   const userConfig = await xprisma.userConfiguration.findFirst({ where: { userId } });
   if (!userConfig) return { success: false, error: `User configuration for user ${userId} not found.` };

   const {
      wpm,
      rawWpm,
      consistency,
      accuracy,
      isPersonalBest,
   } = await getRunStats(typedLetters, totalRunTime, mode === `TIME` ? completedWords! : wordCounts!, wordCorrectness, wordRanges, userId!);

   const { language, test_difficulty, blind_mode, input_confidence_mode } = userConfig;

   const run: TypingRun = await xprisma.typingRun.create({
      data: {
         metadata: {
            ...(metadata ?? {}),
            tags: activeTags.map(t => t.id),
            language,
            test_difficulty,
            blind_mode,
            confidence_mode: input_confidence_mode,
            completedWords,
            isPersonalBest,
            wpm,
            rawWpm,
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

   return { success: true, run };
}
