"use client";
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui";
import React, { useMemo, useState } from "react";
import UserRunsChart from "@app/(loading)/account/_components/charts/UserRunsChart";
import UserRunsChartThree from "@app/(loading)/account/_components/charts/UserRunsChartThree";
import { TypingRun } from "@repo/db";
import { getRunsGrouped, getRunsGroupedByAccuracy } from "@app/(loading)/account/_queries/charts";
import { match } from "ts-pattern";

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
      <div className={`flex flex-col items-center gap-8 w-full`}>
        <div className={`flex flex-col gap-2 items-start`}>
           <Label className={`!text-lg`}>Select chart type</Label>
           <Select onValueChange={setValue} value={value}>
              <SelectTrigger className="w-[300px]">
                 <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                 <SelectItem value={ChartType.WPM}>WPM</SelectItem>
                 <SelectItem value={ChartType.ACC_CON}>Accuracy / Consistency</SelectItem>
              </SelectContent>
           </Select>
        </div>
         <div className={`w-full`}>
            {match(value)
               .with(ChartType.WPM, () => <UserRunsChart runs={runsGrouped} />)
               .otherwise(() => <UserRunsChartThree runs={runsGroupedByAccuracy} />)
            }
         </div>
      </div>
   );
};

export default ChartsSection;