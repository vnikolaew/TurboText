import { useAtom } from "jotai";
import { userLanguageAtom } from "@atoms/user";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { CommandItem } from "@repo/ui";
import { Check, ChevronRight, Languages } from "lucide-react";

export const LanguageOption = ({ language }: { language: string }) => {
   const [userLanguage, setUserLanguage] = useAtom(userLanguageAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res?.data?.success) {
            console.log(res);
            setUserLanguage(res.data.userConfig?.language);
         }
      },
   });

   return (
      <CommandItem
         value={language}
         onSelect={_ => execute({ language })}
         key={language} className={`flex items-center gap-6 w-full cursor-pointer`}>
         <div className={`flex items-center gap-1`}>
            <Languages size={12} />
            <span className={`text-xs`}>Language</span>
            <ChevronRight size={10} />
         </div>
         <span>{language}</span>
         {language === userLanguage && <span className={`text-xs font-bold`}>
            <Check size={12} className={`text-neutral-300`} />
         </span>}
      </CommandItem>
   );
};