"use client"
import moment from "moment/moment";
import React from "react";

interface ActivityTooltipProps {
   top: number;
   left: number;
   count: number;
   date: Date;
}

export const ActivityTooltip = ({ top, left, count, date }: ActivityTooltipProps) => {
   return (
      <div
         className={`transition-transform -translate-y-[120%] duration-100 !z-30 rounded-md shadow-md -translate-x-1/2 bg-black backdrop-blur-sm p-1 !px-3`}
         style={{
            position: `absolute`,
            top, left,
         }}>
         {count > 0 ? `${count} tests` : `No activity`} on {moment(date).format(`dddd DD MMM YYYY`)}
      </div>
   );
};