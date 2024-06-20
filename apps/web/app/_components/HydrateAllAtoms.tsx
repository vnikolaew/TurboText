"use client";
import { User, UserExperience } from "@repo/db";
import React, { Fragment } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { userXpAtom } from "@atoms/user";

export interface HydrateAllAtomsProps {
   user: User & { experience: Partial<UserExperience> };
}

const HydrateAllAtoms = ({ user }: HydrateAllAtomsProps) => {
   useHydrateAtoms([
      [userXpAtom, {
         points: user.experience.points!,
         level: user.experience.level!,
      }],
   ]);

   return (
      <Fragment />
   );
};

export default HydrateAllAtoms;