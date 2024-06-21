"use client";
import React from "react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export interface SectionsProps {
}

const SECTIONS = [
   "account",
   "behaviour",
   "input",
   "sound",
   "caret",
   "appearance",
   "theme",
   "elements",
   "danger zone",
];

const Sections = ({}: SectionsProps) => {
   const [sections, setSections] = useQueryState(`sections`, parseAsArrayOf(parseAsString).withDefault([]));

   return (
      <div className={`w-full flex items-center justify-between my-12`}>
         {SECTIONS.map((section) => (
            <span onClick={() => {
               setSections(s => {
                  return [...new Set(s.concat(section.split(` `).at(0)!))]
               })
                  .then(() => {
                     document.getElementById(section.split(` `).at(0)!)?.scrollIntoView({ behavior: `smooth` });
                  });
            }} key={section}
                 className={`text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors duration-200 text-2xl`}>
               {section}
            </span>
         ))}
      </div>
   );
};

export default Sections;