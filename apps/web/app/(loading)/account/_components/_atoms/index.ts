"use client";
import { RunNormalized } from "@app/(loading)/account/_components/runs/LatestRunsTable";
import { atom } from "jotai/index";

export const tableSortAtom = atom<{ key: keyof RunNormalized; desc: boolean }>({
   key: `createdAt`,
   desc: true,
});
tableSortAtom.debugLabel = `tableSortAtom`;
