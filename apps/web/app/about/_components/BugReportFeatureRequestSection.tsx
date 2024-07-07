import { LINKS } from "@config/site";
import { Bug } from "lucide-react";
import Link from "next/link";

export interface BugReportFeatureRequestSectionProps {}

const BugReportFeatureRequestSection =
   ({}: BugReportFeatureRequestSectionProps) => {
      return (
         <section
            id={`bug-report`}
            className={`flex flex-col items-start gap-4 text-left`}
         >
            <h2
               className={`mt-16 inline-flex items-center gap-2 text-xl text-main`}
            >
               <Bug size={20} />
               <span>Bug report or feature request</span>
            </h2>
            <p className={`text-secondary`}>
               If you encounter a bug or you have a feature request - you can
               join our{` `}
               <Link className={`ml-1 text-accent`} href={LINKS.discord}>
                  Discord server
               </Link>
               , send us an email or a direct message on{" "}
               <Link className={`ml-1 text-accent`} href={LINKS.twitter}>
                  Twitter
               </Link>
               .
            </p>
            <p className={`text-secondary`}>
               Test yourself in various modes, track your progress and improve
               your speed.
            </p>
         </section>
      );
   };

export default BugReportFeatureRequestSection;
