"use client";
import WithUserLoading from "@app/_components/WithUserLoading";
import { PropsWithChildren } from "react";

export interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
   return <WithUserLoading>{children}</WithUserLoading>;
};

export default Layout;
