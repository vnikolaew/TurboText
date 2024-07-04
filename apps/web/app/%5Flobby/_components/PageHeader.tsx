import { Swords } from "lucide-react";
import React from "react";
import { APP_NAME } from "@config/site";

export interface PageHeaderProps {
}

const PageHeader = ({}: PageHeaderProps) => {
   return (
      <div className={`flex flex-col items-start gap-4`}>
         <div className={`w-full items-center flex gap-4`}>
            <Swords className={`text-accent`} size={24} />
            <h2 className={`text-xl`}>Find an opponent to test your skills against</h2>
         </div>
         <p className={`text-sm text-secondary w-2/3`}>
            Welcome to {APP_NAME}'s challenge mode! Select your language, set your desired challenge duration, and choose
            the difficulty level to find a worthy opponent. Push your typing speed to the limits and see how you stack
            up against others. Ready to compete? Let's get typing!
         </p>
      </div>
   );
};

export default PageHeader;