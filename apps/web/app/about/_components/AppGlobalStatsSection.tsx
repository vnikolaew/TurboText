import { TypingRun } from "@repo/db";
import { CirclePlay, Clock, Swords } from "lucide-react";

export interface AppGlobalStatsSectionProps {
   amount: string,
   unit: string,
   runs: TypingRun[],
   challenges: any[]
}

const AppGlobalStatsSection = ({
                                  unit,
                                  amount,
                                  runs,
                                  challenges,
                               }: AppGlobalStatsSectionProps) => {
   return (
      <section
         id={`global-stats`}
         className={`mt-12 grid w-full grid-cols-3 gap-4`}
      >
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-secondary inline-flex items-center gap-2`}>
               <CirclePlay className={`text-accent`} />
               Total tests started
            </h3>
            <h2 className={`text-6xl text-main  `}>{runs.length}</h2>
            <span />
         </div>
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-secondary inline-flex items-center gap-2`}>
               <Clock className={`text-accent`} />
               Total users typing time
            </h3>
            <h2 className={`mt-2 text-6xl drop-shadow-md text-main`}>{amount}</h2>
            <span className={`mt-2 text-lg text-main`}>{unit}</span>
         </div>
         <div className={`flex flex-col items-center`}>
            <h3 className={`text-lg text-secondary inline-flex items-center gap-2`}>
               <Swords className={`text-accent`} />
               Total challenges started
            </h3>
            <h2 className={`mt-2 text-6xl drop-shadow-md text-main`}>{challenges.length}</h2>
            <span className={`mt-2`} />
         </div>
      </section>
   );
};

export default AppGlobalStatsSection;
