"use server";


import { authorizedAction } from "@lib/actions";
import { z } from "zod";

const schema = z.object({
   runs: z.array(z.object({})),
});

export const exportRuns = authorizedAction.schema(schema).action(async (
   { parsedInput: { runs }, ctx: { userId } },
) => {
   return { success: true };
});
