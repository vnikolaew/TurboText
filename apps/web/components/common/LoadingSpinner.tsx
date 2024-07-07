"use client";

import { cn } from "@lib/utils";
import { Loader2 } from "lucide-react";
import { Fragment } from "react";

export const LoadingSpinner = ({
   text,
   className,
   ...props
}: { text?: string } & Record<string, any>) => (
   <Fragment>
      <Loader2
         size={16}
         className={cn(`mr-2 animate-spin`, className)}
         {...props}
      />
      {text ?? `Signing in ...`}
   </Fragment>
);
