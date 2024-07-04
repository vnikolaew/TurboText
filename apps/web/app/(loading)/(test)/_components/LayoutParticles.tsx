"use client";
import { Particles } from "@repo/ui";
import React from "react";
import { useThemeVariable } from "@hooks/useThemeVariable";

export interface LayoutParticlesProps {
}

const LayoutParticles = ({}: LayoutParticlesProps) => {
   const color = useThemeVariable(`--accent`);

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