"use client"
import React, { Fragment, useEffect } from "react";
import { useAtomValue } from "jotai";
import {  typingRunSuccessAtom } from "@atoms/editor";
import { TypingRunSuccess } from "@atoms/consts";
import { toast } from "@repo/ui";
import { TOASTS } from "@config/toasts";

export interface OnRunFailedProps {
}

const OnRunFailed = ({}: OnRunFailedProps) => {
   const success = useAtomValue(typingRunSuccessAtom)
   useEffect(() => {
      if(success === TypingRunSuccess.FAILED) {
         toast(TOASTS.RUN_FAILED(`Slow timer`))
      }
   },[success])

   return (
      <Fragment />
   );
};

export default OnRunFailed;