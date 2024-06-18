"use client";
import React, { Fragment } from "react";
import { User, UserConfiguration } from "@repo/db";
import { useHydrateAllAtoms } from "@components/editor/hooks/useHydrateAllAtoms";

export interface WithInitialStateProps {
   user?: User & { configuration: UserConfiguration };
}


const WithInitialState = ({ user }: WithInitialStateProps) => {
  useHydrateAllAtoms(user)

   return <Fragment />;
};

export default WithInitialState;