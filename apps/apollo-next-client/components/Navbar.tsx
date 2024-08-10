"use client";
import React from "react";
import { gql } from "@/__generated__";
import { useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import logo from "@/public/favicon.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ME_QUERY, useAuthStatus } from "@/hooks/useAuthStatus";
import { IS_LOGGED_IN } from "@/providers/ApolloProvider";

export interface NavbarProps {
}

const SIGN_OUT_MUTATION = gql(/* GraphQL */`
    mutation SignOut {
        signOut
    }
`);

const Navbar = ({}: NavbarProps) => {
   const { data, loading, error } = useQuery(ME_QUERY, {});
   const { data: isLoggedIn, loading: loadingIsLoggedIn } = useQuery(IS_LOGGED_IN, { });
   const router = useRouter();

   const [signOut, { data: signOutData, error: _, loading: signingOut, client }] = useMutation(SIGN_OUT_MUTATION, {
      onCompleted: async ({ signOut }) => {
         let success = signOut;
         if (success) {
            try {
               console.log({ userId: data?.me?.id });

               client.cache.evict({ id: `User:${data?.me?.id}` });
               await client.cache.reset();

            } catch (err) {
               console.error(err);
            }
            router.push(`/`);
         }
      },
   });
   const authStatus = useAuthStatus();

   return (
      <div id={`navbar`} className={`w-full px-24 py-6 border-b border-neutral-800`}>
         <nav className={`flex items-center justify-between`}>
            <Link href={`/`}>
               <Image className={`rounded-full shadow-md`} height={40} width={40} src={logo} alt={`logo`} />
            </Link>
            {loading && (
               <div className={`flex items-center w-[200px] gap-4`}>
                  <div className={`animate-pulse h-10 w-10 rounded-full bg-neutral-700`} />
                  <div className={`w-[100px] h-4 rounded-lg animate-pulse bg-neutral-700`} />
               </div>
            )}
            {data?.me && !error && (
               <div className={`flex items-center gap-4`}>
                  <Link className={`text-blue-500 underline mr-4`} href={`/user`}>Users</Link>
                  <Link href={`/user/${data?.me?.id}`}>
                     <Image height={40} width={40} className={`rounded-full shadow-md`}
                            src={data?.me?.image ?? ``}
                            alt={data?.me?.name! ?? ``} />
                  </Link>
                  <span>{data?.me?.name}</span>
                  <span>
                     <Link onClick={async e => {
                        e.preventDefault();
                        await signOut({});
                     }} className={`text-blue-500 underline`} href={`/`}>Logout</Link>
                  </span>
               </div>
            )}
            {(authStatus === `unauthenticated` || !!error || (!data?.me)) && !loading && (
               <div className={`flex items-center gap-4`}>
                  <div className={` h-10 w-10 rounded-full bg-neutral-700`} />
                  <span>
                     You&apos;re signed out.
                  </span>
                  <span>
                     <Link className={`text-blue-500 underline`} href={`/signin`}>Sign in</Link>
                  </span>
               </div>
            )}
         </nav>
      </div>
   );
};

export default Navbar;