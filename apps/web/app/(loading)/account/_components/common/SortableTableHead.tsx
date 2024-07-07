"use client";
import { cn } from "@lib/utils";
import { TableHead } from "@repo/ui";
import { PrimitiveAtom, useAtom } from "jotai/index";
import { ChevronDown, ChevronUp } from "lucide-react";
import { HTMLAttributes, useCallback } from "react";
import { RunNormalized } from "../runs/LatestRunsTable";

export interface SortableTableHeadProps<T>
   extends HTMLAttributes<HTMLTableCellElement> {
   column: keyof T;
   title?: string;
   sort: PrimitiveAtom<{ key: keyof T; desc: boolean }>;
}

export const SortableTableHead = ({
   column,
   title,
   sort: sortAtom,
   className,
   ...props
}: SortableTableHeadProps) => {
   const [tableSort, setTableSort] = useAtom(sortAtom);

   const handleChangeSort = useCallback(
      (key: keyof RunNormalized) => {
         setTableSort((ts) => ({
            key,
            desc: ts.key === key ? !ts.desc : false,
         }));
      },
      [tableSort]
   );

   return (
      <TableHead
         onClick={(_) => handleChangeSort(column)}
         className={cn(
            "relative !w-fit cursor-pointer items-center gap-1 !text-nowrap text-left",
            className
         )}
         {...props}
      >
         {title ?? column}
         {tableSort.key === column && !tableSort.desc && (
            <ChevronUp
               className={`absolute right-2 top-1/2 -translate-y-1/2`}
               size={18}
            />
         )}
         {tableSort.key === column && tableSort.desc && (
            <ChevronDown
               className={`absolute right-2 top-1/2 -translate-y-1/2`}
               size={18}
            />
         )}
      </TableHead>
   );
};
