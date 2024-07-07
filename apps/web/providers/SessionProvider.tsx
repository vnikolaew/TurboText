"use client";
import { SessionProvider as SP } from "next-auth/react";
import { PropsWithChildren } from "react";

const SessionProvider = ({ children }: PropsWithChildren) => {
   return <SP>{children}</SP>;
};

export default SessionProvider;
