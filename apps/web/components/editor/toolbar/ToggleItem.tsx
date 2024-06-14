import { ToggleGroupItem } from "@repo/ui";
import { cn } from "@lib/utils";
import React from "react";
import { LucideProps } from "lucide-react";

export interface ToggleItemProps {
   active: boolean;
   // onToggle: (value: boolean) => void;
   value: string;
   Icon?: React.FC<LucideProps>;
   text: string;
}

export const ToggleItem = ({ value, active, text, Icon }: ToggleItemProps) => {
   return <ToggleGroupItem
      className={cn(`inline-flex items-center gap-2 rounded-full data-[state=on]:!bg-neutral-800 hover:!bg-neutral-800 transition-colors duration-200`,
         active && `!text-amber-500`)}
      value={value}
   >
      {Icon && (
         <Icon className={`w-4 h-4`} />
      )}
      {text}
   </ToggleGroupItem>;
};