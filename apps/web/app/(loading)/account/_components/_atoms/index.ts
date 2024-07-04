"use client"
import { atom } from "jotai/index";
import { RunNormalized } from "@app/(loading)/account/_components/runs/LatestRunsTable";

export const tableSortAtom = atom<{ key: keyof RunNormalized; desc: boolean }>({
   key: `createdAt`,
   desc: true,
});
tableSortAtom.debugLabel = `tableSortAtom`;

