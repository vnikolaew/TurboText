"use client";
import { TypingRun } from "@repo/db";
import React from "react";
import {
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
   type ChartConfig,
} from "@repo/ui";
import { Bar, BarChart, CartesianGrid, Label, XAxis, YAxis } from "recharts";
import { max } from "lodash";

export interface UserRunsChartProps {
   runs: TypingRun[];
}

const UserRunsChart = ({ runs }: UserRunsChartProps) => {
   const chartConfig = {
      runsCount: {
         label: ``,
      },
   } satisfies ChartConfig;

   const runsGrouped = Array.from({ length: Math.ceil(max(runs.map(r => r.metadata?.wpm)) / 10) })
      .map((_, index) => {
         const [from, to] = [10 * index, 10 * (index + 1) - 1];
         return {
            range: `${from}-${to}` as `${number}-${number}`,
            usersCount: runs.filter(x => x.metadata?.wpm >= from && x.metadata?.wpm <= to).length,
         };
      });

   return (
      <div className={`w-full `}>
         <ChartContainer config={chartConfig} className="max-h-[340px] w-5/6 !mx-auto overflow-visible">
            <BarChart margin={{
               bottom: 40
            }} className={`overflow-visible`} accessibilityLayer data={runsGrouped}>
               <CartesianGrid horizontal vertical />
               <YAxis
                  label={{ value: `Runs`, angle: -90, position: "insideLeft" }}
                  dataKey="usersCount"
                  domain={[0, max(runsGrouped?.map(x => x.usersCount)!)! + 2]}
                  min={0}
                  max={max(runsGrouped?.map(x => x.usersCount)!)! + 2}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  // tickFormatter={(value) => value.slice(0, 3)}
               />
               <XAxis
                  dataKey="range"
                  className={`!overflow-visible`}
                  // label={{ value: `WPM`, position: "bottom" }}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={label => label.replaceAll(`-`, ` - `)}
                  // tick={<CustomizedAxisTick />}
               >
                  <Label style={{marginTop: `1rem`}} className={`mt-8`} position={`bottom`} offset={10} value={`WPM`} />
               </XAxis>
               <ChartTooltip formatter={(value, name) => (
                  <span className={`inline-flex items-center gap-1`}>
                     <div className={`bg-accent w-4 h-4 rounded-sm border-main border-[1px]`} />
                     Runs: {value.toString()}
                  </span>
               )} content={<ChartTooltipContent
                  labelFormatter={(label, payload) => <span>{label.replaceAll("-", " - ")}</span>} />} />
               <Bar dataKey="usersCount" fill="hsl(var(--accent))" radius={2} />
            </BarChart>
         </ChartContainer>
      </div>
   );
};

export default UserRunsChart;