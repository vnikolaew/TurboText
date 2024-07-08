import { TypingRun } from "@repo/db";
import React from "react";

export interface UserRunsChartProps {
   runs: TypingRun[];
}

const UserRunsChart = ({ runs }: UserRunsChartProps) => {
   return (
      <div>
         {JSON.stringify(runs.length, null, 2)}
      </div>
   );
};

export default UserRunsChart;