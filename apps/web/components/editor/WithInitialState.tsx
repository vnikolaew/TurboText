"use client";
import React, { Fragment } from "react";
import { User, UserConfiguration, UserExperience } from "@repo/db";
import { useHydrateAllAtoms } from "@components/editor/hooks/useHydrateAllAtoms";

export interface WithInitialStateProps {
   user?: User & { configuration: UserConfiguration, experience: UserExperience };
}

const WithInitialState = ({ user }: WithInitialStateProps) => {
  useHydrateAllAtoms(user)

   return <Fragment />;
};

export default WithInitialState;