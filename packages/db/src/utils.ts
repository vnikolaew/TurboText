import { z } from "zod";

export const typedLettersSchema = z.array(z.object({
   charIndex: z.number().min(0),
   timestamp: z.number().min(0),
   letter: z.string().max(1),
   correct: z.boolean().nullable(),
   flags: z.number().nullable()
}))

export const typedLetterInfoSchema = z.object({
   typedLetters: typedLettersSchema
})

export const LABELS = [
   'Novice',        // Level 0-9
   'Beginner',      // Level 10-19
   'Apprentice',    // Level 20-29
   'Journeyman',    // Level 30-39
   'Specialist',    // Level 40-49
   'Expert',        // Level 50-59
   'Professional',  // Level 60-69
   'Master',        // Level 70-79
   'Grandmaster',   // Level 80-89
   'Legend'         // Level 90-99
];

export function getUserLabel(level: number) {
   if (level < 0 || level > 99) {
      return "Invalid level"; // Handles levels outside 0-99
   }

   const index = Math.floor(level / 10); // Calculate the index based on level
   return LABELS[index];
}
