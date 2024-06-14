import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@lib/utils";
import { sfMono } from "@assets/fonts";
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
   keywords: [`intelligent`, `notes`, `note-taking`, `AI`],
   category: `notes`,
   creator: AUTHOR,
   referrer: `no-referrer`,
};

export default function RootLayout({
                                      children,
                                   }: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html style={{ colorScheme: `dark` }} suppressHydrationWarning lang="en">
      <Providers>
         <body className={cn(`min-h-screen bg-background font-mono antialiased`, sfMono.variable)}>
         <LoadingBar />
         <Header />
         <main className={cn(`flex-1 min-h-[70vh]`)}>
            <WithTransition>
               {children}
            </WithTransition>
         </main>
         <ScrollToTopButton />
         <Suspense fallback={`...`}>
            <CookieConsentBanner />
         </Suspense>
         <Toaster />
         <AppFooter />
         </body>
      </Providers>
      </html>
   );
}
