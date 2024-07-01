import { NextRequest, NextResponse } from "next/server";
import * as path from "node:path";
import * as fs from "node:fs";
import { SafeExecuteResponse } from "@lib/actions";

const SUPPORTED_LANGUAGE_CODES = fs.readdirSync(
   path.join(process.cwd(), `languages`), { withFileTypes: true })
   .filter(d => d.isFile() && d.name.endsWith(`.json`))
   .map(f => f.name.split(`.`)[0])
   .concat(`en`);

export async function generateWords(lang: string, limit?: number) {
   limit ??= 20;

   if (!SUPPORTED_LANGUAGE_CODES.includes(lang)) {
      throw new Error(`Unsupported language code: ${lang.toUpperCase()}`);
   }

   const fileString = fs.readFileSync(path.join(process.cwd(), `languages`, `${lang}.json`));
   const words = Object.entries(JSON.parse(fileString as unknown as string));
   const size = words.length;

   const used = new Set<string>();
   const index = lang === `en` ? 0 : 1;

   // Now pick random words
   while (used.size < limit) {
      const word = words[Math.floor(Math.random() * size)]![index] as string;
      if (!!word.length && !used.has(word)) {
         used.add(word.split(`,`).at(0)!);
      }
   }

   return { words: [...used] };
}

export async function GET(req: NextRequest, ctx: { params: { lang: string } }) {
   const response = await safeExecute<{ words: string[] }>(async () => {
      const limitString = req.nextUrl.searchParams.get(`limit`);
      const limit = !isNaN(Number(limitString))
         ? Number(limitString)
         : 20;

      return await generateWords(ctx.params.lang, limit);
   });

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