"use client";
import { TypingRunSuccess } from "@atoms/consts";
import { typingRunSuccessAtom } from "@atoms/editor";
import { TOASTS } from "@config/toasts";
import { toast } from "@repo/ui";
import { useAtomValue } from "jotai";
import { Fragment, useEffect } from "react";

export interface OnRunFailedProps {}

const OnRunFailed = ({}: OnRunFailedProps) => {
   const success = useAtomValue(typingRunSuccessAtom);
   useEffect(() => {
      if (success === TypingRunSuccess.FAILED) {
         toast(TOASTS.RUN_FAILED(`Slow timer`));
      }
   }, [success]);

   return <Fragment />;
};

export default OnRunFailed;
