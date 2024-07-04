"use client";
import React, { Fragment } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { otherUserDataLoadingAtom, userDataLoadingAtom } from "@atoms/user";

export interface WithInitialStateProps {
}

const WithInitialState = ({}: WithInitialStateProps) => {
   useHydrateAtoms([
      [userDataLoadingAtom, false],
      [otherUserDataLoadingAtom, false],
   ], { dangerouslyForceHydrate: true });

   return <Fragment />;
};

export default WithInitialState;