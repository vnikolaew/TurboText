import { TypingRun } from "@repo/db";

export interface AppGlobalStatsSectionProps {
   amount: string;
   unit: string;
   runs: TypingRun[];
}

const AppGlobalStatsSection = ({
   unit,
   amount,
   runs,
}: AppGlobalStatsSectionProps) => {
   return (
      <section
         id={`global-stats`}
         className={`mt-12 grid w-full grid-cols-3 gap-4`}
      >
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-secondary`}>Total tests started</h3>
            <h2 className={`text-6xl`}>{runs.length}</h2>
            <span />
         </div>
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-secondary`}>
               Total users typing time
            </h3>
            <h2 className={`mt-2 text-6xl drop-shadow-md`}>{amount}</h2>
            <span className={`mt-2 text-lg`}>{unit}</span>
         </div>
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-secondary`}>Total tests completed</h3>
            <h2 className={`mt-2 text-6xl drop-shadow-md`}>{runs.length}</h2>
            <span className={`mt-2`}></span>
         </div>
      </section>
   );
};

export default AppGlobalStatsSection;
