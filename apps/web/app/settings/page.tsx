import { auth } from "@auth";
import { xprisma } from "@repo/db";
import React from "react";
import { notFound } from "next/navigation";
import SettingsAccordion from "@app/settings/_components/SettingsAccordion";
import Sections from "./_components/Sections";

export interface PageProps {
   searchParams?: { sections: string | string[] | undefined };
}


const Page = async ({ }: PageProps) => {
   const session = await auth();
   const user = await xprisma.user.findUnique({
      where: { id: session?.user?.id ?? `` },
      include: { tags: true, configuration: true },
   });

   if (!user) notFound();
   const { updatePassword, verifyPassword, ...rest } = user;
   console.log({ user });

   return (
      <section className={`w-3/4 mx-auto my-24 flex flex-col items-center gap-4`}>
         <Sections />
         <SettingsAccordion user={rest} />
      </section>
   );
};

export default Page;