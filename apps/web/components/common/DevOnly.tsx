import { __IS_DEV__ } from "@lib/consts";
import { PropsWithChildren } from "react";

export interface DevOnlyProps extends PropsWithChildren {}

const DevOnly = ({ children }: DevOnlyProps) => {
   if (!__IS_DEV__) return null;
   return children;
};

export default DevOnly;
