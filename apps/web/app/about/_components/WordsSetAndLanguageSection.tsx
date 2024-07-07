import { BarChartHorizontal } from "lucide-react";
import Link from "next/link";

export interface WordsSetAndLanguageSectionProps {}

const WordsSetAndLanguageSection = ({}: WordsSetAndLanguageSectionProps) => {
   return (
      <section
         id={`word-set-and-language`}
         className={`flex flex-col items-start gap-4 text-left`}
      >
         <h2
            className={`mt-16 inline-flex items-center gap-2 text-xl text-main`}
         >
            <BarChartHorizontal size={20} />
            <span>Word set and Languages</span>
         </h2>
         <p className={`!text-secondary`}>
            This website uses the most common <b>20000</b> words in the English
            language to generate its tests. However, you can always change the
            language from your{" "}
            <Link className={`text-accent`} href={`/settings`}>
               settings
            </Link>
            .
         </p>
      </section>
   );
};

export default WordsSetAndLanguageSection;
