import { TypingRun } from "@repo/db";
import { max } from "lodash";

export function getRunsGroupedByAccuracy(runs: TypingRun[]) {
   const runsGrouped = Array
      .from({ length: Math.ceil(max(runs.map(r => r.metadata?.accuracy)) / 10) })
      .map((_, index) => {
         const [from, to] = [10 * index, 10 * (index + 1) - 1];
         return {
            range: `${from}-${to}` as `${number}-${number}`,
            runsByAccuracy: runs.filter(x => x.metadata?.accuracy >= from && x.metadata?.accuracy <= to).length,
            runsByConsistency: runs.filter(x => x.metadata?.consistency >= from && x.metadata?.consistency <= to).length,
            runs_: runs.filter(x => x.metadata?.wpm >= from && x.metadata?.wpm <= to)
         };
      });
   return runsGrouped as const
}

export function getRunsGrouped(runs: TypingRun[]) {
   const runsGrouped = Array
      .from({ length: Math.ceil(max(runs.map(r => r.metadata?.wpm)) / 10) })
      .map((_, index) => {
         const [from, to] = [10 * index, 10 * (index + 1) - 1];
         return {
            range: `${from}-${to}` as `${number}-${number}`,
            runs: runs.filter(x => x.metadata?.wpm >= from && x.metadata?.wpm <= to).length,
            runs_: runs.filter(x => x.metadata?.wpm >= from && x.metadata?.wpm <= to)
         };
      });
   return runsGrouped as const
}
