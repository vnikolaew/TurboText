"use client";
import { LANGUAGES_MAP } from "@atoms/consts";
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import React from "react";
import { useSetAtom } from "jotai/index";
import { userSelectedLanguageAtom } from "@app/(dev)/%5Flobby/_atoms";

export interface UserGameLanguageSelectProps {
}

const UserGameLanguageSelect = ({}: UserGameLanguageSelectProps) => {
   const setUserLanguage = useSetAtom(userSelectedLanguageAtom)

   return (
      <div className={`flex flex-col items-start gap-2`}>
         <Label>Language:</Label>
         <Select
            onValueChange={l => setUserLanguage(l)}
         >
            <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
               <SelectValue placeholder={`English`} />
            </SelectTrigger>
            <SelectContent className={`!bg-secondary-bg !rounded-lg !z-[100] `}>
               {Object.values(LANGUAGES_MAP).map((language, index) => (
                  <SelectItem
                     className={`!rounded-md cursor-pointer hover:!bg-accent hover:!text-main transition-colors duration-100 !text-main`}
                     key={language} value={language}>{language}</SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
};

export default UserGameLanguageSelect;