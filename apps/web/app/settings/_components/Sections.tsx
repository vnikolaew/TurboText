"use client";
import { useIsSignedIn } from "@hooks/useIsSignedIn";
import { scrollToElement } from "@lib/utils";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export interface SectionsProps {}

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
   const [_, setSections] = useQueryState(
      `sections`,
      parseAsArrayOf(parseAsString).withDefault([])
   );
   const signedIn = useIsSignedIn();

   return (
      <div className={`my-12 flex w-full items-center justify-between`}>
         {SECTIONS.slice(signedIn ? 0 : 1).map((section) => (
            <span
               onClick={() => {
                  setSections((s) => [
                     ...new Set(s.concat(section.split(` `).at(0)!)),
                  ]).then(() => scrollToElement(section.split(` `).at(0)!));
               }}
               key={section}
               className={`cursor-pointer rounded-xl bg-transparent p-2 !px-4 text-2xl text-main transition-all duration-200 hover:!bg-secondary-bg hover:!opacity-90`}
            >
               {section}
            </span>
         ))}
      </div>
   );
};

export default Sections;
