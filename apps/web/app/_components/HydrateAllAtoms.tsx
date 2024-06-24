"use client";
import { User, UserExperience } from "@repo/db";
import React, { Fragment } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { cookiePreferencesAtom, userConfigAtom, userXpAtom } from "@atoms/user";

export interface HydrateAllAtomsProps {
   user: User & { experience: Partial<UserExperience> };
}

const HydrateAllAtoms = ({ user }: HydrateAllAtomsProps) => {

   // @ts-ignore
   useHydrateAtoms([
      [userXpAtom, {
         points: user.experience.points!,
         level: user.experience.level!,
      }],
      [userConfigAtom, user.configuration],
      [cookiePreferencesAtom, user.cookiePreferences!],
   ]);

   return (
      <Fragment />
   );
};

export default HydrateAllAtoms;