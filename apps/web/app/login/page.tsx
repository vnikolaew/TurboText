import React from "react";
import LoginForm from "@app/login/_components/LoginForm";
import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import RegisterForm from "@app/login/_components/RegisterForm";

export interface PageProps {
}

export const metadata: Metadata = {
   title: `Login | ${APP_NAME}`,
   description: APP_DESCRIPTION,
}

const Page = ({}: PageProps) => {
   return (
      <section className={`w-2/3 mx-auto mt-24 flex flex-col items-center gap-4`}>
         <div className={`w-4/5 flex items-start justify-between mt-24`}>
            <RegisterForm />
            <LoginForm />
         </div>
      </section>
   );
};

export default Page;