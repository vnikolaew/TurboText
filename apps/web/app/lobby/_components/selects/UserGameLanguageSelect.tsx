"use client";
import { userSelectedLanguageAtom } from "@app/%5Flobby/_atoms";
import { LANGUAGES_MAP } from "@atoms/consts";
import {
   Label,
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@repo/ui";
import { useSetAtom } from "jotai/index";
import Image from "next/image";

export interface UserGameLanguageSelectProps {}

export const UserGameLanguageSelect = ({}: UserGameLanguageSelectProps) => {
   const setUserLanguage = useSetAtom(userSelectedLanguageAtom);

   return (
      <div className={`flex flex-col items-start gap-2`}>
         <Label>Language:</Label>
         <Select onValueChange={(l) => setUserLanguage(l)}>
            <SelectTrigger className="w-[300px] !bg-secondary-bg !text-main">
               <SelectValue
                  placeholder={
                     <div className={`flex w-full items-center gap-2`}>
                        <Image
                           alt={``}
                           height={2}
                           width={24}
                           src={`https://flagsapi.com/GB/flat/64.png`}
                        />
                        English
                     </div>
                  }
               />
            </SelectTrigger>
            <SelectContent className={`!z-[100] !rounded-lg !bg-secondary-bg`}>
               {Object.entries(LANGUAGES_MAP).map(([code, language], index) => (
                  <SelectItem
                     className={`cursor-pointer !rounded-md !text-main transition-colors duration-100 hover:!bg-accent hover:!text-main`}
                     key={language}
                     value={language}
                  >
                     <div className={`flex w-full items-center gap-2`}>
                        <Image
                           alt={``}
                           height={2}
                           width={24}
                           src={`https://flagsapi.com/${code === `en` ? `GB` : code.toUpperCase()}/flat/64.png`}
                        />
                        {language}
                     </div>
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
};
