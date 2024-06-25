"use client";
import React from "react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Logger } from "@lib/logger";

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

   Logger.info("test")
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
                 className={`text-main cursor-pointer hover:!opacity-90 transition-all duration-200 text-2xl`}>
               {section}
            </span>
         ))}
      </div>
   );
};

export default Sections;