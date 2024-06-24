import Link from "next/link";
import React from "react";
import { LINKS } from "@config/site";
import { Bug, Info } from "lucide-react";

export interface BugReportFeatureRequestSectionProps {
}

const BugReportFeatureRequestSection = ({}: BugReportFeatureRequestSectionProps) => {
   return (
      <section id={`bug-report`} className={`text-left flex flex-col items-start gap-4`}>
         <h2 className={`text-xl mt-16 text-neutral-500 inline-flex items-center gap-2`}>
            <Bug size={20} />
            <span>
               Bug report or feature request
            </span>
         </h2>
         <p>
            If you encounter a bug or you have a feature request - you can join our
            <Link className={`text-blue-500 ml-1`} href={LINKS.discord}>
               Discord server
            </Link>, send us an email, a direct
            message on Twitter or create an issue on GitHub.
         </p>
         <p>
            Test yourself in various modes, track your progress and improve your speed.
         </p>
      </section>
   );
};

export default BugReportFeatureRequestSection;