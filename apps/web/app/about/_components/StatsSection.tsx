import { ListOrdered } from "lucide-react";

export interface StatsSectionProps {}

const StatsSection = ({}: StatsSectionProps) => {
   return (
      <section
         id={`stats`}
         className={`flex flex-col items-start gap-4 text-left`}
      >
         <h2
            className={`mt-16 inline-flex items-center gap-2 text-xl text-main`}
         >
            <ListOrdered size={20} />
            <span>Stats</span>
         </h2>
         <p className={`!text-secondary`}>
            <ul>
               <li>
                  {" "}
                  <b className={`text-accent`}>wpm</b> - total number of
                  characters in the correctly typed words (including spaces),
                  divided by 5 and normalised to 60 seconds.{" "}
               </li>
               {/*<li> raw wpm - calculated just like wpm, but also includes incorrect words. </li>*/}
               <li>
                  {" "}
                  <b className={`text-accent`}>acc</b> - percentage of correctly
                  pressed keys.
               </li>
               {/*<li> char - correct characters / incorrect characters. Calculated after the test has ended. </li>*/}
               <li>
                  {" "}
                  <b className={`text-accent`}>consistency</b> - based on the
                  variance of your wpm. Closer to 100% is better. Calculated
                  using the coefficient of variation of raw wpm and mapped onto
                  a scale from 0 to 100.{" "}
               </li>
            </ul>
         </p>
      </section>
   );
};

export default StatsSection;
