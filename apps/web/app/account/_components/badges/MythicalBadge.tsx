import { Rocket } from "lucide-react";
import React from "react";

export interface MythicalBadgeProps {
}

const MythicalBadge = ({}: MythicalBadgeProps) => {
   return (
      <span
         className={`!text-black bg-white inline-flex gap-2 items-center text-nowrap shadow-md text-xs duration-200 animate-rainbow-bg !rounded-full px-2 py-1`}>
                        <Rocket size={14} />
                        <h3 className={``}>
                           Mythical
                        </h3>
                     </span>
   );
};

export default MythicalBadge;