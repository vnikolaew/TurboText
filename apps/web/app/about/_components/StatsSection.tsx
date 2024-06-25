import React from "react";
import { ListOrdered } from "lucide-react";

export interface StatsSectionProps {
}

const StatsSection = ({}: StatsSectionProps) => {
   return (
      <section id={`stats`} className={`text-left flex flex-col items-start gap-4`}>
         <h2 className={`text-xl mt-16 text-main inline-flex items-center gap-2`}>
            <ListOrdered size={20} />
            <span>
               Stats
            </span>
         </h2>
         <p className={`!text-secondary`}>
            <ul>
               <li> wpm - total number of characters in the correctly typed words (including spaces), divided by 5 and normalised to 60 seconds. </li>
               {/*<li> raw wpm - calculated just like wpm, but also includes incorrect words. </li>*/}
               <li> acc - percentage of correctly pressed keys.</li>
               {/*<li> char - correct characters / incorrect characters. Calculated after the test has ended. </li>*/}
               <li> consistency - based on the variance of your raw wpm. Closer to 100% is better. Calculated using the coefficient of variation of raw wpm and mapped onto a scale from 0 to 100. </li>
            </ul>
         </p>
      </section>
   );
};

export default StatsSection;