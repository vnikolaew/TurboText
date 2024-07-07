import DevOnly from "@components/common/DevOnly";
import { PropsWithChildren } from "react";

export interface LayoutProps extends PropsWithChildren {}

const Layout = async ({ children }: LayoutProps) => {
   return <DevOnly>{children}</DevOnly>;
};

export default Layout;
