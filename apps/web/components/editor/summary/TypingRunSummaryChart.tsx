"use client";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui";
import React, { useMemo } from "react";
import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis, YAxis } from "recharts";
import { useAtomValue } from "jotai/index";
import {
   totalRunTimeAtom,
   typedLettersAtom,
} from "@atoms/editor";
import { consistencyScoreAtom, rawWpmAtom, rawWpmBySecondsAtom, wpmBySecondsAtom } from "@atoms/stats";
import { TypedLetterFlags } from "@atoms/consts";
import { max, zip } from "lodash";
import { typingTimeTodayAtom, userPbAtom } from "@atoms/user";
import { StatTooltip } from "@components/editor/summary/TypingRunSummary";
import { formatMillisecondsToTime } from "@lib/utils";

export interface TypingRunSummaryChartProps {
}

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

const TypingRunSummaryChart = ({}: TypingRunSummaryChartProps) => {
   const typedLetters = useAtomValue(typedLettersAtom);
   const { extra, incorrect, correct } = useMemo(() => ({
      correct: typedLetters.filter(t => t.correct).length,
      incorrect: typedLetters.filter(t => t.correct === false).length,
      extra: typedLetters.filter(t => t.flags === TypedLetterFlags.EXTRA).length,
   }), [typedLetters]);


   const rawWpm = useAtomValue(rawWpmAtom);
   const consistency = useAtomValue(consistencyScoreAtom);
   const typingTimeToday = useAtomValue(typingTimeTodayAtom);
   const userPb = useAtomValue(userPbAtom)

   const runtime = useAtomValue(totalRunTimeAtom);
   const wpmBySeconds = useAtomValue(wpmBySecondsAtom);
   const rawWpmBySeconds = useAtomValue(rawWpmBySecondsAtom);

   const chartData = zip(wpmBySeconds, rawWpmBySeconds).map(([wpm, rawWpm], i) => ({
      second: i + 1,
      wpm, rawWpm,
   }));

   return (
      <div className={`w-full flex flex-col items-center gap-8`}>
         <ChartContainer className={`w-full h-[300px]`} config={chartConfig}>
            <LineChart
               accessibilityLayer
               data={chartData}
               margin={{
                  left: 12,
                  right: 12,
               }}
            >
               <CartesianGrid vertical={false} />
               <YAxis
                  dataKey="wpm"
                  label={{ value: `Words per minute`, angle: -90, position: "insideBottomLeft" }}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, max([...chartData.map(d => d.rawWpm), userPb])! + 5]}
                  tickMargin={8}
                  tickFormatter={(value) => value}
               />
               <ReferenceLine y={userPb.toFixed(2)} label="PB" stroke="hsl(var(--accent))" strokeDasharray="3 3" />
               <XAxis
                  dataKey="second"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value}
               />
               <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent
                     labelFormatter={(label, payload) => <span>{JSON.stringify({ label, payload }, null, 2)}</span>}
                     hideLabel />}
               />
               <Line
                  dataKey="rawWpm"
                  type="natural"
                  label={`raw`}
                  stroke="hsl(var(--foreground))"
                  strokeWidth={2}
                  dot={{
                     fill: "hsl(var(--foreground))",
                  }}
                  activeDot={{
                     r: 6,
                  }}
               />
               <Line
                  dataKey="wpm"
                  label={`wpm`}
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
         <div className={`w-full flex items-center justify-around`}>
            <div className={`flex flex-col items-start gap-0`}>
               <span className={`text-lg text-secondary`}>raw</span>
               <StatTooltip tooltip={
                  <span className={``}>{rawWpm.toFixed(2)} wpm</span>
               }>
                  <span className={`text-2xl text-accent`}>{rawWpm.toFixed(0)}</span>
               </StatTooltip>
            </div>
            <div className={`flex flex-col items-start gap-0`}>
               <span className={`text-lg text-secondary`}>characters</span>
               <StatTooltip tooltip={
                  <span className={``}>correct, incorrect, extra and missed</span>
               }>
                  <span className={`text-2xl text-accent`}>{correct}/{incorrect}/{extra}/0</span>
               </StatTooltip>
            </div>
            <div className={`flex flex-col items-start gap-0`}>
               <span className={`text-lg text-secondary`}>consistency</span>
               <StatTooltip tooltip={
                  <span className={``}>{isNaN(consistency) ? 100 : consistency.toFixed(2)}%</span>
               }>
                  <span className={`text-2xl text-accent`}>{isNaN(consistency) ? 100 : consistency.toFixed(0)}%</span>
               </StatTooltip>
            </div>
            <div className={`flex flex-col items-start gap-0`}>
               <span className={`text-lg text-secondary`}>time</span>
               <StatTooltip tooltip={
                  <span className={``}>{(runtime / 1000).toFixed(2)}s ()</span>
               }>
                  <span className={`text-2xl text-accent`}>{Math.floor(runtime / 1000)}s</span>
               </StatTooltip>
               <span className={`text-base text-secondary`}>{formatMillisecondsToTime(typingTimeToday)} today</span>
            </div>
         </div>
      </div>
   );
};

export default TypingRunSummaryChart;