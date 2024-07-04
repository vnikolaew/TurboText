"use client";
import React, { HTMLAttributes, useCallback } from "react";
import { RunNormalized } from "../runs/LatestRunsTable";
import { PrimitiveAtom, useAtom } from "jotai/index";
import { TableHead } from "@repo/ui";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@lib/utils";

export interface SortableTableHeadProps<T> extends HTMLAttributes<HTMLTableCellElement> {
   column: keyof T,
   title?: string,
   sort: PrimitiveAtom<{ key: keyof T; desc: boolean }>
}

export const SortableTableHead = ({ column, title, sort: sortAtom, className, ...props }: SortableTableHeadProps) => {
   const [tableSort, setTableSort] = useAtom(sortAtom);

   const handleChangeSort = useCallback((key: keyof RunNormalized) => {
      setTableSort(ts => ({
         key,
         desc: ts.key === key ? !ts.desc : false,
      }));
   }, [tableSort]);

   return (
      <TableHead
         onClick={_ => handleChangeSort(column)}
         className={cn("text-left relative cursor-pointer items-center gap-1 !w-fit !text-nowrap", className)}
         {...props}>
         {title ?? column}
         {tableSort.key === column && !tableSort.desc && (
            <ChevronUp className={`absolute right-2 top-1/2 -translate-y-1/2`} size={18} />
         )}
         {tableSort.key === column && tableSort.desc && (
            <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2`} size={18} />
         )}
      </TableHead>
   );

};