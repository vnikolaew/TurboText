"use client";
import React, { Fragment } from "react";
import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "@repo/ui";

export interface LoadingButtonProps extends ButtonProps {
   loading: boolean;
   loadingText?: string;
}

const LoadingButton = ({ loadingText, loading, children, ...props }: LoadingButtonProps) => {
   return (
      <Button disabled={loading} className={`!w-full items-center gap-2`} {...props}>
         {loading ? (
            <Fragment>
               <Loader2 className={`animate-spin`} />
               {loadingText ?? `Loading ...`}
            </Fragment>
         ) : children}
      </Button>
   );
};

export default LoadingButton;