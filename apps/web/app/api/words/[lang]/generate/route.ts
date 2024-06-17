import { NextRequest, NextResponse } from "next/server";
import * as path from "node:path";
import * as fs from "node:fs";
import { SafeExecuteResponse } from "@lib/actions";

const SUPPORTED_LANGUAGE_CODES = fs.readdirSync(
   path.join(process.cwd(), `languages`), { withFileTypes: true })
   .filter(d => d.isFile() && d.name.endsWith(`.json`))
   .map(f => f.name.split(`.`)[0])
   .concat(`en`);

export async function GET(req: NextRequest, ctx: { params: { lang: string } }) {
   const response = await safeExecute<{ words: string[] }>(async () => {
      const limitString = req.nextUrl.searchParams.get(`limit`);
      const limit = !isNaN(Number(limitString))
         ? Number(limitString)
         : 20;

      if (!SUPPORTED_LANGUAGE_CODES.includes(ctx.params.lang)) {
         throw new Error(`Unsupported language code: ${ctx.params.lang.toUpperCase()}`);
      }

      const fileString = fs.readFileSync(
         path.join(process.cwd(), `languages`,
         `${ctx.params.lang}.json`));

      const words = Object.entries(JSON.parse(fileString as unknown as string));
      const size = words.length;

      const used = new Set<string>();

      const index = ctx.params.lang === `en` ? 0 : 1;

      // Now pick random words
      while (used.size < limit) {
         const word = words[Math.floor(Math.random() * size)]![index] as string;
         if (!!word.length && !used.has(word)) {
            used.add(word.split(`,`).at(0)!);
         }
      }

      return { words: [...used] }
   });

   console.log({ response });

   return response.success
      ? NextResponse.json(response.result)
      : NextResponse.json({ error: response.error.message }, {
         status: 404,
      });
}

export async function safeExecute<T>(action: <T>() => Promise<T>): Promise<SafeExecuteResponse<T>> {
   try {
      const result: T = await action();
      return { success: true, result };
   } catch (error) {
      return { success: false, error };
   }
}