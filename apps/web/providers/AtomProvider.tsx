"use client";
import { Provider } from "jotai";
import React, { PropsWithChildren } from "react";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import { __IS_DEV__ } from "@lib/consts";

export interface AtomProviderProps extends PropsWithChildren {
}

const AtomProvider = ({ children }: AtomProviderProps) => {
   return (
      <Provider>
         {children}
         {__IS_DEV__ && <DevTools />}
      </Provider>
   );
};

export default AtomProvider;