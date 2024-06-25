import React, { PropsWithChildren } from "react";
import SessionProvider from "./SessionProvider";
import { ThemeProvider, THEMES } from "./ThemeProvider";
import AtomProvider from "@providers/AtomProvider";
import FontProvider from "@providers/FontProvider";

interface ProvidersProps extends PropsWithChildren {
}

const Providers = ({ children }: ProvidersProps) => {
   return (
         <SessionProvider>
            <ThemeProvider
               enableSystem
               disableTransitionOnChange
               themes={THEMES}
               storageKey={crypto.randomUUID()}
               defaultTheme={`dark`}
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