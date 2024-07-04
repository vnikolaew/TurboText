"use client";
import { PropsWithChildren, useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePrevious } from "@hooks/usePrevious";

export interface LayoutProps extends PropsWithChildren {
}

const Layout = ({ children }: LayoutProps) => {
   const pathname = usePathname();
   const prevPathname = usePrevious(pathname);

   useEffect(() => {
      console.log({ pathname, prevPathname });
   }, [pathname]);

   return children;
};

export default Layout;