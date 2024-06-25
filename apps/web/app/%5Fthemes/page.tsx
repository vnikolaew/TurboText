"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@repo/ui";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   const { setTheme, theme } = useTheme();

   return (
      <div className={`w-full items-center flex flex-col mt-24 gap-2`}>
         <span>
            Theme: {theme}
         </span>
         <Button onClick={_ => setTheme(`theme-1`)}>Change to 1</Button>
         <Button onClick={_ => setTheme(`theme-2`)}>Change to 2</Button>
      </div>
   );
};

export default Page;