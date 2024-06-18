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
