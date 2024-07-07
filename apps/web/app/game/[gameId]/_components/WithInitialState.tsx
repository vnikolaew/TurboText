"use client";
import { otherUserDataLoadingAtom, userDataLoadingAtom } from "@atoms/user";
import { useHydrateAtoms } from "jotai/utils";
import { Fragment } from "react";

export interface WithInitialStateProps {}

const WithInitialState = ({}: WithInitialStateProps) => {
   useHydrateAtoms(
      [
         [userDataLoadingAtom, false],
         [otherUserDataLoadingAtom, false],
      ],
      { dangerouslyForceHydrate: true }
   );

   return <Fragment />;
};

export default WithInitialState;
