"use client";
import React, { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export interface ApolloProviderProps extends PropsWithChildren {
}

const client = new ApolloClient({
   uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
   cache: new InMemoryCache({}),
});

const ApolloProviderC = ({ children }: ApolloProviderProps) => {
   return (
      <ApolloProvider client={client}>
         {children}
      </ApolloProvider>
   );
};

export default ApolloProviderC;