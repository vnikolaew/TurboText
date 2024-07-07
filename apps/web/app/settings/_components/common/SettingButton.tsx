"use client";
import { cn } from "@lib/utils";
import { Button, ButtonProps } from "@repo/ui";

export interface SettingButtonProps extends ButtonProps {
   active: boolean;
}

const SettingButton = ({
   active,
   children,
   className,
   ...props
}: SettingButtonProps) => {
   return (
      <Button className={cn(className, active && `bg-accent`)} {...props}>
         {children}
      </Button>
   );
};

export default SettingButton;
