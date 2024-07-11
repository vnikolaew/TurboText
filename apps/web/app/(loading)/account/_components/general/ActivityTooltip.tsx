"use client";
import moment from "moment/moment";

interface ActivityTooltipProps {
   top: number;
   left: number;
   count: number;
   date: Date;
}

export const ActivityTooltip = ({
   top,
   left,
   count,
   date,
}: ActivityTooltipProps) => {
   return (
      <div
         className={`!z-30 -translate-x-1/2 -translate-y-[120%] rounded-md bg-black p-1 !px-3 text-xs shadow-md backdrop-blur-sm transition-transform duration-100`}
         style={{
            position: `fixed`,
            top,
            left,
         }}
      >
         {count > 0 ? `${count} tests` : `No activity`} on{" "}
         {moment(date).format(`dddd DD MMM YYYY`)}
      </div>
   );
};
