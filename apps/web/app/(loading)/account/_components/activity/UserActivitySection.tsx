"use client";
import { ActivityTooltip } from "@app/(loading)/account/_components/general/ActivityTooltip";
import { useBoolean } from "@hooks/useBoolean";
import { TypingRun } from "@repo/db";
import moment from "moment";
import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export interface UserActivitySectionProps {
   typingRuns: TypingRun[];
}

function getRunsGroupedByDate(typingRuns: TypingRun[]) {
   const grouped = getAllDates().map((date) => {
      return {
         date,
         runs: typingRuns.filter((run) => {
            return (
               run.createdAt.getDate() === date.getDate() &&
               run.createdAt.getMonth() === date.getMonth() &&
               run.createdAt.getFullYear() === date.getFullYear()
            );
         }),
      };
   });

   return grouped;
}

function getAllDates() {
   // Calculate the date 6 months ago
   const now = moment();

   const sixMonthsAgo = now.clone().subtract(6, "months");

   // Initialize an array to store all dates
   const datesInLastSixMonths: Date[] = [];

   // Iterate through each day from six months ago to today
   let currentDate = sixMonthsAgo.clone();
   while (currentDate.isBefore(now) || currentDate.isSame(now, "day")) {
      datesInLastSixMonths.push(currentDate.toDate());
      currentDate.add(1, "day");
   }

   return datesInLastSixMonths;
}

const ACTIVITY_LEVELS_COLORS = {
   0: `fill-black`,
   3: `fill-stone-700`,
   5: `fill-amber-900`,
   7: `fill-amber-700`,
   9: `fill-amber-500`,
   Infinity: `fill-amber-300`,
};

const ACTIVITY_LEVELS_BGS = {
   0: `bg-black`,
   3: `bg-stone-700`,
   5: `bg-amber-900`,
   7: `bg-amber-700`,
   9: `bg-amber-500`,
   Infinity: `bg-amber-300`,
};

const UserActivitySection = ({ typingRuns }: UserActivitySectionProps) => {
   const grouped = getRunsGroupedByDate(typingRuns);

   const [{ top, left }, setTooltipCoords] = useState({ top: 0, left: 0 });
   const [{ date, count }, setHoveredDay] = useState({
      date: new Date(),
      count: 0,
   });
   const [showTooltip, setShowTooltip] = useBoolean(false);

   return (
      <section
         id={`activity`}
         className={`z-[30] mt-2 flex flex-col h-[240px] w-full items-center justify-start gap-4`}
      >
            <div className={`flex items-center gap-2`}>
               <span>less</span>
               <div className={`flex items-center gap-1`}>
                  {Object.entries(ACTIVITY_LEVELS_BGS).map(
                     ([key, value]) => (
                        <div
                           key={key}
                           className={`w-4 h-4 rounded-md ${value}`}
                        />
                     )
                  )}
               </div>
               <span>more</span>
            </div>
            <div className={`w-1/2 text-secondary`}>
               {showTooltip && (
                  <ActivityTooltip
                     top={top}
                     left={left}
                     count={count}
                     date={date}
                  />
               )}
               <CalendarHeatmap
                  tooltipDataAttrs={(value) => {
                     return {
                        "data-tip": `${value.date?.toISOString().slice(0, 10)} has count: ${
                           value.count
                        }`,
                        "data-date": value.date,
                        "data-count": value.count,
                     };
                  }}
                  onMouseLeave={(_) => setShowTooltip(false)}
                  onMouseOver={(e) => {
                     setShowTooltip(true);
                     const rects = (
                        e.target as HTMLElement
                     ).getBoundingClientRect();
                     const { date, count } = (e.target as HTMLElement).dataset;

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
                     for (const [level, className] of Object.entries(
                        ACTIVITY_LEVELS_COLORS
                     )) {
                        if ((value?.count as number) <= Number(level))
                           return className;
                     }
                  }}
                  values={grouped.map(({ runs, date }) => ({
                     date,
                     count: runs.length,
                  }))}
               />
            </div>
      </section>
   );
};

export default UserActivitySection;
