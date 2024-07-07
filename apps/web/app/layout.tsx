import type { Metadata } from "next";

import ShortcutsSection from "@app/_components/ShortcutsSection";
import { WithContactModal } from "@app/_components/modals/ContactUsModal";
import { getUserFontFamily, getUserInfo } from "@app/_queries";
import { auth } from "@auth";
import GlobalCommandsDialog from "@components/commands/GlobalCommandsDialog";
import AppFooter from "@components/common/AppFooter";
import Header from "@components/common/Header";
import LoadingBar from "@components/common/LoadingBar";
import ProductionOnly from "@components/common/ProductionOnly";
import ScrollToTopButton from "@components/common/ScrollToTopButton";
import WithTransition from "@components/common/WithTransition";
import CookieConsentBanner from "@components/common/cookie-banner/CookieConsentBanner";
import WithInitialState from "@components/editor/WithInitialState";
import {
   APP_DESCRIPTION,
   APP_KEYWORDS,
   APP_NAME,
   AUTHOR,
   AUTHOR_WEBSITE,
} from "@config/site";
import { THEMES } from "@lib/consts";
import { cn } from "@lib/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import Providers from "@providers";
import DynamicFontProvider from "@providers/DynamicFontProvider";
import { xprisma } from "@repo/db";
import { Toaster } from "@repo/ui";
import { Analytics } from "@vercel/analytics/react";
import fs from "node:fs";
import path from "node:path";
import * as process from "node:process";
import React, { Suspense } from "react";
import "./globals.css";

export async function generateMetadata() {
   const session = await auth();

   let theme;
   if (session) {
      let userConfig = await xprisma.userConfiguration.findFirst({
         where: {
            userId: session.user?.id,
         },
      });
      theme = userConfig?.theme || "dark";
   }

   const faviconFile = fs.existsSync(
      path.join(process.cwd(), `public`, `app-logos`, `${theme}.png`)
   )
      ? `/app-logos/${theme}.png`
      : `/app-logos/dark.png`;

   const metadata: Metadata = {
      title: `${APP_NAME} | ${APP_DESCRIPTION}`,
      description: APP_DESCRIPTION,
      authors: [
         {
            url: AUTHOR_WEBSITE,
            name: AUTHOR,
         },
      ],
      applicationName: APP_NAME,
      icons: [faviconFile],
      keywords: APP_KEYWORDS,
      category: `notes`,
      creator: AUTHOR,
      referrer: `no-referrer`,
   };

   return metadata;
}

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   let font = await getUserFontFamily();
   let user = await getUserInfo();

   const theme = THEMES.includes(user?.configuration?.theme ?? ``)
      ? user?.configuration.theme
      : `dark`;
   console.log({ config: user?.configuration, theme });

   // @ts-ignore
   return (
      <html
         className={theme}
         style={{ colorScheme: `dark` }}
         suppressHydrationWarning
         lang="en"
      >
         <Providers>
            <body
               className={cn(
                  `min-h-screen bg-background font-mono antialiased`,
                  font!.variable
               )}
            >
               <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
               <DynamicFontProvider>
                  <WithInitialState user={user} />
                  <LoadingBar />
                  <Header />
                  <GlobalCommandsDialog />
                  <main className={cn(`min-h-[70vh] flex-1`)}>
                     <WithTransition>{children}</WithTransition>
                  </main>
                  <ScrollToTopButton />
                  <Suspense fallback={`...`}>
                     <CookieConsentBanner />
                  </Suspense>
                  <ProductionOnly>
                     <Analytics />
                  </ProductionOnly>
                  <Toaster />
                  <WithContactModal />
                  <ShortcutsSection />
                  <AppFooter />
               </DynamicFontProvider>
            </body>
         </Providers>
      </html>
   );
}
