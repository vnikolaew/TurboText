"use client";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui";
import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { max } from "lodash";

export interface UserRunsChartThreeProps {
   runs: ({
      runs: number, range: Range
   })[];
}

const chartData = [
   { month: "January", desktop: 186, mobile: 80 },
   { month: "February", desktop: 305, mobile: 200 },
   { month: "March", desktop: 237, mobile: 120 },
   { month: "April", desktop: 73, mobile: 190 },
   { month: "May", desktop: 209, mobile: 130 },
   { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
   desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
   },
   mobile: {
      label: "Mobile",
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
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => `${value.replaceAll(`-`, ` - `)}%`} />
               <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
               />
               <Line
                  dataKey="runs"
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