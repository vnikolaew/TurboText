"use client";
import React from "react";
import SettingLayout from "../SettingLayout";
import { Languages } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import { useAtom } from "jotai/index";
import { userLanguageAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";

export interface LanguageSectionProps {
}

export const LANGUAGES = [
   `English`,
   `Spanish`,
   `Italian`,
   `French`,
   `German`,
   `Russian`,
   `Mongolian`,
   `Arabic`,
   `Czech`,
];

const LanguageSection = ({}: LanguageSectionProps) => {
   const [userLanguage, setUserLanguage] = useAtom(userLanguageAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setUserLanguage(res?.data?.userConfig.language);
         }
      },
   });

   function handleSelectLanguage(value: string): void {
      console.log({ value });
      execute({ language: value });
   }

   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Languages className={`text-main `} size={20} />
               <span className={`text-xl text-main`}>
                  Language
               </span>
            </h2>
            <p className={`mt-2 text-base !text-secondary`}>
               Change the language you want to type in.
            </p>
         </div>
         <div className={`flex items-center gap-2 w-full h-full my-auto justify-center`}>
            <Select onValueChange={handleSelectLanguage}>
               <SelectTrigger className="w-full !bg-secondary-bg !text-main">
                  <SelectValue placeholder={userLanguage} />
               </SelectTrigger>
               <SelectContent className={`w-full bg-secondary-bg`}>
                  {LANGUAGES.map((language, index) => (
                     <SelectItem className={`w-full hover:!bg-accent hover:!text-secondary !text-main`} key={language} value={language}>
                        {language}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </div>
      </SettingLayout>
   );
};

export default LanguageSection;