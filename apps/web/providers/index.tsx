"use client"
import React, { PropsWithChildren } from "react";
import SessionProvider from "./SessionProvider";
import { ThemeProvider, THEMES } from "./ThemeProvider";
import AtomProvider from "@providers/AtomProvider";
import FontProvider from "@providers/DynamicFontProvider";
import { useAtomValue } from "jotai";
import { themeAtom } from "@atoms/user";

interface ProvidersProps extends PropsWithChildren {
}

const Providers = ({ children }: ProvidersProps) => {
   const theme = useAtomValue(themeAtom)

   return (
         <SessionProvider>
            <ThemeProvider
               enableSystem
               disableTransitionOnChange
               themes={THEMES}
               storageKey={crypto.randomUUID()}
               defaultTheme={theme ?? `theme-1`}
               attribute={`class`}>
               <AtomProvider>
                  <FontProvider>
                     {children}
                  </FontProvider>
               </AtomProvider>
            </ThemeProvider>
         </SessionProvider>
   );
};

export default Providers;