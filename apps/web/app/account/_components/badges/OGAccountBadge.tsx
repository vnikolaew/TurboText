import { Badge } from "@repo/ui";
import { Baby } from "lucide-react";
import React from "react";

export interface OgAccountBadgeProps {
}

const OgAccountBadge = ({}: OgAccountBadgeProps) => {
   return (
      <span>
                     <Badge
                        className={`!bg-amber-500 !text-black inline-flex gap-2 items-center text-nowrap shadow-md text-xs`}
                        variant={`default`}>
                        <Baby size={14} />
                        <span>
                        OG Account
                        </span>
                     </Badge>
                  </span>
   );
};

export default OgAccountBadge;