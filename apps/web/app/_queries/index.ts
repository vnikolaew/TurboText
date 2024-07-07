"use server";

import { FONTS_MAP, sfMono } from "@assets/fonts";
import { auth } from "@auth";
import { FONT_FAMILIES } from "@lib/consts";
import { User, UserConfiguration, UserExperience, xprisma } from "@repo/db";
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
      font =
         FONTS_MAP[userConfig?.font_family as (typeof FONT_FAMILIES)[number]] ??
         sfMono;
   }

   return font;
}

export async function getUserConfig(): Promise<UserConfiguration | null> {
   const session = await auth();

   if (!session?.user) {
      return null;
   } else {
      const userConfig = await xprisma.userConfiguration.findFirst({
         where: { userId: session.user.id },
      });
      return userConfig;
   }
}

export async function getUserInfo(): Promise<
   | (User & {
        configuration: UserConfiguration;
        experience: UserExperience;
     })
   | null
> {
   const session = await auth();

   let user;
   if (!session?.user) user = null;
   else {
      let dbUser = await xprisma.user.findUnique({
         where: { id: session?.user?.id ?? `` },
         include: {
            notifications: {
               where: { read: false },
            },
            tags: {
               select: {
                  id: true,
                  name: true,
               },
            },
            experience: {
               select: {
                  id: true,
                  points: true,
                  level: true,
               },
            },
            configuration: true,
            typingRuns: {
               select: {
                  id: true,
                  typedLetters: true,
                  mode: true,
                  metadata: true,
                  totalTimeMilliseconds: true,
               },
            },
         },
      });
      if (!dbUser) user = null;
      else {
         const { updatePassword, verifyPassword, ...rest } = dbUser;
         user = rest;
      }
   }

   return user;
}
