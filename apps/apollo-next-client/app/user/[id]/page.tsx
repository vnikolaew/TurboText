"use client";
import React from "react";
import { gql } from "@/__generated__";
import { useFragment, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export interface PageProps {
}

const USER_FRAGMENT = gql(/* GraphQL */`
    fragment UserFragment on User {
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
`);


const USER_QUERY = gql(/* GraphQL */`
    query User($where: UserWhereUniqueInput!) {
        user(where: $where) {
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
   const userId = useParams()?.id;
   const { data: userFragment, missing, complete } = useFragment({
      fragment: USER_FRAGMENT,
      fragmentName: `UserFragment`,
      from: {
         __typename: `User`,
         id: userId as string,
      },
   });
   const { data, loading, error } = useQuery(USER_QUERY, {
      variables: { where: { id: userId as string } },
      skip: !userId?.length || complete,
   });

   console.log({ userFragment, missing, complete });

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error</div>;

   return (
      <div className={`mt-24 flex flex-col mx-auto gap-2 items-center`}>
         <div className={`flex items-center gap-4`}>
            <Image height={100} width={100} className={`rounded-full shadow-md`} src={userFragment?.image! ?? ``}
                   alt={userFragment?.name!} />
            <div className={`flex flex-col items-start gap-2`}>
               <span className={`text-xl`}>{userFragment?.name}</span>
               <span>{userFragment?.email}</span>
               <div className={`flex items-center gap-8`}>
                  <span>Level: <b>{userFragment?.experience?.level}</b> </span>
                  <span>XP: <b>
                     {userFragment?.experience?.points}
                  </b></span>
               </div>
            </div>
         </ div>
         <div className={`mt-8`}>
            <Link className={`text-blue-500 underline`} href={`/user`}>Go Back</Link>
         </div>
      </div>
   );
};

export default Page;