"use client";
import React from "react";
import {
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
   type ChartConfig,
} from "@repo/ui";
import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis } from "recharts";
import { max } from "lodash";

export type Range = `${number}-${number}`

export interface UserRunsChartProps {
   runs: ({
      runs: number, range: Range
   })[];
}

const UserRunsChart = ({ runs }: UserRunsChartProps) => {
   const chartConfig = {
      runsCount: {
         label: ``,
      },
   } satisfies ChartConfig;

   return (
      <div className={`w-full `}>
         <ChartContainer config={chartConfig} className="max-h-[340px] w-5/6 !mx-auto overflow-visible">
            <BarChart margin={{
               bottom: 40,
            }} className={`overflow-visible`} accessibilityLayer data={runs}>
               <CartesianGrid horizontal vertical />
               <YAxis
                  label={{ value: `Runs`, angle: -90, position: "insideLeft" }}
                  dataKey="runs"
                  domain={[0, max(runs?.map(x => x.runs)!)! + 2]}
                  min={0}
                  max={max(runs?.map(x => x.runs)!)! + 2}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
               />
               <XAxis
                  dataKey="range"
                  className={`!overflow-visible`}
                  // label={{ value: `WPM`, position: "bottom" }}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={label => label.replaceAll(`-`, ` - `)}
               >
                  <Label
                     style={{ marginTop: `1rem` }} className={`mt-8`} position={`bottom`} offset={10}
                     value={`WPM`} />
               </XAxis>
               <ChartTooltip formatter={(value) => (
                  <span className={`inline-flex items-center gap-1`}>
                     <div className={`bg-accent w-4 h-4 rounded-sm border-main border-[1px]`} />
                     Runs: {value.toString()}
                  </span>
               )} content={<ChartTooltipContent
                  labelFormatter={(label) => <span>{label.replaceAll("-", " - ")}</span>} />} />
               <Bar dataKey="runs" fill="hsl(var(--accent))" radius={2} />
            </BarChart>
         </ChartContainer>
      </div>
   );
};

export default UserRunsChart;