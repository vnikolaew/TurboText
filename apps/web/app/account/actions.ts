"use server";


import { authorizedAction } from "@lib/actions";
import { z } from "zod";

const schema = z.object({
   runs: z.array(z.object({

   }))
})

export const exportRuns = authorizedAction(schema, async ({ }, { userId }) => {
   return { success: true };

});
