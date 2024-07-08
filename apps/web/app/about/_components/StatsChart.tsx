"use client";
import {
   ChartContainer,
   ChartLegend,
   ChartTooltip,
   ChartTooltipContent,
   type ChartConfig,
} from "@repo/ui";
import React, { PureComponent } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { max } from "lodash";
import "./chart-styles.css";

export interface StatsChartProps {
   usersGrouped: { range: `${number}-${number}`; usersCount: number }[];
}

const StatsChart = ({ usersGrouped }: StatsChartProps) => {
   const usersGroupedChartConfig = {
      usersCount: {
         label: ``,
      },
   } satisfies ChartConfig;

   return (
      <div className={`w-full`}>
         <ChartContainer config={usersGroupedChartConfig} className="max-h-[300px] w-5/6 !mx-auto">
            <BarChart accessibilityLayer data={usersGrouped}>
               <CartesianGrid horizontal vertical />
               <YAxis
                  dataKey="usersCount"
                  domain={[0, max(usersGrouped?.map(x => x.usersCount)!)! + 2]}
                  min={0}
                  max={max(usersGrouped?.map(x => x.usersCount)!)! + 2}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  // tickFormatter={(value) => value.slice(0, 3)}
               />
               <XAxis
                  dataKey="range"
                  className={`!overflow-visible`}
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tick={<CustomizedAxisTick />}
               />
               <ChartTooltip formatter={(value, name) => (
                  <span className={`inline-flex items-center gap-1`}>
                     <div className={`bg-accent w-4 h-4 rounded-sm border-main border-[1px]`} />
                     Users: {value.toString()}
                  </span>
               )} content={<ChartTooltipContent
                  labelFormatter={(label, payload) => <span>{label}</span>} />} />
               <ChartLegend content={props => (
                  <div className={`!mt-12 !text-right`}>distribution of average users' wpms</div>
               )} />
               <Bar dataKey="usersCount" fill="hsl(var(--accent))" radius={2} />
            </BarChart>
         </ChartContainer>
      </div>
   );
};

class CustomizedAxisTick extends PureComponent<{
   x: number;
   y: number;
   payload: { value: string };
   stroke: string
}> implements React.PureComponent<{ x: number; y: number; payload: { value: string } }> {
   render() {
      const { x, y, stroke, payload } = this.props;

      return (
         <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-30)">
               {payload.value}
            </text>
         </g>
      );
   }
}

export default StatsChart;