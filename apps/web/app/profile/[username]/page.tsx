import { prisma } from "@repo/db";
import React from "react";
import { notFound } from "next/navigation";

export interface PageProps {
   params: { username?: string };
}

const Page = async ({ params }: PageProps) => {
   console.log({ params });
   const user = await prisma.user.findFirst({
      where: { name: decodeURIComponent(params.username!) },
   });
   if(!user) notFound()

   console.log({ user });

   return (
      <div>
         {user.name} profile page.
         <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
   );
};

export default Page;