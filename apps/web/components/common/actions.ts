"use server";

import { authorizedAction, publicAction } from "lib/actions";
import { xprisma } from "@repo/db";
import { sleep } from "lib/utils";
import { z } from "zod";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { USER_LOCALE_COOKIE_NAME } from "@/lib/consts";

export interface CookiePreferences {
   Necessary: boolean,
   Statistics: boolean,
   Functionality: boolean,
   Marketing: boolean,
}

/**
 * A public action for accepting all site cookies.
 */
export const acceptAllCookies = publicAction(z.any(), async (_, { userId }) => {
   await sleep(2000);

   const user = await xprisma.user.findUnique({
      where: { id: userId },
   });
   if (!user) return { success: false };

   await xprisma.user.update({
      where: {
         id: userId,
      },
      data: {
         metadata: {
            ...user.metadata as Record<string, any>,
            "cookie-consent": true,
            "cookie-preferences": {
               Necessary: true,
               Statistics: true,
               Functionality: true,
               Marketing: true,
            },
         },
      },
   });
   return { success: true };
});

/**
 * A public action for declining all site cookies.
 */
export const declineCookieConsent = publicAction(z.any(), async (_, { userId }) => {
   await sleep(2000);
   const user = await xprisma.user.findFirst({
      where: { id: userId },
   });
   if (!user) return { success: false };

   await xprisma.user.update({
      where: {
         id: userId,
      },
      data: {
         metadata: {
            ...user.metadata as Record<string, any>,
            "cookie-consent": false,
         },
      },
   });
   return { success: true };
});


const cookiePreferencesSchema = z.object({
   Necessary: z.boolean(),
   Statistics: z.boolean(),
   Functionality: z.boolean(),
   Marketing: z.boolean(),
});

/**
 * A public action for managing user's cookie preferences.
 */
export const updateCookiePreferences = authorizedAction(cookiePreferencesSchema, async (cookiePreferences: CookiePreferences, { userId }) => {
   await sleep(2000);
   const user = await xprisma.user.findUnique({
      where: { id: userId },
   });
   if (!user) return { success: false };

   await xprisma.user.update({
      where: {
         id: userId,
      },
      data: {
         metadata: {
            ...user.metadata as Record<string, any>,
            "cookie-preferences": cookiePreferences,
            "cookie-consent": true,
         },
      },
   });

   return { success: true };
});

const changeThemeSchema = z.union([z.literal(`light`), z.literal(`dark`), z.literal(`system`)]);

/**
 * An authorized action for changing the user's site color theme.
 */
export const changeUserTheme = authorizedAction(changeThemeSchema, async (theme, { userId }) => {
   await sleep(2000);

   const user = await xprisma.user.findFirst({
      where: { id: userId },
   });
   if (!user) return { success: false };

   await xprisma.user.update({
      where: {
         id: userId,
      },
      data: {
         metadata: {
            ...user.metadata as Record<string, any>,
            "theme": theme,
         },
      },
   });

   return { success: true };
});


const changeUserProfilePictureSchema = z.object({
   avatarSrc: z.string().startsWith(`avatars/`),
});

/**
 * An authorized action for changing the user's profile picture.
 */
export const changeUserProfilePicture = authorizedAction(changeUserProfilePictureSchema, async ({ avatarSrc }, { userId }) => {
   await sleep(2000);

   const user = await xprisma.user.update({
      where: { id: userId },
      data: { image: avatarSrc },
   });


   return { success: true, user };
});


const reportIssueSchema = z.object({
   type: z.string(),
   description: z.string(),
   priority: z.string(),
});

/**
 * An authorized action for reporting an application issue.
 */
export const reportIssue = authorizedAction(reportIssueSchema, async ({ type, description, priority }, { userId }) => {
   await sleep(2000);
   const session = await auth();

   try {
      return { success: true };
   } catch (err) {
      return { success: false, error: err };
   }
});


const changeLanguageSchema = z.object({
   language: z.string(),
});


/**
 * A public action for changing the user's language.
 */
export const changeUserLanguage = publicAction(changeLanguageSchema, async ({ language }, { userId }) => {
   await sleep(1000);
   const cookie = cookies().get(USER_LOCALE_COOKIE_NAME);

   console.log(`Current cookie value: ${cookie?.value}`);
   console.log(`Setting value to ${language}`);

   if (userId) {
      const user = await xprisma.user.findUnique({ where: { id: userId } });
      await xprisma.user.update({
         where: { id: userId },
         data: {
            metadata: { ...(user.metadata ?? { }), language },
         },
      });
   }

   cookies().set(USER_LOCALE_COOKIE_NAME, language, {
      sameSite: `none`,
      secure: true,
      httpOnly: true,
   });

   return { success: true };
});
