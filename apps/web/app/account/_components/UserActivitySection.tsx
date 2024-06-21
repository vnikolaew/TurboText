"use client";
import React, { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import moment from "moment";
import { TypingRun } from "@repo/db";
import { groupBy } from "lodash";
import { ActivityTooltip } from "@app/account/_components/ActivityTooltip";
import { useBoolean } from "@hooks/useBoolean";

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
         const day = r.createdAt.getDate();
         const month = r.createdAt.getMonth();
         const year = r.createdAt.getFullYear();
         return `${year}-${month}-${day}`;
      }));

   const [{ top, left }, setTooltipCoords] = useState({ top: 0, left: 0 });
   const [{ date, count }, setHoveredDay] = useState({ date: new Date(), count: 0 });
   const [showTooltip, setShowTooltip] =useBoolean(false)

   return (
      <div className={`h-[200px] z-[30] w-full`}>
         <div className={`w-1/2`}>
            {showTooltip && (
               <ActivityTooltip top={top} left={left} count={count} date={date} />
            )}
            <CalendarHeatmap
               tooltipDataAttrs={value => {
                  return {
                     "data-tip": `${value.date?.toISOString().slice(0, 10)} has count: ${
                        value.count
                     }`,
                     "data-date": value.date,
                     "data-count": value.count,
                  };
               }}
               onMouseLeave={_ => setShowTooltip(false)}
               onMouseOver={e => {
                  setShowTooltip(true)
                  const rects = (e.target as HTMLElement).getBoundingClientRect();
                  const {date, count } = (e.target as HTMLElement).dataset;

                  setTooltipCoords({ top: rects.top, left: rects.left });
                  setHoveredDay({
                     date: moment(date).toDate(),
                     count: Number(count ?? 0),
                  });

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