"use client"
import React, { Fragment } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { userDataLoadingAtom } from "@atoms/user";

export interface WithInitialStateProps {
}

const WithInitialState = ({}: WithInitialStateProps) => {
   useHydrateAtoms([
      [userDataLoadingAtom, false]
   ] , { dangerouslyForceHydrate: true })

   return <Fragment />;
};

export default WithInitialState;