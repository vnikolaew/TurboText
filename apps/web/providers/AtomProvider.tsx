"use client";
import { Provider } from "jotai";
import React, { PropsWithChildren } from "react";
import { DevTools } from "jotai-devtools";
import 'jotai-devtools/styles.css'

export interface AtomProviderProps extends PropsWithChildren {
}

const AtomProvider = ({ children }: AtomProviderProps) => {
   return (
      <Provider>
         {children}
         <DevTools />
      </Provider>
   );
};

export default AtomProvider;