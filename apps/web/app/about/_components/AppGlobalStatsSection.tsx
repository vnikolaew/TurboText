import { TypingRun } from "@repo/db";
import React from "react";
import { formatMilliseconds } from "@lib/utils";

export interface AppGlobalStatsSectionProps {
   runs: TypingRun[]
}

const AppGlobalStatsSection = ({runs}: AppGlobalStatsSectionProps) => {

   const [amount, unit] = formatMilliseconds(runs
      .map(r => r.typedLettersInfo?.typedLetters?.at(-1)?.timestamp as number)
      .reduce((a, b) => a + b, 0))?.split(` `);

   return (
      <section id={`stats`} className={`w-full grid grid-cols-3 gap-4 mt-12`}>
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-neutral-400`}>Total tests started</h3>
            <h2 className={`text-6xl`}>{runs.length}</h2>
            <span></span>
         </div>
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-neutral-400`}>Total users typing time</h3>
            <h2 className={`text-6xl mt-2 drop-shadow-md`}>{amount}</h2>
            <span className={`mt-2 text-lg`}>{unit}</span>
         </div>
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-neutral-400`}>Total tests completed</h3>
            <h2 className={`text-6xl mt-2 drop-shadow-md`}>{runs.length}</h2>
            <span className={`mt-2`}></span>
         </div>
      </section>
   );
};

export default AppGlobalStatsSection;