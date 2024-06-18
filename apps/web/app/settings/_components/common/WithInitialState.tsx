"use client";
import React, { Fragment } from "react";
import { useHydrateAllAtoms } from "@app/settings/atoms";

export interface WithInitialStateProps {
   soundClicks: string[];
}

const WithInitialState = ({ soundClicks }: WithInitialStateProps) => {
   useHydrateAllAtoms(soundClicks);
   return <Fragment />;
};

export default WithInitialState;