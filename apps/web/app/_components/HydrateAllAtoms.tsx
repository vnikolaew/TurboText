"use client";
import { cookiePreferencesAtom, userConfigAtom, userXpAtom } from "@atoms/user";
import { User, UserExperience } from "@repo/db";
import { useHydrateAtoms } from "jotai/utils";
import { Fragment } from "react";

export interface HydrateAllAtomsProps {
   user: User & { experience: Partial<UserExperience> };
}

const HydrateAllAtoms = ({ user }: HydrateAllAtomsProps) => {
   // @ts-ignore
   useHydrateAtoms([
      [
         userXpAtom,
         {
            points: user.experience.points!,
            level: user.experience.level!,
         },
      ],
      [userConfigAtom, user.configuration],
      [cookiePreferencesAtom, user.cookiePreferences!],
   ]);

   return <Fragment />;
};

export default HydrateAllAtoms;
