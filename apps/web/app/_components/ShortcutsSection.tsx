import React from "react";

export interface ShortcutsSectionProps {
}

const ShortcutsSection = ({}: ShortcutsSectionProps) => {
   return (
      <div className={`w-full flex flex-col items-center mt-16 text-xs`}>
         <span className={`text-amber-500`}>
           <kbd className={`bg-amber-500/90 px-2 py-0.5 rounded-sm !text-black shadow-sm`}>esc</kbd> - command line
         </span>
      </div>
   );
};

export default ShortcutsSection;