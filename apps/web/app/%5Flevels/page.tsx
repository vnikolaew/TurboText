"use client";
import { Input } from "@repo/ui";
import React, { useState } from "react";

export interface PageProps {
}

const EXPONENT = 1.2;

function getLevelFromXp(xp: number) {
   return Math.ceil(Math.pow((xp / 100), 1 / EXPONENT));
}

const Page = ({}: PageProps) => {
   const [xp, setXp] = useState(0);

   return (
      <section className={`w-2/3 mx-auto my-24 flex flex-col items-center gap-4`}>
         <h2>Levels</h2>
         <Input onChange={e => setXp(e.target.valueAsNumber)} type={`number`} value={xp} />
         <span>{getLevelFromXp(xp)}</span>
         <div className={`grid grid-cols-4 gap-4`}>
            {Array.from({ length: 30 }).map((_, i) => (
               <div key={i} className={`w-full  h-12 rounded-md`}>
                  Level {i + 1}: {(100 * Math.pow(i + 1, EXPONENT)).toFixed(2)} XP
               </div>
            ))}
         </div>
      </section>
   );
};

export default Page;