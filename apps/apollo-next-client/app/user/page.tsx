"use client";
import React from "react";
import { gql } from "@/__generated__";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

export interface PageProps {
}

export const USERS_QUERY = gql(/* GraphQL */`
    query Users {
        users {
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

const Page = ({}: PageProps) => {
   const { data, loading, error } = useQuery(USERS_QUERY, {});

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error</div>;

   return (
      <div className={`flex flex-col items-start gap-8 mt-24 mx-auto w-fit`}>
         {data!.users.map(user => (
            <Link href={`/user/${user.id}`}
                  className={`flex items-center gap-4 hover:!opacity-90 cursor-pointer transition-opacity duration-200 border-b border-neutral-800 pb-4`}
                  key={user.id}>
               <Image className={`rounded-full shadow-md before:!text-center before:!align-middle before:!text-sm`}
                      height={64} width={64} alt={user.name!} src={user.image! ?? ``} />
               <div className={`flex flex-col items-start gap-2`}>
                  <span className={`text-xl`}>{user.name}</span>
                  <span className={`text-sm`}>{user.email}</span>
                  <div className={`flex items-center gap-2`}>
                     <span className={`text-base text-neutral-500`}>{user.typingRuns.length} total runs</span>
                     <div className={`w-[1px] bg-neutral-700 h-4`} />
                     <span className={`text-base text-neutral-500`}>Level: <b>{user.experience?.level}</b> </span>
                     <span className={`text-base text-neutral-500`}>XP: <b>{user.experience?.points}</b> </span>
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
};

export default Page;