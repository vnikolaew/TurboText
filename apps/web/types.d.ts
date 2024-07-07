import React from "react";

declare namespace JSX {
   interface IntrinsicElements {
      letter: React.DetailedHTMLProps<
         React.HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      >;
   }
}

declare module "*.wav" {
   const value: any;
   export default value;
}
