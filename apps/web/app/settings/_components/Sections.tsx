"use client";
import React from "react";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { scrollToElement } from "@lib/utils";

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
   const [_, setSections] = useQueryState(`sections`, parseAsArrayOf(parseAsString).withDefault([]));

   return (
      <div className={`w-full flex items-center justify-between my-12`}>
         {SECTIONS.map((section) => (
            <span onClick={() => {
               setSections(s => [...new Set(s.concat(section.split(` `).at(0)!))])
                  .then(() => scrollToElement(section.split(` `).at(0)!));
            }} key={section}
                  className={`text-main cursor-pointer hover:!opacity-90 transition-all duration-200 text-2xl`}>
               {section}
            </span>
         ))}
      </div>
   );
};

export default Sections;