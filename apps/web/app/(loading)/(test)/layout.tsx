import React, { Fragment, PropsWithChildren } from "react";
import LayoutParticles from "./_components/LayoutParticles";

export interface LayoutProps extends PropsWithChildren {
}

const Layout = async ({ children }: LayoutProps) => {
   return (
      <Fragment>
         <LayoutParticles/>
         {children}
      </Fragment>
   );
};

export default Layout;