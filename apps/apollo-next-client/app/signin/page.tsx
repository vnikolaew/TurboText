"use client";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@/__generated__";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface PageProps {
}


type FormValues = {
   email: string;
   username: string;
   password: string;
}

const SIGN_IN_MUTATION = gql(/* GraphQL */`
    mutation SignIn($signInModel: UserSignInInput!) {
        signIn(signInModel: $signInModel) {
            id
            image
            metadata
            name
        }
    }
`);

const QUERY = gql(/* GraphQL */`
    query UserQuery($where: UserWhereUniqueInput!) {
        user(where: $where) {
            id
            email
            image
            name
            metadata
        }
    }
`);

const Page = ({}: PageProps) => {
   const { data, loading, error } = useQuery(QUERY, {
      variables: {
         where: { id: "cly49tpu00003kx44o2bz43y4" },
      },
   });
   const router = useRouter()
   const [signIn] = useMutation(SIGN_IN_MUTATION, {
      onCompleted: data => {
         console.log({ data });
         router.push(`/user/${data?.signIn?.id}`);

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

   console.log({ data });
   return (
      <div className={`flex flex-col items-start gap-4 mt-24 mx-auto w-1/3`}>
         <h2 className={`text-2xl`}>Sign in Form</h2>
         <form onSubmit={async e => {
            e.preventDefault();
            console.log({ formValues });
            await signIn({
               variables: {
                  signInModel: { ...formValues },
               },
            });
         }} className={` mx-auto flex flex-col  gap-2 w-full`}>
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
            <span>Don't have an account? <Link className={`text-blue-500 underline`} href={`/signup`}>Sign up now.</Link></span>
            <button className={`bg-blue-500 mt-4 text-white rounded-md py-2 px-4 !w-fit`} type={"submit"}>Sign in</button>
         </form>
      </div>
   );
};

export default Page;