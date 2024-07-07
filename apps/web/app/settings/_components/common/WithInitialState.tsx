"use client";
import { useHydrateAllAtoms } from "@app/settings/atoms";
import { Fragment } from "react";

export interface WithInitialStateProps {
   soundClicks: string[];
}

const WithInitialState = ({ soundClicks }: WithInitialStateProps) => {
   useHydrateAllAtoms(soundClicks);
   return <Fragment />;
};

export default WithInitialState;
