import { auth } from "@auth";
import { ImageResponse } from "next/og";
import { xprisma } from "@repo/db";
import RocketLogo from "@components/icons/RocketLogo";


export const size = {
   width: 32,
   height: 32,
};

export const contentType = "image/png";

const THEME_ACCENT_COLORS = {
   'light': 'blue',
   'dark': 'hsl(38 92% 50%)',
   'nighthawk': 'hsl(184 100% 27%)',
   'obsidian': 'hsl(22 100% 51%)',
   'theme-3': 'hsl(172 100% 25%)',
   'theme-4': 'hsl(56 73% 74%)',
   'frost': 'hsl(213 47% 47%)',
} as const

// Image generation
export default async function Icon() {
   const session = await auth();

   let fill;
   if (session) {
      let userConfig = await xprisma.userConfiguration.findFirst({
         where: {
            userId: session.user?.id,
         },
      });
      fill = THEME_ACCENT_COLORS[userConfig?.theme || 'dark'];
   }
   console.log({ fill});

   return new ImageResponse(
      (
         <RocketLogo style={{
            fill,
            stroke: fill,
             color: fill,
         }}  />
      ),
      {
         ...size,
      },
   );
}