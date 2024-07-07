import LoginForm from "@app/login/_components/LoginForm";
import RegisterForm from "@app/login/_components/RegisterForm";
import { APP_DESCRIPTION, APP_NAME } from "@config/site";
import type { Metadata } from "next";

export interface PageProps {}

export const metadata: Metadata = {
   title: `Login | ${APP_NAME}`,
   description: APP_DESCRIPTION,
};

const Page = ({}: PageProps) => {
   return (
      <section
         className={`mx-auto mt-24 flex w-2/3 flex-col items-center gap-4`}
      >
         <div className={`mt-24 flex w-4/5 items-start justify-between`}>
            <RegisterForm />
            <LoginForm />
         </div>
      </section>
   );
};

export default Page;
