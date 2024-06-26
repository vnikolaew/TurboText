import React from "react";
import { Rocket } from "lucide-react";

export interface MythicalBadgeProps {
}

const MythicalBadge = ({}: MythicalBadgeProps) => {
   return (
      <div
         className={`animate-rainbow-bg rounded-full px-2 py-1 inline-flex items-center gap-2 bg-white text-main shadow-md !text-sm`}>
         <Rocket className={`text-accent`} size={18} />
         <span className={`text-accent`}>Mythical</span>
      </div>
   );
};

export default MythicalBadge;