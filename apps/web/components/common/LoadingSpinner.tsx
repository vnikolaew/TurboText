"use client";

import { Fragment } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@lib/utils";

export const LoadingSpinner = ({ text, className, ...props }: { text?: string } & Record<string, any>) => (
   <Fragment>
      <Loader2 size={16} className={cn(`animate-spin mr-2`, className)} {...props}/>
      {text ?? `Signing in ...`}
   </Fragment>
);
