import React from "react";
import Stepper from "@app/(loading)/account/forgot-password/_components/Stepper";
import { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import { auth } from "@auth";
import { redirect } from "next/navigation";

export interface PageProps {
}

export const metadata: Metadata = {
   title: `Forgot your password | ${APP_NAME}`,
   description: APP_DESCRIPTION,
}

const Page = async ({}: PageProps) => {
   const session = await auth()
   if(session?.user) redirect(`/`)

   return (
      <section className={`mx-auto mt-24 flex w-2/3 flex-col items-center gap-4`}>
         <Stepper />
      </section>
   );
};

export default Page;