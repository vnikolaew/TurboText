"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@repo/ui";

export interface PageProps {
}

const Page = ({}: PageProps) => {
   const { setTheme, theme } = useTheme();
   console.log(document.querySelector(`html`)?.className);

   const handleChangeTheme = (newTheme: string) => {
      setTheme(newTheme)
      document.querySelector(`html`).className = document.querySelector(`html`)?.className?.replace(theme, newTheme);
   };

   return (
      <div className={`w-full items-center flex flex-col mt-24 gap-2`}>
         <span className={`theme1-red`}>
            Theme: {theme}
         </span>
         <div className={`flex items-center gap-2 p-2 rounded-md bg-white`}>
            <span className={`w-8 h-8 bg-background rounded-md`}></span>
            <span className={`w-8 h-8 bg-accent rounded-md`}></span>
            <span className={`w-8 h-8 bg-main rounded-md`}></span>
            <span className={`w-8 h-8 bg-secondary rounded-md`}></span>
            <span className={`w-8 h-8 bg-secondary-bg rounded-md`}></span>
         </div>
         <Button onClick={_ => handleChangeTheme(`theme-1`)}>Change to 1</Button>
         <Button onClick={_ => handleChangeTheme(`theme-2`)}>Change to 2</Button>
         <Button onClick={_ => handleChangeTheme(`theme-3`)}>Change to 3</Button>
         <Button onClick={_ => handleChangeTheme(`theme-4`)}>Change to 4</Button>
         <Button onClick={_ => handleChangeTheme(`dark`)}>Dark</Button>
         <Button onClick={_ => handleChangeTheme(`light`)}>Light</Button>
      </div>
   );
};

export default Page;