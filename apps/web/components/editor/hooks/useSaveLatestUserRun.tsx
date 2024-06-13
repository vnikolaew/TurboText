"use client";
import { useEffect } from "react";
import { parseAsBoolean, useQueryState } from "nuqs";
import { useSession } from "next-auth/react";
import { useAction } from "next-safe-action/hooks";
import { saveTypingRun } from "@components/editor/actions";
import { z } from "zod";
import { TYPED_LETTER_LS_KEY } from "@components/editor/TypingEditor";
import { toast } from "@repo/ui";
import { TOASTS } from "@config/toasts";

export const typedLettersSchema = z.object({
   typedLetters: z.array(z.object({
      charIndex: z.number().min(0),
      timestamp: z.number().min(0),
      letter: z.string().max(1),
      correct: z.boolean(),
      flags: z.number().nullable(),
   })),
   time: z.number(),
});

export function useSaveLatestUserRun() {
   const [save] = useQueryState(`save`, parseAsBoolean.withDefault(false));
   const session = useSession();

   const { result, execute, status } = useAction(saveTypingRun, {
      onSuccess: res => {
         if (res.success) {
            console.log(res);
            localStorage.removeItem(TYPED_LETTER_LS_KEY);
         }
      },
      onError: console.error,
   });

   useEffect(() => {
      const typedLetters = JSON.parse(localStorage.getItem(TYPED_LETTER_LS_KEY)!);
      const result = typedLettersSchema.safeParse(typedLetters);

      if (save && typedLetters && session?.status === `authenticated` && result.success) {
         console.log(`Saving run to DB`, { typedLetters: typedLetters });
         execute(result.data);

         toast(TOASTS.SAVE_TYPING_RUN_SUCCESS!);
      }
   }, [save, session]);
}