import { Rocket } from "lucide-react";

export interface MythicalBadgeProps {}

const MythicalBadge = ({}: MythicalBadgeProps) => {
   return (
      <div
         className={`inline-flex animate-rainbow-bg items-center gap-2 rounded-full bg-white px-2 py-1 !text-sm text-main shadow-md`}
      >
         <Rocket className={`text-accent`} size={18} />
         <span className={`text-accent`}>Mythical</span>
      </div>
   );
};

export default MythicalBadge;
