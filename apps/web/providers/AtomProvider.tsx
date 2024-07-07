"use client";
import DevOnly from "@components/common/DevOnly";
import { Provider } from "jotai";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import { PropsWithChildren } from "react";

export interface AtomProviderProps extends PropsWithChildren {}

const AtomProvider = ({ children }: AtomProviderProps) => {
   return (
      <Provider>
         {children}
         <DevOnly>
            <DevTools />
         </DevOnly>
      </Provider>
   );
};

export default AtomProvider;
