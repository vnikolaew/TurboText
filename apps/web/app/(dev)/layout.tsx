import React, { PropsWithChildren } from "react";
import DevOnly from "@components/common/DevOnly";

export interface LayoutProps extends PropsWithChildren {
}

const Layout = async ({ children }: LayoutProps) => {
   return (
      <DevOnly>
         {children}
      </DevOnly>
   );
};

export default Layout;