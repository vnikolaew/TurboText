import React from "react";
import { BarChartHorizontal } from "lucide-react";
import Link from "next/link";

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
            This website uses the most common 20000 words in the English language to generate its tests. However, you
            can always change the language from your <Link className={`text-accent`} href={`/settings`}>settings</Link>.
         </p>
      </section>
   );
};

export default WordsSetAndLanguageSection;