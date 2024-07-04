"use client";
import React, { PropsWithChildren } from "react";
import WithUserLoading from "@app/_components/WithUserLoading";

export interface LayoutProps extends PropsWithChildren {
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <WithUserLoading>
         {children}
      </WithUserLoading>
   );
};

export default Layout;