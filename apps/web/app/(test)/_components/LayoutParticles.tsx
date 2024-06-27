"use client";
import { Particles } from "@repo/ui";
import React from "react";
import { useAtomValue } from "jotai/index";
import { themeAtom } from "@atoms/user";
import { hslToHex } from "@lib/utils";
import { getThemeVariable } from "@app/settings/_components/theme/_components/ThemeButton";

export interface LayoutParticlesProps {
}

const LayoutParticles = ({}: LayoutParticlesProps) => {
   const theme = useAtomValue(themeAtom);
   const color = hslToHex(getThemeVariable(theme, `--accent`));

   return (
      <Particles
         className="absolute inset-0 -z-10 opacity-100 !text-accent"
         color={color}
         quantity={100}
         ease={80}
         refresh
      />
   );
};

export default LayoutParticles;