"use client";
import { typedGql } from "@/__generated__/zeus/typedDocumentNode";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const query = typedGql(`query`)({
   users: [{}, {
      name: true, id: true, image: true, metadata: true, email: true,
      experience: [{}, { points: true, id: true, level: true }],
   }],
});

export default function Home() {
   const { data, loading, error } = useQuery(query);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error</p>;

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h2>
            Hi, Apollo Client x NextJS!
         </h2>
         <div className={`flex items-center gap-2`}>
            <Link href={`/signin`}>Sign in</Link>
            <Link href={`/signup`}>Sign up</Link>
         </div>
         <div>
            {data?.users.map((user) => (
               <div key={user.id}>
                  <p>
                     {user.id} - {user.name}
                  </p>
                  <span>{user.experience?.level} - {user.experience?.points}</span>
               </div>
            ))}
         </div>
      </main>
   );
}
