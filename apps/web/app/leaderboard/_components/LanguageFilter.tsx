"use client";
import { LANGUAGES_MAP } from "@atoms/consts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import React from "react";
import { parseAsString, useQueryState } from "nuqs";
import { useRouter } from "next/navigation";

export interface LanguageFilterProps {
   language: string;
}

const LanguageFilter = ({ language }: LanguageFilterProps) => {
   const [, setLanguage] = useQueryState(`language`, parseAsString.withDefault(language));
   const router = useRouter()

   return (
      <Select
         onValueChange={l => setLanguage(l).then(_ => router.refresh())}
      >
         <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
            <SelectValue placeholder={language} />
         </SelectTrigger>
         <SelectContent className={`!bg-secondary-bg !rounded-lg !z-[100] `}>
            {Object.values(LANGUAGES_MAP).map((language, index) => (
               <SelectItem
                  className={`!rounded-md cursor-pointer hover:!bg-accent hover:!text-main transition-colors duration-100 !text-main`}
                  key={language} value={language}>{language}</SelectItem>
            ))}
         </SelectContent>
      </Select>
   );
};

export default LanguageFilter;