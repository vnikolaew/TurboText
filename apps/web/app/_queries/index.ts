"use server";

import { xprisma } from "@repo/db";
import { FONTS_MAP, sfMono } from "@assets/fonts";
import { FONT_FAMILIES } from "@lib/consts";
import { auth } from "@auth";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export async function getUserFontFamily() {
   const session = await auth();

   let font: NextFontWithVariable;
   if (!session?.user) {
      font = sfMono;
   } else {
      const userConfig = await xprisma.userConfiguration.findFirst({
         where: { userId: session.user.id },
      });
      font = FONTS_MAP[userConfig?.font_family as (typeof FONT_FAMILIES)[number]] ?? sfMono;
   }

   return font;
}