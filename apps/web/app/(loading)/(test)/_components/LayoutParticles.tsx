"use client";
import { useThemeVariable } from "@hooks/useThemeVariable";
import { Particles } from "@repo/ui";

export interface LayoutParticlesProps {}

const LayoutParticles = ({}: LayoutParticlesProps) => {
   const color = useThemeVariable(`--accent`);

   return (
      <Particles
         className="absolute inset-0 -z-10 !text-accent opacity-100"
         color={color}
         quantity={100}
         ease={80}
         refresh
      />
   );
};

export default LayoutParticles;
