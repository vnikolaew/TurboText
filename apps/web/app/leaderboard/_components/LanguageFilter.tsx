"use client";
import { LANGUAGES_MAP } from "@atoms/consts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import React from "react";
import { useRouter } from "next/navigation";

export interface LanguageFilterProps {
   language: string;
}

const LanguageFilter = ({ language }: LanguageFilterProps) => {
   const router = useRouter();

   return (
      <Select
         onValueChange={l => router.push(`?language=${encodeURIComponent(l)}`)}
      >
         <SelectTrigger className="w-[300px] !bg-black">
            <SelectValue placeholder={language} />
         </SelectTrigger>
         <SelectContent className={`!bg-black !rounded-lg !z-[100]`}>
            {Object.values(LANGUAGES_MAP).map((language, index) => (
               <SelectItem
                  className={`!rounded-md cursor-pointer hover:!bg-neutral-300 transition-colors duration-100 hover:!text-black`}
                  key={language} value={language}>{language}</SelectItem>
            ))}
         </SelectContent>
      </Select>
   );
};

export default LanguageFilter;