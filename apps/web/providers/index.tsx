"use client";
import { themeAtom } from "@atoms/user";
import { THEMES } from "@lib/consts";
import AtomProvider from "@providers/AtomProvider";
import FontProvider from "@providers/DynamicFontProvider";
import { useAtomValue } from "jotai";
import { PropsWithChildren } from "react";
import SessionProvider from "./SessionProvider";
import { ThemeProvider } from "./ThemeProvider";
import AblyProvider from "./AblyProvider";
import WebSocketProvider from "@providers/WebSocketProvider";

interface ProvidersProps extends PropsWithChildren {}

const Providers = ({ children }: ProvidersProps) => {
   const theme = useAtomValue(themeAtom);

   return (
      <SessionProvider>
         <ThemeProvider
            enableSystem
            disableTransitionOnChange
            themes={THEMES}
            storageKey={crypto.randomUUID()}
            defaultTheme={theme ?? `dark`}
            attribute={`class`}
         >
            <AtomProvider>
               <WebSocketProvider>
                  <AblyProvider>
                     <FontProvider>{children}</FontProvider>
                  </AblyProvider>
               </WebSocketProvider>
            </AtomProvider>
         </ThemeProvider>
      </SessionProvider>
   );
};

export default Providers;
