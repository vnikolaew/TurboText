"use client";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui";
import React from "react";
import { CartesianGrid, Label, Line, LineChart, XAxis, YAxis } from "recharts";
import { max } from "lodash";

export interface UserRunsChartThreeProps {
   runs: ({
      runsByAccuracy: number,
      runsByConsistency: number,
      range: Range
   })[];
}

const chartConfig = {
   runsByAccuracy: {
      label: <span className={`mr-2`}>Accuracy</span>,
      color: "hsl(var(--chart-1))",
   },
   runsByConsistency: {
      label: <span className={`mr-2`}>Consistency</span>,
      color: "hsl(var(--chart-2))",
   },
} satisfies ChartConfig;

const UserRunsChartThree = ({ runs }: UserRunsChartThreeProps) => {
   console.log({ runs });
   return (
      <div className={`w-full`}>
         <ChartContainer className="max-h-[340px] w-5/6 !mx-auto overflow-visible" config={chartConfig}>
            <LineChart
               accessibilityLayer
               data={runs}
               margin={{
                  left: 12,
                  right: 12,
               }}
            >
               <CartesianGrid vertical={false} />
               <YAxis
                  scale={`linear`}
                  interval={0}
                  label={{ value: `Runs`, angle: -90, position: "insideLeft" }}
                  dataKey="runs"
                  domain={[-1, max([...runs.flatMap(r => [r.runsByAccuracy, r.runsByConsistency])])! + 2]}
                  type={`number`}
                  min={0}
                  max={100}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
               />
               <XAxis
                  dataKey="range"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(value) => `${value.replaceAll(`-`, ` - `)}%`}>
                  <Label
                     style={{ marginTop: `1rem` }} className={`mt-8`} position={`bottom`} offset={10}
                     value={`Percentage`} />
               </XAxis>
               <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent className={``} content={props => {
                     return <span>{JSON.stringify(props, null, 2)}</span>;
                  }} labelFormatter={(label) => `${label.replaceAll(`-`, ` - `)}%`} />}
               />
               <Line
                  label={`Consistency`}
                  dataKey="runsByConsistency"
                  type="natural"
                  stroke="hsl(var(--main))"
                  strokeWidth={2}
                  dot={{
                     fill: "hsl(var(--main))",
                  }}
                  activeDot={{
                     r: 6,
                  }}
               />
               <Line
                  label={`Accuracy`}
                  dataKey="runsByAccuracy"
                  type="natural"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{
                     fill: "hsl(var(--accent))",
                  }}
                  activeDot={{
                     r: 6,
                  }}
               />
            </LineChart>
         </ChartContainer>
      </div>
   );
};

export default UserRunsChartThree;