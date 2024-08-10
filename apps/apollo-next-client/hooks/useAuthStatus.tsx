"use client";

import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__";

export const ME_QUERY = gql(/* GraphQL */`
    query Me {
        me {
            id
            image
            metadata
            name
            tags {
                id
                metadata
                name
                createdAt
            }
            typingRuns {
                flags
                createdAt
                id
                metadata
                mode
                time
                typedLetters
            }
            emailVerified
            email
            experience {
                points
                metadata
                level
                id
            }
        }
    }
`);

export type AuthStatus = `authenticated` | `unauthenticated` | `loading`;

export function useAuthStatus(): AuthStatus {
   const { data, loading, error } = useQuery(ME_QUERY, {});
   const signedOut = useMemo(() => !loading && !data && error?.graphQLErrors?.some(e => e.extensions?.code === `UNAUTHENTICATED`), [error, data,loading]);

   return loading ? `loading` : signedOut ? `unauthenticated` : `authenticated`;
}