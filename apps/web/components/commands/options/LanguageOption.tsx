import { updateUserConfiguration } from "@app/settings/actions";
import { userConfigAtom, userLanguageAtom } from "@atoms/user";
import { generateWordsAtom } from "@atoms/words";
import { CommandItem } from "@repo/ui";
import { useAtom } from "jotai";
import { useSetAtom } from "jotai/index";
import { Check, ChevronRight, Languages } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

export const LanguageOption = ({ language }: { language: string }) => {
   const [userLanguage, setUserLanguage] = useAtom(userLanguageAtom);
   const setUserConfig = useSetAtom(userConfigAtom);
   const generateWords = useSetAtom(generateWordsAtom);

   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: async (res) => {
         if (res?.data?.success) {
            console.log(res);
            // setUserLanguage(res.data.userConfig?.language);
            setUserConfig((c) => ({
               ...c,
               language: res.data?.userConfig?.language,
            }));
            await generateWords();
         }
      },
   });

   return (
      <CommandItem
         value={`language-${language}`}
         onSelect={(_) => execute({ language })}
         key={language}
         className={`flex w-full cursor-pointer items-center gap-6`}
      >
         <div className={`flex items-center gap-1`}>
            <Languages size={12} />
            <span className={`text-xs`}>Language</span>
            <ChevronRight size={10} />
         </div>
         <span>{language}</span>
         {language === userLanguage && (
            <span className={`text-xs font-bold`}>
               <Check size={12} className={`text-neutral-300`} />
            </span>
         )}
      </CommandItem>
   );
};
