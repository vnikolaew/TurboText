import { Swords } from "lucide-react";
import React from "react";

export interface PageHeaderProps {
}

const PageHeader = ({}: PageHeaderProps) => {
   return (
      <div className={`w-full items-center flex gap-4`}>
         <Swords className={`text-accent`} size={24} />
         <h2 className={`text-xl`}>Find an opponent to test your skills against</h2>
      </div>
   );
};

export default PageHeader;