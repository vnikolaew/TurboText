import { cn } from "@lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SettingLayoutProps
   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SettingLayout = ({
   children,
   className,
   ...props
}: SettingLayoutProps) => {
   if (children?.length !== 2) return null;

   return (
      <div
         className={cn(`grid w-full grid-cols-4 gap-6`, className)}
         {...props}
      >
         <div className={`col-span-3`}>{children[0]}</div>
         <div className={`col-span-1`}>{children[1]}</div>
      </div>
   );
};

export default SettingLayout;
