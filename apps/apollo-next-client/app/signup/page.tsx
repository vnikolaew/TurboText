"use client";
import React, { useState } from "react";
import { typedGql } from "@/__generated__/zeus/typedDocumentNode";
import { $ } from "@/__generated__/zeus";
import { useMutation } from "@apollo/client";

export interface PageProps {
}

const mutation = typedGql(`mutation`)({
   signUp: [{
      signUpModel: $(`signUpModel`, `UserSignUpInput!`),
   }, { name: true, id: true, email: true, image: true }],
});

type FormValues = {
   email: string;
   username: string;
   password: string;
}

const Page = ({}: PageProps) => {
   const [signUp] = useMutation(mutation, {
      onCompleted: data => {
         console.log({ data });
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
      <form onSubmit={async e => {
         e.preventDefault();
         console.log({ formValues });
         await signUp({
            variables: {
               signUpModel: { ...formValues },
            },
         });
      }} className={`mt-24 mx-auto flex flex-col w-1/3 gap-2`}>
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
         <button className={`bg-blue-500 text-white rounded-md py-2 px-4 !w-fit`} type={"submit"}>Sign in</button>
      </form>
   );
};

export default Page;