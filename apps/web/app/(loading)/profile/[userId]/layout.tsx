"use client";
import { usePrevious } from "@hooks/usePrevious";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
   const pathname = usePathname();
   const prevPathname = usePrevious(pathname);

   useEffect(() => {
      console.log({ pathname, prevPathname });
   }, [pathname]);

   return children;
};

export default Layout;
