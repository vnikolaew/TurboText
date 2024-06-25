import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@lib/utils";
import Providers from "@providers";
import Header from "@components/common/Header";
import { APP_DESCRIPTION, APP_NAME, AUTHOR, AUTHOR_WEBSITE } from "@config/site";
import appLogo from "@/public/logo.jpg";
import AppFooter from "@components/common/AppFooter";
import { Suspense } from "react";
import CookieConsentBanner from "@components/common/cookie-banner/CookieConsentBanner";
import ScrollToTopButton from "@components/common/ScrollToTopButton";
import { Toaster } from "@repo/ui";
import LoadingBar from "@components/common/LoadingBar";
import WithTransition from "@components/common/WithTransition";
import { __IS_PROD__ } from "@lib/consts";
import { Analytics } from "@vercel/analytics/react";
import WithInitialState from "./_components/WithInitialState";
import WithUserConfig from "@providers/WithUserConfig";
import { getUserFontFamily } from "@app/_queries";
import GlobalCommandsDialog from "@components/commands/GlobalCommandsDialog";
import { WithContactModal } from "@app/_components/modals/ContactUsModal";
import ShortcutsSection from "@app/_components/ShortcutsSection";

const inter = Inter({ weight: ["400"], subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
   title: `${APP_NAME} | ${APP_DESCRIPTION}`,
   description: APP_DESCRIPTION,
   authors: [{
      url: AUTHOR_WEBSITE,
      name: AUTHOR,
   }],
   applicationName: APP_NAME,
   icons: appLogo.src,
   keywords: [`speed`, `typing`, `speed-typing`, `test`, `web`, `keyboard`],
   category: `notes`,
   creator: AUTHOR,
   referrer: `no-referrer`,
};

export default async function RootLayout({
                                            children,
                                         }: Readonly<{
   children: React.ReactNode;
}>) {
   let font = await getUserFontFamily();

   return (
      <html style={{ colorScheme: `dark` }} suppressHydrationWarning lang="en">
      <WithUserConfig>
         <Providers>
            <body className={cn(`min-h-screen bg-background font-mono antialiased`, font!.variable)}>
            <LoadingBar />
            <Header />
            <GlobalCommandsDialog />
            <main className={cn(`flex-1 min-h-[70vh]`)}>
               <WithTransition>
                  {children}
               </WithTransition>
               <WithInitialState />
            </main>
            <ScrollToTopButton />
            <Suspense fallback={`...`}>
               <CookieConsentBanner />
            </Suspense>
            {__IS_PROD__ && <Analytics />}
            <Toaster />
            <WithContactModal />
            <ShortcutsSection/>
            <AppFooter />
            </body>
         </Providers>
      </WithUserConfig>
      </html>
   );
}
