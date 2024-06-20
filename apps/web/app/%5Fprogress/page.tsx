"use client";
import React, { useState } from "react";
import { Progress } from "@repo/ui";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   const [value, setValue] = useState(30);
   React.useEffect(() => {
      const timer = setTimeout(() => setValue(66), 500);
      return () => clearTimeout(timer);
   }, []);

   return (
      <section className={`w-2/3 mx-auto my-24 flex flex-col items-center gap-4`}>
         <Progress className={`w-1/2`} value={value} />
      </section>
   );
};

export default Page;