"use server";

import { authorizedAction } from "@lib/actions";
import { xprisma } from "@repo/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
   id: z.string(),
   test_difficulty: z.union([z.literal(`NORMAL`), z.literal(`EXPERT`), z.literal(`MASTER`)]),
   blind_mode: z.boolean(),
   auto_save_mode: z.boolean(),
   input_freedom_mode: z.boolean(),
   input_confidence_mode: z.union([z.literal(`ON`), z.literal(`OFF`), z.literal(`MAX`)]),
   input_indicate_typos: z.union([z.literal(`BELOW`), z.literal(`OFF`), z.literal(`REPLACE`)]),

   sound_click_sound: z.string().nullable(),
   sound_error_sound: z.string().nullable(),

   caret_smoothness: z.union([z.literal(`SLOW`), z.literal(`OFF`), z.literal(`MEDIUM`), z.literal(`FAST`)]),
   caret_style: z.union([z.literal(`CURSOR`), z.literal(`OFF`), z.literal(`BLOCK`), z.literal(`BLOCK_FILLED`), z.literal(`UNDERSCORE`)]),
   pace_caret_style: z.union([z.literal(`CURSOR`), z.literal(`OFF`), z.literal(`BLOCK`), z.literal(`BLOCK_FILLED`), z.literal(`UNDERSCORE`)]),

   theme_flip_colors: z.boolean().nullable(),
   theme_colorful_mode: z.boolean().nullable(),

   font_family: z.string().nullable(),
   font_size: z.number().nullable(),

   elements_show_key_tips: z.boolean().nullable(),
   elements_show_oof_warning: z.boolean().nullable(),
   elements_show_caps_lock_warning: z.boolean().nullable(),
   elements_show_average: z.union([z.literal(`OFF`), z.literal(`SPEED`), z.literal(`ACC`), z.literal(`BOTH`)]),

   language: z.string(),
   metadata: z.record(z.string(), z.any()).nullable(),
}).partial();

/**
 * An authorized function to update the user's configuration.
 * @param userId The user's ID.
 * @param configuration The new updated configuration.
 */
export const updateUserConfiguration = authorizedAction.schema(schema)
   .action(async ({ ctx: { userId }, parsedInput: configuration }) => {
      for (let key in configuration) {
         if (configuration[key] === undefined || configuration[key] === null) {
            configuration[key] = undefined;
         }
      }

      console.log({ configuration });

      const existing = await xprisma.userConfiguration.findFirst({
         where: { userId },
      });
      if (!existing) return { success: false };

      const userConfig = await xprisma.userConfiguration.update({
         where: { id: existing.id },
         data: {
            ...configuration,
         },
      });

      revalidatePath(`/settings`);
      return { success: true, userConfig };
   });