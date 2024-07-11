"use client";
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import React, { useMemo, useState } from "react";
import UserRunsChart from "@app/(loading)/account/_components/charts/UserRunsChart";
import UserRunsChartThree from "@app/(loading)/account/_components/charts/UserRunsChartThree";
import { TypingRun } from "@repo/db";
import { getRunsGrouped, getRunsGroupedByAccuracy } from "@app/(loading)/account/_queries/charts";
import { match } from "ts-pattern";
import { Crosshair, WholeWord } from "lucide-react";

interface ChartsSectionProps {
   runs: TypingRun[];
}

export enum ChartType {
   WPM = `wpm`,
   ACC_CON = `acc-con`,
}

const ChartsSection = ({ runs }: ChartsSectionProps) => {
   const [value, setValue] = useState<ChartType>(ChartType.WPM);
   const [runsGrouped, runsGroupedByAccuracy] = useMemo(() => [getRunsGrouped(runs), getRunsGroupedByAccuracy(runs)], [runs]);

   return (
      <section id={`stats`} className={`flex flex-col items-center gap-8 w-full`}>
        <div className={`flex flex-col gap-2 items-start`}>
           <Label className={`!text-lg`}>Select chart type</Label>
           <Select onValueChange={setValue} value={value}>
              <SelectTrigger className="w-[320px]">
                 <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className={`!bg-secondary-bg`}>
                 <SelectItem className={``}  value={ChartType.WPM}>
                    <div className={`flex items-center gap-2 w-full`}>
                       <WholeWord size={20} />
                       <span>
                     WPM (Words Per Minute)
                    </span>
                    </div>
                 </SelectItem>
                 <SelectItem className={``} value={ChartType.ACC_CON}>
                    <div className={`flex items-center gap-2 w-full`}>
                       <Crosshair size={18} />
                       <span>
                           Accuracy / Consistency
                        </span>
                    </div>
                    <span>
                    </span>
                 </SelectItem>
              </SelectContent>
           </Select>
        </div>
         <div className={`w-full`}>
            {match(value)
               .with(ChartType.WPM, () => <UserRunsChart runs={runsGrouped} />)
               .otherwise(() => <UserRunsChartThree runs={runsGroupedByAccuracy} />)
            }
         </div>
      </section>
   );
};

export default ChartsSection;