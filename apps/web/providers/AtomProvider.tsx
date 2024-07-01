"use client";
import { Provider } from "jotai";
import React, { PropsWithChildren } from "react";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import DevOnly from "@components/common/DevOnly";

export interface AtomProviderProps extends PropsWithChildren {
}

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