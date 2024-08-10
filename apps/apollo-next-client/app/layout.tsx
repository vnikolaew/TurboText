import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Apollo X Next",
   description: "Apollo X Next",
};

export default function RootLayout({
                                      children,
                                   }: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html color={`dark`} suppressHydrationWarning lang="en">
      <body className={inter.className}>
      <Providers>
         <Navbar />
         <main className={`min-h-[70vh]`}>
            {children}
         </main>
         <Footer />
      </Providers>
      </body>
      </html>
   );
}
