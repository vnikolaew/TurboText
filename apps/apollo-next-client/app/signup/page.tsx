"use client";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@/__generated__";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface PageProps {
}


const SIGN_UP_MUTATION = gql(/* GraphQL */`
    mutation SignUp($signUpModel: UserSignUpInput!) {
        signUp(signUpModel: $signUpModel) {
            id
            image
            metadata
            name
        }
    }
`);


type FormValues = {
   email: string;
   username: string;
   password: string;
}

const Page = ({}: PageProps) => {
   const router = useRouter()
   const [signUp] = useMutation(SIGN_UP_MUTATION, {
      onCompleted: data => {
         console.log({ data });
         router.push(`/user/${data?.signUp?.id}`);
      },
      onError: error => {
         console.error({ error });
      },
   });

   const [formValues, setFormValues] = useState<FormValues>({
      email: ``,
      username: ``,
      password: ``,
   });

   return (
      <div className={`flex flex-col items-start gap-4 mt-24 mx-auto w-1/3`}>
         <h2 className={`text-2xl`}>Sign up Form</h2>
         <form onSubmit={async e => {
            e.preventDefault();
            console.log({ formValues });
            await signUp({
               variables: {
                  signUpModel: { ...formValues },
               },
            });
         }} className={`mx-auto flex flex-col w-full gap-2`}>
            <label htmlFor="name">Name</label>
            <input
               id={`name`}
               className={`text-black`}
               autoComplete={`off`}
               onChange={e => setFormValues({ ...formValues, username: e.target.value })} value={formValues.username}
               type={`text`} />
            <label htmlFor="email">Email</label>
            <input
               className={`text-black`}
               id={`email`}
               autoComplete={`off`}
               onChange={e => setFormValues({ ...formValues, email: e.target.value })} value={formValues.email}
               type={`email`} />
            <label htmlFor="{`password`}">Password</label>
            <input
               id={`password`}
               className={`text-black`}
               onChange={e => setFormValues({ ...formValues, password: e.target.value })} value={formValues.password}
               type={`password`} />
            <span>Already have an account? <Link className={`text-blue-500 underline`}
                                               href={`/signin`}>Sign in now.</Link></span>
            <button className={`bg-blue-500 mt-4 text-white rounded-md py-2 px-4 !w-fit`} type={"submit"}>Sign up</button>
         </form>
      </div>
   );
};

export default Page;