"use client";
import { TypingRun } from "@repo/db";
import React from "react";
import { mean, sum } from "lodash";
import moment from "moment";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui";
import { Bar, CartesianGrid, ComposedChart, Label, Line, XAxis, YAxis } from "recharts";
import { formatMillisecondsToTime } from "@lib/utils";

export interface UserRunsChartTwoProps {
   runs: TypingRun[];

}

function getAllDaysInLastMonth() {
   // Get the current date
   const currentDate = moment();

   // Get the start date of the previous month
   const startOfLastMonth = currentDate.clone().subtract(1, "months");

   // Create an array to hold all the dates
   let dates = [];

   // Iterate through each day of the previous month
   let currentDay = startOfLastMonth.clone();
   while (currentDay.isSameOrBefore(currentDate)) {
      dates.push(currentDay.toDate()); // Format the date as needed
      currentDay.add(1, "days");
   }

   return dates;
}

const UserRunsChartTwo = ({ runs }: UserRunsChartTwoProps) => {
   const runsGrouped: Record<string, TypingRun[]> =
      getAllDaysInLastMonth()
         .map(date => {
            const runs_ = runs.filter(r => moment(r.createdAt).isSame(moment(date), `date`));
            return { date, runs: runs_ };
         })
         .reduce((acc, { date, runs }) => ({
            ...acc,
            [`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`]: runs,
         }), {} as Record<string, TypingRun[]>);

   const stats = Object
      .entries(runsGrouped)
      .map(([date, runs]) => {
         const [day, month, year] = date.split(`-`).map(Number);
         return ({
            date: moment(new Date(year!, month - 1, day!)).toDate(),
            averageWpm: mean(runs.map(r => r.metadata?.wpm)),
            timeTypingMs: sum(runs.map(r => r.totalTimeMilliseconds)),
            runsCompleted: runs.length,
         });
      });

   const chartConfig = {
      timeTypingMs: {
         label: ``,
      },
   } satisfies ChartConfig;

   console.log({ runsGrouped, stats, dates: getAllDaysInLastMonth() });

   return <div/>

   return (
      <div className={`w-full`}>
         <ComposedChart height={300} width={800} className="max-h-[340px] w-5/6 !mx-auto overflow-visible" data={stats}>
            <CartesianGrid horizontal vertical />
            <YAxis
               label={{ value: `Time typing (seconds)`, angle: -90, position: "insideBottomLeft" }}
               dataKey="timeTypingMs"
               // domain={[0, max(runsGrouped?.map(x => x.usersCount)!)! + 2]}
               tickLine={false}
               tickMargin={10}
               orientation={`left`}
               axisLine={false}
               tickFormatter={(value) => Math.floor(Number(value) / 1000).toFixed(0)}
            />
            <YAxis
               orientation={`right`}
               label={{ value: `Average wpm`, angle: -90, position: "insideBottomRight" }}
               dataKey="averageWpm"
               // domain={[0, max(runsGrouped?.map(x => x.usersCount)!)! + 2]}
               tickLine={false}
               tickMargin={10}
               axisLine={false}
               tickFormatter={(value) => value}
            />
            <XAxis
               dataKey="date"
               className={`!overflow-visible`}
               // label={{ value: `WPM`, position: "bottom" }}
               tickLine={false}
               tickMargin={10}
               axisLine={false}
               tickFormatter={(label: Date) => {
                  // const [day, month, year] = label.split(`-`).map(Number)
                  return moment(label).format(`DD MMM`);
               }}
            >
               <Label style={{ marginTop: `1rem` }} className={`mt-8`} position={`bottom`} offset={10}
                      value={`Date`} />
            </XAxis>
            <ChartTooltip formatter={(value, name) => (
               <span className={`inline-flex items-center gap-1`}>
                     <div className={`bg-accent w-4 h-4 rounded-sm border-main border-[1px]`} />
                     Time Typing: {formatMillisecondsToTime(Number(value.toString()))}
                  </span>
            )} content={<ChartTooltipContent
               labelFormatter={(label, payload) => <span>{label.replaceAll("-", " - ")}</span>} />} />
            <ChartContainer config={chartConfig}>
               <Bar barSize={20} dataKey="timeTypingMs" fill="hsl(var(--accent))" radius={2} />
            </ChartContainer>
            <ChartContainer config={chartConfig}>
               <Line strokeWidth={2} dataKey={`averageWpm`} />
            </ChartContainer>
         </ComposedChart>
      </div>
   );
};

export default UserRunsChartTwo;