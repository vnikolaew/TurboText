"use client";
import React, { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, gql, from, ApolloLink, HttpLink } from "@apollo/client";
import { ME_QUERY } from "@/hooks/useAuthStatus";
import { RetryLink } from "@apollo/client/link/retry";

export interface ApolloProviderProps extends PropsWithChildren {
}

export const DEFAULT_USER_AVATAR_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg`;

export const IS_LOGGED_IN = gql(/* GraphQL */`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`);

const chain = from([
   new ApolloLink((operation, forward) => {
      console.log(`Apollo Client ~> Requesting operation: ${operation.operationName}`);
      return forward(operation);
   }),
   new RetryLink({ delay: { max: 3000, jitter: true }, attempts: { max: 3 } }),
   new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL!, credentials: `include`, headers: {
         "x-client-name": "Apollo Next Client V1",
         "x-client-version": "1.0.0",
      },
   }),
]);

const client = new ApolloClient({
   link: chain,
   uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
   cache: new InMemoryCache({
      typePolicies: {
         TypingRun: {
            fields: {
               createdAt: {
                  read(value?: Date | string) {
                     return typeof value === `string` ? new Date(value) : value;
                  },
               }
            }
         },
         User: {
            fields: {
               image: {
                  read(value?: string | null) {
                     return value ?? DEFAULT_USER_AVATAR_URL;
                  },
               },
            },
         },
         IsUserLoggedIn: {
            fields: {
               isLoggedIn: {
                  read(_, { cache }) {
                     const me = cache.readQuery({ query: ME_QUERY });
                     return Boolean(me?.me?.id);
                  },
               },
            },
         },
      },
   }),
});

const ApolloProviderC = ({ children }: ApolloProviderProps) => {
   return (
      <ApolloProvider client={client}>
         {children}
      </ApolloProvider>
   );
};

export default ApolloProviderC;