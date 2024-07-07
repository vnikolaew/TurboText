"use client";
import { useHydrateAllAtoms } from "@components/editor/hooks/useHydrateAllAtoms";
import { User, UserConfiguration, UserExperience } from "@repo/db";
import { Fragment } from "react";

export interface WithInitialStateProps {
   user?: User & {
      configuration: UserConfiguration;
      experience: UserExperience;
   };
}

const WithInitialState = ({ user }: WithInitialStateProps) => {
   useHydrateAllAtoms(user);

   return <Fragment />;
};

export default WithInitialState;
