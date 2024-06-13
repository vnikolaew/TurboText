import React, { PropsWithChildren } from "react";
import SessionProvider from "./SessionProvider";
import { ThemeProvider } from "./ThemeProvider";
import AtomProvider from "@providers/AtomProvider";

interface ProvidersProps extends PropsWithChildren {
}

const Providers = ({ children }: ProvidersProps) => {
   return (
         <SessionProvider>
            <ThemeProvider
               enableSystem
               disableTransitionOnChange
               themes={[`light`, `dark`]}
               storageKey={crypto.randomUUID()}
               defaultTheme={`dark`}
               attribute={`class`}>
               <AtomProvider>
                  {children}
               </AtomProvider>
            </ThemeProvider>
         </SessionProvider>
   );
};

export default Providers;