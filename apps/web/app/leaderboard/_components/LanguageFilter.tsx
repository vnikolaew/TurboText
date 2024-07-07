"use client";
import { LANGUAGES_MAP } from "@atoms/consts";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@repo/ui";
import { useRouter } from "next/navigation";
import { parseAsString, useQueryState } from "nuqs";

export interface LanguageFilterProps {
   language: string;
}

const LanguageFilter = ({ language }: LanguageFilterProps) => {
   const [, setLanguage] = useQueryState(
      `language`,
      parseAsString.withDefault(language)
   );
   const router = useRouter();

   return (
      <Select
         onValueChange={(l) => setLanguage(l).then((_) => router.refresh())}
      >
         <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
            <SelectValue placeholder={language} />
         </SelectTrigger>
         <SelectContent className={`!z-[100] !rounded-lg !bg-secondary-bg`}>
            {Object.values(LANGUAGES_MAP).map((language, index) => (
               <SelectItem
                  className={`cursor-pointer !rounded-md !text-main transition-colors duration-100 hover:!bg-accent hover:!text-main`}
                  key={language}
                  value={language}
               >
                  {language}
               </SelectItem>
            ))}
         </SelectContent>
      </Select>
   );
};

export default LanguageFilter;
