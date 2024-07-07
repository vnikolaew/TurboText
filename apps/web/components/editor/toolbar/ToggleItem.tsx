import { cn } from "@lib/utils";
import { ToggleGroupItem } from "@repo/ui";
import { LucideProps } from "lucide-react";
import React from "react";

export interface ToggleItemProps {
   active: boolean;
   // onToggle: (value: boolean) => void;
   value: string;
   Icon?: React.FC<LucideProps>;
   text: string;
}

export const ToggleItem = ({ value, active, text, Icon }: ToggleItemProps) => {
   return (
      <ToggleGroupItem
         className={cn(
            `inline-flex items-center gap-2 rounded-full !text-main transition-colors duration-200 data-[state=on]:!bg-secondary-bg hover:!bg-accent`,
            active && `!font-semibold !text-accent`
         )}
         value={value}
      >
         {Icon && <Icon className={`h-4 w-4`} />}
         {text}
      </ToggleGroupItem>
   );
};
