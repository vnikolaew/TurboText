"use client";
import { Button, ButtonProps } from "@repo/ui";
import React from "react";
import { cn } from "@lib/utils";

export interface SettingButtonProps extends ButtonProps {
   active: boolean;
}

const SettingButton = ({ active, children, className, ...props }: SettingButtonProps) => {
   return (
      <Button className={cn(className, active && `bg-amber-500`)} {...props}>
         {children}
      </Button>
   );
};

export default SettingButton;