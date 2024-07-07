"use client";
import { Button } from "@repo/ui";
import { signIn } from "next-auth/react";

export interface SignOutButtonProps {}

const SignInButton = ({}: SignOutButtonProps) => {
   return (
      <Button
         onClick={() => signIn(`google`)}
         className={`rounded-lg px-8`}
         variant={`secondary`}
      >
         Sign in
      </Button>
   );
};

export default SignInButton;
