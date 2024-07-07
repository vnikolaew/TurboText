import { __IS_PROD__ } from "@lib/consts";
import { PropsWithChildren } from "react";

export interface ProductionOnlyProps extends PropsWithChildren {}

const ProductionOnly = ({ children }: ProductionOnlyProps) => {
   if (!__IS_PROD__) return null;
   return children;
};

export default ProductionOnly;
