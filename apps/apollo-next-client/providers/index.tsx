"use client";
import React, { PropsWithChildren } from "react";
import ApolloProvider from "@/providers/ApolloProvider";

export interface IndexProps extends PropsWithChildren {
}

const Providers = ({children}: IndexProps) => {
   return (
      <ApolloProvider>
         {children}
      </ApolloProvider>
   );
};

export default Providers;