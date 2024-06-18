"use client";
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";
import { TypingRun } from "@repo/db";
import { groupBy } from "lodash";

export interface UserActivitySectionProps {
   typingRuns: TypingRun[];
}

const ACTIVITY_LEVELS_COLORS = {
   3: `fill-stone-700`,
   5: `fill-amber-900`,
   7: `fill-amber-700`,
   9: `fill-amber-500`,
   Infinity: `fill-amber-300`,
};

const UserActivitySection = ({ typingRuns }: UserActivitySectionProps) => {
   const grouped = Object
      .entries(groupBy(typingRuns, r => {
         const day = r.createdAt.getDate()
         const month = r.createdAt.getMonth()
         const year = r.createdAt.getFullYear()
         return `${year}-${month}-${day}`
      }))

   return (
      <div className={`h-[200px] z-[30] w-full`}>
         <div className={`w-1/2`}>
            <CalendarHeatmap
               tooltipDataAttrs={value => {
                  return {
                     "data-tip": `${value.date?.toISOString().slice(0, 10)} has count: ${
                        value.count
                     }`,
                  };
               }}
               startDate={moment(new Date()).subtract(6, `month`).toDate()}
               showMonthLabels
               showWeekdayLabels
               horizontal={true}
               endDate={new Date()}
               classForValue={(value) => {
                  for (const [level, className] of Object.entries(ACTIVITY_LEVELS_COLORS)) {
                     if ((value?.count as number) <= Number(level)) return className;
                  }
               }}
               values={grouped.map(([, runs]) => ({ date: runs[0]!.createdAt, count: runs.length }))
               }
            />
         </div>
      </div>
   );
};

export default UserActivitySection;