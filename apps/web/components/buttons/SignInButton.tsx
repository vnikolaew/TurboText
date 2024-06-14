"use client";
import React from "react";
import { Button } from "@repo/ui";
import { signIn } from "next-auth/react";

export interface SignOutButtonProps {
}

const SignInButton = ({}: SignOutButtonProps) => {
   return (
      <Button onClick={() => signIn(`google`)} className={`px-8 rounded-lg`} variant={`secondary`}>
         Sign in
      </Button>
   );
};

export default SignInButton;