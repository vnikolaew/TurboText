import React from "react";
import { BarChartHorizontal } from "lucide-react";

export interface WordsSetAndLanguageSectionProps {
}

const WordsSetAndLanguageSection = ({}: WordsSetAndLanguageSectionProps) => {
   return (
      <section id={`word-set-and-language`} className={`text-left flex flex-col items-start gap-4`}>
         <h2 className={`text-xl mt-16 text-main inline-flex items-center gap-2`}>
            <BarChartHorizontal size={20} />
            <span>
               Word set and Languages
            </span>
         </h2>
         <p className={`!text-secondary`}>
            By default, this website uses the most common 20000 words in the English language to generate its tests. You
            can always change the language entirely.
         </p>
      </section>
   );
};

export default WordsSetAndLanguageSection;