"use server";

import { authorizedAction } from "@lib/actions";
import { xprisma } from "@repo/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
   name: z.string().min(2).max(100),
});

/**
 * An authorized action for adding a new tag.
 */
export const addTag = authorizedAction
   .schema(schema)
   .action(async ({ parsedInput: { name }, ctx: { userId } }) => {
      const existing = await xprisma.tag.findFirst({
         where: { userId, name },
      });

      if (existing)
         return {
            success: false,
            error: `Tag with name ${name} already exists.`,
         };

      const tag = await xprisma.tag.create({
         data: { name, userId, metadata: {} },
      });

      revalidatePath(`/settings`);
      return { success: true, tag };
   });

const editSchema = z.object({
   name: z.string().min(2).max(100),
   id: z.string(),
});

/**
 * An authorized action for editing an existing tag.
 */
export const editTag = authorizedAction
   .schema(editSchema)
   .action(async ({ parsedInput: { name, id }, ctx: { userId } }) => {
      const existing = await xprisma.tag.findUnique({
         where: { id },
      });

      if (!existing)
         return {
            success: false,
            error: `Tag with name ${name} does not exist.`,
         };

      const tag = await xprisma.tag.update({ data: { name }, where: { id } });
      revalidatePath(`/settings`);
      return { success: true, tag };
   });

const deleteSchema = z.object({
   id: z.string(),
});

/**
 * An authorized action for deleting an existing tag.
 */
export const deleteTag = authorizedAction
   .schema(deleteSchema)
   .action(async ({ ctx: { userId }, parsedInput: { id } }) => {
      const existing = await xprisma.tag.findFirst({
         where: { id, userId },
      });

      if (!existing)
         return {
            success: false,
            error: `Tag with name ${name} does not exist.`,
         };

      let tag = await xprisma.tag.delete({ where: { id } });

      revalidatePath(`/settings`);
      return { success: true, tag };
   });

const toggleActiveSchema = z.object({
   id: z.string(),
});

/**
 * An authorized action for toggling an existing tag as active.
 */
export const toggleTagActive = authorizedAction
   .schema(toggleActiveSchema)
   .action(async ({ ctx: { userId }, parsedInput: { id } }) => {
      const existing = await xprisma.tag.findFirst({
         where: { id, userId },
      });

      if (!existing)
         return {
            success: false,
            error: `Tag with name ${name} does not exist.`,
         };

      let tag = await xprisma.tag.update({
         where: { id },
         data: {
            metadata: {
               ...(existing.metadata ?? {}),
               active: !(existing.metadata?.active ?? false),
            },
         },
      });

      revalidatePath(`/settings`);
      return { success: true, tag };
   });
