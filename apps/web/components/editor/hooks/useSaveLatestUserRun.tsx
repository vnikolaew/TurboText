"use client";
import { useEffect } from "react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { saveTypingRun } from "@components/editor/actions";
import { z } from "zod";
import { TYPING_RUN_LS_KEY } from "@components/editor/TypingPage";
import { toast } from "@repo/ui";
import { TOASTS } from "@config/toasts";
import { LocalStorage } from "@lib/local-storage";
import { TypingMode } from "@atoms/editor";

export const typedLettersSchema = z.object({
   typedLetters: z.array(z.object({
      charIndex: z.number().min(0),
      timestamp: z.number().min(0),
      letter: z.string().max(1),
      correct: z.boolean(),
      flags: z.number().nullable(),
   })),
   time: z.number(),
   wordCounts: z.number(),
   mode: z.union([z.literal(TypingMode.TIME), z.literal(TypingMode.WORDS)]),
   flags: z.number().min(0).nullable(),
   metadata: z.record(z.string(), z.any()).nullable(),
});

export type TypingRun = z.infer<typeof typedLettersSchema>;

export function useSaveLatestUserRun() {
   const [save] = useQueryState(`save`, parseAsBoolean.withDefault(false));
   const session = useSession();

   const { execute, status } = useAction(saveTypingRun, {
      onSuccess: res => {
         if (res.success) {
            console.log(res);
            localStorage.removeItem(TYPING_RUN_LS_KEY);
         }
      },
      onError: console.error,
   });

   useEffect(() => {
      if(!save) return;
      const result = LocalStorage.getParsedItem(TYPING_RUN_LS_KEY, typedLettersSchema);

      if (session?.status === `authenticated` && result) {
         console.log(`Saving run to DB`, { typedLetters: result.typedLetters });
         execute(result);

         toast(TOASTS.SAVE_TYPING_RUN_SUCCESS!);
      } else {
         toast(TOASTS.SAVE_TYPING_RUN_FAILURE!);

      }
   }, [save, session]);
}