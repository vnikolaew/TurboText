import React, { PropsWithChildren } from "react";
import { __IS_DEV__ } from "@lib/consts";

export interface LayoutProps extends PropsWithChildren {
}

const Layout = async ({ children }: LayoutProps) => {
   if (!__IS_DEV__) return null;

   return (
      <div>
         {children}
      </div>
   );
};

export default Layout;